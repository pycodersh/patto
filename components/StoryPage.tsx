'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Volume2, X, ChevronRight, ChevronLeft } from 'lucide-react'
import type { MagazineStory, MagazineParagraph } from '@/types/magazine'

type StoryPageProps = {
  story: MagazineStory
  totalStories: number
  onNext: () => void
  onPrevStory?: () => void
}

function highlightText(text: string, phrases: string[]): React.ReactNode {
  if (phrases.length === 0) return text
  const sorted = [...phrases].sort((a, b) => b.length - a.length)
  const escaped = sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) => {
    const isMatch = sorted.some((p) => p.toLowerCase() === part.toLowerCase())
    return isMatch ? (
      <span key={i} className="text-[#8B2246] font-medium">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  })
}

type ActivePopup = { paragraph: MagazineParagraph }

export function StoryPage({ story, totalStories, onNext, onPrevStory }: StoryPageProps) {
  const [popup, setPopup] = useState<ActivePopup | null>(null)
  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF8F4] relative">
      {/* Scrollable content */}
      <div className="overflow-y-auto pb-28">
        {/* Header */}
        <header className="flex items-center justify-between px-6 pt-10 pb-2">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#1A1A1A]">PATTO</span>
          <span className="text-[10px] tracking-[0.3em] text-[#8B2246] font-semibold">
            STORY {String(story.id).padStart(2, '0')}
          </span>
        </header>

        <div className="px-6">
          {/* Title */}
          <h1 className="font-playfair text-[2rem] font-bold leading-tight text-[#1A1A1A] mt-3">
            {story.title}
          </h1>
          <p className="text-[0.78rem] text-[#8B2246] mt-1.5 mb-5 tracking-wide">
            {story.subtitleKo}
          </p>

          {/* Image */}
          <div className="relative w-full h-52 rounded-xl overflow-hidden mb-7 shadow-sm">
            <Image
              src={story.imageUrl}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Story paragraphs */}
          <div className="space-y-5">
            {story.paragraphs.map((para) => (
              <div key={para.id} className="relative pr-8">
                <p className="text-[0.9rem] leading-[1.9] text-[#1A1A1A]">
                  {highlightText(para.english, story.highlightPhrases)}
                </p>
                <button
                  aria-label="한국어 번역 보기"
                  className="absolute right-0 top-0.5 w-5 h-5 rounded-full border border-[#8B2246]/25 text-[#8B2246] text-[9px] font-bold flex items-center justify-center hover:bg-[#8B2246]/10 transition-colors cursor-pointer"
                  onClick={() => setPopup({ paragraph: para })}
                  type="button"
                >
                  i
                </button>
              </div>
            ))}
          </div>

          {/* Story Note */}
          {story.storyNote && (
            <div className="mt-8 bg-[#FDF5EC] border border-[#E8D4B8] rounded-xl p-4">
              <p className="font-playfair text-sm text-[#7A6550] leading-relaxed italic">
                {story.storyNote}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[600px] mx-auto">
        <div className="bg-gradient-to-t from-[#FAF8F4] via-[#FAF8F4]/95 to-transparent pt-6 pb-8 px-6">
          <div className="flex items-center justify-between">
            {/* Like */}
            <button
              aria-label={liked ? '좋아요 취소' : '좋아요'}
              className="p-2 cursor-pointer"
              onClick={() => setLiked((v) => !v)}
              type="button"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${liked ? 'text-[#8B2246] fill-[#8B2246]' : 'text-[#C8BFB5]'}`}
              />
            </button>

            {/* Navigation center */}
            <div className="flex items-center gap-3">
              {story.id > 1 && (
                <button
                  aria-label="이전 스토리"
                  className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#9B9490] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                  onClick={onPrevStory}
                  type="button"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  PREV
                </button>
              )}
              <button
                aria-label="패턴 페이지로 이동"
                className="bg-[#1A1A1A] text-[#FAF8F4] text-[10px] tracking-[0.2em] font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors cursor-pointer"
                onClick={onNext}
                type="button"
              >
                PATTERNS
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Audio */}
            <button
              aria-label="듣기"
              className="p-2 text-[#C8BFB5] hover:text-[#8B2246] transition-colors cursor-pointer"
              type="button"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Translation Popup */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 pb-6 px-4"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-white rounded-2xl p-5 w-full max-w-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[9px] tracking-[0.25em] text-[#8B2246] font-semibold">
                TRANSLATION
              </span>
              <button
                aria-label="닫기"
                className="text-[#C8BFB5] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                onClick={() => setPopup(null)}
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-playfair text-[0.78rem] text-[#9B9490] leading-relaxed mb-2 italic">
              {popup.paragraph.english}
            </p>
            <p className="text-[0.9rem] text-[#1A1A1A] leading-relaxed mb-4">
              {popup.paragraph.koreanTranslation}
            </p>

            {popup.paragraph.keyExpressions.length > 0 && (
              <>
                <div className="h-px bg-[#F0E8E0] mb-3" />
                <div className="flex flex-wrap gap-2">
                  {popup.paragraph.keyExpressions.map((expr, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#FDF0F4] text-[#8B2246] px-3 py-1 rounded-full"
                    >
                      {expr}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
