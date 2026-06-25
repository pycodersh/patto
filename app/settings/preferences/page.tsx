'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Sun, Moon, Type, Mic, Globe, BookOpen } from 'lucide-react'
import { TopNav } from '@/components/TopNav'
import { useTheme } from '@/components/ThemeProvider'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.22em] text-[var(--pa)] font-bold mb-4 mt-8 first:mt-0">
      {children}
    </p>
  )
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-colors cursor-pointer ${
            value === o.value
              ? 'bg-[var(--pa)] text-white border-[var(--pa)]'
              : 'bg-transparent text-[var(--pm)] border-[var(--pd)] hover:border-[var(--pa)] hover:text-[var(--pa)]'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function SettingRow({
  icon: Icon,
  label,
  desc,
  value,
  last,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  desc: string
  value: string
  last?: boolean
}) {
  return (
    <div className={`flex items-start gap-4 py-5 ${last ? '' : 'border-b border-[var(--pd)]'}`}>
      <div className="w-9 h-9 rounded-xl bg-[var(--pc2)] flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-4 h-4 text-[var(--pa)]" strokeWidth={1.6} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[14px] text-[var(--pt)] leading-snug">{label}</p>
        <p className="text-[11.5px] text-[var(--pm)] mt-0.5 leading-relaxed">{desc}</p>
      </div>
      <span className="text-[13px] text-[var(--pa)] font-semibold shrink-0 mt-1">{value}</span>
    </div>
  )
}

export default function PreferencesPage() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState('medium')

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
            PREFERENCES
          </h1>
          <p className="text-[0.78rem] text-[var(--pm)] mt-2 tracking-wide">
            학습 환경을 나에게 맞게 조정하세요
          </p>
        </div>

        {/* APPEARANCE */}
        <SectionLabel>APPEARANCE</SectionLabel>
        <div className="border-t border-[var(--pd)]">
          <div className="flex items-start gap-4 pt-5 pb-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--pc2)] flex items-center justify-center shrink-0 mt-0.5">
              {theme === 'light'
                ? <Sun className="w-4 h-4 text-[var(--pa)]" strokeWidth={1.6} />
                : <Moon className="w-4 h-4 text-[var(--pa)]" strokeWidth={1.6} />}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] text-[var(--pt)]">Theme</p>
              <p className="text-[11.5px] text-[var(--pm)] mt-0.5">라이트 또는 다크 모드를 선택하세요</p>
              <ChipGroup
                options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]}
                value={theme}
                onChange={(v) => setTheme(v as 'light' | 'dark')}
              />
            </div>
          </div>
          <div className="h-px bg-[var(--pd)]" />
          <div className="flex items-start gap-4 pt-5 pb-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--pc2)] flex items-center justify-center shrink-0 mt-0.5">
              <Type className="w-4 h-4 text-[var(--pa)]" strokeWidth={1.6} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[14px] text-[var(--pt)]">Font Size</p>
              <p className="text-[11.5px] text-[var(--pm)] mt-0.5">읽기 편한 글자 크기를 설정하세요</p>
              <ChipGroup
                options={[
                  { label: 'Small', value: 'small' },
                  { label: 'Medium', value: 'medium' },
                  { label: 'Large', value: 'large' },
                ]}
                value={fontSize}
                onChange={setFontSize}
              />
            </div>
          </div>
        </div>

        {/* AUDIO */}
        <SectionLabel>AUDIO</SectionLabel>
        <div className="border-t border-[var(--pd)]">
          <SettingRow icon={Mic} label="Speech Rate" desc="오디오 재생 속도" value="Normal" />
          <SettingRow icon={Mic} label="Voice" desc="TTS 음성 언어 및 억양" value="en-US" last />
        </div>

        {/* LANGUAGE */}
        <SectionLabel>LANGUAGE</SectionLabel>
        <div className="border-t border-[var(--pd)]">
          <SettingRow icon={Globe} label="App Language" desc="앱 인터페이스 표시 언어" value="한국어" />
          <SettingRow icon={BookOpen} label="Translation" desc="스토리 번역 대상 언어" value="Korean" last />
        </div>
      </div>
    </div>
  )
}
