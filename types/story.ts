import type { Difficulty, Level, PatternWithExamples } from '@/types/pattern'

export type Story = {
  id: string
  level: Level
  order_index: number   // 1부터 시작 (URL /learn/1 등에 사용)
  title: string
  description: string | null
  mini_stories: Record<Difficulty, string>  // 난이도별 맥락 미니스토리
}

export type StoryPattern = {
  story_id: string
  pattern_id: string
  order_index: number
}

export type StoryWithPatterns = Story & {
  patterns: PatternWithExamples[]
}
