/**
 * PATTO Story Library — Package 관리
 *
 * Library = Story Package들의 집합.
 * 현재 구현: 메모리 + JSON 파일 기반.
 * 향후: Supabase DB로 이전 가능 (인터페이스 동일).
 *
 * 사용법:
 *   import { addToLibrary, getPackage, exportPackage, importPackage } from '@/lib/factory/library'
 */

import type { StoryPackage } from '@/types/factory'

// ── Library 타입 ──────────────────────────────────────────────────────────────

export type LibraryEntry = {
  packageId: string
  storyId: number
  title: string
  titleKo: string
  theme: string
  difficulty: string
  qualityScore?: number
  qualityGrade?: string
  reviewStatus?: string
  createdAt: string
  updatedAt: string
  currentVersion: string
  assetStatus: {
    sceneVideo: string
    scenePoster: string
    ambience: string
    storyTts: 'pending' | 'partial' | 'complete'
  }
}

export type StoryLibrary = {
  schemaVersion: '1.0'
  name: 'PATTO Story Library'
  updatedAt: string
  totalCount: number
  entries: LibraryEntry[]
  packages: StoryPackage[]   // 실제 패키지 데이터 (향후 DB 분리)
}

// ── 빈 Library 생성 ───────────────────────────────────────────────────────────

export function createLibrary(): StoryLibrary {
  return {
    schemaVersion: '1.0',
    name: 'PATTO Story Library',
    updatedAt: new Date().toISOString(),
    totalCount: 0,
    entries: [],
    packages: [],
  }
}

// ── Library에 패키지 추가 ─────────────────────────────────────────────────────

export type AddToLibraryOptions = {
  allowDuplicates?: boolean   // 동일 packageId 허용 여부 (기본 false)
  requirePass?: boolean       // QC pass인 경우에만 등록 (기본 true)
}

export function addToLibrary(
  library: StoryLibrary,
  pkg: StoryPackage,
  options: AddToLibraryOptions = {},
): { library: StoryLibrary; success: boolean; reason?: string } {
  const { allowDuplicates = false, requirePass = true } = options

  // QC 통과 여부 확인
  if (requirePass && pkg.quality?.reviewStatus === 'fail') {
    return {
      library,
      success: false,
      reason: `QC 실패 (score: ${pkg.quality.score}, grade: ${pkg.quality.grade}) — Library 등록 거부`,
    }
  }

  // 중복 확인
  if (!allowDuplicates) {
    const existing = library.packages.findIndex(p => p.packageId === pkg.packageId)
    if (existing !== -1) {
      // 기존 패키지를 최신 버전으로 교체
      const updatedPackages = [...library.packages]
      updatedPackages[existing] = pkg
      const updatedEntries = library.entries.map(e =>
        e.packageId === pkg.packageId ? packageToEntry(pkg) : e
      )
      return {
        library: {
          ...library,
          updatedAt: new Date().toISOString(),
          entries: updatedEntries,
          packages: updatedPackages,
        },
        success: true,
        reason: `기존 패키지 업데이트 (${pkg.currentVersion})`,
      }
    }
  }

  const entry = packageToEntry(pkg)

  return {
    library: {
      ...library,
      updatedAt: new Date().toISOString(),
      totalCount: library.totalCount + 1,
      entries: [...library.entries, entry],
      packages: [...library.packages, pkg],
    },
    success: true,
  }
}

// ── Library에서 패키지 조회 ───────────────────────────────────────────────────

export function getPackage(library: StoryLibrary, packageId: string): StoryPackage | undefined {
  return library.packages.find(p => p.packageId === packageId)
}

export function getPackageByStoryId(library: StoryLibrary, storyId: number): StoryPackage | undefined {
  return library.packages.find(p => p.story.id === storyId)
}

// 필터 조회
export type LibraryFilter = {
  theme?: string
  difficulty?: string
  reviewStatus?: string
  minScore?: number
}

export function filterLibrary(library: StoryLibrary, filter: LibraryFilter): LibraryEntry[] {
  return library.entries.filter(e => {
    if (filter.theme && e.theme !== filter.theme) return false
    if (filter.difficulty && e.difficulty !== filter.difficulty) return false
    if (filter.reviewStatus && e.reviewStatus !== filter.reviewStatus) return false
    if (filter.minScore !== undefined && (e.qualityScore ?? 0) < filter.minScore) return false
    return true
  })
}

// ── Export ────────────────────────────────────────────────────────────────────

