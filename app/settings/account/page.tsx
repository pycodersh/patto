'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { TopNav, NAV_HEIGHT } from '@/components/TopNav'

const items = [
  { label: 'Profile', desc: 'Edit your name and photo' },
  { label: 'Sign In', desc: 'Log in to your account' },
  { label: 'Sign Up', desc: 'Create a new account' },
  { label: 'Sign Out', desc: 'Log out of this device' },
  { label: 'Delete Account', desc: 'Permanently remove your data', danger: true },
]

export default function AccountPage() {
  const [toast, setToast] = useState('')

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 2800)
  }

  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="px-7 pb-20 max-w-sm mx-auto" style={{ paddingTop: NAV_HEIGHT + 32 }}>
        {/* Back */}
        <Link href="/settings" className="flex items-center gap-1 text-[#9B9490] hover:text-[#8B2246] transition-colors mb-8 w-fit">
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[11px] tracking-[0.18em] font-semibold">SETTINGS</span>
        </Link>

        <div className="mb-10">
          <h1 className="font-playfair text-[3.2rem] font-black leading-none text-[#1A1A1A] tracking-tight">
            ACCOUNT
          </h1>
          <p className="text-[0.78rem] text-[#9B9490] mt-2 tracking-wide">
            Profile and authentication
          </p>
        </div>

        <div>
          {items.map((item, i) => (
            <div key={item.label}>
              {i > 0 && <div className="h-px bg-[#EDE5DC]" />}
              <button
                type="button"
                onClick={() => showToast('Authentication not connected yet')}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <div>
                  <p
                    className={`font-bold tracking-[0.04em] transition-colors group-hover:text-[#8B2246] ${item.danger ? 'text-[#B04060]' : 'text-[#1A1A1A]'}`}
                    style={{ fontSize: 15 }}
                  >
                    {item.label}
                  </p>
                  <p className="text-[0.75rem] text-[#9B9490] mt-0.5">{item.desc}</p>
                </div>
                <ChevronLeft className="w-4 h-4 text-[#C8BFB5] group-hover:text-[#8B2246] transition-colors shrink-0 ml-4 rotate-180" strokeWidth={1.4} />
              </button>
            </div>
          ))}
          <div className="h-px bg-[#EDE5DC]" />
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[12px] px-5 py-2.5 rounded-full shadow-lg tracking-wide z-50 whitespace-nowrap">
          {toast}
        </div>
      )}
    </div>
  )
}
