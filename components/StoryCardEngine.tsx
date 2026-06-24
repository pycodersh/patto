'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { CompletionScreen } from '@/components/CompletionScreen'
import { MiniStory } from '@/components/MiniStory'
import { PatternCard } from '@/components/PatternCard'
import { StoryProgress } from '@/components/StoryProgress'
import { useLearningProgress } from '@/hooks/useLearningProgress'
import { useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'
import type { StoryWithPatterns } from '@/types/story'

type StoryCardEngineProps = {
  story: StoryWithPatterns
  totalStories: number
}

const READ_GOAL = 10
const SLIDE_DURATION = 360
const SLIDE_MIDPOINT = 155
const DRAG_THRESHOLD = 0.30  // 카드 폭의 30%

export function StoryCardEngine({ story, totalStories }: StoryCardEngineProps) {
  const router = useRouter()
  const totalCards = story.patterns.length
  const { onPatternView, onToggleFavorite, onStoryProgress, favorites } = useProgress()
  const { progress } = useLearningProgress()
  const difficulty = progress.settings.difficulty

  const [cardIndex, setCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [animDir, setAnimDir] = useState<'next' | 'prev' | null>(null)
  const [showMiniStory, setShowMiniStory] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)
  const [readCount, setReadCount] = useState(0)

  // 드래그 상태
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // refs — 이벤트 클로저 안에서 최신값 유지
  const isAnimatingRef = useRef(false)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const didSwipe = useRef(false)
  const didDrag = useRef(false)
  const cardWrapperRef = useRef<HTMLDivElement>(null)

  const currentPattern = story.patterns[cardIndex]
  const isLastStory = story.order_index >= totalStories
  const canGoPrevious = cardIndex > 0 || showMiniStory

  // ── non-passive touchmove: 수평 드래그 시 페이지 스크롤 방지 ──
  useEffect(() => {
    const el = cardWrapperRef.current
    if (!el) return

    const onMove = (e: TouchEvent) => {
      if (isAnimatingRef.current) return
      const dx = e.touches[0].clientX - touchStartX.current
      const dy = e.touches[0].clientY - touchStartY.current
      // 수평 방향이 우세할 때만 드래그로 처리
      if (Math.abs(dx) > Math.abs(dy) + 4) {
        e.preventDefault()
        didDrag.current = true
        setDragOffset(dx)
        setIsDragging(true)
      }
    }

    el.addEventListener('touchmove', onMove, { passive: false })
    return () => el.removeEventListener('touchmove', onMove)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ── 방향성 카드 전환 ──
  function navigate(dir: 'next' | 'prev') {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setDragOffset(0)
    setIsDragging(false)
    setAnimDir(dir)

    window.setTimeout(() => {
      if (dir === 'next') {
        if (showMiniStory) {
          goNextStory()
        } else if (cardIndex < totalCards - 1) {
          setCardIndex((v) => v + 1)
          setIsFlipped(false)
        } else {
          setShowMiniStory(true)
          setIsFlipped(false)
        }
      } else {
        if (showMiniStory) {
          setShowMiniStory(false)
          setCardIndex(totalCards - 1)
          setIsFlipped(true)
        } else if (cardIndex > 0) {
          setCardIndex((v) => v - 1)
          setIsFlipped(false)
        }
      }
    }, SLIDE_MIDPOINT)

    window.setTimeout(() => {
      isAnimatingRef.current = false
      setAnimDir(null)
    }, SLIDE_DURATION)
  }

  // ── 탭 → 뒤집기 ──
  function handleFlip() {
    if (didSwipe.current) {
      didSwipe.current = false
      return
    }
    if (isAnimatingRef.current) return
    const next = !isFlipped
    setIsFlipped(next)
    if (next) onPatternView(currentPattern.id)
  }

  // ── 터치 시작 ──
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    didSwipe.current = false
    didDrag.current = false
    setIsDragging(false)
  }

  // ── 터치 종료: 임계값 판단 ──
  function handleTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    const cardWidth = cardWrapperRef.current?.offsetWidth ?? 320
    const threshold = cardWidth * DRAG_THRESHOLD

    setIsDragging(false)
    setDragOffset(0)

    if (didDrag.current && Math.abs(dx) > Math.abs(dy)) {
      // 드래그가 있었다면 flip은 무조건 차단
      didSwipe.current = true
      if (Math.abs(dx) >= threshold) {
        // 임계값 초과 → 카드 이동
        if (dx < 0) navigate('next')
        else if (canGoPrevious) navigate('prev')
      }
      // 임계값 미만 → 원위치 (dragOffset=0으로 이미 리셋됨)
    }
    didDrag.current = false
  }

  function handleRead() {
    const next = Math.min(readCount + 1, READ_GOAL)
    setReadCount(next)
    onStoryProgress(story.id, next)
  }

  function goNextStory() {
    if (isLastStory) {
      setShowCompletion(true)
      return
    }
    router.push(`/learn/${story.order_index + 1}`)
  }

  if (showCompletion) return <CompletionScreen />

  // 설정 난이도에 맞는 미니스토리 선택 (폴백: normal)
  const miniStoryText = story.mini_stories[difficulty] || story.mini_stories.normal || ''

  // ── 드래그 실시간 스타일 ──
  const cardWidth = cardWrapperRef.current?.offsetWidth ?? 320
  const dragProgress = dragOffset / cardWidth  // -1 ~ +1
  const tiltDeg = dragProgress * 7             // 최대 ±7도 기울기

  const dragStyle: React.CSSProperties = isDragging || dragOffset !== 0
    ? {
        transform: `translateX(${dragOffset}px) rotate(${tiltDeg}deg)`,
        transition: 'none',
        willChange: 'transform',
        boxShadow: `
          0 ${12 + Math.abs(dragProgress) * 24}px
          ${48 + Math.abs(dragProgress) * 40}px
          rgba(79, 140, 255, ${0.10 + Math.abs(dragProgress) * 0.14})
        `,
        borderRadius: '28px',
      }
    : {
        transform: 'translateX(0) rotate(0deg)',
        transition: 'transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.42s ease',
      }

  const slideClass = animDir === 'next'
    ? 'animate-slide-next'
    : animDir === 'prev'
      ? 'animate-slide-prev'
      : ''

  // ── Mini Story 화면 ──
  if (showMiniStory) {
    return (
      <div className="flex min-h-[calc(100dvh-5rem)] flex-col">
        <StoryProgress
          currentCard={totalCards}
          isMiniStory
          storyNumber={story.order_index}
          title={story.title}
          totalCards={totalCards}
          totalStories={totalStories}
        />
        <div
          className={cn('flex flex-1 flex-col', slideClass)}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
        >
          <MiniStory
            isLastStory={isLastStory}
            onComplete={goNextStory}
            onPrevious={() => navigate('prev')}
            onRead={handleRead}
            readCount={readCount}
            readGoal={READ_GOAL}
            text={miniStoryText}
          />
        </div>
      </div>
    )
  }

  // ── 카드 학습 화면 ──
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] flex-col pb-12">
      <StoryProgress
        currentCard={cardIndex + 1}
        storyNumber={story.order_index}
        title={story.title}
        totalCards={totalCards}
        totalStories={totalStories}
      />

      {/* 카드 영역 — slide 애니메이션은 section에, drag 스타일은 inner div에 분리 */}
      <section
        aria-label="카드 학습 영역"
        className={cn('flex flex-1 items-center py-4', slideClass)}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div
          ref={cardWrapperRef}
          className="w-full"
          style={dragStyle}
        >
          <PatternCard
            difficulty={difficulty}
            isFavorited={favorites.has(currentPattern.id)}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            onToggleFavorite={() => onToggleFavorite(currentPattern.id)}
            pattern={currentPattern}
          />
        </div>
      </section>

      {/* 드래그 힌트 */}
      <p className="pb-2 text-center text-[10px] font-medium text-[#D1D9E6]">
        ← 스와이프로 이동 →
      </p>
    </div>
  )
}
