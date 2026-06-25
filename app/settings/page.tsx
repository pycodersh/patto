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
    <div className="min-h-dvh bg-[var(--pb)]">
      <TopNav />

      <div className="px-7 pb-20 max-w-sm mx-auto pt-20">
        <div className="mb-8">
          <h1 className="font-playfair text-[1.9rem] font-black leading-none text-[var(--pt)] tracking-tight">
            SETTINGS
          </h1>
          <p className="text-[0.78rem] text-[var(--pm)] mt-2 tracking-wide">
            앱을 나에게 맞게 조정하세요.
          </p>
        </div>

        {/* Guest Card */}
        <div className="rounded-2xl bg-[var(--pc)] px-5 py-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[var(--pa)]/12 flex items-center justify-center shrink-0">
              <UserCircle className="w-5 h-5 text-[var(--pa)]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[var(--pt)]">Guest</p>
              <p className="text-[11px] text-[var(--pm)] mt-0.5 leading-snug">
                로그인하면 학습 기록과 저장한 패턴을<br />안전하게 보관할 수 있어요.
              </p>
            </div>
          </div>
          <Link
            href="/settings/auth"
            className="block w-full text-center py-2.5 rounded-xl bg-[var(--pa)] text-white text-[12px] font-bold tracking-[0.08em] hover:opacity-90 transition-opacity"
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
                {i > 0 && <div className="h-px bg-[var(--pd)]" />}
                <Link href={hub.href} className="flex items-center gap-4 py-5 group">
                  <div className="w-10 h-10 rounded-xl bg-[var(--pc)] flex items-center justify-center shrink-0 group-hover:bg-[var(--pd)] transition-colors">
                    <Icon className="text-[var(--pa)]" strokeWidth={1.6} style={{ width: 18, height: 18 }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--pt)] group-hover:text-[var(--pa)] transition-colors font-bold tracking-[0.06em]" style={{ fontSize: 14 }}>
                      {hub.label}
                    </p>
                    <p className="text-[0.72rem] text-[var(--pm)] mt-0.5 leading-snug">{hub.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--pm2)] group-hover:text-[var(--pa)] transition-colors shrink-0" strokeWidth={1.4} />
                </Link>
              </div>
            )
          })}
          <div className="h-px bg-[var(--pd)]" />
        </div>
      </div>
    </div>
  )
}
