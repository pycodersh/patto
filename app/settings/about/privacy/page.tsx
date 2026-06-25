import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { TopNav } from '@/components/TopNav'

const sections = [
  {
    title: '1. 수집하는 정보',
    body: `당사는 사용자가 직접 제공하는 다음 정보를 수집합니다.\n\n• 계정 정보 (이메일 주소, 닉네임, 프로필 사진)\n• 이용 데이터 (읽은 스토리, 학습한 패턴, 연속 학습일)\n• 기기 정보 (기기 종류, 운영체제, 브라우저 종류)\n• 문의 및 피드백 내용\n\n결제 정보 등 민감한 개인정보는 직접 수집하지 않으며, 결제 처리는 제3자 서비스 제공업체를 통해 이루어집니다.`,
  },
  {
    title: '2. 정보 이용 목적',
    body: `수집한 정보는 다음 목적으로 이용됩니다.\n\n• 서비스 제공, 유지 및 개선\n• 맞춤형 학습 경험 제공 및 학습 진도 관리\n• 거래 관련 이메일 발송 (계정 인증, 구독 영수증 등)\n• 문의 및 질문 응대\n• 서비스 개선을 위한 이용 패턴 분석\n• 법적 의무 이행\n\n수집한 개인정보는 제3자에게 판매하지 않습니다.`,
  },
  {
    title: '3. 데이터 보관',
    body: `데이터는 Supabase, Inc.가 제공하는 보안 서버에 저장됩니다. 데이터는 미국 또는 당사 서비스 제공업체가 운영하는 국가에서 저장·처리될 수 있습니다.\n\n계정 데이터는 계정이 활성 상태인 동안 또는 서비스 제공에 필요한 기간 동안 보관됩니다. 계정 삭제 시 개인정보는 법적 보관 의무를 제외하고 30일 이내에 삭제됩니다.`,
  },
  {
    title: '4. 쿠키',
    body: `PATTO는 서비스 개선을 위해 쿠키 및 유사 기술을 사용합니다.\n\n• 세션 쿠키 — 방문 중 로그인 상태 유지\n• 환경설정 쿠키 — 테마, 언어 등 설정 기억\n• 분석 쿠키 — 서비스 이용 패턴 파악\n\n브라우저 설정에서 쿠키를 비활성화할 수 있으나, 일부 기능이 정상 작동하지 않을 수 있습니다.`,
  },
  {
    title: '5. 제3자 서비스',
    body: `PATTO는 다음 제3자 서비스를 이용하며, 해당 서비스는 사용자 정보를 수집할 수 있습니다.\n\n• Supabase — 데이터베이스 및 인증\n• Vercel — 호스팅 및 콘텐츠 전송\n• Web Speech API — 기기 내 TTS (데이터 전송 없음)\n• Unsplash — 스토리 이미지 (Unsplash 개인정보처리방침 적용)\n\n각 서비스는 자체 개인정보처리방침을 따릅니다. 해당 방침을 검토하시기 바랍니다.`,
  },
  {
    title: '6. 사용자 권리',
    body: `거주 지역에 따라 개인정보와 관련하여 다음 권리를 행사할 수 있습니다.\n\n• 열람권 — 당사가 보유한 데이터 사본 요청\n• 정정권 — 부정확한 데이터 수정 요청\n• 삭제권 — 계정 및 관련 데이터 삭제 요청\n• 이동권 — 기계가 읽을 수 있는 형식으로 데이터 수령\n• 이의제기권 — 특정 처리 활동에 대한 이의 제기\n\n권리 행사를 원하시면 privacy@patto.app으로 연락주시기 바랍니다. 30일 이내에 답변 드립니다.`,
  },
  {
    title: '7. 문의',
    body: `개인정보처리방침 또는 데이터 처리에 관한 문의는 아래로 연락주시기 바랍니다.\n\n이메일: privacy@patto.app\n주소: PATTO Inc., 대한민국 서울\n\n본 개인정보처리방침은 2026년 6월 25일에 최종 업데이트되었습니다.`,
  },
]

export default function PrivacyPage() {
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
            개인정보<br />처리방침
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
