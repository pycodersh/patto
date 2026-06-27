/**
 * PATTO — Scene Image Generator
 *
 * Single Source of Truth: StoryPackage.assets.sceneImages.images[].production.prompt
 *
 * Usage:
 *   npm run generate-images -- --story 1
 *   npm run generate-images -- --from 1 --to 20
 *   npm run generate-images -- --missing
 *   npm run generate-images -- --story 1 --force
 *
 * Requires OPENAI_API_KEY in .env.local
 */

import fs   from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

// ── Model Constants ───────────────────────────────────────────────────────────
const IMAGE_MODEL   = 'gpt-image-1'   // ← change here to switch model
const IMAGE_SIZE    = '1536x1024'     // 16:9 landscape
const IMAGE_QUALITY = 'high'          // 'high' | 'medium' | 'low'
const API_URL       = 'https://api.openai.com/v1/images/generations'

// Common style appended to every scene prompt
const STYLE_SUFFIX =
  'Realistic cinematic editorial photography, warm natural lighting, soft film grain, ' +
  'modern Korean urban mood, 16:9 composition, no text, no watermark.'

// ── Logging ───────────────────────────────────────────────────────────────────
const pad3 = (n: number) => String(n).padStart(3, '0')

function log(icon: string, story: number, scene: string, msg: string) {
  console.log(`${icon}  Story ${pad3(story)} / ${scene}  ${msg}`)
}

// ── Load StoryPackage ─────────────────────────────────────────────────────────
async function loadPackage(storyId: number): Promise<Record<string, unknown> | null> {
  const file = path.resolve(process.cwd(), `data/factory/story-${pad3(storyId)}-package.ts`)
  if (!fs.existsSync(file)) return null
  try {
    const mod = await import(`file://${file}`)
    const pkg = Object.values(mod).find(
      (v): v is Record<string, unknown> =>
        typeof v === 'object' && v !== null && (v as Record<string, unknown>).schemaVersion === '2.0',
    )
    return pkg ?? null
  } catch (err: unknown) {
    console.error(`  ⚠  Story ${storyId} 패키지 로드 실패: ${(err as Error).message}`)
    return null
  }
}

// ── Extract scenes from package ───────────────────────────────────────────────
interface SceneTask {
  id:       string   // 'scene-01'
  filename: string   // 'scene-01.jpg'
  destPath: string   // absolute path
  prompt:   string   // production.prompt
}

function extractScenes(storyId: number, pkg: Record<string, unknown>): SceneTask[] {
  const assets     = pkg.assets as Record<string, unknown>
  const sceneImgs  = assets?.sceneImages as Record<string, unknown>
  const images     = (sceneImgs?.images ?? []) as Array<Record<string, unknown>>
  const outputDir  = path.resolve(process.cwd(), `public/images/stories/story-${pad3(storyId)}`)

  fs.mkdirSync(outputDir, { recursive: true })

  return images.map(img => {
    const id         = img.id as string
    const filename   = `${id}.jpg`
    const production = img.production as Record<string, unknown>
    const prompt     = (production?.prompt as string) ?? ''
    return { id, filename, destPath: path.join(outputDir, filename), prompt }
  })
}

// ── OpenAI API call ───────────────────────────────────────────────────────────
async function generateImage(prompt: string): Promise<Buffer> {
  const fullPrompt = `${prompt} ${STYLE_SUFFIX}`

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model:           IMAGE_MODEL,
      prompt:          fullPrompt,
      n:               1,
      size:            IMAGE_SIZE,
      quality:         IMAGE_QUALITY,
      response_format: 'b64_json',
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: { message?: string } }
    throw new Error(`API ${res.status}: ${err?.error?.message ?? res.statusText}`)
  }

  const data = await res.json() as { data?: Array<{ b64_json?: string }> }
  const b64  = data?.data?.[0]?.b64_json
  if (!b64) throw new Error('응답에 이미지 데이터가 없습니다.')
  return Buffer.from(b64, 'base64')
}

