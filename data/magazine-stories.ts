/**
 * PATTO Magazine Stories — Level 1
 *
 * 구조: 스토리 10개 × 패턴 5개 = 패턴 50개 (Level 1 Top 50)
 * 각 스토리는 5개의 단락(영어 narrative + 한국어 번역)으로 구성되며,
 * 단락마다 학습 패턴 하나가 자연스럽게 녹아 있다.
 *
 * 이미지: 스토리별 Unsplash 정적 사진 4장을 slideImages로 제공.
 *   StoryImageSlider가 천천히(slideshowInterval초) 자동 전환하며 보여준다.
 *   (AI 이미지 생성 파이프라인은 사용하지 않는다.)
 */

import type { MagazineStory, StorySlideImage } from '@/types/magazine'

// Unsplash 정적 이미지 URL 헬퍼
const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

// slideImages 빌더 — 4장을 5단락에 매핑 (TTS 동기화용 linkedParagraphIds)
function slides(
  storyId: number,
  items: { id: string; alt: string; paras: number[] }[],
): StorySlideImage[] {
  return items.map((it) => ({
    url: U(it.id),
    alt: it.alt,
    status: 'ready' as const,
    linkedParagraphIds: it.paras.map((n) => `p${storyId}-${n}`),
  }))
}

export const magazineStories: MagazineStory[] = [
  // ── Story 1 · 새로운 시작 (p1-5) ───────────────────────────────────────────
  {
    id: 1,
    title: 'A New Start',
    subtitleKo: '새로운 한 주의 시작',
    ambienceId: 'night',
    narratorVoice: 'us-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1506784983877-45594efa4cbe'),
    imageAlt: 'A planner and coffee on a desk, planning a new week',
    slideImages: slides(1, [
      { id: '1506784983877-45594efa4cbe', alt: 'A planner and coffee on a desk, planning a new week', paras: [1, 2] },
      { id: '1544716278-ca5e3f4abd8c', alt: 'A warm lamp-lit desk in the quiet of night', paras: [3] },
      { id: '1531346878377-a5be20888e57', alt: 'A hand writing the first lines on a fresh page', paras: [4] },
      { id: '1456513080510-7bf3a84b82f8', alt: 'An open notebook ready for the first entry', paras: [5] },
    ]),
    storyNote: '큰 결심보다 작은 한 줄이 더 멀리 데려다줘요.',
    highlightPhrases: [
      'I want to start something new',
      "I'm thinking about keeping a short journal",
      'I should write down one good thing',
      'The reason is simple',
      'It turns out it only took five minutes',
    ],
    paragraphs: [
      {
        id: 'p1-1',
        english: "It's Sunday night, and a new week is almost here. I want to start something new this time. Maybe one small habit that I can actually keep.",
        koreanTranslation: '일요일 밤이고, 새로운 한 주가 거의 다 왔다. 이번엔 새로운 걸 시작하고 싶다. 내가 정말로 꾸준히 할 수 있는 작은 습관 하나쯤.',
        keyExpressions: ['I want to ~', 'a small habit'],
      },
      {
        id: 'p1-2',
        english: "I'm thinking about keeping a short journal every night. Just a few lines about my day. It doesn't have to be perfect.",
        koreanTranslation: '매일 밤 짧은 일기를 쓰는 걸 생각 중이다. 그날 하루에 대한 몇 줄 정도. 완벽할 필요는 없다.',
        keyExpressions: ["I'm thinking about ~ing", "It doesn't have to ~"],
      },
      {
        id: 'p1-3',
        english: "I should write down one good thing too. My friend says it helps her stay positive. I think she's right.",
        koreanTranslation: '좋은 일 하나도 적어야 할 것 같다. 친구는 그게 긍정적인 마음을 유지하는 데 도움이 된다고 한다. 그녀 말이 맞는 것 같다.',
        keyExpressions: ['I should ~', 'stay positive'],
      },
      {
        id: 'p1-4',
        english: "The reason is simple: I forget the small moments too quickly. A busy week erases them. I want to hold on to a few.",
        koreanTranslation: '이유는 간단하다: 나는 작은 순간들을 너무 빨리 잊어버린다. 바쁜 한 주가 그것들을 지워버린다. 몇 개라도 붙잡고 싶다.',
        keyExpressions: ['The reason is ~', 'hold on to'],
      },
      {
        id: 'p1-5',
        english: "So tonight I wrote my first page. It turns out it only took five minutes. A new start can be that small.",
        koreanTranslation: '그래서 오늘 밤 첫 페이지를 썼다. 알고 보니 5분밖에 안 걸렸다. 새로운 시작은 그렇게 작을 수 있다.',
        keyExpressions: ['It turns out ~', 'a new start'],
      },
    ],
    patterns: [
      { id: 'pt1-1', pattern: 'I want to ~.', meaningKo: '~하고 싶어', storySentence: 'I want to start something new this time.', storySentenceKo: '이번엔 새로운 걸 시작하고 싶다.', variationSentence: 'I want to read more books this year.', variationSentenceKo: '올해는 책을 더 많이 읽고 싶다.' },
      { id: 'pt1-2', pattern: "I'm thinking about ~ing.", meaningKo: '~을 생각 중이야', storySentence: "I'm thinking about keeping a short journal every night.", storySentenceKo: '매일 밤 짧은 일기를 쓰는 걸 생각 중이다.', variationSentence: "I'm thinking about taking a cooking class.", variationSentenceKo: '요리 수업을 들을까 생각 중이다.' },
      { id: 'pt1-3', pattern: 'I should ~.', meaningKo: '~해야 할 것 같아', storySentence: 'I should write down one good thing too.', storySentenceKo: '좋은 일 하나도 적어야 할 것 같다.', variationSentence: 'I should go to bed earlier tonight.', variationSentenceKo: '오늘 밤은 더 일찍 자야 할 것 같다.' },
      { id: 'pt1-4', pattern: 'The reason is ~.', meaningKo: '이유는 ~ 때문이야', storySentence: 'The reason is simple: I forget the small moments too quickly.', storySentenceKo: '이유는 간단하다: 작은 순간들을 너무 빨리 잊어버린다.', variationSentence: 'The reason is I want to feel less stressed.', variationSentenceKo: '이유는 덜 스트레스 받고 싶어서다.' },
      { id: 'pt1-5', pattern: 'It turns out ~.', meaningKo: '알고 보니 ~이더라', storySentence: 'It turns out it only took five minutes.', storySentenceKo: '알고 보니 5분밖에 안 걸렸다.', variationSentence: 'It turns out the hard part was just starting.', variationSentenceKo: '알고 보니 어려운 건 그냥 시작하는 거였다.' },
    ],
  },

  // ── Story 2 · 나를 만드는 시간 (p6-10) ──────────────────────────────────────
  {
    id: 2,
    title: 'An Old Friend',
    subtitleKo: '오랜 친구와 다시',
    ambienceId: 'cafe',
    narratorVoice: 'us-female',
    partnerVoice: 'uk-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1543007630-9710e4a00a20'),
    imageAlt: 'Two friends laughing together at a café table',
    slideImages: slides(2, [
      { id: '1543007630-9710e4a00a20', alt: 'Two friends laughing together at a café table', paras: [1] },
      { id: '1554118811-1e0d58224f24', alt: 'The warm interior of a quiet café', paras: [2] },
      { id: '1447933601403-0c6688de566e', alt: 'Two cups of coffee shared across a table', paras: [3, 4] },
      { id: '1521017432531-fbd92d768814', alt: 'Two friends talking closely over coffee', paras: [5] },
    ]),
    storyNote: '어떤 우정은 천천히, 그리고 오래 익어가요.',
    highlightPhrases: [
      "I'm planning to tell her",
      'I used to cancel plans',
      "I'm sorry for being so distant",
      'It seems like she has changed',
      "I'm looking forward to seeing her",
    ],
    paragraphs: [
      {
        id: 'p2-1',
        english: "I'm meeting an old friend today. I'm planning to tell her about everything that changed this year. We haven't really talked in a long time.",
        koreanTranslation: '오늘 오랜 친구를 만난다. 올해 바뀐 모든 것에 대해 그녀에게 이야기할 계획이다. 우리는 정말 오랫동안 제대로 이야기를 못 했다.',
        keyExpressions: ["I'm planning to ~", 'in a long time'],
      },
      {
        id: 'p2-2',
        english: "I used to cancel plans whenever I felt tired. I missed a lot of moments that way. I don't want to do that anymore.",
        koreanTranslation: '예전에는 피곤할 때마다 약속을 취소하곤 했다. 그렇게 많은 순간들을 놓쳤다. 이제는 그러고 싶지 않다.',
        keyExpressions: ['I used to ~', 'not anymore'],
      },
      {
        id: 'p2-3',
        english: "When she sat down, I said, \"I'm sorry for being so distant last year.\" She just smiled. Good friends understand.",
        koreanTranslation: '그녀가 자리에 앉았을 때, 나는 "작년에 너무 멀어져서 미안해"라고 말했다. 그녀는 그저 미소 지었다. 좋은 친구는 이해해준다.',
        keyExpressions: ["I'm sorry for ~ing", 'so distant'],
      },
      {
        id: 'p2-4',
        english: "It seems like she has changed too. She's calmer now, and she listens more. We've both grown a lot.",
        koreanTranslation: '그녀도 변한 것 같다. 이제 더 차분하고, 더 많이 들어준다. 우리 둘 다 많이 성장했다.',
        keyExpressions: ['It seems like ~', 'grow'],
      },
      {
        id: 'p2-5',
        english: "Before we left, we made a small promise. I'm looking forward to seeing her every month from now on. Some friendships are worth the effort.",
        koreanTranslation: '헤어지기 전에 우리는 작은 약속을 했다. 이제부터 매달 그녀를 만나는 게 기대된다. 어떤 우정은 노력할 가치가 있다.',
        keyExpressions: ["I'm looking forward to ~ing", 'worth the effort'],
      },
    ],
    patterns: [
      { id: 'pt2-1', pattern: "I'm planning to ~.", meaningKo: '~할 계획이야', storySentence: "I'm planning to tell her about everything that changed.", storySentenceKo: '바뀐 모든 것에 대해 이야기할 계획이다.', variationSentence: "I'm planning to save money for a trip.", variationSentenceKo: '여행을 위해 돈을 모을 계획이다.' },
      { id: 'pt2-2', pattern: 'I used to ~.', meaningKo: '예전에 ~했었어', storySentence: 'I used to cancel plans whenever I felt tired.', storySentenceKo: '예전에는 피곤할 때마다 약속을 취소하곤 했다.', variationSentence: 'I used to be afraid of speaking English.', variationSentenceKo: '예전에는 영어로 말하는 게 두려웠다.' },
      { id: 'pt2-3', pattern: "I'm sorry for ~ing.", meaningKo: '~해서 미안해', storySentence: "I'm sorry for being so distant last year.", storySentenceKo: '작년에 너무 멀어져서 미안해.', variationSentence: "I'm sorry for missing your call.", variationSentenceKo: '전화 못 받아서 미안해.' },
      { id: 'pt2-4', pattern: 'It seems like ~.', meaningKo: '~인 것 같아', storySentence: 'It seems like she has changed too.', storySentenceKo: '그녀도 변한 것 같다.', variationSentence: 'It seems like everyone is busy these days.', variationSentenceKo: '요즘 다들 바쁜 것 같다.' },
      { id: 'pt2-5', pattern: "I'm looking forward to ~ing.", meaningKo: '~이 기대돼', storySentence: "I'm looking forward to seeing her every month.", storySentenceKo: '매달 그녀를 만나는 게 기대된다.', variationSentence: "I'm looking forward to the weekend.", variationSentenceKo: '주말이 기대된다.' },
    ],
  },

  // ── Story 3 · 일상의 기초 (p11-15) ─────────────────────────────────────────
  {
    id: 3,
    title: 'An Ordinary Morning',
    subtitleKo: '평범한 아침의 풍경',
    ambienceId: 'fireplace',
    narratorVoice: 'us-female',
    partnerVoice: 'us-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1525610553991-2bede1a236e2'),
    imageAlt: 'A bright kitchen in the busy morning light',
    slideImages: slides(3, [
      { id: '1525610553991-2bede1a236e2', alt: 'A bright kitchen in the busy morning light', paras: [1] },
      { id: '1564890369478-c89ca6d9cde9', alt: 'A warm cup of tea instead of coffee', paras: [2] },
      { id: '1484723091739-30a097e8f929', alt: 'A simple breakfast on the kitchen table', paras: [3, 4] },
      { id: '1484480974693-6ca0a78fb36b', alt: 'Soft morning light filling a quiet room', paras: [5] },
    ]),
    storyNote: '평범한 하루 속 작은 친절이 아침을 가볍게 해요.',
    highlightPhrases: [
      'I have to leave by eight',
      "I don't drink coffee",
      'Let me help you look',
      'Thank you for helping me',
      'I just grabbed my bag',
    ],
    paragraphs: [
      {
        id: 'p3-1',
        english: "It's seven in the morning, and the kitchen is busy. I have to leave by eight today. So I move a little faster than usual.",
        koreanTranslation: '아침 7시, 부엌은 분주하다. 오늘은 8시까지 나가야 한다. 그래서 평소보다 조금 더 빠르게 움직인다.',
        keyExpressions: ['I have to ~', 'faster than usual'],
      },
      {
        id: 'p3-2',
        english: "I don't drink coffee in the morning. I prefer warm tea instead. It wakes me up gently.",
        koreanTranslation: '나는 아침에 커피를 마시지 않는다. 대신 따뜻한 차를 더 좋아한다. 그게 나를 부드럽게 깨워준다.',
        keyExpressions: ["I don't ~", 'prefer ~ instead'],
      },
      {
        id: 'p3-3',
        english: "My roommate can't find her keys. \"Let me help you look,\" I say. We find them under the newspaper.",
        koreanTranslation: '룸메이트가 열쇠를 못 찾는다. "내가 같이 찾아줄게"라고 말한다. 우리는 신문 아래에서 그것을 찾는다.',
        keyExpressions: ['Let me ~', "can't find"],
      },
      {
        id: 'p3-4',
        english: "\"Thank you for helping me,\" she says, smiling. A small kindness makes the morning lighter. We both feel good.",
        koreanTranslation: '"도와줘서 고마워"라고 그녀가 미소 지으며 말한다. 작은 친절이 아침을 더 가볍게 만든다. 우리 둘 다 기분이 좋다.',
        keyExpressions: ['Thank you for ~ing', 'a small kindness'],
      },
      {
        id: 'p3-5',
        english: "I just grabbed my bag and headed for the door. The morning was simple, but nice. Sometimes ordinary days are the best ones.",
        koreanTranslation: '나는 그냥 가방을 들고 문으로 향했다. 아침은 단순했지만 좋았다. 가끔은 평범한 날이 가장 좋은 날이다.',
        keyExpressions: ['I just ~', 'ordinary days'],
      },
    ],
    patterns: [
      { id: 'pt3-1', pattern: 'I have to ~.', meaningKo: '~해야 해', storySentence: 'I have to leave by eight today.', storySentenceKo: '오늘은 8시까지 나가야 한다.', variationSentence: 'I have to finish this before lunch.', variationSentenceKo: '점심 전에 이걸 끝내야 한다.' },
      { id: 'pt3-2', pattern: "I don't ~.", meaningKo: '~하지 않아', storySentence: "I don't drink coffee in the morning.", storySentenceKo: '나는 아침에 커피를 마시지 않는다.', variationSentence: "I don't watch TV on weekdays.", variationSentenceKo: '나는 평일에는 TV를 보지 않는다.' },
      { id: 'pt3-3', pattern: 'Let me ~.', meaningKo: '내가 ~할게', storySentence: 'Let me help you look.', storySentenceKo: '내가 같이 찾아줄게.', variationSentence: 'Let me carry that for you.', variationSentenceKo: '그거 내가 들어줄게.' },
      { id: 'pt3-4', pattern: 'Thank you for ~ing.', meaningKo: '~해줘서 고마워', storySentence: 'Thank you for helping me.', storySentenceKo: '도와줘서 고마워.', variationSentence: 'Thank you for waiting for me.', variationSentenceKo: '기다려줘서 고마워.' },
      { id: 'pt3-5', pattern: 'I just ~.', meaningKo: '방금 ~ / 그냥 ~', storySentence: 'I just grabbed my bag and headed for the door.', storySentenceKo: '나는 그냥 가방을 들고 문으로 향했다.', variationSentence: 'I just finished my homework.', variationSentenceKo: '방금 숙제를 끝냈다.' },
    ],
  },

  // ── Story 4 · 계획과 준비 (p16-20) ─────────────────────────────────────────
  {
    id: 4,
    title: 'The Night Before',
    subtitleKo: '발표 전날 밤',
    ambienceId: 'city',
    narratorVoice: 'us-male',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1531538606174-0f90ff5dce83'),
    imageAlt: 'A desk with presentation notes the night before',
    slideImages: slides(4, [
      { id: '1531538606174-0f90ff5dce83', alt: 'A desk with presentation notes the night before', paras: [1] },
      { id: '1488190211105-8b0e65b80b4e', alt: 'Reviewing the slides late on a laptop', paras: [2, 3] },
      { id: '1508057198894-247b23fe5ade', alt: 'An alarm clock set for an early morning', paras: [4] },
      { id: '1497366754035-f200968a6e72', alt: 'A tidy desk ready for tomorrow', paras: [5] },
    ]),
    storyNote: '준비하는 마음이 이미 절반의 성공이에요.',
    highlightPhrases: [
      'I can do this',
      "I'm still a little nervous",
      'I keep checking my notes',
      "I'm about to turn off the lights",
      "I'm supposed to arrive at nine",
    ],
    paragraphs: [
      {
        id: 'p4-1',
        english: "I have a big presentation tomorrow. I can do this — I've practiced for a whole week. My slides are finally ready.",
        koreanTranslation: '내일 큰 발표가 있다. 나는 할 수 있다 — 일주일 내내 연습했다. 슬라이드도 드디어 준비됐다.',
        keyExpressions: ['I can ~', 'finally ready'],
      },
      {
        id: 'p4-2',
        english: "But I'm still a little nervous. My hands feel cold when I think about it. That's normal, I guess.",
        koreanTranslation: '하지만 아직도 조금 긴장된다. 그것에 대해 생각하면 손이 차가워진다. 그것도 정상이겠지.',
        keyExpressions: ["I'm still ~", "that's normal"],
      },
      {
        id: 'p4-3',
        english: "I keep checking my notes again and again. Maybe I've read them ten times now. I just want to feel ready.",
        koreanTranslation: '나는 자꾸 메모를 보고 또 본다. 아마 지금 열 번은 읽었을 거다. 그냥 준비됐다는 느낌을 받고 싶다.',
        keyExpressions: ['I keep ~ing', 'again and again'],
      },
      {
        id: 'p4-4',
        english: "It's late now, and I'm about to turn off the lights. One more deep breath. Tomorrow will come either way.",
        koreanTranslation: '이제 늦었고, 막 불을 끄려던 참이다. 깊게 한 번 더 숨을 쉰다. 내일은 어떻게든 올 것이다.',
        keyExpressions: ["I'm about to ~", 'either way'],
      },
      {
        id: 'p4-5',
        english: "I'm supposed to arrive at nine sharp. So I set two alarms, just in case. Preparation is half the work.",
        koreanTranslation: '나는 9시 정각에 도착하기로 되어 있다. 그래서 혹시 몰라 알람을 두 개 맞췄다. 준비가 일의 절반이다.',
        keyExpressions: ["I'm supposed to ~", 'just in case'],
      },
    ],
    patterns: [
      { id: 'pt4-1', pattern: 'I can ~.', meaningKo: '~할 수 있어', storySentence: "I can do this — I've practiced for a whole week.", storySentenceKo: '나는 할 수 있다 — 일주일 내내 연습했다.', variationSentence: 'I can speak a little Japanese.', variationSentenceKo: '나는 일본어를 조금 할 수 있다.' },
      { id: 'pt4-2', pattern: "I'm still ~.", meaningKo: '아직도 ~해', storySentence: "I'm still a little nervous.", storySentenceKo: '아직도 조금 긴장된다.', variationSentence: "I'm still waiting for his reply.", variationSentenceKo: '아직도 그의 답장을 기다리고 있다.' },
      { id: 'pt4-3', pattern: 'I keep ~ing.', meaningKo: '자꾸 ~하게 돼', storySentence: 'I keep checking my notes again and again.', storySentenceKo: '나는 자꾸 메모를 보고 또 본다.', variationSentence: 'I keep forgetting his name.', variationSentenceKo: '나는 자꾸 그의 이름을 잊어버린다.' },
      { id: 'pt4-4', pattern: "I'm about to ~.", meaningKo: '막 ~하려던 참이야', storySentence: "I'm about to turn off the lights.", storySentenceKo: '막 불을 끄려던 참이다.', variationSentence: "I'm about to leave the house.", variationSentenceKo: '막 집을 나서려던 참이다.' },
      { id: 'pt4-5', pattern: "I'm supposed to ~.", meaningKo: '~하기로 되어 있어', storySentence: "I'm supposed to arrive at nine sharp.", storySentenceKo: '9시 정각에 도착하기로 되어 있다.', variationSentence: "I'm supposed to call her tonight.", variationSentenceKo: '오늘 밤 그녀에게 전화하기로 되어 있다.' },
    ],
  },

  // ── Story 5 · 생각과 느낌 (p21-25) ─────────────────────────────────────────
  {
    id: 5,
    title: 'By the Window',
    subtitleKo: '창가에서의 결심',
    ambienceId: 'rain',
    narratorVoice: 'uk-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1524678606370-a47ad25cb82a'),
    imageAlt: 'Sitting quietly by the window in the evening',
    slideImages: slides(5, [
      { id: '1524678606370-a47ad25cb82a', alt: 'Sitting quietly by the window in the evening', paras: [1] },
      { id: '1517021897933-0e0319cfbc28', alt: 'A thoughtful moment looking out the window', paras: [2, 3] },
      { id: '1571934811356-5cc061b6821f', alt: 'A warm drink during a calm, reflective night', paras: [4] },
      { id: '1512820790803-83ca734da794', alt: 'A quiet desk with an open book', paras: [5] },
    ]),
    storyNote: '작은 변화 하나가 새로운 문을 열어줘요.',
    highlightPhrases: [
      "I'm going to make one real change",
      "I'm going to try waking up",
      "I've been feeling tired",
      'I think mornings suit me better',
      'I feel like a small change can open a new door',
    ],
    paragraphs: [
      {
        id: 'p5-1',
        english: "Tonight I sat by the window for a long time. I'm going to make one real change this month. I can feel that it's time.",
        koreanTranslation: '오늘 밤 나는 창가에 오래 앉아 있었다. 이번 달에 진짜 변화 하나를 만들 거다. 때가 됐다는 게 느껴진다.',
        keyExpressions: ["I'm going to ~", "it's time"],
      },
      {
        id: 'p5-2',
        english: "I'm going to try waking up an hour earlier. The quiet morning hours feel like a gift. I want them for myself.",
        koreanTranslation: '나는 한 시간 더 일찍 일어나 볼 거다. 조용한 아침 시간은 선물 같다. 그 시간을 나를 위해 갖고 싶다.',
        keyExpressions: ["I'm going to try ~ing", 'feel like a gift'],
      },
      {
        id: 'p5-3',
        english: "I've been feeling tired for a while now. Too many late nights, too little rest. My body is asking for a change.",
        koreanTranslation: '나는 한동안 계속 피곤함을 느끼고 있다. 너무 많은 늦은 밤, 너무 적은 휴식. 내 몸이 변화를 요구하고 있다.',
        keyExpressions: ["I've been ~ing", 'for a while'],
      },
      {
        id: 'p5-4',
        english: "I think mornings suit me better than nights. My mind is clearer when the world is still quiet. That's when I do my best thinking.",
        koreanTranslation: '나는 밤보다 아침이 나에게 더 잘 맞는 것 같다. 세상이 아직 조용할 때 머리가 더 맑다. 그때 가장 생각이 잘 된다.',
        keyExpressions: ['I think ~', 'suit me better'],
      },
      {
        id: 'p5-5',
        english: "I feel like a small change can open a new door. I don't need a big plan — just one honest step. Tomorrow, I begin.",
        koreanTranslation: '작은 변화 하나가 새로운 문을 열 수 있을 것 같은 느낌이다. 거창한 계획은 필요 없다 — 그냥 솔직한 한 걸음이면 된다. 내일, 나는 시작한다.',
        keyExpressions: ['I feel like ~', 'one honest step'],
      },
    ],
    patterns: [
      { id: 'pt5-1', pattern: "I'm going to ~.", meaningKo: '~할 거야', storySentence: "I'm going to make one real change this month.", storySentenceKo: '이번 달에 진짜 변화 하나를 만들 거다.', variationSentence: "I'm going to clean my room today.", variationSentenceKo: '오늘 방을 청소할 거다.' },
      { id: 'pt5-2', pattern: "I'm going to try ~ing.", meaningKo: '~해볼 거야', storySentence: "I'm going to try waking up an hour earlier.", storySentenceKo: '한 시간 더 일찍 일어나 볼 거다.', variationSentence: "I'm going to try a new recipe tonight.", variationSentenceKo: '오늘 밤 새로운 요리를 해볼 거다.' },
      { id: 'pt5-3', pattern: "I've been ~ing.", meaningKo: '계속 ~하고 있어', storySentence: "I've been feeling tired for a while now.", storySentenceKo: '나는 한동안 계속 피곤함을 느끼고 있다.', variationSentence: "I've been learning English every day.", variationSentenceKo: '나는 매일 영어를 공부하고 있다.' },
      { id: 'pt5-4', pattern: 'I think ~.', meaningKo: '~인 것 같아', storySentence: 'I think mornings suit me better than nights.', storySentenceKo: '밤보다 아침이 나에게 더 잘 맞는 것 같다.', variationSentence: 'I think this is the right choice.', variationSentenceKo: '이게 맞는 선택인 것 같다.' },
      { id: 'pt5-5', pattern: 'I feel like ~.', meaningKo: '~인 느낌이야', storySentence: 'I feel like a small change can open a new door.', storySentenceKo: '작은 변화가 새로운 문을 열 수 있을 것 같은 느낌이다.', variationSentence: 'I feel like something good is coming.', variationSentenceKo: '뭔가 좋은 일이 올 것 같은 느낌이다.' },
    ],
  },

  // ── Story 6 · 판단과 의견 (p26-30) ─────────────────────────────────────────
  {
    id: 6,
    title: 'Two Roads',
    subtitleKo: '두 갈래 길 앞에서',
    ambienceId: 'library',
    narratorVoice: 'us-male',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1454165804606-c3d57bc86b40'),
    imageAlt: 'A handwritten list weighing reasons for a decision',
    slideImages: slides(6, [
      { id: '1454165804606-c3d57bc86b40', alt: 'A handwritten list weighing reasons for a decision', paras: [1, 2] },
      { id: '1476994230281-1448088947db', alt: 'A path that splits into two directions', paras: [3] },
      { id: '1499209974431-9dddcece7f88', alt: 'Sitting in thought, trying to decide', paras: [4] },
      { id: '1517842645767-c639042777db', alt: 'A calm notebook for thinking it through', paras: [5] },
    ]),
    storyNote: '좋은 결정은 남이 아니라 내 마음에서 나와요.',
    highlightPhrases: [
      "I'm not sure which one is better",
      'I tend to overthink',
      'It depends on which one I value more',
      "I'm trying to listen to myself",
      "Even though I'm still unsure",
    ],
    paragraphs: [
      {
        id: 'p6-1',
        english: "My friend asked me which job I would choose. I'm not sure which one is better. Both have good and bad sides.",
        koreanTranslation: '친구가 어느 직장을 선택할 거냐고 물었다. 어느 쪽이 더 나은지 모르겠다. 둘 다 좋은 면과 나쁜 면이 있다.',
        keyExpressions: ["I'm not sure ~", 'good and bad sides'],
      },
      {
        id: 'p6-2',
        english: "I tend to overthink big decisions like this. I write long lists of reasons. Sometimes that helps, and sometimes it just confuses me.",
        koreanTranslation: '나는 이런 큰 결정을 지나치게 고민하는 경향이 있다. 이유를 길게 적어 내려간다. 가끔은 도움이 되고, 가끔은 그냥 더 헷갈린다.',
        keyExpressions: ['I tend to ~', 'overthink'],
      },
      {
        id: 'p6-3',
        english: "Honestly, the right answer depends on what I really want. Money matters, but so does my time. It depends on which one I value more.",
        koreanTranslation: '솔직히, 정답은 내가 진짜 원하는 게 무엇이냐에 달려 있다. 돈도 중요하지만, 내 시간도 중요하다. 어느 쪽을 더 중요하게 여기느냐에 달려 있다.',
        keyExpressions: ['It depends on ~', 'value'],
      },
      {
        id: 'p6-4',
        english: "I'm trying to listen to myself instead of others. Everyone has an opinion about my life. But I'm the one who has to live it.",
        koreanTranslation: '나는 다른 사람보다 내 마음에 귀 기울이려고 노력 중이다. 모두가 내 인생에 대해 의견이 있다. 하지만 그걸 살아야 하는 건 나다.',
        keyExpressions: ["I'm trying to ~", 'instead of'],
      },
      {
        id: 'p6-5',
        english: "Even though I'm still unsure, I feel calmer now. A good decision takes time. I'll trust myself and choose soon.",
        koreanTranslation: '아직 확신은 없지만, 이제 마음이 더 차분하다. 좋은 결정은 시간이 걸린다. 나 자신을 믿고 곧 선택할 것이다.',
        keyExpressions: ['Even though ~', 'takes time'],
      },
    ],
    patterns: [
      { id: 'pt6-1', pattern: "I'm not sure ~.", meaningKo: '~인지 모르겠어', storySentence: "I'm not sure which one is better.", storySentenceKo: '어느 쪽이 더 나은지 모르겠다.', variationSentence: "I'm not sure if he's coming.", variationSentenceKo: '그가 올지 모르겠다.' },
      { id: 'pt6-2', pattern: 'I tend to ~.', meaningKo: '~하는 경향이 있어', storySentence: 'I tend to overthink big decisions.', storySentenceKo: '나는 큰 결정을 지나치게 고민하는 경향이 있다.', variationSentence: 'I tend to wake up early on weekends.', variationSentenceKo: '나는 주말에 일찍 일어나는 경향이 있다.' },
      { id: 'pt6-3', pattern: 'It depends on ~.', meaningKo: '~에 달려있어', storySentence: 'It depends on which one I value more.', storySentenceKo: '어느 쪽을 더 중요하게 여기느냐에 달려 있다.', variationSentence: 'It depends on the weather.', variationSentenceKo: '그건 날씨에 달려 있다.' },
      { id: 'pt6-4', pattern: "I'm trying to ~.", meaningKo: '~하려고 노력 중이야', storySentence: "I'm trying to listen to myself instead of others.", storySentenceKo: '다른 사람보다 내 마음에 귀 기울이려고 노력 중이다.', variationSentence: "I'm trying to eat healthier.", variationSentenceKo: '더 건강하게 먹으려고 노력 중이다.' },
      { id: 'pt6-5', pattern: 'Even though ~.', meaningKo: '~이지만 / ~임에도', storySentence: "Even though I'm still unsure, I feel calmer now.", storySentenceKo: '아직 확신은 없지만, 이제 마음이 더 차분하다.', variationSentence: 'Even though it was raining, we went out.', variationSentenceKo: '비가 왔지만, 우리는 나갔다.' },
    ],
  },

  // ── Story 7 · 조건과 결과 (p31-35) ─────────────────────────────────────────
  {
    id: 7,
    title: 'A Walk Up the Mountain',
    subtitleKo: '가을 산을 오르며',
    ambienceId: 'forest',
    narratorVoice: 'us-female',
    partnerVoice: 'us-male',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1441974231531-c6227db76b6e'),
    imageAlt: 'A quiet forest path in autumn',
    slideImages: slides(7, [
      { id: '1441974231531-c6227db76b6e', alt: 'A quiet forest path in autumn', paras: [1] },
      { id: '1518562180175-34a163b1a9a6', alt: 'A steep trail winding up through the trees', paras: [2, 3] },
      { id: '1501785888041-af3ef285b470', alt: 'A calm lake seen from the trail', paras: [4] },
      { id: '1470071459604-3b5ec3a7fe05', alt: 'A wide mountain view from the top', paras: [5] },
    ]),
    storyNote: '서두르지 않을 때 가장 좋은 순간이 찾아와요.',
    highlightPhrases: [
      'As long as the weather is clear',
      'No wonder I feel so tired',
      "I'd rather take the longer, easier path",
      'We ended up staying there for an hour',
      'Can you take a photo of me?',
    ],
    paragraphs: [
      {
        id: 'p7-1',
        english: "We planned to hike on Saturday morning. As long as the weather is clear, we'll go. The mountain is beautiful in autumn.",
        koreanTranslation: '우리는 토요일 아침에 등산하기로 계획했다. 날씨가 맑기만 하면 갈 거다. 그 산은 가을에 아름답다.',
        keyExpressions: ['As long as ~', 'in autumn'],
      },
      {
        id: 'p7-2',
        english: "I slept only four hours last night. No wonder I feel so tired this morning. I really need more rest.",
        koreanTranslation: '어젯밤 나는 네 시간밖에 못 잤다. 오늘 아침 이렇게 피곤한 게 당연하다. 정말 더 쉬어야 한다.',
        keyExpressions: ['No wonder ~', 'need more rest'],
      },
      {
        id: 'p7-3',
        english: "The trail was steeper than we expected. I'd rather take the longer, easier path. There's no need to rush.",
        koreanTranslation: '길은 우리가 예상한 것보다 가팔랐다. 차라리 더 길고 쉬운 길로 가겠다. 서두를 필요는 없다.',
        keyExpressions: ["I'd rather ~", 'no need to rush'],
      },
      {
        id: 'p7-4',
        english: "We stopped to rest near a small stream. We ended up staying there for a whole hour. It was the best part of the day.",
        koreanTranslation: '우리는 작은 개울 근처에서 쉬려고 멈췄다. 결국 거기서 한 시간이나 머물게 됐다. 그게 하루 중 가장 좋은 부분이었다.',
        keyExpressions: ['I ended up ~ing', 'the best part'],
      },
      {
        id: 'p7-5',
        english: "The view from the top was amazing. \"Can you take a photo of me?\" I asked my friend. We'll remember this day for a long time.",
        koreanTranslation: '정상에서 본 풍경은 놀라웠다. "내 사진 좀 찍어줄 수 있어?"라고 친구에게 물었다. 우리는 이 날을 오랫동안 기억할 것이다.',
        keyExpressions: ['Can you ~?', 'the view from the top'],
      },
    ],
    patterns: [
      { id: 'pt7-1', pattern: 'As long as ~.', meaningKo: '~하는 한 / ~이기만 하면', storySentence: "As long as the weather is clear, we'll go.", storySentenceKo: '날씨가 맑기만 하면 갈 거다.', variationSentence: "As long as you're happy, I'm happy.", variationSentenceKo: '네가 행복하기만 하면, 나도 행복해.' },
      { id: 'pt7-2', pattern: 'No wonder ~.', meaningKo: '~이니 당연하지', storySentence: 'No wonder I feel so tired this morning.', storySentenceKo: '오늘 아침 이렇게 피곤한 게 당연하다.', variationSentence: 'No wonder the room is so cold.', variationSentenceKo: '방이 이렇게 추운 게 당연하다.' },
      { id: 'pt7-3', pattern: "I'd rather ~.", meaningKo: '차라리 ~하겠어', storySentence: "I'd rather take the longer, easier path.", storySentenceKo: '차라리 더 길고 쉬운 길로 가겠다.', variationSentence: "I'd rather stay home tonight.", variationSentenceKo: '오늘 밤은 차라리 집에 있겠다.' },
      { id: 'pt7-4', pattern: 'I ended up ~ing.', meaningKo: '결국 ~하게 됐어', storySentence: 'We ended up staying there for a whole hour.', storySentenceKo: '결국 거기서 한 시간이나 머물게 됐다.', variationSentence: 'I ended up buying two of them.', variationSentenceKo: '나는 결국 그것을 두 개 사게 됐다.' },
      { id: 'pt7-5', pattern: 'Can you ~?', meaningKo: '~해줄 수 있어?', storySentence: 'Can you take a photo of me?', storySentenceKo: '내 사진 좀 찍어줄 수 있어?', variationSentence: 'Can you pass me the salt?', variationSentenceKo: '소금 좀 건네줄 수 있어?' },
    ],
  },

  // ── Story 8 · 부탁과 제안 (p36-40) ─────────────────────────────────────────
  {
    id: 8,
    title: 'Dinner Together',
    subtitleKo: '함께한 저녁 식사',
    ambienceId: 'cafe',
    narratorVoice: 'us-male',
    partnerVoice: 'us-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1414235077428-338989a2e8c0'),
    imageAlt: 'A restaurant table set by the window',
    slideImages: slides(8, [
      { id: '1414235077428-338989a2e8c0', alt: 'A restaurant table set by the window', paras: [1] },
      { id: '1551183053-bf91a1d81141', alt: 'A plate of seafood pasta, the chef\'s special', paras: [2] },
      { id: '1488477181946-6428a0291777', alt: 'A dessert to share at the end of the meal', paras: [3] },
      { id: '1517248135467-4c7edcad34c4', alt: 'A warm restaurant evening with friends', paras: [4, 5] },
    ]),
    storyNote: '정중한 한마디가 자리를 더 따뜻하게 만들어요.',
    highlightPhrases: [
      'Could you give us a table by the window?',
      "I'd like to try the seafood pasta",
      "Why don't we share a dessert?",
      'Would you mind turning on your phone light?',
      'Is it okay if I leave a little early?',
    ],
    paragraphs: [
      {
        id: 'p8-1',
        english: "We arrived at the restaurant a little early. \"Could you give us a table by the window?\" I asked the waiter. He nodded kindly.",
        koreanTranslation: '우리는 식당에 조금 일찍 도착했다. "창가 자리로 주실 수 있나요?"라고 웨이터에게 물었다. 그는 친절하게 고개를 끄덕였다.',
        keyExpressions: ['Could you ~?', 'a little early'],
      },
      {
        id: 'p8-2',
        english: "The menu looked wonderful. \"I'd like to try the seafood pasta,\" I said. It was the chef's special that night.",
        koreanTranslation: '메뉴는 멋져 보였다. "해산물 파스타를 먹어보고 싶은데요"라고 말했다. 그날 밤 셰프의 특선 요리였다.',
        keyExpressions: ["I'd like to ~", "the chef's special"],
      },
      {
        id: 'p8-3',
        english: "My coworker looked happy and relaxed. \"Why don't we share a dessert?\" she suggested. That sounded perfect to me.",
        koreanTranslation: '동료는 행복하고 편안해 보였다. "우리 디저트 하나 나눠 먹는 게 어때?"라고 그녀가 제안했다. 나에게는 완벽하게 들렸다.',
        keyExpressions: ["Why don't we ~?", 'sounded perfect'],
      },
      {
        id: 'p8-4',
        english: "The light was a bit dim for a photo. \"Would you mind turning on your phone light?\" I asked. She helped right away.",
        koreanTranslation: '사진을 찍기엔 빛이 조금 어두웠다. "핸드폰 불빛 좀 켜줄 수 있어요?"라고 물었다. 그녀는 바로 도와줬다.',
        keyExpressions: ['Would you mind ~ing?', 'right away'],
      },
      {
        id: 'p8-5',
        english: "It was getting late, and I had an early morning. \"Is it okay if I leave a little early?\" I asked. Everyone understood.",
        koreanTranslation: '시간이 늦어지고 있었고, 나는 아침 일찍 일이 있었다. "조금 일찍 가도 괜찮을까?"라고 물었다. 모두가 이해해줬다.',
        keyExpressions: ['Is it okay if ~?', 'getting late'],
      },
    ],
    patterns: [
      { id: 'pt8-1', pattern: 'Could you ~?', meaningKo: '~해주실 수 있나요?', storySentence: 'Could you give us a table by the window?', storySentenceKo: '창가 자리로 주실 수 있나요?', variationSentence: 'Could you send me the file again?', variationSentenceKo: '파일을 다시 보내주실 수 있나요?' },
      { id: 'pt8-2', pattern: "I'd like to ~.", meaningKo: '~하고 싶은데요', storySentence: "I'd like to try the seafood pasta.", storySentenceKo: '해산물 파스타를 먹어보고 싶은데요.', variationSentence: "I'd like to book a table for two.", variationSentenceKo: '2인용 테이블을 예약하고 싶은데요.' },
      { id: 'pt8-3', pattern: "Why don't we ~?", meaningKo: '우리 ~하는 게 어때?', storySentence: "Why don't we share a dessert?", storySentenceKo: '우리 디저트 하나 나눠 먹는 게 어때?', variationSentence: "Why don't we meet at noon?", variationSentenceKo: '우리 정오에 만나는 게 어때?' },
      { id: 'pt8-4', pattern: 'Would you mind ~ing?', meaningKo: '~해줄 수 있어요?', storySentence: 'Would you mind turning on your phone light?', storySentenceKo: '핸드폰 불빛 좀 켜줄 수 있어요?', variationSentence: 'Would you mind closing the window?', variationSentenceKo: '창문 좀 닫아줄 수 있어요?' },
      { id: 'pt8-5', pattern: 'Is it okay if ~?', meaningKo: '~해도 괜찮아?', storySentence: 'Is it okay if I leave a little early?', storySentenceKo: '조금 일찍 가도 괜찮을까?', variationSentence: 'Is it okay if I sit here?', variationSentenceKo: '여기 앉아도 괜찮아?' },
    ],
  },

  // ── Story 9 · 질문하기 (p41-45) ────────────────────────────────────────────
  {
    id: 9,
    title: 'Planning the Trip',
    subtitleKo: '여행을 계획하며',
    ambienceId: 'wind',
    narratorVoice: 'us-female',
    partnerVoice: 'us-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1488646953014-85cb44e25828'),
    imageAlt: 'A map and notes spread out while planning a trip',
    slideImages: slides(9, [
      { id: '1488646953014-85cb44e25828', alt: 'A map and notes spread out while planning a trip', paras: [1, 2] },
      { id: '1488085061387-422e29b40080', alt: 'A passport ready for the coast trip', paras: [3] },
      { id: '1507525428034-b723cf961d3e', alt: 'The beach waiting at the end of the journey', paras: [4] },
      { id: '1505228395891-9a51e7e86bf6', alt: 'A quiet coastline to explore together', paras: [5] },
    ]),
    storyNote: '좋은 여행은 질문에서 시작돼요.',
    highlightPhrases: [
      'Make sure you bring your passport',
      'Do you prefer the beach or the old town?',
      'Have you ever tried fresh oysters?',
      'Do you know a good place to stay there?',
      'What if we leave on Friday night instead?',
    ],
    paragraphs: [
      {
        id: 'p9-1',
        english: "We're planning a short trip to the coast. \"Make sure you bring your passport,\" my friend reminded me. I almost forgot it last time.",
        koreanTranslation: '우리는 해안으로 짧은 여행을 계획 중이다. "여권 꼭 챙겨"라고 친구가 일러줬다. 지난번에 하마터면 깜빡할 뻔했다.',
        keyExpressions: ['Make sure ~', 'almost forgot'],
      },
      {
        id: 'p9-2',
        english: "\"Do you prefer the beach or the old town?\" she asked. I said both, if we have time. We both love to explore.",
        koreanTranslation: '"너는 해변이 좋아, 아니면 구시가지가 좋아?"라고 그녀가 물었다. 시간이 되면 둘 다 좋다고 말했다. 우리 둘 다 탐험하는 걸 좋아한다.',
        keyExpressions: ['Do you ~?', 'love to explore'],
      },
      {
        id: 'p9-3',
        english: "\"Have you ever tried fresh oysters?\" I asked. She made a funny face and laughed. \"Never, but I'm curious,\" she said.",
        koreanTranslation: '"신선한 굴 먹어본 적 있어?"라고 물었다. 그녀는 우스운 표정을 짓고 웃었다. "한 번도 없어, 근데 궁금해"라고 말했다.',
        keyExpressions: ['Have you ever ~?', 'curious'],
      },
      {
        id: 'p9-4',
        english: "\"Do you know a good place to stay there?\" she asked me. I showed her a small guesthouse online. The reviews looked lovely.",
        koreanTranslation: '"거기 묵을 만한 좋은 곳 알아?"라고 그녀가 나에게 물었다. 나는 온라인에서 작은 게스트하우스를 보여줬다. 후기들이 사랑스러워 보였다.',
        keyExpressions: ['Do you know ~?', 'a place to stay'],
      },
      {
        id: 'p9-5',
        english: "\"What if we leave on Friday night instead?\" I suggested. That way, we'd have a full weekend. She loved the idea.",
        koreanTranslation: '"차라리 금요일 밤에 떠나면 어떨까?"라고 제안했다. 그러면 주말을 온전히 쓸 수 있다. 그녀는 그 아이디어를 아주 좋아했다.',
        keyExpressions: ['What if ~?', 'a full weekend'],
      },
    ],
    patterns: [
      { id: 'pt9-1', pattern: 'Make sure ~.', meaningKo: '꼭 ~해', storySentence: 'Make sure you bring your passport.', storySentenceKo: '여권 꼭 챙겨.', variationSentence: 'Make sure you lock the door.', variationSentenceKo: '문 꼭 잠가.' },
      { id: 'pt9-2', pattern: 'Do you ~?', meaningKo: '~해?', storySentence: 'Do you prefer the beach or the old town?', storySentenceKo: '너는 해변이 좋아, 아니면 구시가지가 좋아?', variationSentence: 'Do you like spicy food?', variationSentenceKo: '매운 음식 좋아해?' },
      { id: 'pt9-3', pattern: 'Have you ever ~?', meaningKo: '~해본 적 있어?', storySentence: 'Have you ever tried fresh oysters?', storySentenceKo: '신선한 굴 먹어본 적 있어?', variationSentence: 'Have you ever been to Japan?', variationSentenceKo: '일본에 가본 적 있어?' },
      { id: 'pt9-4', pattern: 'Do you know ~?', meaningKo: '~알아?', storySentence: 'Do you know a good place to stay there?', storySentenceKo: '거기 묵을 만한 좋은 곳 알아?', variationSentence: 'Do you know what time it is?', variationSentenceKo: '지금 몇 시인지 알아?' },
      { id: 'pt9-5', pattern: 'What if ~?', meaningKo: '~하면 어떨까?', storySentence: 'What if we leave on Friday night instead?', storySentenceKo: '차라리 금요일 밤에 떠나면 어떨까?', variationSentence: 'What if it rains tomorrow?', variationSentenceKo: '내일 비가 오면 어떡하지?' },
    ],
  },

  // ── Story 10 · 감정 표현 (p46-50) ──────────────────────────────────────────
  {
    id: 10,
    title: 'The Night Before I Move',
    subtitleKo: '이사 전날 밤',
    ambienceId: 'ocean',
    narratorVoice: 'uk-female',
    partnerVoice: 'us-female',
    slideshowInterval: 10,
    slideshowKenBurns: true,
    imageUrl: U('1600518464441-9154a4dea21b'),
    imageAlt: 'Cardboard moving boxes packed the night before',
    slideImages: slides(10, [
      { id: '1600518464441-9154a4dea21b', alt: 'Cardboard moving boxes packed the night before', paras: [1] },
      { id: '1502672260266-1c1ef2d93688', alt: 'An empty apartment waiting to become home', paras: [2, 3] },
      { id: '1607344645866-009c320b63e0', alt: 'The last boxes ready for the move', paras: [4] },
      { id: '1444723121867-7a241cacace9', alt: 'A new city skyline waiting ahead', paras: [5] },
    ]),
    storyNote: '모든 시작은 조금 무섭고, 그래서 더 빛나요.',
    highlightPhrases: [
      'What do you think about my decision?',
      'I wonder what my new life will be like',
      "I can't wait to decorate my own little apartment",
      'I\'m glad my family supports me',
      "I'm worried about making new friends",
    ],
    paragraphs: [
      {
        id: 'p10-1',
        english: "Tomorrow I move to a new city. \"What do you think about my decision?\" I asked my sister. She squeezed my hand and smiled.",
        koreanTranslation: '내일 나는 새로운 도시로 이사한다. "내 결정에 대해 어떻게 생각해?"라고 언니에게 물었다. 그녀는 내 손을 꼭 잡고 미소 지었다.',
        keyExpressions: ['What do you think about ~?', 'my decision'],
      },
      {
        id: 'p10-2',
        english: "I wonder what my new life will be like. New streets, new faces, new mornings. The unknown feels both scary and exciting.",
        koreanTranslation: '내 새로운 삶이 어떨지 궁금하다. 새로운 거리, 새로운 얼굴들, 새로운 아침들. 미지의 것은 무섭기도 하고 설레기도 하다.',
        keyExpressions: ['I wonder ~', 'scary and exciting'],
      },
      {
        id: 'p10-3',
        english: "I can't wait to decorate my own little apartment. I've already imagined every corner. It will finally feel like mine.",
        koreanTranslation: '내 작은 아파트를 꾸밀 게 너무 기대된다. 이미 구석구석을 다 상상해봤다. 드디어 내 것처럼 느껴질 것이다.',
        keyExpressions: ["I can't wait to ~", 'feel like mine'],
      },
      {
        id: 'p10-4',
        english: "I'm glad my family supports me so much. Their words give me courage. I won't feel alone, even far away.",
        koreanTranslation: '가족이 나를 이렇게 많이 응원해줘서 다행이다. 그들의 말이 나에게 용기를 준다. 멀리 있어도 외롭지 않을 것이다.',
        keyExpressions: ["I'm glad ~", 'give me courage'],
      },
      {
        id: 'p10-5',
        english: "Still, I'm worried about making new friends. It's never easy at first. But every beginning is a little scary — and that's okay.",
        koreanTranslation: '그래도 새 친구를 사귀는 게 걱정된다. 처음엔 결코 쉽지 않다. 하지만 모든 시작은 조금 무섭다 — 그리고 그건 괜찮다.',
        keyExpressions: ["I'm worried about ~ing", 'every beginning'],
      },
    ],
    patterns: [
      { id: 'pt10-1', pattern: 'What do you think about ~?', meaningKo: '~에 대해 어떻게 생각해?', storySentence: 'What do you think about my decision?', storySentenceKo: '내 결정에 대해 어떻게 생각해?', variationSentence: 'What do you think about this color?', variationSentenceKo: '이 색깔 어떻게 생각해?' },
      { id: 'pt10-2', pattern: 'I wonder ~.', meaningKo: '~인지 궁금해', storySentence: 'I wonder what my new life will be like.', storySentenceKo: '내 새로운 삶이 어떨지 궁금하다.', variationSentence: "I wonder why she didn't come.", variationSentenceKo: '그녀가 왜 안 왔는지 궁금하다.' },
      { id: 'pt10-3', pattern: "I can't wait to ~.", meaningKo: '~하는 게 너무 기대돼', storySentence: "I can't wait to decorate my own little apartment.", storySentenceKo: '내 작은 아파트를 꾸밀 게 너무 기대된다.', variationSentence: "I can't wait to see you again.", variationSentenceKo: '다시 너를 보는 게 너무 기대돼.' },
      { id: 'pt10-4', pattern: "I'm glad ~.", meaningKo: '~해서 기뻐 / 다행이야', storySentence: "I'm glad my family supports me so much.", storySentenceKo: '가족이 나를 이렇게 응원해줘서 다행이다.', variationSentence: "I'm glad you made it home safely.", variationSentenceKo: '네가 무사히 집에 도착해서 다행이야.' },
      { id: 'pt10-5', pattern: "I'm worried about ~.", meaningKo: '~가 걱정돼', storySentence: "I'm worried about making new friends.", storySentenceKo: '새 친구를 사귀는 게 걱정된다.', variationSentence: "I'm worried about the exam results.", variationSentenceKo: '시험 결과가 걱정된다.' },
    ],
  },
]
