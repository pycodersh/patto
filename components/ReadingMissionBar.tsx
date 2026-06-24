'use client'

import { BookOpen } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type ReadingMissionBarProps = {
  count: number
  goal: number
  onIncrement: () => void
  onDecrement: () => void
}

export function ReadingMissionBar({ count, goal, onIncrement, onDecrement }: ReadingMissionBarProps) {
  const [showUndo, setShowUndo] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation()
    if (count >= goal) return
    onIncrement()
    setShowUndo(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setShowUndo(false), 3000)
  }

  function handleUndo(e: React.MouseEvent) {
    e.stopPropagation()
    if (timerRef.current) clearTimeout(timerRef.current)
    setShowUndo(false)
    onDecrement()
  }

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  const isDone = count >= goal

  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow-[0_2px_12px_rgba(79,140,255,0.08)] ring-1 ring-[#E8F0FE] backdrop-blur-sm">
      {/* 책 아이콘 */}
      <BookOpen className="h-4 w-4 shrink-0 text-[#4F8CFF]" />

      {/* 진행 도트 (10개) */}
      <div className="flex flex-1 items-center justify-center gap-1">
        {Array.from({ length: goal }, (_, i) => (
          <div
            key={i}
            className={cn(
              'rounded-full transition-all duration-300',
              i < count ? 'h-2 w-2 bg-[#4F8CFF]' : 'h-1.5 w-1.5 bg-[#D1D9E6]',
            )}
          />
        ))}
      </div>

      {/* + 버튼 or undo */}
      {showUndo ? (
        <button
          className="shrink-0 rounded-lg bg-[#FFF3E0] px-2.5 py-1 text-[11px] font-bold text-[#F59E0B] transition-colors hover:bg-[#FFE8C0] active:scale-95"
          onClick={handleUndo}
          type="button"
        >
          취소
        </button>
      ) : (
        <button
          aria-label="낭독 횟수 추가"
          className={cn(
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all active:scale-95',
            isDone
              ? 'bg-[#DCFCE7] text-[#22C55E]'
              : 'bg-[#DCEBFF] text-[#4F8CFF] hover:bg-[#C8DCFF]',
          )}
          disabled={isDone}
          onClick={handleAdd}
          type="button"
        >
          {isDone ? '✓' : '+'}
        </button>
      )}
    </div>
  )
}
