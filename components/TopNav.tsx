'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { label: 'STUDY', href: '/stories/1' },
  { label: 'PROGRESS', href: '/records' },
  { label: 'SETTINGS', href: '/settings' },
] as const

function getActive(pathname: string) {
  if (pathname.startsWith('/records')) return 'PROGRESS'
  if (pathname.startsWith('/settings')) return 'SETTINGS'
  return 'STUDY'
}

export function TopNav() {
  const pathname = usePathname()
  const active = getActive(pathname)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-11 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-[#EDE5DC] flex items-center px-5">
      <span className="text-[11px] font-bold tracking-[0.3em] text-[#1A1A1A] mr-auto">PATTO</span>

      <div className="flex items-stretch h-full gap-1">
        {TABS.map(({ label, href }) => {
          const isActive = active === label
          return (
            <Link
              key={label}
              href={href}
              className={[
                'relative flex items-center px-3 text-[9px] tracking-[0.28em] font-semibold transition-colors',
                isActive
                  ? 'text-[#8B2246]'
                  : 'text-[#C8BFB5] hover:text-[#9B9490]',
              ].join(' ')}
            >
              {label}
              {/* Burgundy underline on active */}
              {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#8B2246] rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
