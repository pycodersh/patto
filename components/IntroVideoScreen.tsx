'use client'

import { useEffect, useRef, useState } from 'react'
import type { IntroVideo, MagazineStory } from '@/types/magazine'

type Props = {
  story: MagazineStory
  intro: IntroVideo
  onComplete: () => void
}

export function IntroVideoScreen({ story, intro, onComplete }: Props) {
  const videoRef  = useRef<HTMLVideoElement>(null)
  const doneRef   = useRef(false)
  const playedRef = useRef(false)   // stale closure 방지용

  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  const handleDone = () => {
    if (doneRef.current) return
    doneRef.current = true
    videoRef.current?.pause()
    setExiting(true)
    setTimeout(onComplete, 380)
  }

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const onPlay    = () => { playedRef.current = true; setVisible(true) }
    const onEnded   = () => handleDone()
    const onError   = () => { if (!playedRef.current) onComplete(); else handleDone() }
    const onStalled = () => { if (!playedRef.current) onComplete() }

    el.addEventListener('play',    onPlay)
    el.addEventListener('ended',   onEnded)
    el.addEventListener('error',   onError)
    el.addEventListener('stalled', onStalled)

    // 게이트를 통과한 영상이므로 play()는 대부분 바로 성공
    el.play().catch(() => {
      if (!doneRef.current) onComplete()
    })

    return () => {
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
        position:      'fixed',
        inset:         0,
        zIndex:        60,
        background:    '#000',
        opacity:       visible && !exiting ? 1 : 0,
        transition:    visible
          ? exiting ? 'opacity 0.38s ease-in' : 'opacity 0.35s ease-out'
          : 'none',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* 배경 영상 — autoPlay + muted 조합으로 브라우저 autoplay 정책 통과 */}
      <video
        ref={videoRef}
        src={intro.url}
        poster={intro.poster}
        muted
        playsInline
        autoPlay
        preload="auto"
        style={{
          position:  'absolute',
          inset:     0,
          width:     '100%',
          height:    '100%',
          objectFit: 'cover',
        }}
      />

      {/* 하단 그라데이션 */}
      <div
        style={{
          position:      'absolute',
          inset:         0,
          background:    'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 30%, transparent 52%, rgba(0,0,0,0.70) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Skip */}
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

      {/* 하단 스토리 정보 */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 28px 44px' }}>
        <p style={{ margin: '0 0 6px', fontSize: 9, letterSpacing: '0.24em', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>
          Cinematic Intro · Story {String(story.id).padStart(2, '0')}
        </p>
        <h1
          className="font-playfair"
          style={{ margin: '0 0 5px', fontSize: 'clamp(1.55rem, 6vw, 2.1rem)', fontWeight: 800, lineHeight: 1.15, color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.01em' }}
        >
          {story.title}
        </h1>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.50)', letterSpacing: '0.03em' }}>
          {story.subtitleKo}
        </p>
        {intro.credit && (
          <p style={{ margin: '16px 0 0', fontSize: 8.5, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.06em' }}>
            {intro.credit}
          </p>
        )}
      </div>
    </div>
  )
}
