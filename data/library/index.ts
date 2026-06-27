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

// ── Library 초기화 ──────────────────────────────────────────────────────────
// Story Package를 추가할 때는 아래 addToLibrary() 체인을 연장하면 된다.

let lib = createLibrary()

const r001 = addToLibrary(lib, story001Package as Parameters<typeof addToLibrary>[1], { requirePass: false })
lib = r001.library

// Story 002~800: 향후 여기에 추가
// const r002 = addToLibrary(lib, story002Package)
// lib = r002.library

export const pattoLibrary = lib
