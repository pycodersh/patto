'use client'

import { useState } from 'react'
import { MagazineEngine } from '@/components/MagazineEngine'
import { IntroVideoScreen } from '@/components/IntroVideoScreen'
import type { MagazineStory } from '@/types/magazine'

type Props = {
  story: MagazineStory
  allStories: MagazineStory[]
  initialView?: 'story' | 'patterns'
}

/**
 * Story 진입 흐름 관리.
 *
 * introVideo.enabled === true  → IntroVideoScreen → MagazineEngine
 * introVideo 없거나 disabled   → MagazineEngine 바로 진입
 *
 * 추후 "처음 1회만 보기" 구현 시:
 *   const hasSeenIntroVideo = localStorage.getItem(`seen-intro-${story.id}`)
 *   const showIntro = intro?.enabled && !hasSeenIntroVideo
 *   ... onComplete: localStorage.setItem(`seen-intro-${story.id}`, '1')
 */
export function StoryPageClient({ story, allStories, initialView = 'story' }: Props) {
  const intro     = story.introVideo
  const showable  = intro?.enabled === true

  const [introDone, setIntroDone] = useState(false)

  // intro가 없거나 이미 완료된 경우 바로 Story Reader
  if (!showable || introDone) {
    return (
      <MagazineEngine
        story={story}
        allStories={allStories}
        initialView={initialView}
      />
    )
  }

  return (
    <>
      <IntroVideoScreen
        story={story}
        intro={intro}
        onComplete={() => setIntroDone(true)}
      />
      {/* MagazineEngine을 미리 마운트 — intro가 끝나는 순간 바로 표시 */}
      <div style={{ visibility: 'hidden', position: 'fixed', inset: 0, zIndex: -1 }}>
        <MagazineEngine
          story={story}
          allStories={allStories}
          initialView={initialView}
        />
      </div>
    </>
  )
}