// ── Update package status ─────────────────────────────────────────────────────
function updatePackageStatus(storyId: number, succeededSceneIds: string[]) {
  if (succeededSceneIds.length === 0) return

  const pkgFile = path.resolve(process.cwd(), `data/factory/story-${pad3(storyId)}-package.ts`)
  if (!fs.existsSync(pkgFile)) return

  let src     = fs.readFileSync(pkgFile, 'utf8')
  let changed = false

  for (const sceneId of succeededSceneIds) {
    // Match the scene block's own status line (after the id line)
    const re = new RegExp(`(id:\\s*'${sceneId}',[\\s\\S]*?status:\\s*)'missing'`)
    if (re.test(src)) {
      src     = src.replace(re, `$1'ready'`)
      changed = true
    }
  }

  // If all scenes now ready, update top-level sceneImages.status too
  const allReady = !src.includes("status: 'missing'")
  if (allReady) {
    src     = src.replace(/(\bsceneImages:\s*\{[\s\S]*?status:\s*)'missing'/, `$1'ready'`)
    changed = true
  }

  if (changed) {
    fs.writeFileSync(pkgFile, src, 'utf8')
    console.log(`   📝  data/factory/story-${pad3(storyId)}-package.ts → status 업데이트`)
  }
}

// ── Process a single story ────────────────────────────────────────────────────
interface StoryResult {
  generated: number
  skipped:   number
  failed:    number
}

async function processStory(storyId: number, force: boolean, missingOnly: boolean): Promise<StoryResult> {
  const pkg = await loadPackage(storyId)
  if (!pkg) {
    console.log(`   ⬜  Story ${pad3(storyId)} — 패키지 파일 없음, 건너뜀`)
    return { generated: 0, skipped: 0, failed: 0 }
  }

  const scenes = extractScenes(storyId, pkg)
  if (scenes.length === 0) {
    console.log(`   ⬜  Story ${pad3(storyId)} — sceneImages 없음, 건너뜀`)
    return { generated: 0, skipped: 0, failed: 0 }
  }

  const succeeded: string[] = []
  let generated = 0, skipped = 0, failed = 0

  for (const scene of scenes) {
    const exists = fs.existsSync(scene.destPath)

    if (exists && !force) {
      log('⏭ ', storyId, scene.id, 'SKIP  (exists)')
      skipped++
      continue
    }

    if (missingOnly && exists) {
      skipped++
      continue
    }

    if (!scene.prompt.trim()) {
      log('⚠ ', storyId, scene.id, 'SKIP  (prompt 없음)')
      skipped++
      continue
    }

    log('⏳', storyId, scene.id, '생성 중...')
    try {
      const imgBuffer = await generateImage(scene.prompt)
      fs.writeFileSync(scene.destPath, imgBuffer)
      log('✅', storyId, scene.id, `저장 완료  (${(imgBuffer.length / 1024).toFixed(0)} KB)`)
      succeeded.push(scene.id)
      generated++
    } catch (err: unknown) {
      log('❌', storyId, scene.id, `실패 — ${(err as Error).message}`)
      failed++
    }
  }

  updatePackageStatus(storyId, succeeded)
  return { generated, skipped, failed }
}

// ── CLI ───────────────────────────────────────────────────────────────────────
async function main() {
  // API Key check
  if (!process.env.OPENAI_API_KEY) {
    console.error('\n❌  OPENAI_API_KEY 가 .env.local에 없습니다.')
    console.error('   .env.local에 다음 줄을 추가해 주세요:')
    console.error('   OPENAI_API_KEY=sk-...\n')
    process.exit(1)
  }

  const args        = process.argv.slice(2)
  const force       = args.includes('--force')
  const missingOnly = args.includes('--missing')

  // Determine story ID range
  let storyIds: number[] = []

  if (args.includes('--story')) {
    const val = Number(args[args.indexOf('--story') + 1])
    if (!val) { console.error('❌  --story 뒤에 숫자를 입력하세요.'); process.exit(1) }
    storyIds = [val]

  } else if (args.includes('--from') && args.includes('--to')) {
    const from = Number(args[args.indexOf('--from') + 1])
    const to   = Number(args[args.indexOf('--to') + 1])
    if (!from || !to || from > to) {
      console.error('❌  --from / --to 범위가 올바르지 않습니다.')
      process.exit(1)
    }
    storyIds = Array.from({ length: to - from + 1 }, (_, i) => from + i)

  } else if (missingOnly) {
    // --missing without range: scan all existing package files
    const dataDir = path.resolve(process.cwd(), 'data/factory')
    const files   = fs.readdirSync(dataDir).filter(f => /^story-\d{3}-package\.ts$/.test(f))
    storyIds      = files.map(f => parseInt(f.replace('story-', '').replace('-package.ts', ''), 10))

  } else {
    console.error('❌  옵션을 지정해 주세요.')
    console.error('   --story 1')
    console.error('   --from 1 --to 20')
    console.error('   --missing')
    process.exit(1)
  }

  // Print plan
  console.log('\n' + '═'.repeat(52))
  console.log('  PATTO Scene Image Generator')
  console.log('═'.repeat(52))
  console.log(`  모델    : ${IMAGE_MODEL}`)
  console.log(`  사이즈  : ${IMAGE_SIZE}`)
  console.log(`  품질    : ${IMAGE_QUALITY}`)
  console.log(`  대상    : Story ${storyIds.length === 1 ? storyIds[0] : `${storyIds[0]} ~ ${storyIds.at(-1)}`} (${storyIds.length}개)`)
  console.log(`  force   : ${force ? 'ON (기존 이미지 덮어쓰기)' : 'OFF'}`)
  console.log(`  missing : ${missingOnly ? 'ON (없는 이미지만)' : 'OFF'}`)
  console.log('═'.repeat(52) + '\n')

  // Run
  let totalGenerated = 0, totalSkipped = 0, totalFailed = 0

  for (const storyId of storyIds) {
    const result = await processStory(storyId, force, missingOnly)
    totalGenerated += result.generated
    totalSkipped   += result.skipped
    totalFailed    += result.failed
  }

  // Summary
  console.log('\n' + '─'.repeat(52))
  console.log(`  완료  ✅ ${totalGenerated}개 생성  ⏭  ${totalSkipped}개 건너뜀  ❌ ${totalFailed}개 실패`)
  console.log('─'.repeat(52) + '\n')

  if (totalFailed > 0) process.exit(1)
}

main().catch(err => { console.error(err); process.exit(1) })
