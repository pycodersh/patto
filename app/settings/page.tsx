import Link from 'next/link'
import { ChevronRight, SlidersHorizontal, Sparkles, Info, UserCircle } from 'lucide-react'
import { TopNav } from '@/components/TopNav'

const hubs = [
  {
    icon: SlidersHorizontal,
    label: 'PREFERENCES',
    desc: '학습 환경 맞춤 설정',
    href: '/settings/preferences',
  },
  {
    icon: Sparkles,
    label: 'SUBSCRIPTION',
    desc: '프리미엄 플랜 및 결제',
    href: '/settings/subscription',
  },
  {
    icon: Info,
    label: 'ABOUT',
    desc: '이용약관, 개인정보 및 앱 정보',
    href: '/settings/about',
  },
]

export default function SettingsPage() {
  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="px-7 pb-20 max-w-sm mx-auto pt-20">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="font-playfair text-[1.9rem] font-black leading-none text-[#1A1A1A] tracking-tight">
            SETTINGS
          </h1>
          <p className="text-[0.78rem] text-[#9B9490] mt-2 tracking-wide">
            앱을 나에게 맞게 조정하세요.
          </p>
        </div>

        {/* Guest Card */}
        <div className="rounded-2xl bg-[#F0EAE2] px-5 py-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#8B2246]/12 flex items-center justify-center shrink-0">
              <UserCircle className="w-5 h-5 text-[#8B2246]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#1A1A1A]">Guest</p>
              <p className="text-[11px] text-[#9B9490] mt-0.5 leading-snug">
                로그인하면 학습 기록과 저장한 패턴을<br />안전하게 보관할 수 있어요.
              </p>
            </div>
          </div>
          <Link
            href="/settings/auth"
            className="block w-full text-center py-2.5 rounded-xl bg-[#8B2246] text-white text-[12px] font-bold tracking-[0.08em] hover:bg-[#7A1D3F] transition-colors"
          >
            로그인 / 회원가입
          </Link>
        </div>

        {/* Hub list */}
        <div>
          {hubs.map((hub, i) => {
            const Icon = hub.icon
            return (
              <div key={hub.href}>
                {i > 0 && <div className="h-px bg-[#EDE5DC]" />}
                <Link
                  href={hub.href}
                  className="flex items-center gap-4 py-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0EAE2] flex items-center justify-center shrink-0 group-hover:bg-[#EDE5DC] transition-colors">
                    <Icon className="text-[#8B2246]" strokeWidth={1.6} style={{ width: 18, height: 18 }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[#1A1A1A] group-hover:text-[#8B2246] transition-colors font-bold tracking-[0.06em]"
                      style={{ fontSize: 14 }}
                    >
                      {hub.label}
                    </p>
                    <p className="text-[0.72rem] text-[#9B9490] mt-0.5 leading-snug">
                      {hub.desc}
                    </p>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-[#C8BFB5] group-hover:text-[#8B2246] transition-colors shrink-0"
                    strokeWidth={1.4}
                  />
                </Link>
              </div>
            )
          })}
          <div className="h-px bg-[#EDE5DC]" />
        </div>
      </div>
    </div>
  )
}
