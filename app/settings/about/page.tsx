import Link from 'next/link'
import { ChevronLeft, ChevronRight, ScrollText, Shield, Mail, Info } from 'lucide-react'
import { TopNav } from '@/components/TopNav'

const ITEMS = [
  {
    icon: ScrollText,
    label: '이용약관',
    desc: 'PATTO 이용 규칙 및 약관',
    href: '/settings/about/terms',
    value: null,
  },
  {
    icon: Shield,
    label: '개인정보처리방침',
    desc: '개인정보 수집·이용·보호 방침',
    href: '/settings/about/privacy',
    value: null,
  },
  {
    icon: Mail,
    label: '문의하기',
    desc: 'support@patto.app',
    href: null,
    value: null,
  },
  {
    icon: Info,
    label: '버전',
    desc: '현재 앱 버전',
    href: null,
    value: '1.0.0',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-[var(--pb)]">
      <TopNav />

      <div className="px-7 pb-24 max-w-sm mx-auto pt-20">
        <Link
          href="/settings"
          className="flex items-center gap-1.5 text-[var(--pm)] hover:text-[var(--pa)] transition-colors mb-8 w-fit"
        >
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-[0.18em] font-bold">SETTINGS</span>
        </Link>

        <div className="mb-10">
          <h1 className="font-playfair text-[1.9rem] font-black leading-none text-[var(--pt)] tracking-tight">
            ABOUT
          </h1>
          <p className="text-[0.78rem] text-[var(--pm)] mt-2 tracking-wide">
            이용약관, 개인정보 및 앱 정보
          </p>
        </div>

        {/* App identity card */}
        <div className="rounded-2xl bg-[var(--pc)] px-5 py-4 mb-10">
          <p className="text-[11px] tracking-[0.28em] font-black text-[var(--pt)] mb-1">PATTO</p>
          <p className="text-[11px] text-[var(--pm)] leading-relaxed">
            Premium English Pattern Learning · v1.0.0
          </p>
          <p className="font-playfair text-[11px] italic text-[var(--pa)] mt-2">
            Speak Naturally. Connect Deeply.
          </p>
        </div>

        {/* Items */}
        <div className="border-t border-[var(--pd)]">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            const inner = (
              <div className="flex items-start gap-4 py-5">
                <div className="w-9 h-9 rounded-xl bg-[var(--pc2)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--pd)] transition-colors">
                  <Icon className="w-4 h-4 text-[var(--pa)]" strokeWidth={1.6} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[14px] text-[var(--pt)] group-hover:text-[var(--pa)] transition-colors leading-snug">
                    {item.label}
                  </p>
                  <p className="text-[11.5px] text-[var(--pm)] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
                {item.value ? (
                  <span className="text-[13px] text-[var(--pm)] font-medium shrink-0 mt-1">{item.value}</span>
                ) : item.href ? (
                  <ChevronRight className="w-4 h-4 text-[var(--pm2)] group-hover:text-[var(--pa)] transition-colors shrink-0 mt-2.5" strokeWidth={1.4} />
                ) : null}
              </div>
            )

            return (
              <div key={item.label}>
                {i > 0 && <div className="h-px bg-[var(--pd)]" />}
                {item.href ? (
                  <Link href={item.href} className="group block">{inner}</Link>
                ) : (
                  <div className="group">{inner}</div>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-[9px] tracking-[0.2em] text-[var(--pm2)] text-center pt-12">
          © 2026 PATTO INC. · ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  )
}
