'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Check, Sparkles, Zap, Calendar } from 'lucide-react'
import { TopNav } from '@/components/TopNav'

const FEATURES = [
  '스토리 무제한 열람',
  '패턴 전체 접근',
  'AI 문장 해설',
  '단어 컬렉션',
  '쉐도잉 연습',
]

const PLANS = [
  {
    id: 'monthly',
    icon: Zap,
    label: 'Premium Monthly',
    sublabel: '언제든 해지 가능',
    price: '$4.99',
    period: '/ month',
    badge: null,
  },
  {
    id: 'annual',
    icon: Calendar,
    label: 'Premium Annual',
    sublabel: '월간 대비 33% 절약',
    price: '$39.99',
    period: '/ year',
    badge: 'BEST VALUE',
  },
]

export default function SubscriptionPage() {
  const [selected, setSelected] = useState('annual')
  const [toast, setToast] = useState(false)

  return (
    <div className="min-h-dvh bg-[var(--pb)]">
      <TopNav />

      <div className="px-7 pb-28 max-w-sm mx-auto pt-20">
        <Link
          href="/settings"
          className="flex items-center gap-1.5 text-[var(--pm)] hover:text-[var(--pa)] transition-colors mb-8 w-fit"
        >
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-[0.18em] font-bold">SETTINGS</span>
        </Link>

        <div className="mb-8">
          <h1 className="font-playfair text-[1.9rem] font-black leading-none text-[var(--pt)] tracking-tight">
            SUBSCRIPTION
          </h1>
          <p className="text-[0.78rem] text-[var(--pm)] mt-2 tracking-wide">
            PATTO의 모든 기능을 경험해보세요
          </p>
        </div>

        {/* Current plan card */}
        <div className="rounded-2xl bg-[var(--pc)] px-5 py-4 mb-10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--pa)]/15 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[var(--pa)]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] text-[var(--pa)] font-bold mb-0.5">CURRENT PLAN</p>
            <p className="text-[15px] font-bold text-[var(--pt)]">Free</p>
            <p className="text-[11px] text-[var(--pm)] mt-0.5">업그레이드하여 모든 기능을 이용하세요</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8 pb-8 border-b border-[var(--pd)]">
          <p className="text-[10px] tracking-[0.22em] text-[var(--pa)] font-bold mb-5">PREMIUM INCLUDES</p>
          <div className="space-y-4">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--pa)]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[var(--pa)]" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] text-[var(--pt2)] font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plan selection */}
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.22em] text-[var(--pa)] font-bold mb-5">CHOOSE A PLAN</p>
          <div className="space-y-3">
            {PLANS.map((plan) => {
              const PlanIcon = plan.icon
              const isSelected = selected === plan.id
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelected(plan.id)}
                  className={`w-full text-left rounded-2xl border-2 px-5 py-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[var(--pa)] bg-[var(--pal)]'
                      : 'border-[var(--pd)] bg-[var(--pw)] hover:border-[var(--pm2)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isSelected ? 'bg-[var(--pa)]/10' : 'bg-[var(--pc2)]'}`}>
                        <PlanIcon className={`w-4 h-4 ${isSelected ? 'text-[var(--pa)]' : 'text-[var(--pm)]'}`} strokeWidth={1.6} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className={`font-bold text-[13px] ${isSelected ? 'text-[var(--pt)]' : 'text-[var(--pt2)]'}`}>
                            {plan.label}
                          </p>
                          {plan.badge && (
                            <span className="text-[8px] tracking-[0.15em] bg-[var(--pa)] text-white px-2 py-0.5 rounded-full font-bold">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[var(--pm)] mt-0.5">{plan.sublabel}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`font-playfair text-[1.3rem] font-bold leading-none ${isSelected ? 'text-[var(--pa)]' : 'text-[var(--pt2)]'}`}>
                        {plan.price}
                      </p>
                      <p className="text-[10px] text-[var(--pm)] mt-0.5">{plan.period}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => { setToast(true); setTimeout(() => setToast(false), 2800) }}
          className="w-full py-4 bg-[var(--pa)] text-white font-bold tracking-[0.12em] rounded-2xl text-[13px] hover:opacity-90 active:opacity-80 transition-opacity cursor-pointer"
        >
          SUBSCRIBE
        </button>

        <p className="text-center text-[10px] text-[var(--pm2)] mt-4">
          언제든 해지 가능 · 숨은 비용 없음
        </p>
      </div>

      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[var(--pt)] text-[var(--pb)] text-[12px] px-5 py-2.5 rounded-full shadow-lg tracking-wide z-50 whitespace-nowrap">
          결제 시스템 준비 중입니다.
        </div>
      )}
    </div>
  )
}
