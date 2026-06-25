'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Volume2, ChevronLeft, ChevronRight } from 'lucide-react'
import type { MagazineParagraph, MagazineStory } from '@/types/magazine'

type StoryPageProps = {
  story: MagazineStory
  totalStories: number
  onToPatterns: () => void
  onPrevStory?: () => void
  onNextStory?: () => void
  onOpenPicker: () => void
  onOpenPopup: (paragraph: MagazineParagraph) => void
  speakAll: (texts: string[]) => void
  stop: () => void
  isSpeaking: boolean
}

function highlightText(text: string, phrases: string[]): React.ReactNode {
  if (phrases.length === 0) return text
  const sorted = [...phrases].sort((a, b) => b.length - a.length)
  const escaped = sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    sorted.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-[#8B2246] font-medium">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export function StoryPage({
  story,
  onToPatterns,
  onPrevStory,
  onNextStory,
  onOpenPicker,
  onOpenPopup,
  speakAll,
  stop,
  isSpeaking,
}: StoryPageProps) {
  const [liked, setLiked] = useState(false)

  function handleAudio() {
    if (isSpeaking) { stop(); return }
    speakAll(story.paragraphs.map((p) => p.english))
  }

  return (
    <div className="h-full flex flex-col bg-[#FAF8F4]">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="pl-7 pr-6 pt-5 pb-8">

          {/* Title */}
          <h1 className="font-playfair text-[2rem] font-bold leading-tight text-[#1A1A1A]">
            {story.title}
          </h1>

          {/* Story picker trigger — "Story 01 ▼" */}
          <button
            type="button"
            onClick={onOpenPicker}
            aria-label="스토리 선택"
            className="flex items-center gap-1 mt-1.5 mb-1 group cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#8B2246] group-hover:opacity-70 transition-opacity">
              Story {String(story.id).padStart(2, '0')}
            </span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="text-[#8B2246] opacity-70 group-hover:opacity-50 transition-opacity">
              <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <p className="text-[0.78rem] text-[#9B9490] mb-5 tracking-wide">
            {story.subtitleKo}
          </p>

          {/* Story image */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-7 shadow-sm">
            <Image
              src={story.imageUrl}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* Paragraphs */}
          <div className="space-y-5">
            {story.paragraphs.map((para) => (
              <div
                key={para.id}
                className="cursor-pointer rounded-xl px-2 py-1.5 -mx-2 hover:bg-[#F5EDE8]/60 active:bg-[#F0E4DC]/80 transition-colors"
                onClick={() => onOpenPopup(para)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenPopup(para) }}
                role="button"
                tabIndex={0}
              >
                <p className="text-[0.9rem] leading-[1.9] text-[#1A1A1A] select-none">
                  {highlightText(para.english, story.highlightPhrases)}
                </p>
              </div>
            ))}
          </div>

          {story.storyNote && (
            <div className="mt-8 border-l-2 border-[#E8D4B8] pl-4">
              <p className="font-playfair text-sm text-[#9B9490] leading-relaxed">
                {story.storyNote}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar — ‹  ♥  🔊  › */}
      <div className="shrink-0 border-t border-[#EDE5DC] bg-[#FAF8F4]">
        <div className="flex items-center justify-between px-7 py-4">

          {/* ‹ Prev story */}
          <button
            type="button"
            aria-label="이전 스토리"
            onClick={onPrevStory}
            disabled={!onPrevStory}
            className={`p-2 rounded-full transition-colors ${
              onPrevStory
                ? 'text-[#9B9490] hover:text-[#8B2246] hover:bg-[#FDF0F4] cursor-pointer'
                : 'text-[#E0D8D2] cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* ♥ Like */}
          <button
            type="button"
            aria-label={liked ? '좋아요 취소' : '좋아요'}
            onClick={() => setLiked((v) => !v)}
            className="p-2 cursor-pointer"
          >
            <Heart
              className={`w-[18px] h-[18px] transition-colors ${
                liked ? 'text-[#8B2246] fill-[#8B2246]' : 'text-[#C8BFB5]'
              }`}
            />
          </button>

          {/* 🔊 Speaker (TTS) */}
          <button
            type="button"
            aria-label={isSpeaking ? '정지' : '전체 읽기'}
            onClick={handleAudio}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isSpeaking
                ? 'text-[#8B2246] bg-[#FDF0F4]'
                : 'text-[#C8BFB5] hover:text-[#8B2246] hover:bg-[#FDF0F4]'
            }`}
          >
            <Volume2 className="w-5 h-5" />
          </button>

          {/* › Next story (or to patterns when last story) */}
          <button
            type="button"
            aria-label={onNextStory ? '다음 스토리' : '패턴 보기'}
            onClick={onNextStory ?? onToPatterns}
            className="p-2 rounded-full text-[#9B9490] hover:text-[#8B2246] hover:bg-[#FDF0F4] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
