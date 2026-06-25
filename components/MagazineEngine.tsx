'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { PatternsPage } from '@/components/PatternsPage'
import { StoryPage } from '@/components/StoryPage'
import type { MagazineStory } from '@/types/magazine'

type MagazineEngineProps = {
  story: MagazineStory
  totalStories: number
}

export function MagazineEngine({ story, totalStories }: MagazineEngineProps) {
  const router = useRouter()
  const [view, setView] = useState<'story' | 'patterns'>('story')

  function goNextStory() {
    if (story.id < totalStories) {
      router.push(`/stories/${story.id + 1}`)
    }
  }

  function goPrevStory() {
    if (story.id > 1) {
      router.push(`/stories/${story.id - 1}`)
    }
  }

  if (view === 'story') {
    return (
      <StoryPage
        story={story}
        totalStories={totalStories}
        onNext={() => setView('patterns')}
        onPrevStory={story.id > 1 ? goPrevStory : undefined}
      />
    )
  }

  return (
    <PatternsPage
      story={story}
      totalStories={totalStories}
      onPrev={() => setView('story')}
      onNext={goNextStory}
    />
  )
}
