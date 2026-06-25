'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { TopNav, NAV_HEIGHT } from '@/components/TopNav'

type Option = { label: string; value: string }

function RadioGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string
  options: Option[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="py-6">
      <p className="text-[#8B2246] font-bold uppercase mb-4" style={{ fontSize: 11, letterSpacing: '0.22em' }}>
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide border transition-colors cursor-pointer ${
              value === o.value
                ? 'bg-[#8B2246] text-white border-[#8B2246]'
                : 'bg-transparent text-[#9B9490] border-[#D8D0C8] hover:border-[#8B2246] hover:text-[#8B2246]'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function SelectRow({ label, desc, value }: { label: string; desc: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-5">
      <div>
        <p className="font-bold text-[#1A1A1A]" style={{ fontSize: 14 }}>{label}</p>
        <p className="text-[0.72rem] text-[#9B9490] mt-0.5">{desc}</p>
      </div>
      <span className="text-[#8f837b] text-[13px] font-semibold shrink-0 ml-4">{value}</span>
    </div>
  )
}

export default function PreferencesPage() {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('medium')

  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="px-7 pb-20 max-w-sm mx-auto" style={{ paddingTop: NAV_HEIGHT + 32 }}>
        <Link href="/settings" className="flex items-center gap-1 text-[#9B9490] hover:text-[#8B2246] transition-colors mb-8 w-fit">
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[11px] tracking-[0.18em] font-semibold">SETTINGS</span>
        </Link>

        <div className="mb-8">
          <h1 className="font-playfair text-[3.2rem] font-black leading-none text-[#1A1A1A] tracking-tight">
            PREFERENCES
          </h1>
          <p className="text-[0.78rem] text-[#9B9490] mt-2 tracking-wide">
            Customize your learning experience
          </p>
        </div>

        <div className="divide-y divide-[#EDE5DC]">
          <RadioGroup
            title="Theme"
            options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]}
            value={theme}
            onChange={setTheme}
          />
          <RadioGroup
            title="Font Size"
            options={[
              { label: 'Small', value: 'small' },
              { label: 'Medium', value: 'medium' },
              { label: 'Large', value: 'large' },
            ]}
            value={fontSize}
            onChange={setFontSize}
          />
          <div>
            <SelectRow label="Speech Rate" desc="Reading speed for audio playback" value="Normal" />
            <div className="h-px bg-[#EDE5DC]" />
            <SelectRow label="Voice" desc="Text-to-speech voice" value="en-US" />
            <div className="h-px bg-[#EDE5DC]" />
            <SelectRow label="App Language" desc="Interface display language" value="한국어" />
            <div className="h-px bg-[#EDE5DC]" />
            <SelectRow label="Translation Language" desc="Story translation target" value="Korean" />
          </div>
        </div>
      </div>
    </div>
  )
}
