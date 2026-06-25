'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, User, CreditCard, LogOut } from 'lucide-react'

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

export const NAV_HEIGHT = 64 // px — brand row 32 + tab row 32

export function TopNav() {
  const pathname = usePathname()
  const active = getActive(pathname)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setShowMenu(false)
    }
    if (showMenu) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showMenu])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-[#FAF8F4]/96 backdrop-blur-sm"
      style={{ height: NAV_HEIGHT }}
    >
      {/* Row 1 — Brand + User */}
      <div className="flex items-center justify-between px-5 h-8 pt-2">
        <span className="text-[11px] font-bold tracking-[0.3em] text-[#1A1A1A]">PATTO</span>

        {/* User / Guest dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setShowMenu((v) => !v)}
            className="flex items-center gap-1 text-[10px] tracking-[0.15em] text-[#9B9490] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            Guest
            <ChevronDown
              className={`w-2.5 h-2.5 transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`}
            />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-[#EDE5DC] py-1 z-50">
              <button
                type="button"
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[12px] text-[#1A1A1A] hover:bg-[#FAF8F4] transition-colors cursor-pointer"
              >
                <User className="w-3 h-3 text-[#C8BFB5]" />
                Profile
              </button>
              <button
                type="button"
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[12px] text-[#1A1A1A] hover:bg-[#FAF8F4] transition-colors cursor-pointer"
              >
                <CreditCard className="w-3 h-3 text-[#C8BFB5]" />
                Subscription
              </button>
              <div className="h-px bg-[#EDE5DC] mx-3 my-1" />
              <button
                type="button"
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[12px] text-[#8B2246] hover:bg-[#FDF0F4] transition-colors cursor-pointer"
              >
                <LogOut className="w-3 h-3" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Row 2 — Bookmark tabs */}
      <div className="flex items-end h-8 px-4 border-b border-[#EDE5DC]">
        {TABS.map(({ label, href }) => {
          const isActive = active === label
          return (
            <Link
              key={label}
              href={href}
              className={[
                'relative flex items-center px-3 h-full text-[9px] tracking-[0.28em] font-bold transition-colors',
                isActive
                  ? 'text-[#8B2246]'
                  : 'text-[#C8BFB5] hover:text-[#9B9490]',
              ].join(' ')}
            >
              {label}
              {/* Active tab bottom stroke — overwrites border-b of parent */}
              {isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#8B2246] rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
