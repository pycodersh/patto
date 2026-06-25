import { BookOpen, Bookmark, Flame, Clock, Star, Library } from 'lucide-react'

import { TopNav } from '@/components/TopNav'
import { createClient } from '@/lib/supabase/server'
import { getProgressStats } from '@/queries/progress'

export const dynamic = 'force-dynamic'

// ── Calendar ─────────────────────────────────────────────────────────
function buildCalendar(studiedDates: string[]) {
  const dateSet = new Set(studiedDates)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dow = today.getDay()
  const toMonday = dow === 0 ? 6 : dow - 1
  const lastMonday = new Date(today.getTime() - toMonday * 86400000)
  const startDate = new Date(lastMonday.getTime() - 4 * 7 * 86400000)

  const weeks: { iso: string; studied: boolean; isToday: boolean; future: boolean }[][] = []
  for (let w = 0; w < 5; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate.getTime() + (w * 7 + d) * 86400000)
      const iso = date.toISOString().slice(0, 10)
      week.push({
        iso,
        studied: dateSet.has(iso),
        isToday: date.getTime() === today.getTime(),
        future: date.getTime() > today.getTime(),
      })
    }
    weeks.push(week)
  }
  return weeks
}

function CalendarGrid({ studiedDates }: { studiedDates: string[] }) {
  const weeks = buildCalendar(studiedDates)
  const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  return (
    <div className="w-full">
      <div className="flex justify-between mb-3">
        {DAY_LABELS.map((d, i) => (
          <div key={i} className="flex-1 text-center text-[11px] font-medium text-[#C8BFB5]">
            {d}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex justify-between">
            {week.map((day) => (
              <div
                key={day.iso}
                className={[
                  'flex-1 mx-0.5 aspect-square rounded-full',
                  day.future
                    ? ''
                    : day.studied
                    ? 'bg-[#8B2246]'
                    : 'bg-[#EDE5DC]',
                  day.isToday && !day.studied
                    ? 'ring-1 ring-[#8B2246] ring-offset-[1.5px] ring-offset-[#FAF8F4]'
                    : '',
                ].join(' ')}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Stat cell (2-column grid item) ───────────────────────────────────
function StatCell({
  label,
  value,
  sub,
  icon: Icon,
  barPct,
  border = 'right',
}: {
  label: string
  value: string
  sub?: string
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  barPct?: number
  border?: 'right' | 'none'
}) {
  return (
    <div
      className={[
        'py-6 px-0',
        border === 'right' ? 'pr-5 border-r border-[#EDE5DC]' : 'pl-5',
      ].join(' ')}
    >
      <div className="flex items-center gap-1.5 mb-3">
        {Icon && <Icon className="w-3 h-3 text-[#8B2246]" strokeWidth={1.8} />}
        <p className="text-[9px] tracking-[0.22em] text-[#8B2246] font-semibold leading-none">
          {label}
        </p>
      </div>
      <p className="font-playfair text-[2.2rem] font-bold text-[#1A1A1A] leading-none">
        {value}
      </p>
      {sub && (
        <p className="text-sm text-[#9B9490] mt-1.5 leading-snug">{sub}</p>
      )}
      {barPct !== undefined && (
        <div className="mt-3 h-[1.5px] bg-[#EDE5DC] rounded-full overflow-hidden">
          <div className="h-full bg-[#8B2246] rounded-full" style={{ width: `${barPct}%` }} />
        </div>
      )}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────
export default async function RecordsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const stats = user
    ? await getProgressStats(user.id)
    : {
        completedStories: 0,
        totalPatternsSeen: 0,
        totalReviewCount: 0,
        favoritesCount: 0,
        studiedDates: [] as string[],
      }

  const { count: totalStories } = await supabase
    .from('stories')
    .select('*', { count: 'exact', head: true })
    .eq('is_published', true)

  const total = totalStories ?? 100
  const totalPatterns = total * 5
  const studyHours = Math.round((stats.totalReviewCount * 3) / 60)

  const streakDays = (() => {
    const dates = [...(stats.studiedDates ?? [])].sort().reverse()
    if (!dates.length) return 0
    let streak = 0
    const today = new Date()
    for (let i = 0; i < dates.length; i++) {
      const diff = Math.round(
        (today.getTime() - new Date(dates[i]).getTime()) / 86400000
      )
      if (diff === i || diff === i + 1) streak++
      else break
    }
    return streak
  })()

  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="pt-11 px-6 pb-16 max-w-sm mx-auto">
        {/* Title */}
        <div className="pt-8 pb-6 border-b border-[#EDE5DC]">
          <h1 className="font-playfair text-[2.8rem] font-black leading-none text-[#1A1A1A] tracking-tight">
            PROGRESS
          </h1>
          <p className="text-sm text-[#9B9490] mt-2">나의 학습 기록</p>
        </div>

        {/* ── Calendar ── */}
        <div className="py-6 border-b border-[#EDE5DC]">
          <p className="text-[9px] tracking-[0.28em] text-[#8B2246] font-semibold mb-5">
            LEARNING CALENDAR
          </p>
          <CalendarGrid studiedDates={stats.studiedDates ?? []} />
        </div>

        {/* ── 2-column stat grid ── */}
        <div className="grid grid-cols-2 border-b border-[#EDE5DC]">
          <StatCell
            label="STORIES"
            value={String(stats.completedStories)}
            sub={`/ ${total} completed`}
            icon={BookOpen}
            barPct={Math.round((stats.completedStories / total) * 100)}
            border="right"
          />
          <StatCell
            label="PATTERNS"
            value={String(stats.totalPatternsSeen)}
            sub={`/ ${totalPatterns} learned`}
            barPct={Math.round((stats.totalPatternsSeen / totalPatterns) * 100)}
            border="none"
          />
        </div>

        <div className="grid grid-cols-2 border-b border-[#EDE5DC]">
          <StatCell
            label="STREAK"
            value={`${streakDays}`}
            sub="days in a row"
            icon={Flame}
            border="right"
          />
          <StatCell
            label="STUDY TIME"
            value={`${studyHours}`}
            sub="hours total"
            icon={Clock}
            border="none"
          />
        </div>

        <div className="grid grid-cols-2 border-b border-[#EDE5DC]">
          <StatCell
            label="SAVED"
            value={String(stats.favoritesCount)}
            sub="patterns saved"
            icon={Bookmark}
            border="right"
          />
          <StatCell
            label="REVIEWED"
            value={String(stats.totalReviewCount)}
            sub="total reviews"
            icon={Star}
            border="none"
          />
        </div>

        {/* Pattern Library row — full width */}
        <div className="py-6 border-b border-[#EDE5DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Library className="w-3.5 h-3.5 text-[#8B2246]" strokeWidth={1.8} />
            <div>
              <p className="text-[9px] tracking-[0.22em] text-[#8B2246] font-semibold">PATTERN LIBRARY</p>
              <p className="text-sm text-[#9B9490] mt-0.5">저장된 패턴 모음</p>
            </div>
          </div>
          <span className="font-playfair text-[1.8rem] font-bold text-[#1A1A1A]">
            {stats.favoritesCount}
          </span>
        </div>

        <p className="text-[10px] tracking-[0.2em] text-[#D8D0C8] text-center pt-10">
          SPEAK NATURALLY. CONNECT DEEPLY.
        </p>
      </div>
    </div>
  )
}
