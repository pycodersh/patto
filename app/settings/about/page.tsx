import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TopNav, NAV_HEIGHT } from '@/components/TopNav'

const items = [
  { label: 'Terms of Service', desc: 'Usage rules and agreements', href: '/settings/about/terms' },
  { label: 'Privacy Policy', desc: 'How we handle your data', href: '/settings/about/privacy' },
  { label: 'Contact Us', desc: 'support@patto.app', href: null },
  { label: 'Open Source Licenses', desc: 'Third-party software credits', href: null },
  { label: 'Version', desc: null, value: '1.0.0', href: null },
]

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="px-7 pb-20 max-w-sm mx-auto" style={{ paddingTop: NAV_HEIGHT + 32 }}>
        <Link href="/settings" className="flex items-center gap-1 text-[#9B9490] hover:text-[#8B2246] transition-colors mb-8 w-fit">
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[11px] tracking-[0.18em] font-semibold">SETTINGS</span>
        </Link>

        <div className="mb-10">
          <h1 className="font-playfair text-[3.2rem] font-black leading-none text-[#1A1A1A] tracking-tight">
            ABOUT
          </h1>
          <p className="text-[0.78rem] text-[#9B9490] mt-2 tracking-wide">
            Terms, privacy and app information
          </p>
        </div>

        <div>
          {items.map((item, i) => (
            <div key={item.label}>
              {i > 0 && <div className="h-px bg-[#EDE5DC]" />}
              {item.href ? (
                <Link href={item.href} className="flex items-center justify-between py-6 group">
                  <div>
                    <p className="font-bold text-[#1A1A1A] group-hover:text-[#8B2246] transition-colors" style={{ fontSize: 14 }}>
                      {item.label}
                    </p>
                    {item.desc && <p className="text-[0.72rem] text-[#9B9490] mt-0.5">{item.desc}</p>}
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#C8BFB5] group-hover:text-[#8B2246] transition-colors shrink-0 ml-4" strokeWidth={1.4} />
                </Link>
              ) : (
                <div className="flex items-center justify-between py-6">
                  <div>
                    <p className="font-bold text-[#1A1A1A]" style={{ fontSize: 14 }}>{item.label}</p>
                    {item.desc && <p className="text-[0.72rem] text-[#9B9490] mt-0.5">{item.desc}</p>}
                  </div>
                  {item.value && (
                    <span className="text-[13px] text-[#9B9490] font-medium shrink-0 ml-4">{item.value}</span>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="h-px bg-[#EDE5DC]" />
        </div>

        <p className="text-[10px] tracking-[0.2em] text-[#D8D0C8] text-center pt-12">
          PATTO · v1.0.0
        </p>
      </div>
    </div>
  )
}
