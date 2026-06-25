'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, User, LogIn, UserPlus, LogOut, Trash2, ChevronRight } from 'lucide-react'
import { TopNav } from '@/components/TopNav'

const MAIN_ITEMS = [
  { icon: User,     label: 'Profile',   desc: '닉네임과 프로필 사진 수정' },
  { icon: LogIn,    label: 'Sign In',   desc: '로그인하여 기기 간 학습 데이터를 동기화하세요' },
  { icon: UserPlus, label: 'Sign Up',   desc: '무료 계정을 만들고 학습 기록을 저장하세요' },
  { icon: LogOut,   label: 'Sign Out',  desc: '이 기기에서 로그아웃' },
]

const DANGER_ITEMS = [
  { icon: Trash2, label: 'Delete Account', desc: '계정과 모든 데이터를 영구적으로 삭제합니다' },
]

function MenuRow({
  icon: Icon, label, desc, danger, onClick,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string; desc: string; danger?: boolean; onClick: () => void
}) {
  return (
    <button type="button" onClick={onClick} className="w-full flex items-start gap-4 py-5 text-left group cursor-pointer">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
        danger ? 'bg-[#FFF0F3] group-hover:bg-[#FFE0E7]' : 'bg-[var(--pc2)] group-hover:bg-[var(--pd)]'
      }`}>
        <Icon className={`w-4 h-4 ${danger ? 'text-[#B04060]' : 'text-[var(--pa)]'}`} strokeWidth={1.6} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-[14px] leading-snug transition-colors ${
          danger ? 'text-[#B04060] group-hover:text-[#8B1A35]' : 'text-[var(--pt)] group-hover:text-[var(--pa)]'
        }`}>{label}</p>
        <p className="text-[11.5px] text-[var(--pm)] mt-0.5 leading-relaxed">{desc}</p>
      </div>
      <ChevronRight className={`w-4 h-4 shrink-0 mt-2.5 transition-colors ${
        danger ? 'text-[#DDB8C0]' : 'text-[var(--pm2)] group-hover:text-[var(--pa)]'
      }`} strokeWidth={1.4} />
    </button>
  )
}

export default function AccountPage() {
  const [toast, setToast] = useState('')
  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 2800) }

  return (
    <div className="min-h-dvh bg-[var(--pb)]">
      <TopNav />
      <div className="px-7 pb-24 max-w-sm mx-auto pt-20">
        <Link href="/settings" className="flex items-center gap-1.5 text-[var(--pm)] hover:text-[var(--pa)] transition-colors mb-8 w-fit">
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-[0.18em] font-bold">SETTINGS</span>
        </Link>

        <div className="mb-8">
          <h1 className="font-playfair text-[1.9rem] font-black leading-none text-[var(--pt)] tracking-tight">ACCOUNT</h1>
          <p className="text-[0.78rem] text-[var(--pm)] mt-2 tracking-wide">프로필 및 계정 인증</p>
        </div>

        <div className="rounded-2xl bg-[var(--pc)] px-5 py-4 mb-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--pa)]/15 flex items-center justify-center shrink-0">
            <User className="w-5 h-5 text-[var(--pa)]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[13px] font-bold text-[var(--pt)]">Guest</p>
            <p className="text-[11px] text-[var(--pm)] mt-0.5">로그인하면 학습 기록이 동기화됩니다</p>
          </div>
        </div>

        <div className="border-t border-[var(--pd)]">
          {MAIN_ITEMS.map((item, i) => (
            <div key={item.label}>
              <MenuRow icon={item.icon} label={item.label} desc={item.desc} onClick={() => showToast('인증 기능 준비 중입니다.')} />
              {i < MAIN_ITEMS.length - 1 && <div className="h-px bg-[var(--pd)]" />}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-[10px] tracking-[0.22em] text-[#B04060] font-bold mb-3">DANGER ZONE</p>
          <div className="border border-[var(--pacb)] rounded-2xl overflow-hidden bg-[var(--pal)]">
            {DANGER_ITEMS.map((item) => (
              <div key={item.label} className="px-2">
                <MenuRow icon={item.icon} label={item.label} desc={item.desc} danger onClick={() => showToast('인증 기능 준비 중입니다.')} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[var(--pt)] text-[var(--pb)] text-[12px] px-5 py-2.5 rounded-full shadow-lg tracking-wide z-50 whitespace-nowrap">
          {toast}
        </div>
      )}
    </div>
  )
}
