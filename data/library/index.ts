/**
 * PATTO Story Library — 레지스트리
 *
 * 모든 Story Package가 여기 등록된다.
 * 향후 800개까지 확장.
 *
 * 사용법:
 *   import { pattoLibrary } from '@/data/library'
 *   const pkg = getPackage(pattoLibrary, 'story-001')
 */

import { createLibrary, addToLibrary } from '@/lib/factory/library'
import { story001Package } from '@/data/factory/story-001-package'
import { story002Package } from '@/data/factory/story-002-package'

// ── Library 초기화 ──────────────────────────────────────────────────────────
// Story Package를 추가할 때는 아래 addToLibrary() 체인을 연장하면 된다.
// requirePass: false → QC 점수와 관계없이 등록 (개발 중)
// requirePass: true  → QC pass 통과한 Story만 등록 (프로덕션 권장)

let lib = createLibrary()

const r001 = addToLibrary(lib, story001Package as Parameters<typeof addToLibrary>[1], { requirePass: false })
lib = r001.library

const r002 = addToLibrary(lib, story002Package as Parameters<typeof addToLibrary>[1], { requirePass: false })
lib = r002.library

// Story 003~800: 향후 여기에 추가
// const r003 = addToLibrary(lib, story003Package)
// lib = r003.library

export const pattoLibrary = lib
