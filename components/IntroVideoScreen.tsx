'use client'

import { useEffect, useRef, useState } from 'react'
import type { IntroVideo, MagazineStory } from '@/types/magazine'

type Props = {
  story: MagazineStory
  intro: IntroVideo
  onComplete: () => void
}

const EARLY_FAIL_SEC = 1.0   // 재생 시작 후 이 시간 안에 멈추면 실패로 처리

export function IntroVideoScreen({ story, intro, onComplete }: Props) {
  const videoRef    = useRef<HTMLVideoElement>(null)
  const [visible, setVisible]   = useState(false)   // play 이후에 fade-in
  const [exiting, setExiting]   = useState(false)   // fade-out
  const doneRef     = useRef(false)

  const handleDone = () => {
    if (doneRef.current) return
    doneRef.current = true
    const el = videoRef.current
    if (el) el.pause()
    setExiting(true)
    setTimeout(onComplete, 380)
  }

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    // 재생 시작되면 fade-in
    const onPlay = () => setVisible(true)

    // 재생 시작 후 너무 빨리 끝나거나 에러나면 즉시 fallback (화면 표시 없이)
    const onError   = () => { if (!visible) onComplete(); else handleDone() }
    const onStalled = () => { if (!visible) onComplete() }
    const onEnded   = () => handleDone()

    el.addEventListener('play',    onPlay)
    el.addEventListener('ended',   onEnded)
    el.addEventListener('error',   onError)
    el.addEventListener('stalled', onStalled)

    // 재생 시도
    el.play().catch(() => {
      // autoplay 차단 등 — 화면을 보여주기 전이라면 그냥 Reader로
      if (!doneRef.current) onComplete()
    })

    // 재생 시작 후 EARLY_FAIL_SEC 안에 paused 상태면 fallback
    const earlyCheck = setTimeout(() => {
      if (el.paused && !doneRef.current) {
        if (!visible) onComplete(); else handleDone()
      }
    }, EARLY_FAIL_SEC * 1000)

    return () => {
      clearTimeout(earlyCheck)
      el.removeEventListener('play',    onPlay)
      el.removeEventListener('ended',   onEnded)
      el.removeEventListener('error',   onError)
      el.removeEventListener('stalled', onStalled)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{
        position:   'fixed',
        inset:      0,
        zIndex:     60,
        background: '#000',
        // 영상이 play 상태 확인된 뒤에만 나타남, 종료 시 사라짐
        opacity:    visible && !exiting ? 1 : 0,
        transition: visible
          ? exiting
            ? 'opacity 0.38s ease-in'
            : 'opacity 0.35s ease-out'
          : 'none',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* 배경 영상 */}
      <video
        ref={videoRef}
        src={intro.url}
        poster={intro.poster}
        muted
        playsInline
        preload="auto"
        style={{
          position:   'absolute',
          inset:      0,
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
        }}
      />

      {/* 하단 그라데이션 */}
      <div
        style={{
          position:       'absolute',
          inset:          0,
          background:     'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 30%, transparent 52%, rgba(0,0,0,0.70) 100%)',
          pointerEvents:  'none',
        }}
      />

      {/* Skip — 우측 상단, 조용하게 */}
      <button
        type="button"
        onClick={handleDone}
        style={{
          position:       'absolute',
          top:            20,
          right:          20,
          padding:        '5px 14px',
          border:         '1px solid rgba(255,255,255,0.30)',
          borderRadius:   20,
          background:     'rgba(0,0,0,0.22)',
          color:          'rgba(255,255,255,0.70)',
          fontSize:       10,
          letterSpacing:  '0.14em',
          fontWeight:     600,
          cursor:         'pointer',
          backdropFilter: 'blur(6px)',
        }}
      >
        SKIP
      </button>

      {/* 하단 — 스토리 정보 */}
      <div
        style={{
          position: 'absolute',
          bottom:   0,
          left:     0,
          right:    0,
          padding:  '0 28px 44px',
        }}
      >
        <p
          style={{
            margin:        '0 0 6px',
            fontSize:      9,
            letterSpacing: '0.24em',
            fontWeight:    600,
            color:         'rgba(255,255,255,0.45)',
            textTransform: 'uppercase',
          }}
        >
          Cinematic Intro · Story {String(story.id).padStart(2, '0')}
        </p>

        <h1
          className="font-playfair"
          style={{
            margin:        '0 0 5px',
            fontSize:      'clamp(1.55rem, 6vw, 2.1rem)',
            fontWeight:    800,
            lineHeight:    1.15,
            color:         'rgba(255,255,255,0.95)',
            letterSpacing: '-0.01em',
          }}
        >
          {story.title}
        </h1>

        <p
          style={{
            margin:        0,
            fontSize:      13,
            color:         'rgba(255,255,255,0.50)',
            letterSpacing: '0.03em',
          }}
        >
          {story.subtitleKo}
        </p>

        {intro.credit && (
          <p
            style={{
              margin:        '16px 0 0',
              fontSize:      8.5,
              color:         'rgba(255,255,255,0.22)',
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
