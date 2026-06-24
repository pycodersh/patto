import type { Difficulty } from '@/types/pattern'

/**
 * 스토리별 난이도별 Mini Story 콘텐츠
 * - 키: stories.order_index (1부터 시작)
 * - 카드 예문 단순 복사 금지 — 동일 패턴을 사용하되 새로운 문장으로 작성
 * - 구조: 시작 → 전개 → 마무리
 *
 * 미입력 스토리는 queries/stories.ts의 buildMiniStory() 폴백 사용
 */
export const MINI_STORIES: Record<number, Record<Difficulty, string>> = {

  // ──────────────────────────────────────────────────────────────
  // Story 1 · 일상 표현
  // 패턴: I want to ~ / I have to ~ / I don't ~ / I just ~ / I can ~
  // 주제: 바쁜 주중을 버티고 주말 휴식을 계획하는 직장인
  // ──────────────────────────────────────────────────────────────
  1: {
    normal:
      "I want to rest this weekend. I have to clean my room first. "
      + "I don't have big plans. I just need some quiet time. "
      + "I can finally relax after a long week.",

    advanced:
      "I want to spend this weekend completely unplugged from work. "
      + "I have to get through Friday's deadline before I let myself breathe. "
      + "I don't think a quick nap will fix the exhaustion — I need a full two days of nothing. "
      + "I just blocked my calendar and turned off all work notifications. "
      + "I can already feel the tension starting to leave my shoulders.",

    native:
      "I want to treat this weekend as a genuine mental reset, not just a pause before Monday hits again. "
      + "I have to push through tonight's mountain of emails, which requires a level of focus I'm not sure I have left. "
      + "I don't subscribe to the idea that productivity is a virtue in and of itself — rest is part of the work. "
      + "I just booked a last-minute cabin with no cell service and immediately felt lighter. "
      + "I can't say exactly what I need until I stop long enough to hear myself think, "
      + "but I know this weekend is the place to find out.",
  },

  // ──────────────────────────────────────────────────────────────
  // Story 2 · 계획과 의도
  // 패턴: I'm thinking about ~ / I'm planning to ~ / I'm about to ~
  //        / I'm going to ~ / I'm going to try ~
  // 주제: 사이드 프로젝트를 진지한 사업으로 전환하려는 결심
  // ──────────────────────────────────────────────────────────────
  2: {
    normal:
      "I'm thinking about starting a small online store. "
      + "I'm planning to sell handmade items at first. "
      + "I'm about to set up a social media page for it. "
      + "I'm going to post photos every day this week. "
      + "I'm going to try to make my first sale by Friday.",

    advanced:
      "I'm thinking about turning my side project into a real business by the end of the year. "
      + "I'm planning to start with digital products to keep overhead low while I test the market. "
      + "I'm about to publish a landing page that's been sitting 80% done for two months — "
      + "perfectionism has cost me enough time. "
      + "I'm going to run a small ad campaign this week and track every click. "
      + "I'm going to try to land my first ten customers before I let myself revise the strategy.",

    native:
      "I'm thinking about making the leap from 'person with a side hustle' to 'person running a business' — "
      + "and the distinction matters more than it sounds. "
      + "I'm planning to bootstrap the whole thing rather than chase investors, "
      + "because I'd rather grow slowly on my own terms than fast on someone else's. "
      + "I'm about to hit publish on a product page that terrifies me, "
      + "which I've decided is a reliable signal that I should do it immediately. "
      + "I'm going to document every win and failure publicly, "
      + "because transparency builds trust faster than polished marketing ever will. "
      + "I'm going to try to stay detached from outcomes in the early months "
      + "and treat every piece of negative feedback as the most valuable data I'll collect.",
  },

  // ──────────────────────────────────────────────────────────────
  // Story 3 · 대화와 소통
  // 패턴: Let me ~ / Thank you for ~ / No wonder ~ /
  //        Why don't we ~ / Make sure ~
  // 주제: 팀 프로젝트 회의에서의 대화
  // ──────────────────────────────────────────────────────────────
  3: {
    normal:
      "Let me share my ideas for the new project. "
      + "Thank you for listening so carefully. "
      + "No wonder the last plan didn't work — we rushed it. "
      + "Why don't we slow down and plan more carefully this time? "
      + "Make sure everyone agrees before we move on.",

    advanced:
      "Let me walk you through the revised proposal before we open it up to the floor. "
      + "Thank you for the honest pushback last week — it forced us to rethink some shaky assumptions. "
      + "No wonder the pilot flopped; we skipped user research entirely and paid for it. "
      + "Why don't we run a focused two-week sprint instead of committing to a full quarter upfront? "
      + "Make sure the acceptance criteria are written down and agreed upon before anyone writes a line of code.",

    native:
      "Let me reframe the core problem before we get lost in solution mode, "
      + "because I think we've been arguing about the wrong thing. "
      + "Thank you for flagging the budget discrepancy early — "
      + "catching that in week one rather than week eight saved us a serious headache. "
      + "No wonder stakeholder buy-in has been so thin; "
      + "we've been presenting outputs without ever explaining the underlying reasoning. "
      + "Why don't we run a proper retrospective before we commit to the next phase, "
      + "so we're iterating on evidence rather than gut feeling? "
      + "Make sure whoever facilitates that session creates a safe space for the team "
      + "to say what's actually not working — sanitized retrospectives are just expensive theater.",
  },

}
