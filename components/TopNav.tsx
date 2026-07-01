'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flame, User } from 'lucide-react'
import { getStreak } from '@/lib/srs/storage'

const TABS = [
  { label: 'STORY',    href: '/stories/1' },
  { label: 'PROGRESS', href: '/records' },
  { label: 'SETTINGS', href: '/settings' },
] as const

function getActive(pathname: string) {
  if (pathname === '/home' || pathname === '/') return 'HOME'
  if (pathname.startsWith('/records')) return 'PROGRESS'
  if (pathname.startsWith('/settings')) return 'SETTINGS'
  return 'STORY'
}

export const NAV_HEIGHT = 52

export function TopNav() {
  const pathname = usePathname()
  const active = getActive(pathname)
  const [streak, setStreak] = useState(0)

  useEffect(() => { setStreak(getStreak()) }, [pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm"
      style={{
        height: NAV_HEIGHT,
        background: 'var(--pnav)',
        borderBottom: '1px solid var(--pd)',
      }}
    >
      <div className="flex items-center gap-0 px-4 h-full">

        {/* PATTO brand → Home */}
        <Link
          href="/home"
          className="font-playfair shrink-0 transition-opacity"
          style={{
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--pt)',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          PATTO
        </Link>

        {/* Nav tabs */}
        <div className="flex items-center gap-5 ml-6">
          {TABS.map(({ label, href }) => {
            const isActive = active === label
            return (
              <Link
                key={label}
                href={href}
                className="transition-colors"
                style={{
                  fontSize: 9.5,
                  letterSpacing: '0.16em',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--pt)' : 'var(--pm)',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* 우측: streak + 프로필 */}
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-1" title={`연속 학습 ${streak}일`}>
            <Flame
              className="w-3.5 h-3.5"
              strokeWidth={2}
              style={{ color: streak > 0 ? 'var(--pa)' : 'var(--pm2)' }}
              fill={streak > 0 ? 'var(--pa)' : 'none'}
            />
            <span className="text-[12px] font-bold" style={{ color: 'var(--pt)' }}>{streak}</span>
          </div>
          <Link
            href="/settings"
            aria-label="설정"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'var(--pd)' }}
          >
            <User className="w-3.5 h-3.5" strokeWidth={2} style={{ color: 'var(--pt)' }} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
