'use client'

import { useEffect, useRef, useState } from 'react'
import { MagazineEngine } from '@/components/MagazineEngine'
import { IntroVideoScreen } from '@/components/IntroVideoScreen'
import type { MagazineStory } from '@/types/magazine'

type Props = {
  story: MagazineStory
  allStories: MagazineStory[]
  initialView?: 'story' | 'patterns'
}

type Phase = 'gate' | 'show' | 'done'

const GATE_TIMEOUT_MS  = 2000   // 영상 준비 최대 대기 시간
const MIN_DURATION_SEC = 4      // 이 미만이면 Intro 생략

/**
 * Story 진입 흐름 관리.
 *
 * MagazineEngine은 항상 베이스로 렌더링된다.
 * IntroVideoScreen은 영상이 실제로 재생 가능한 상태일 때만 위에 오버레이된다.
 *
 * phase 흐름:
 *   gate  → (백그라운드에서 영상 준비 확인)
 *         → show  (성공) → 영상 종료/Skip → done
 *         → done  (실패/타임아웃) → MagazineEngine만 보임
 *
 * 향후 "처음 1회만 보기":
 *   const seen = localStorage.getItem(`seen-intro-${story.id}`)
 *   const eligible = intro?.enabled && !!intro.url && !seen
 *   onComplete: localStorage.setItem(`seen-intro-${story.id}`, '1')
 */
export function StoryPageClient({ story, allStories, initialView = 'story' }: Props) {
  const intro    = story.introVideo
  const eligible = intro?.enabled === true && !!intro.url

  const [phase, setPhase] = useState<Phase>(eligible ? 'gate' : 'done')
  const gateVideoRef = useRef<HTMLVideoElement | null>(null)
  const settledRef   = useRef(false)

  useEffect(() => {
    if (!eligible || !intro?.url) return

    settledRef.current = false

    const settle = (show: boolean) => {
      if (settledRef.current) return
      settledRef.current = true
      clearTimeout(timer)

      // 게이트 영상 정리
      const v = gateVideoRef.current
      if (v) { v.pause(); v.src = ''; v.load() }

      setPhase(show ? 'show' : 'done')
    }

    // 백그라운드에서 영상 probe — DOM에 추가하지 않음
    const video = document.createElement('video')
    video.src       = intro.url
    video.muted     = true
    video.playsInline = true
    video.preload   = 'auto'
    gateVideoRef.current = video

    const timer = setTimeout(() => settle(false), GATE_TIMEOUT_MS)

    video.addEventListener('error', () => settle(false))

    video.addEventListener('canplay', () => {
      const dur = video.duration
      if (!isNaN(dur) && dur < MIN_DURATION_SEC) { settle(false); return }

      video.play()
        .then(() => settle(true))
        .catch(() => settle(false))
    })

    // 재생 중 1초 안에 stalled/error → 실패 처리
    video.addEventListener('stalled', () => settle(false))

    video.load()

    return () => {
      settledRef.current = true
      clearTimeout(timer)
      video.pause()
      video.src = ''
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eligible, intro?.url])

  function handleIntroDone() {
    setPhase('done')
  }

  return (
    <>
      {/* MagazineEngine은 항상 베이스로 렌더링 — Intro 없으면 이게 그냥 보임 */}
      <MagazineEngine
        story={story}
        allStories={allStories}
        initialView={initialView}
      />

      {/* 영상 준비 확인 후에만 오버레이 */}
      {phase === 'show' && intro && (
        <IntroVideoScreen
          story={story}
          intro={intro}
          onComplete={handleIntroDone}
        />
      )}
    </>
  )
}
