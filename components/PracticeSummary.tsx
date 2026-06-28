'use client'

import { useEffect, useState } from 'react'
import { Repeat, Target } from 'lucide-react'
import { getTodayPracticeCount, getTotalRepeatCount } from '@/lib/practice/storage'

/**
 * 패턴 반복 연습 요약 — Progress 화면용.
 * localStorage(게스트)에 기록된 반복 데이터를 읽어 보여준다.
 */
export function PracticeSummary() {
  const [todayCount, setTodayCount] = useState(0)
  const [totalRepeats, setTotalRepeats] = useState(0)

  useEffect(() => {
    setTodayCount(getTodayPracticeCount())
    setTotalRepeats(getTotalRepeatCount())
  }, [])

  return (
    <div className="py-8 border-b border-[var(--pd)]">
      <p className="text-[10px] tracking-[0.26em] text-[var(--pa)] font-bold mb-1">PATTERN PRACTICE</p>
      <p className="text-[0.78rem] text-[var(--pm)] mb-5">패턴을 반복할수록 입에 붙어요.</p>
      <div className="flex gap-4">
        <div className="flex-1 rounded-xl bg-[var(--pc)] px-4 py-4 text-center">
          <Target className="w-4 h-4 text-[var(--pa)] mx-auto mb-2" strokeWidth={1.8} />
          <p className="font-playfair text-[1.5rem] font-bold text-[var(--pt)] leading-none">{todayCount}</p>
          <p className="text-[10px] text-[var(--pm)] mt-1.5">오늘 연습한 패턴</p>
        </div>
        <div className="flex-1 rounded-xl bg-[var(--pc)] px-4 py-4 text-center">
          <Repeat className="w-4 h-4 text-[var(--pa)] mx-auto mb-2" strokeWidth={1.8} />
          <p className="font-playfair text-[1.5rem] font-bold text-[var(--pt)] leading-none">{totalRepeats}</p>
          <p className="text-[10px] text-[var(--pm)] mt-1.5">총 반복 횟수</p>
        </div>
      </div>
    </div>
  )
}
