'use client'

import { Heart, Volume2 } from 'lucide-react'

import { useSpeech } from '@/hooks/useSpeech'
import { cn } from '@/lib/utils'
import type { Difficulty, PatternWithExamples } from '@/types/pattern'

type PatternCardBackProps = {
  pattern: PatternWithExamples
  difficulty: Difficulty
  cardIndex: number
  totalCards: number
  isFavorited?: boolean
  onToggleFavorite?: () => void
}

export function PatternCardBack({
  pattern,
  difficulty,
  cardIndex,
  totalCards,
  isFavorited = false,
  onToggleFavorite,
}: PatternCardBackProps) {
  const { speak, speakAll, isSpeaking, stop } = useSpeech()
  const examples = pattern.examples[difficulty] ?? []
  const sentences = examples.map((ex) => ex.sentence)

  function handleSpeakAll(e: React.MouseEvent) {
    e.stopPropagation()
    if (isSpeaking) { stop(); return }
    speakAll(sentences)
  }

  return (
    <div className="absolute inset-0 flex flex-col rounded-[28px] border border-[#E8F0FE] bg-white p-6 shadow-[0_8px_40px_rgba(79,140,255,0.10)] [backface-visibility:hidden] [transform:rotateY(180deg)]">

      {/* 상단: 도트 + 전체 TTS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalCards }, (_, i) => (
            <div
              key={i}
              className={cn(
                'rounded-full transition-all duration-300',
                i === cardIndex ? 'h-2 w-2 bg-[#4F8CFF]' : 'h-1.5 w-1.5 bg-[#D1D9E6]',
              )}
            />
          ))}
        </div>
        <button
          aria-label={isSpeaking ? '정지' : '전체 듣기'}
          className={cn(
            'shrink-0 rounded-full p-2 transition-colors',
            isSpeaking
              ? 'bg-[#FFE8E8] text-[#FF6B6B]'
              : 'bg-[#DCEBFF] text-[#4F8CFF] hover:bg-[#C8DCFF]',
          )}
          onClick={handleSpeakAll}
          type="button"
        >
          <Volume2 className="h-4 w-4" />
        </button>
      </div>

      {/* 예문 목록 */}
      <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[#9EAEC8]">예문</p>
      <ol className="mt-2 flex-1 space-y-3 overflow-y-auto">
        {examples.length === 0 ? (
          <li className="flex h-full items-center justify-center text-xs text-[#C8D8F0]">
            예문이 없습니다
          </li>
        ) : (
          examples.map((ex, index) => (
            <li className="flex items-start gap-2.5" key={ex.id}>
              <div className="min-w-0 flex-1">
                <p className="text-[0.88rem] font-semibold leading-relaxed text-[#1F2937]">
                  {ex.sentence}
                </p>
                {ex.translation && (
                  <p className="mt-0.5 text-[0.75rem] leading-relaxed text-[#9EAEC8]">
                    {ex.translation}
                  </p>
                )}
              </div>
              <button
                aria-label={`${index + 1}번 예문 듣기`}
                className="mt-0.5 shrink-0 rounded-full p-1.5 text-[#C8D8F0] transition-colors hover:bg-[#F0F7FF] hover:text-[#4F8CFF]"
                onClick={(e) => { e.stopPropagation(); speak(ex.sentence.trim()) }}
                type="button"
              >
                <Volume2 className="h-3.5 w-3.5" />
              </button>
            </li>
          ))
        )}
      </ol>

      {/* 하트 — 우하단 */}
      <div className="flex justify-end pt-2">
        {onToggleFavorite && (
          <button
            aria-label={isFavorited ? '즐겨찾기 해제' : '즐겨찾기 추가'}
            className="rounded-full p-1.5 transition-colors hover:bg-[#F0F7FF]"
            onClick={(e) => { e.stopPropagation(); onToggleFavorite() }}
            type="button"
          >
            <Heart
              className={cn(
                'h-5 w-5 transition-colors',
                isFavorited ? 'fill-[#FF6B6B] text-[#FF6B6B]' : 'text-[#D1D9E6]',
              )}
            />
          </button>
        )}
      </div>
    </div>
  )
}
