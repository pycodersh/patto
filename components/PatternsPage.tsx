'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { MagazineStory } from '@/types/magazine'

type PatternsPageProps = {
  story: MagazineStory
  totalStories: number
  onPrev: () => void
  onNext: () => void
}

export function PatternsPage({ story, totalStories, onPrev, onNext }: PatternsPageProps) {
  const isLastStory = story.id >= totalStories

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      {/* Scrollable content */}
      <div className="overflow-y-auto pb-24">
        {/* Header */}
        <header className="flex items-center justify-between px-6 pt-10 pb-2">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#1A1A1A]">PATTO</span>
          <span className="text-[10px] tracking-[0.3em] text-[#8B2246] font-semibold">PATTERNS</span>
        </header>

        <div className="px-6">
          {/* Big heading */}
          <h1 className="font-playfair text-[3.2rem] font-black leading-none text-[#8B2246] mt-3 tracking-tight">
            PATTERNS
          </h1>
          <p className="text-[9px] tracking-[0.35em] text-[#8B2246] mt-1.5 font-semibold">
            FROM THIS STORY
          </p>
          <p className="text-[0.8rem] text-[#9B9490] mt-2 mb-5">
            스토리 속에서 만난 {story.patterns.length}가지 패턴을 정리했어요.
          </p>

          {/* Top divider */}
          <div className="h-px bg-[#E8E0D8] mb-1" />

          {/* Pattern list */}
          <div>
            {story.patterns.map((pattern, index) => (
              <div key={pattern.id}>
                <div className="flex gap-4 py-6">
                  {/* Number */}
                  <div className="shrink-0 w-12 pt-0.5">
                    <span className="font-playfair text-[1.6rem] font-bold text-[#8B2246] leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Pattern + Korean meaning */}
                    <p className="font-playfair text-[1.15rem] font-bold text-[#1A1A1A] leading-snug">
                      {pattern.pattern}
                    </p>
                    <p className="text-[0.72rem] text-[#8B2246] mt-0.5 mb-4">
                      {pattern.meaningKo}
                    </p>

                    {/* Story sentence */}
                    <div className="mb-3">
                      <span className="text-[8.5px] tracking-[0.22em] text-[#B8AFA8] font-semibold block mb-1">
                        STORY
                      </span>
                      <p className="text-[0.82rem] text-[#1A1A1A] leading-relaxed font-medium">
                        {pattern.storySentence}
                      </p>
                      <p className="text-[0.74rem] text-[#9B9490] leading-relaxed mt-0.5">
                        {pattern.storySentenceKo}
                      </p>
                    </div>

                    {/* Variation sentence */}
                    <div>
                      <span className="text-[8.5px] tracking-[0.22em] text-[#B8AFA8] font-semibold block mb-1">
                        VARIATION
                      </span>
                      <p className="text-[0.82rem] text-[#1A1A1A] leading-relaxed font-medium">
                        {pattern.variationSentence}
                      </p>
                      <p className="text-[0.74rem] text-[#9B9490] leading-relaxed mt-0.5">
                        {pattern.variationSentenceKo}
                      </p>
                    </div>
                  </div>
                </div>

                {index < story.patterns.length - 1 && (
                  <div className="h-px bg-[#EEE8E0]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[600px] mx-auto bg-[#FAF8F4] border-t border-[#E8E0D8]">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-[9px] tracking-[0.25em] text-[#B8AFA8] font-medium">
            SPEAK NATURALLY. CONNECT DEEPLY.
          </span>
          <div className="flex items-center gap-4">
            <button
              aria-label="스토리로 돌아가기"
              className="flex items-center gap-1 text-[9px] tracking-[0.15em] text-[#9B9490] hover:text-[#8B2246] transition-colors cursor-pointer"
              onClick={onPrev}
              type="button"
            >
              <ChevronLeft className="w-3 h-3" />
              STORY
            </button>
            {!isLastStory && (
              <button
                aria-label="다음 스토리"
                className="flex items-center gap-1 text-[9px] tracking-[0.15em] text-[#9B9490] hover:text-[#8B2246] transition-colors cursor-pointer"
                onClick={onNext}
                type="button"
              >
                NEXT
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
        {/* Bottom page indicator */}
        <div className="px-6 pb-3">
          <p className="text-[8px] tracking-[0.12em] text-[#C8C0B8] text-center">
            STUDY · STORIES · PATTERNS
          </p>
        </div>
      </div>
    </div>
  )
}