export function exportPackage(pkg: StoryPackage): string {
  return JSON.stringify(pkg, null, 2)
}

export function exportLibrary(library: StoryLibrary, includePackages = false): string {
  const exportData = includePackages
    ? library
    : { ...library, packages: [] }
  return JSON.stringify(exportData, null, 2)
}

// ── Import ────────────────────────────────────────────────────────────────────

export type ImportResult =
  | { success: true; package: StoryPackage }
  | { success: false; error: string }

export function importPackage(json: string): ImportResult {
  try {
    const parsed = JSON.parse(json) as Partial<StoryPackage>

    // 필수 필드 검증
    if (!parsed.packageId)   return { success: false, error: 'packageId 없음' }
    if (!parsed.story)       return { success: false, error: 'story 없음' }
    if (!parsed.paragraphs)  return { success: false, error: 'paragraphs 없음' }
    if (!parsed.patterns)    return { success: false, error: 'patterns 없음' }
    if (!parsed.scenes)      return { success: false, error: 'scenes 없음' }
    if (!parsed.assets)      return { success: false, error: 'assets 없음' }

    return { success: true, package: parsed as StoryPackage }
  } catch (e) {
    return { success: false, error: `JSON 파싱 실패: ${String(e)}` }
  }
}

// ── Library 통계 ──────────────────────────────────────────────────────────────

export type LibraryStats = {
  total: number
  byStatus: Record<string, number>
  byDifficulty: Record<string, number>
  byTheme: Record<string, number>
  avgQualityScore: number
  assetReadiness: {
    sceneVideo: number    // ready 비율 (0–100)
    ambience: number
    storyTts: number
  }
}

export function getLibraryStats(library: StoryLibrary): LibraryStats {
  const entries = library.entries

  const byStatus: Record<string, number>     = {}
  const byDifficulty: Record<string, number> = {}
  const byTheme: Record<string, number>      = {}
  let totalScore = 0
  let scoreCount = 0
  let videoReady = 0, ambienceReady = 0, ttsComplete = 0

  for (const e of entries) {
    byStatus[e.reviewStatus ?? 'unknown']   = (byStatus[e.reviewStatus ?? 'unknown']   ?? 0) + 1
    byDifficulty[e.difficulty]              = (byDifficulty[e.difficulty]              ?? 0) + 1
    byTheme[e.theme]                        = (byTheme[e.theme]                        ?? 0) + 1

    if (e.qualityScore !== undefined) { totalScore += e.qualityScore; scoreCount++ }
    if (e.assetStatus.sceneVideo  === 'ready') videoReady++
    if (e.assetStatus.ambience    === 'ready') ambienceReady++
    if (e.assetStatus.storyTts    === 'complete') ttsComplete++
  }

  const n = entries.length || 1

  return {
    total: library.totalCount,
    byStatus,
    byDifficulty,
    byTheme,
    avgQualityScore: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0,
    assetReadiness: {
      sceneVideo: Math.round((videoReady   / n) * 100),
      ambience:   Math.round((ambienceReady / n) * 100),
      storyTts:   Math.round((ttsComplete  / n) * 100),
    },
  }
}

// ── 내부: LibraryEntry 생성 ───────────────────────────────────────────────────

function packageToEntry(pkg: StoryPackage): LibraryEntry {
  const ttsUrls    = pkg.assets.storyTts.urls
  const ttsCount   = Object.keys(ttsUrls).length
  const ttsReady   = Object.values(ttsUrls).filter(u => u && !u.includes('pending')).length
  const ttsStatus: LibraryEntry['assetStatus']['storyTts'] =
    ttsReady === 0 ? 'pending' : ttsReady < ttsCount ? 'partial' : 'complete'

  return {
    packageId:      pkg.packageId,
    storyId:        pkg.story.id,
    title:          pkg.story.title,
    titleKo:        pkg.story.subtitleKo,
    theme:          pkg.metadata.theme,
    difficulty:     pkg.metadata.difficulty,
    qualityScore:   pkg.quality?.score,
    qualityGrade:   pkg.quality?.grade,
    reviewStatus:   pkg.quality?.reviewStatus,
    createdAt:      pkg.createdAt,
    updatedAt:      pkg.updatedAt,
    currentVersion: pkg.currentVersion,
    assetStatus: {
      sceneVideo:  pkg.assets.sceneVideo.status,
      scenePoster: pkg.assets.scenePoster.status,
      ambience:    pkg.assets.ambience.status,
      storyTts:    ttsStatus,
    },
  }
}
