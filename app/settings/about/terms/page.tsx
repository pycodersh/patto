import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { TopNav } from '@/components/TopNav'

const sections = [
  {
    title: '1. 서비스 소개',
    body: `PATTO(이하 "서비스")는 매거진 스타일의 영어 스토리와 패턴 학습을 통해 자연스러운 영어 실력을 키울 수 있도록 돕는 모바일 및 웹 애플리케이션입니다. 서비스는 PATTO Inc.가 운영하며 전 세계 사용자에게 제공됩니다.\n\n서비스에 접속하거나 이용함으로써 본 이용약관에 동의하는 것으로 간주합니다. 동의하지 않는 경우 서비스를 이용하지 마십시오.`,
  },
  {
    title: '2. 사용자 책임',
    body: `사용자는 관련 법령을 준수하며 본 약관에 따라 PATTO를 이용해야 합니다. 다음 행위는 금지됩니다.\n\n• 관련 법령을 위반하는 방식으로 서비스를 이용하는 행위\n• 서비스의 일부에 무단 접근을 시도하는 행위\n• 서면 허가 없이 콘텐츠를 복제·배포하거나 2차 저작물을 제작하는 행위\n• 자동화 도구를 이용해 콘텐츠를 수집하거나 크롤링하는 행위\n• 서비스의 운영을 방해하거나 성능에 지장을 주는 행위`,
  },
  {
    title: '3. 구독 정책',
    body: `PATTO는 무료 플랜과 프리미엄 구독 플랜을 제공합니다. 프리미엄 구독은 구매 시 선택한 월간 또는 연간 주기로 청구됩니다.\n\n구독은 현재 결제 기간 종료 최소 24시간 전에 해지하지 않으면 자동 갱신됩니다. 계정 설정에서 언제든지 구독을 해지할 수 있습니다. 환불은 관련 소비자 보호법에 따라 당사의 재량으로 처리됩니다.\n\n가격은 30일 전 사전 공지 후 변경될 수 있으며, 변경 후 서비스를 계속 이용하면 새로운 가격에 동의한 것으로 간주합니다.`,
  },
  {
    title: '4. 지식재산권',
    body: `스토리, 패턴, 삽화, 오디오, 소프트웨어를 포함한 PATTO 내 모든 콘텐츠는 PATTO Inc. 또는 라이선서의 소유이며 저작권법 및 기타 지식재산권 관련 법령에 의해 보호됩니다.\n\n사용자는 개인적·비상업적 목적으로 콘텐츠에 접근·이용할 수 있는 제한적이고 비독점적인 라이선스를 부여받습니다. 이 라이선스는 사전 서면 동의 없이 콘텐츠를 복제·배포하거나 2차 저작물을 제작할 권리를 포함하지 않습니다.`,
  },
  {
    title: '5. 책임 제한',
    body: `관련 법령이 허용하는 최대 범위 내에서, PATTO Inc.는 서비스 이용 또는 이용 불가로 인해 발생하는 이익 손실, 데이터 손실, 영업권 손실 등 간접적·부수적·특별·결과적 손해에 대해 책임을 지지 않습니다.\n\n서비스는 명시적 또는 묵시적 보증 없이 "있는 그대로", "제공 가능한 상태로" 제공됩니다. 당사는 서비스가 중단 없이, 오류 없이, 또는 유해한 요소 없이 운영될 것을 보증하지 않습니다.`,
  },
  {
    title: '6. 계정 해지',
    body: `당사는 사용자가 본 약관을 위반하거나 서비스 또는 다른 사용자에게 해롭다고 판단하는 행동을 하는 경우, 단독 재량으로 계정을 정지 또는 해지할 수 있습니다.\n\n사용자는 계정 설정에서 언제든지 계정을 삭제할 수 있습니다. 계정 삭제 시 개인정보는 개인정보처리방침에 따라 법적 보관 의무 범위 내에서 처리됩니다.`,
  },
  {
    title: '7. 문의',
    body: `이용약관에 관한 문의는 아래로 연락주시기 바랍니다.\n\n이메일: legal@patto.app\n주소: PATTO Inc., 대한민국 서울\n\n본 이용약관은 2026년 6월 25일에 최종 업데이트되었습니다.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <TopNav />

      <div className="px-7 pb-20 max-w-sm mx-auto pt-20">
        <Link href="/settings/about" className="flex items-center gap-1 text-[#9B9490] hover:text-[#8B2246] transition-colors mb-8 w-fit">
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[11px] tracking-[0.18em] font-semibold">ABOUT</span>
        </Link>

        <div className="mb-10">
          <h1 className="font-playfair text-[1.9rem] font-black leading-tight text-[#1A1A1A] tracking-tight">
            이용약관
          </h1>
          <p className="text-[0.75rem] text-[#9B9490] mt-2 tracking-wide">
            최종 업데이트: 2026년 6월 25일
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="pb-8 border-b border-[#EDE5DC] last:border-0">
              <h2 className="font-bold text-[#1A1A1A] mb-3" style={{ fontSize: 14, letterSpacing: '0.02em' }}>
                {s.title}
              </h2>
              <div className="text-[0.8rem] text-[#5A5A5A] leading-[1.85] whitespace-pre-line">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
