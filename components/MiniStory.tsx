'use client'

import { Volume2 } from 'lucide-react'

import { useSpeech } from '@/hooks/useSpeech'
import { cn } from '@/lib/utils'

type MiniStoryProps = {
  text: string
  totalCards: number
}

export function MiniStory({ text, totalCards }: MiniStoryProps) {
  const paragraphs = text.split(/\n+/).map((p) => p.trim()).filter(Boolean)
  const allSentences = paragraphs.flatMap(
    (p) => p.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [p],
  )
  const { speakAll, isSpeaking, stop } = useSpeech()

  function handleSpeakAll(e: React.MouseEvent) {
    e.stopPropagation()
    if (isSpeaking) { stop(); return }
    speakAll(allSentences)
  }

  return (
    <div className="absolute inset-0 flex flex-col rounded-[28px] border border-[#E8F0FE] bg-white p-6 shadow-[0_8px_40px_rgba(79,140,255,0.10)]">

      {/* 상단: 도트 (카드 모두 완료) + TTS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalCards }, (_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-[#4F8CFF]" />
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

      {/* 단락형 스토리 텍스트 */}
      <div className="mt-5 flex-1 space-y-4 overflow-y-auto">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-[1rem] font-medium leading-relaxed text-[#1F2937]"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}
