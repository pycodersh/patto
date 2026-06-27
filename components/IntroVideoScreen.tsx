'use client'

import { useEffect, useRef, useState } from 'react'
import type { IntroVideo, MagazineStory } from '@/types/magazine'

type Props = {
  story: MagazineStory
  intro: IntroVideo
  onComplete: () => void
}

export function IntroVideoScreen({ story, intro, onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const doneRef  = useRef(false)

  const [visible,     setVisible]     = useState(false)  // play 후 fade-in
  const [exiting,     setExiting]     = useState(false)
  const [showPlayBtn, setShowPlayBtn] = useState(false)
  const [videoError,  setVideoError]  = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    el.play()
      .then(() => setShowPlayBtn(false))
      .catch(() => setShowPlayBtn(true))
  }, [])

  function exit() {
    if (doneRef.current) return
    doneRef.current = true
    videoRef.current?.pause()
    setExiting(true)
    setTimeout(onComplete, 380)
  }

  return (
    <div
      style={{
        position:   'fixed',
        inset:      0,
        zIndex:     60,
        background: '#000',
        opacity:    visible && !exiting ? 1 : 0,
        transition: visible
          ? exiting ? 'opacity 0.38s ease-in' : 'none'
          : 'none',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <video
        ref={videoRef}
        src={intro.url}
        poster={intro.poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        onPlay={() => setVisible(true)}
        onEnded={exit}
        onError={() => { setVideoError(true); setVisible(true) }}
      />

      {/* 그라데이션 */}
      <div
        style={{
          position:      'absolute',
          inset:         0,
          background:    'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 35%, transparent 55%, rgba(0,0,0,0.72) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 영상 에러 */}
      {videoError && (
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', textAlign: 'center', color: 'rgba(255,80,80,0.8)', fontSize: 12, fontFamily: 'monospace' }}>
          Video failed to load
        </div>
      )}

      {/* autoPlay 차단 시 수동 Play */}
      {showPlayBtn && !videoError && (
        <button
          type="button"
          onClick={() => videoRef.current?.play().then(() => setShowPlayBtn(false)).catch(() => {})}
          style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 64, height: 64, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.5)',
            color: '#fff', fontSize: 28, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)',
          }}
        >
          ▶
        </button>
      )}

      {/* Skip */}
      <button
        type="button"
        onClick={exit}
        style={{
          position: 'absolute', top: 20, right: 20,
          padding: '5px 14px',
          border: '1px solid rgba(255,255,255,0.30)', borderRadius: 20,
          background: 'rgba(0,0,0,0.22)', color: 'rgba(255,255,255,0.70)',
          fontSize: 10, letterSpacing: '0.14em', fontWeight: 600,
          cursor: 'pointer', backdropFilter: 'blur(6px)',
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
