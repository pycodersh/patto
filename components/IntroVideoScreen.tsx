'use client'

import { useEffect, useRef, useState } from 'react'
import type { IntroVideo, MagazineStory } from '@/types/magazine'

type Props = {
  story: MagazineStory
  intro: IntroVideo
  onComplete: () => void
}

export function IntroVideoScreen({ story, intro, onComplete }: Props) {
  const videoRef   = useRef<HTMLVideoElement>(null)
  const [fading, setFading] = useState(false)

  // 영상 종료 또는 에러 시 StoryReader로 전환
  function handleDone() {
    if (fading) return
    setFading(true)
    setTimeout(onComplete, 500)   // 페이드아웃 후 전환
  }

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(handleDone)   // autoplay 차단 시 즉시 Reader로
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: '#000',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {/* 배경 영상 */}
      <video
        ref={videoRef}
        src={intro.url}
        poster={intro.poster}
        muted
        playsInline
        preload="metadata"
        onEnded={handleDone}
        onError={handleDone}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* 어두운 그라데이션 오버레이 — 하단 텍스트 가독성 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 35%, transparent 50%, rgba(0,0,0,0.72) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Skip 버튼 — 우측 상단, 조용하게 */}
      <button
        type="button"
        onClick={handleDone}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '6px 14px',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: 20,
          background: 'rgba(0,0,0,0.25)',
          color: 'rgba(255,255,255,0.75)',
          fontSize: 11,
          letterSpacing: '0.12em',
          fontWeight: 500,
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
        }}
      >
        SKIP
      </button>

      {/* 하단 — 스토리 타이틀 + 서브타이틀 */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 28px 40px',
        }}
      >
        <p
          style={{
            margin: '0 0 4px',
            fontSize: 11,
            letterSpacing: '0.22em',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
          }}
        >
          Story {String(story.id).padStart(2, '0')}
        </p>
        <h1
          className="font-playfair"
          style={{
            margin: '0 0 6px',
            fontSize: 'clamp(1.6rem, 6vw, 2.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '-0.01em',
          }}
        >
          {story.title}
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.04em',
          }}
        >
          {story.subtitleKo}
        </p>

        {/* credit — 아주 작게 */}
        {intro.credit && (
          <p
            style={{
              margin: '14px 0 0',
              fontSize: 9,
              color: 'rgba(255,255,255,0.28)',
              letterSpacing: '0.06em',
            }}
          >
            {intro.credit}
          </p>
        )}
      </div>
    </div>
  )
}
