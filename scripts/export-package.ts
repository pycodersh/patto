/**
 * Story Package Export 스크립트 (개발 전용)
 *
 * 사용법:
 *   npx tsx scripts/export-package.ts [packageId]
 *
 * 예시:
 *   npx tsx scripts/export-package.ts story-001
 *
 * 출력: data/library/exports/story-001.json
 */

import * as fs from 'fs'
import * as path from 'path'
import { pattoLibrary } from '../data/library/index'
import { getPackage, exportPackage, getLibraryStats } from '../lib/factory/library'

const packageId = process.argv[2] ?? 'story-001'
const pkg       = getPackage(pattoLibrary, packageId)

if (!pkg) {
  console.error(`Package "${packageId}" not found in library.`)
  console.log(`Available: ${pattoLibrary.entries.map(e => e.packageId).join(', ')}`)
  process.exit(1)
}

// Export JSON
const json       = exportPackage(pkg)
const outputDir  = path.join(process.cwd(), 'data', 'library', 'exports')
const outputPath = path.join(outputDir, `${packageId}.json`)

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputPath, json, 'utf8')

console.log(`\n✓ Exported: ${outputPath}`)
console.log(`  Story   : ${pkg.story.title}`)
console.log(`  Version : ${pkg.currentVersion}`)
console.log(`  Quality : ${pkg.quality?.grade ?? 'N/A'} (${pkg.quality?.score ?? 0}/100)`)
console.log(`  Status  : ${pkg.quality?.reviewStatus?.toUpperCase() ?? 'N/A'}`)
console.log(`  Size    : ${(json.length / 1024).toFixed(1)} KB`)

// Library 통계
const stats = getLibraryStats(pattoLibrary)
console.log(`\nLibrary Stats:`)
console.log(`  Total   : ${stats.total} stories`)
console.log(`  Avg QC  : ${stats.avgQualityScore}/100`)
console.log(`  VideoReady: ${stats.assetReadiness.sceneVideo}%`)
