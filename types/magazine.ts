export type MagazineParagraph = {
  id: string
  english: string
  koreanTranslation: string
  keyExpressions: string[]
}

export type MagazinePattern = {
  id: string
  pattern: string
  meaningKo: string
  storySentence: string
  storySentenceKo: string
  variationSentence: string
  variationSentenceKo: string
  explanation?: string
  examples?: { en: string; ko: string }[]
}

export type AmbienceId =
  | 'rain' | 'forest' | 'ocean' | 'cafe' | 'city'
  | 'night' | 'fireplace' | 'wind' | 'library' | 'train'

export type StoryImage = {
  url: string
  alt: string
}

export type MagazineStory = {
  id: number
  title: string
  subtitleKo: string
  imageUrl: string          // fallback / primary
  imageAlt: string
  imagePool?: StoryImage[]  // 3장 랜덤 풀 — 있으면 세션마다 랜덤 선택
  storyNote?: string
  highlightPhrases: string[]
  paragraphs: MagazineParagraph[]
  patterns: MagazinePattern[]
  ambienceId?: AmbienceId
}
