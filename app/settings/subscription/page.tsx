'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Check } from 'lucide-react'
import { TopNav, NAV_HEIGHT } from '@/components/TopNav'

const features = [
  'Unlimited Stories',
  'Unlimited Pattern Access',
  'AI Sentence Explanation',
  'Vocabulary Collection',
  'Shadowing Practice',
]

const plans = [
  { id: 'monthly', label: 'Premium Monthly', price: '$4.99', period: '/ month' },
  { id: 'annual', label: 'Premium Annual', price: '$39.99', period: '/ year', badge: 'BEST VALUE' },
]

export default function SubscriptionPage() {
  const [selected, setSelected] = useState('annual')
  const [toast, setToast] = useState(false)

  function handleSubscribe() {
    setToast(true)
    setTimeout(() => setToast(false), 2800)
  }

  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="px-7 pb-24 max-w-sm mx-auto" style={{ paddingTop: NAV_HEIGHT + 32 }}>
        <Link href="/settings" className="flex items-center gap-1 text-[#9B9490] hover:text-[#8B2246] transition-colors mb-8 w-fit">
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[11px] tracking-[0.18em] font-semibold">SETTINGS</span>
        </Link>

        <div className="mb-8">
          <h1 className="font-playfair text-[3.2rem] font-black leading-none text-[#1A1A1A] tracking-tight">
            SUBSCRIPTION
          </h1>
          <p className="text-[0.78rem] text-[#9B9490] mt-2 tracking-wide">
            Unlock the full PATTO experience
          </p>
        </div>

        {/* Current plan */}
        <div className="mb-8 pb-8 border-b border-[#EDE5DC]">
          <p className="text-[10px] tracking-[0.22em] text-[#8B2246] font-bold mb-1">CURRENT PLAN</p>
          <p className="font-playfair text-2xl font-bold text-[#1A1A1A]">FREE</p>
        </div>

        {/* Plan selection */}
        <div className="mb-8 space-y-3">
          {plans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelected(plan.id)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-colors cursor-pointer ${
                selected === plan.id
                  ? 'border-[#8B2246] bg-[#FDF8F9]'
                  : 'border-[#EDE5DC] bg-white hover:border-[#D8D0C8]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-[#1A1A1A]" style={{ fontSize: 14 }}>{plan.label}</p>
                    {plan.badge && (
                      <span className="text-[9px] tracking-[0.15em] bg-[#8B2246] text-white px-2 py-0.5 rounded-full font-bold">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5">
                    <span className="font-playfair text-xl font-bold text-[#8B2246]">{plan.price}</span>
                    <span className="text-[12px] text-[#9B9490] ml-1">{plan.period}</span>
                  </p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  selected === plan.id ? 'border-[#8B2246] bg-[#8B2246]' : 'border-[#D8D0C8]'
                }`}>
                  {selected === plan.id && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Features */}
        <div className="mb-10 pb-8 border-b border-[#EDE5DC]">
          <p className="text-[10px] tracking-[0.22em] text-[#8B2246] font-bold mb-4">INCLUDES</p>
          <div className="space-y-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#8B2246]/10 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#8B2246]" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] text-[#3A3A3A]">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleSubscribe}
          className="w-full py-4 bg-[#8B2246] text-white font-bold tracking-[0.1em] rounded-xl text-[13px] hover:bg-[#7A1D3F] active:bg-[#6A1835] transition-colors cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </div>

      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[12px] px-5 py-2.5 rounded-full shadow-lg tracking-wide z-50 whitespace-nowrap">
          Payment system coming soon
        </div>
      )}
    </div>
  )
}
