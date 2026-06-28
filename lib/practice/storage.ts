/**
 * Pattern 반복 연습 기록 (게스트: localStorage)
 *
 * PATTO의 핵심 = 패턴을 반복해서 자동화하는 것.
 * 패턴별 반복 횟수·마지막 연습 시각·누적 연습 시간을 저장하고,
 * Progress 화면에서 활용할 수 있도록 조회 함수를 제공한다.
 *
 * 향후 Supabase 동기화 시 이 모듈만 교체하면 되도록 read/write를 분리해 둔다.
 */

export type PatternPractice = {
  patternId: string
  storyId: number
  repeatCount: number
  lastPracticedAt: string | null // ISO timestamp
  totalPracticeTime: number      // 누적 연습 시간 (ms)
}

const KEY = 'patto-pattern-practice'

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function readAll(): Record<string, PatternPractice> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

function writeAll(map: Record<string, PatternPractice>) {
  if (typeof window === 'undefined') return
  localStorage.setItem(KEY, JSON.stringify(map))
}

// ── 조회 ────────────────────────────────────────────────────────────────
export function getAllPatternPractice(): Record<string, PatternPractice> {
  return readAll()
}

export function getPatternPractice(patternId: string): PatternPractice | null {
  return readAll()[patternId] ?? null
}

/** 해당 패턴을 오늘 1회 이상 완료했는지 */
export function isCompletedToday(patternId: string): boolean {
  const rec = readAll()[patternId]
  return !!rec?.lastPracticedAt && rec.lastPracticedAt.slice(0, 10) === todayStr()
}

/** 오늘 연습한 (서로 다른) 패턴 개수 */
export function getTodayPracticeCount(): number {
  const t = todayStr()
  return Object.values(readAll()).filter(
    (r) => r.lastPracticedAt?.slice(0, 10) === t,
  ).length
}

/** 전체 누적 반복 횟수 */
export function getTotalRepeatCount(): number {
  return Object.values(readAll()).reduce((sum, r) => sum + r.repeatCount, 0)
}

// ── 기록 ────────────────────────────────────────────────────────────────
/**
 * 패턴 1회 반복 완료를 기록한다.
 * repeatCount +1, lastPracticedAt = 지금, totalPracticeTime += durationMs.
 * @returns 갱신된 기록
 */
export function recordPatternRepeat(
  patternId: string,
  storyId: number,
  durationMs = 0,
): PatternPractice {
  const map = readAll()
  const prev = map[patternId]
  const next: PatternPractice = {
    patternId,
    storyId,
    repeatCount: (prev?.repeatCount ?? 0) + 1,
    lastPracticedAt: new Date().toISOString(),
    totalPracticeTime: (prev?.totalPracticeTime ?? 0) + Math.max(0, durationMs),
  }
  map[patternId] = next
  writeAll(map)
  return next
}
