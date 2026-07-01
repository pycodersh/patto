const KEY = 'patto-last-position'

type LastPosition = {
  storyId: number
  view: 'story' | 'patterns'
}

export function saveLastPosition(storyId: number, view: 'story' | 'patterns') {
  if (typeof window === 'undefined') return
  localStorage.setItem(KEY, JSON.stringify({ storyId, view }))
}

export function getLastPosition(): LastPosition | null {
  if (typeof window === 'undefined') return null
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? 'null')
  } catch {
    return null
  }
}
