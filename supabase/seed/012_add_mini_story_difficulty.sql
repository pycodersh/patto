-- ================================================================
-- 012: story_translations에 난이도별 Mini Story 컬럼 추가
-- 목적: 단순 예문 나열 → 맥락 있는 짧은 이야기 (시작·전개·마무리)
-- ================================================================

ALTER TABLE story_translations
  ADD COLUMN IF NOT EXISTS mini_story_normal   TEXT,
  ADD COLUMN IF NOT EXISTS mini_story_advanced TEXT,
  ADD COLUMN IF NOT EXISTS mini_story_native   TEXT;

-- ────────────────────────────────────────────────────────────────
-- Story 1: 일상 표현
-- 패턴: I want to ~ / I have to ~ / I don't ~ / I just ~ / I can ~
-- 주제: 바쁜 일상 속 주말 휴식 계획
-- ────────────────────────────────────────────────────────────────
UPDATE story_translations
SET
  mini_story_normal = E'I want to take a break this weekend. I have to finish one last report, but it\'s almost done. I don\'t usually plan trips on short notice. I just found a nice place nearby, though. I can leave right after work on Friday.',

  mini_story_advanced = E'I want to step away from work completely this weekend — screens off, notifications muted. I have to submit a proposal by Friday noon, which means tonight is going to be long. I don\'t think a quick nap will cut it; I\'m running on fumes. I just messaged a friend about a countryside day trip and the idea immediately lifted my mood. I can feel that a proper reset is long overdue.',

  mini_story_native = E'I want to go completely off-grid this weekend — no emails, no Slack pings, just open sky and silence. I have to knuckle down tonight and push through this backlog before I let myself breathe. I don\'t buy into the hustle-culture myth that rest is a reward you earn; sometimes you just need to stop, full stop. I just booked a last-minute cabin with no Wi-Fi and zero cell reception, and honestly, the relief I felt clicking "confirm" said everything. I can already picture myself sitting on that porch with a cup of coffee, watching the fog roll over the hills, and remembering what my own thoughts sound like.'

WHERE story_id = (SELECT id FROM stories WHERE order_index = 1)
  AND ui_lang = 'ko';

-- ────────────────────────────────────────────────────────────────
-- Story 2: 계획과 의도
-- 패턴: I'm thinking about ~ / I'm planning to ~ / I'm about to ~ /
--        I'm going to ~ / I'm going to try ~
-- 주제: 새 프로젝트 시작 결심
-- ────────────────────────────────────────────────────────────────
UPDATE story_translations
SET
  mini_story_normal = E'I\'m thinking about starting a small online business. I\'m planning to sell handmade goods at first. I\'m about to create my first social media account for it. I\'m going to post photos every day this week. I\'m going to try to reach 100 followers by the end of the month.',

  mini_story_advanced = E'I\'m thinking about pivoting my side hustle into a full-time venture by year-end. I\'m planning to start with a low-overhead product — digital templates — to test demand before scaling. I\'m about to launch a landing page and run a small ad campaign to gauge interest. I\'m going to document the whole process publicly, mistakes and all. I\'m going to try to hit my first ten sales within thirty days, which feels scary but achievable.',

  mini_story_native = E'I\'m thinking about making the leap and treating my side project as a real business, not just a hobby I occasionally monetize. I\'m planning to bootstrap rather than chase investors — slower, but I keep control and stay honest about what the market actually wants. I\'m about to put out my first proper product page, which has been sitting 90% done for two months while I overthought the copy. I\'m going to ship it imperfect, because waiting for perfect means waiting forever. I\'m going to try to treat every piece of feedback, especially the brutal kind, as the most valuable data I\'ll get.'

WHERE story_id = (SELECT id FROM stories WHERE order_index = 2)
  AND ui_lang = 'ko';

-- ────────────────────────────────────────────────────────────────
-- Story 3 ~ 12: 추후 콘텐츠 추가 예정
-- 현재는 buildMiniStory() 폴백 사용
-- ────────────────────────────────────────────────────────────────
