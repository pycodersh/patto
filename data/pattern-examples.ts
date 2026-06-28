/**
 * Pattern 연습 예문 — 패턴별 5문장
 *
 * 각 패턴(patternId)마다 예문 5개:
 *   [0] = Story에서 나온 대표 예문
 *   [1~4] = 추가 연습 예문
 *
 * Pattern 상세 페이지에서 스피커로 순차 재생하며 따라 읽기 연습에 사용한다.
 */

export type PracticeExample = { en: string; ko: string }

export const patternExamples: Record<string, PracticeExample[]> = {
  // ── Story 1 · 새로운 시작 ───────────────────────────────────────────────
  'pt1-1': [
    { en: 'I want to start something new this time.', ko: '이번엔 새로운 걸 시작하고 싶다.' },
    { en: 'I want to read more books this year.', ko: '올해는 책을 더 많이 읽고 싶다.' },
    { en: 'I want to learn how to cook.', ko: '요리하는 법을 배우고 싶다.' },
    { en: 'I want to go for a walk later.', ko: '이따가 산책하러 가고 싶다.' },
    { en: 'I want to call my mom tonight.', ko: '오늘 밤 엄마한테 전화하고 싶다.' },
  ],
  'pt1-2': [
    { en: "I'm thinking about keeping a short journal every night.", ko: '매일 밤 짧은 일기를 쓰는 걸 생각 중이다.' },
    { en: "I'm thinking about taking a cooking class.", ko: '요리 수업을 들을까 생각 중이다.' },
    { en: "I'm thinking about moving to a new place.", ko: '새로운 곳으로 이사할까 생각 중이다.' },
    { en: "I'm thinking about changing my routine.", ko: '내 루틴을 바꿀까 생각 중이다.' },
    { en: "I'm thinking about visiting my hometown.", ko: '고향에 가볼까 생각 중이다.' },
  ],
  'pt1-3': [
    { en: 'I should write down one good thing too.', ko: '좋은 일 하나도 적어야 할 것 같다.' },
    { en: 'I should go to bed earlier tonight.', ko: '오늘 밤은 더 일찍 자야 할 것 같다.' },
    { en: 'I should drink more water.', ko: '물을 더 많이 마셔야 할 것 같다.' },
    { en: 'I should call her back soon.', ko: '그녀에게 곧 다시 전화해야 할 것 같다.' },
    { en: 'I should clean my desk today.', ko: '오늘 책상을 정리해야 할 것 같다.' },
  ],
  'pt1-4': [
    { en: 'The reason is I forget the small moments too quickly.', ko: '이유는 작은 순간들을 너무 빨리 잊어버리기 때문이다.' },
    { en: 'The reason is I want to feel less stressed.', ko: '이유는 덜 스트레스 받고 싶어서다.' },
    { en: 'The reason is I was very tired.', ko: '이유는 내가 너무 피곤했기 때문이다.' },
    { en: 'The reason is the bus was late.', ko: '이유는 버스가 늦었기 때문이다.' },
    { en: 'The reason is I wanted to help.', ko: '이유는 내가 돕고 싶었기 때문이다.' },
  ],
  'pt1-5': [
    { en: 'It turns out it only took five minutes.', ko: '알고 보니 5분밖에 안 걸렸다.' },
    { en: 'It turns out the hard part was just starting.', ko: '알고 보니 어려운 건 그냥 시작하는 거였다.' },
    { en: 'It turns out she was right.', ko: '알고 보니 그녀가 옳았다.' },
    { en: 'It turns out we live in the same town.', ko: '알고 보니 우리는 같은 동네에 산다.' },
    { en: 'It turns out the test was easy.', ko: '알고 보니 시험은 쉬웠다.' },
  ],

  // ── Story 2 · 나를 만드는 시간 ─────────────────────────────────────────
  'pt2-1': [
    { en: "I'm planning to tell her about everything that changed.", ko: '바뀐 모든 것에 대해 그녀에게 이야기할 계획이다.' },
    { en: "I'm planning to save money for a trip.", ko: '여행을 위해 돈을 모을 계획이다.' },
    { en: "I'm planning to visit my grandmother.", ko: '할머니를 찾아뵐 계획이다.' },
    { en: "I'm planning to start exercising.", ko: '운동을 시작할 계획이다.' },
    { en: "I'm planning to finish this book.", ko: '이 책을 다 읽을 계획이다.' },
  ],
  'pt2-2': [
    { en: 'I used to cancel plans whenever I felt tired.', ko: '예전에는 피곤할 때마다 약속을 취소하곤 했다.' },
    { en: 'I used to be afraid of speaking English.', ko: '예전에는 영어로 말하는 게 두려웠다.' },
    { en: 'I used to live near the sea.', ko: '예전에는 바다 근처에 살았다.' },
    { en: 'I used to play the piano.', ko: '예전에는 피아노를 쳤다.' },
    { en: 'I used to wake up late.', ko: '예전에는 늦게 일어났다.' },
  ],
  'pt2-3': [
    { en: "I'm sorry for being so distant last year.", ko: '작년에 너무 멀어져서 미안해.' },
    { en: "I'm sorry for missing your call.", ko: '전화 못 받아서 미안해.' },
    { en: "I'm sorry for being late.", ko: '늦어서 미안해.' },
    { en: "I'm sorry for forgetting your birthday.", ko: '네 생일을 잊어서 미안해.' },
    { en: "I'm sorry for not telling you sooner.", ko: '더 일찍 말 안 해서 미안해.' },
  ],
  'pt2-4': [
    { en: 'It seems like she has changed too.', ko: '그녀도 변한 것 같다.' },
    { en: 'It seems like everyone is busy these days.', ko: '요즘 다들 바쁜 것 같다.' },
    { en: "It seems like it's going to rain.", ko: '비가 올 것 같다.' },
    { en: 'It seems like he likes his new job.', ko: '그는 새 직장을 좋아하는 것 같다.' },
    { en: 'It seems like the store is closed.', ko: '가게가 문을 닫은 것 같다.' },
  ],
  'pt2-5': [
    { en: "I'm looking forward to seeing her every month.", ko: '매달 그녀를 만나는 게 기대된다.' },
    { en: "I'm looking forward to the weekend.", ko: '주말이 기대된다.' },
    { en: "I'm looking forward to the trip.", ko: '여행이 기대된다.' },
    { en: "I'm looking forward to meeting you.", ko: '너를 만나는 게 기대된다.' },
    { en: "I'm looking forward to the holidays.", ko: '휴일이 기대된다.' },
  ],

  // ── Story 3 · 일상의 기초 ──────────────────────────────────────────────
  'pt3-1': [
    { en: 'I have to leave by eight today.', ko: '오늘은 8시까지 나가야 한다.' },
    { en: 'I have to finish this before lunch.', ko: '점심 전에 이걸 끝내야 한다.' },
    { en: 'I have to buy some groceries.', ko: '장을 좀 봐야 한다.' },
    { en: 'I have to study for the test.', ko: '시험공부를 해야 한다.' },
    { en: 'I have to wake up early tomorrow.', ko: '내일 일찍 일어나야 한다.' },
  ],
  'pt3-2': [
    { en: "I don't drink coffee in the morning.", ko: '나는 아침에 커피를 마시지 않는다.' },
    { en: "I don't watch TV on weekdays.", ko: '나는 평일에는 TV를 보지 않는다.' },
    { en: "I don't like spicy food.", ko: '나는 매운 음식을 좋아하지 않는다.' },
    { en: "I don't usually eat breakfast.", ko: '나는 보통 아침을 먹지 않는다.' },
    { en: "I don't know his name.", ko: '나는 그의 이름을 모른다.' },
  ],
  'pt3-3': [
    { en: 'Let me help you look.', ko: '내가 같이 찾아줄게.' },
    { en: 'Let me carry that for you.', ko: '그거 내가 들어줄게.' },
    { en: 'Let me check the time.', ko: '내가 시간을 확인해볼게.' },
    { en: 'Let me open the door.', ko: '내가 문을 열어줄게.' },
    { en: 'Let me explain it again.', ko: '내가 다시 설명해줄게.' },
  ],
  'pt3-4': [
    { en: 'Thank you for helping me.', ko: '도와줘서 고마워.' },
    { en: 'Thank you for waiting for me.', ko: '기다려줘서 고마워.' },
    { en: 'Thank you for the kind words.', ko: '따뜻한 말 고마워.' },
    { en: 'Thank you for listening.', ko: '들어줘서 고마워.' },
    { en: 'Thank you for coming today.', ko: '오늘 와줘서 고마워.' },
  ],
  'pt3-5': [
    { en: 'I just grabbed my bag and headed for the door.', ko: '나는 그냥 가방을 들고 문으로 향했다.' },
    { en: 'I just finished my homework.', ko: '방금 숙제를 끝냈다.' },
    { en: 'I just woke up.', ko: '방금 일어났다.' },
    { en: 'I just sent you a message.', ko: '방금 너에게 메시지를 보냈다.' },
    { en: 'I just wanted to say hi.', ko: '그냥 인사하고 싶었어.' },
  ],

  // ── Story 4 · 계획과 준비 ──────────────────────────────────────────────
  'pt4-1': [
    { en: "I can do this — I've practiced for a whole week.", ko: '나는 할 수 있다 — 일주일 내내 연습했다.' },
    { en: 'I can speak a little Japanese.', ko: '나는 일본어를 조금 할 수 있다.' },
    { en: 'I can help you tomorrow.', ko: '내일 너를 도와줄 수 있다.' },
    { en: 'I can finish it by noon.', ko: '정오까지 끝낼 수 있다.' },
    { en: 'I can drive you home.', ko: '집까지 태워줄 수 있다.' },
  ],
  'pt4-2': [
    { en: "I'm still a little nervous.", ko: '아직도 조금 긴장된다.' },
    { en: "I'm still waiting for his reply.", ko: '아직도 그의 답장을 기다리고 있다.' },
    { en: "I'm still learning English.", ko: '나는 아직도 영어를 배우고 있다.' },
    { en: "I'm still at the office.", ko: '나는 아직 사무실에 있다.' },
    { en: "I'm still not sure.", ko: '나는 아직 확신이 없다.' },
  ],
  'pt4-3': [
    { en: 'I keep checking my notes again and again.', ko: '나는 자꾸 메모를 보고 또 본다.' },
    { en: 'I keep forgetting his name.', ko: '나는 자꾸 그의 이름을 잊어버린다.' },
    { en: 'I keep making the same mistake.', ko: '나는 자꾸 같은 실수를 한다.' },
    { en: 'I keep losing my keys.', ko: '나는 자꾸 열쇠를 잃어버린다.' },
    { en: 'I keep thinking about it.', ko: '나는 자꾸 그것에 대해 생각하게 된다.' },
  ],
  'pt4-4': [
    { en: "I'm about to turn off the lights.", ko: '막 불을 끄려던 참이다.' },
    { en: "I'm about to leave the house.", ko: '막 집을 나서려던 참이다.' },
    { en: "I'm about to start dinner.", ko: '막 저녁을 시작하려던 참이다.' },
    { en: "I'm about to call you.", ko: '막 너에게 전화하려던 참이다.' },
    { en: "I'm about to go to bed.", ko: '막 자려던 참이다.' },
  ],
  'pt4-5': [
    { en: "I'm supposed to arrive at nine sharp.", ko: '9시 정각에 도착하기로 되어 있다.' },
    { en: "I'm supposed to call her tonight.", ko: '오늘 밤 그녀에게 전화하기로 되어 있다.' },
    { en: "I'm supposed to meet him at noon.", ko: '정오에 그를 만나기로 되어 있다.' },
    { en: "I'm supposed to finish this today.", ko: '오늘 이것을 끝내기로 되어 있다.' },
    { en: "I'm supposed to be at work by nine.", ko: '9시까지 출근하기로 되어 있다.' },
  ],

  // ── Story 5 · 생각과 느낌 ──────────────────────────────────────────────
  'pt5-1': [
    { en: "I'm going to make one real change this month.", ko: '이번 달에 진짜 변화 하나를 만들 거다.' },
    { en: "I'm going to clean my room today.", ko: '오늘 방을 청소할 거다.' },
    { en: "I'm going to call her later.", ko: '이따가 그녀에게 전화할 거다.' },
    { en: "I'm going to cook dinner tonight.", ko: '오늘 밤 저녁을 요리할 거다.' },
    { en: "I'm going to take a short walk.", ko: '잠깐 산책을 할 거다.' },
  ],
  'pt5-2': [
    { en: "I'm going to try waking up an hour earlier.", ko: '한 시간 더 일찍 일어나 볼 거다.' },
    { en: "I'm going to try a new recipe tonight.", ko: '오늘 밤 새로운 요리를 해볼 거다.' },
    { en: "I'm going to try running every morning.", ko: '매일 아침 달리기를 해볼 거다.' },
    { en: "I'm going to try reading before bed.", ko: '자기 전에 책을 읽어볼 거다.' },
    { en: "I'm going to try saying yes more often.", ko: '더 자주 예스라고 말해볼 거다.' },
  ],
  'pt5-3': [
    { en: "I've been feeling tired for a while now.", ko: '나는 한동안 계속 피곤함을 느끼고 있다.' },
    { en: "I've been learning English every day.", ko: '나는 매일 영어를 공부하고 있다.' },
    { en: "I've been working a lot lately.", ko: '나는 요즘 일을 많이 하고 있다.' },
    { en: "I've been thinking about you.", ko: '나는 너를 계속 생각하고 있었다.' },
    { en: "I've been trying to eat better.", ko: '나는 더 잘 먹으려고 계속 노력하고 있다.' },
  ],
  'pt5-4': [
    { en: 'I think mornings suit me better than nights.', ko: '밤보다 아침이 나에게 더 잘 맞는 것 같다.' },
    { en: 'I think this is the right choice.', ko: '이게 맞는 선택인 것 같다.' },
    { en: "I think it's going to be okay.", ko: '괜찮을 것 같다.' },
    { en: "I think she's already left.", ko: '그녀는 이미 떠난 것 같다.' },
    { en: 'I think we should wait.', ko: '우리는 기다려야 할 것 같다.' },
  ],
  'pt5-5': [
    { en: 'I feel like a small change can open a new door.', ko: '작은 변화가 새로운 문을 열 수 있을 것 같은 느낌이다.' },
    { en: 'I feel like something good is coming.', ko: '뭔가 좋은 일이 올 것 같은 느낌이다.' },
    { en: 'I feel like resting today.', ko: '오늘은 쉬고 싶은 기분이다.' },
    { en: "I feel like I've grown a lot.", ko: '내가 많이 성장한 것 같은 느낌이다.' },
    { en: 'I feel like having some tea.', ko: '차를 좀 마시고 싶은 기분이다.' },
  ],

  // ── Story 6 · 판단과 의견 ──────────────────────────────────────────────
  'pt6-1': [
    { en: "I'm not sure which one is better.", ko: '어느 쪽이 더 나은지 모르겠다.' },
    { en: "I'm not sure if he's coming.", ko: '그가 올지 모르겠다.' },
    { en: "I'm not sure what to say.", ko: '뭐라고 해야 할지 모르겠다.' },
    { en: "I'm not sure where it is.", ko: '그게 어디 있는지 모르겠다.' },
    { en: "I'm not sure about the time.", ko: '시간이 확실하지 않다.' },
  ],
  'pt6-2': [
    { en: 'I tend to overthink big decisions.', ko: '나는 큰 결정을 지나치게 고민하는 경향이 있다.' },
    { en: 'I tend to wake up early on weekends.', ko: '나는 주말에 일찍 일어나는 경향이 있다.' },
    { en: 'I tend to forget names.', ko: '나는 이름을 잘 잊어버리는 편이다.' },
    { en: 'I tend to worry too much.', ko: '나는 너무 많이 걱정하는 편이다.' },
    { en: "I tend to eat when I'm stressed.", ko: '나는 스트레스를 받으면 먹는 경향이 있다.' },
  ],
  'pt6-3': [
    { en: 'It depends on which one I value more.', ko: '어느 쪽을 더 중요하게 여기느냐에 달려 있다.' },
    { en: 'It depends on the weather.', ko: '그건 날씨에 달려 있다.' },
    { en: 'It depends on your schedule.', ko: '그건 네 일정에 달려 있다.' },
    { en: 'It depends on the price.', ko: '그건 가격에 달려 있다.' },
    { en: 'It depends on how you feel.', ko: '그건 네 기분에 달려 있다.' },
  ],
  'pt6-4': [
    { en: "I'm trying to listen to myself instead of others.", ko: '다른 사람보다 내 마음에 귀 기울이려고 노력 중이다.' },
    { en: "I'm trying to eat healthier.", ko: '더 건강하게 먹으려고 노력 중이다.' },
    { en: "I'm trying to save more money.", ko: '돈을 더 모으려고 노력 중이다.' },
    { en: "I'm trying to be more patient.", ko: '더 인내심을 가지려고 노력 중이다.' },
    { en: "I'm trying to sleep earlier.", ko: '더 일찍 자려고 노력 중이다.' },
  ],
  'pt6-5': [
    { en: "Even though I'm still unsure, I feel calmer now.", ko: '아직 확신은 없지만, 이제 마음이 더 차분하다.' },
    { en: 'Even though it was raining, we went out.', ko: '비가 왔지만, 우리는 나갔다.' },
    { en: 'Even though I was tired, I kept going.', ko: '피곤했지만, 나는 계속했다.' },
    { en: "Even though it's hard, I enjoy it.", ko: '힘들지만, 나는 그것을 즐긴다.' },
    { en: "Even though he's busy, he always helps.", ko: '그는 바쁘지만, 항상 도와준다.' },
  ],

  // ── Story 7 · 조건과 결과 ──────────────────────────────────────────────
  'pt7-1': [
    { en: "As long as the weather is clear, we'll go.", ko: '날씨가 맑기만 하면 갈 거다.' },
    { en: "As long as you're happy, I'm happy.", ko: '네가 행복하기만 하면, 나도 행복해.' },
    { en: "As long as we leave early, we'll be fine.", ko: '일찍 출발하기만 하면, 괜찮을 거다.' },
    { en: "As long as you try, that's enough.", ko: '노력하기만 하면, 그걸로 충분하다.' },
    { en: "As long as it's safe, let's do it.", ko: '안전하기만 하면, 하자.' },
  ],
  'pt7-2': [
    { en: 'No wonder I feel so tired this morning.', ko: '오늘 아침 이렇게 피곤한 게 당연하다.' },
    { en: 'No wonder the room is so cold.', ko: '방이 이렇게 추운 게 당연하다.' },
    { en: "No wonder she's happy.", ko: '그녀가 행복한 게 당연하다.' },
    { en: "No wonder you're hungry.", ko: '네가 배고픈 게 당연하다.' },
    { en: 'No wonder the bus is late.', ko: '버스가 늦는 게 당연하다.' },
  ],
  'pt7-3': [
    { en: "I'd rather take the longer, easier path.", ko: '차라리 더 길고 쉬운 길로 가겠다.' },
    { en: "I'd rather stay home tonight.", ko: '오늘 밤은 차라리 집에 있겠다.' },
    { en: "I'd rather walk than wait for the bus.", ko: '버스를 기다리느니 차라리 걷겠다.' },
    { en: "I'd rather eat at home.", ko: '차라리 집에서 먹겠다.' },
    { en: "I'd rather start now than later.", ko: '나중보다 차라리 지금 시작하겠다.' },
  ],
  'pt7-4': [
    { en: 'We ended up staying there for a whole hour.', ko: '결국 거기서 한 시간이나 머물게 됐다.' },
    { en: 'I ended up buying two of them.', ko: '나는 결국 그것을 두 개 사게 됐다.' },
    { en: 'I ended up taking a taxi.', ko: '나는 결국 택시를 타게 됐다.' },
    { en: 'We ended up watching a movie.', ko: '우리는 결국 영화를 보게 됐다.' },
    { en: 'I ended up staying up all night.', ko: '나는 결국 밤을 새우게 됐다.' },
  ],
  'pt7-5': [
    { en: 'Can you take a photo of me?', ko: '내 사진 좀 찍어줄 수 있어?' },
    { en: 'Can you pass me the salt?', ko: '소금 좀 건네줄 수 있어?' },
    { en: 'Can you help me with this?', ko: '이것 좀 도와줄 수 있어?' },
    { en: 'Can you call me later?', ko: '이따가 전화해줄 수 있어?' },
    { en: 'Can you wait a minute?', ko: '잠깐 기다려줄 수 있어?' },
  ],

  // ── Story 8 · 부탁과 제안 ──────────────────────────────────────────────
  'pt8-1': [
    { en: 'Could you give us a table by the window?', ko: '창가 자리로 주실 수 있나요?' },
    { en: 'Could you send me the file again?', ko: '파일을 다시 보내주실 수 있나요?' },
    { en: 'Could you speak more slowly?', ko: '좀 더 천천히 말씀해 주실 수 있나요?' },
    { en: 'Could you turn down the music?', ko: '음악 소리를 줄여주실 수 있나요?' },
    { en: 'Could you show me the way?', ko: '길을 알려주실 수 있나요?' },
  ],
  'pt8-2': [
    { en: "I'd like to try the seafood pasta.", ko: '해산물 파스타를 먹어보고 싶은데요.' },
    { en: "I'd like to book a table for two.", ko: '2인용 테이블을 예약하고 싶은데요.' },
    { en: "I'd like to order now.", ko: '지금 주문하고 싶은데요.' },
    { en: "I'd like to ask a question.", ko: '질문을 하나 하고 싶은데요.' },
    { en: "I'd like to pay by card.", ko: '카드로 계산하고 싶은데요.' },
  ],
  'pt8-3': [
    { en: "Why don't we share a dessert?", ko: '우리 디저트 하나 나눠 먹는 게 어때?' },
    { en: "Why don't we meet at noon?", ko: '우리 정오에 만나는 게 어때?' },
    { en: "Why don't we take a break?", ko: '우리 잠깐 쉬는 게 어때?' },
    { en: "Why don't we go together?", ko: '우리 같이 가는 게 어때?' },
    { en: "Why don't we try a new place?", ko: '우리 새로운 곳에 가보는 게 어때?' },
  ],
  'pt8-4': [
    { en: 'Would you mind turning on your phone light?', ko: '핸드폰 불빛 좀 켜줄 수 있어요?' },
    { en: 'Would you mind closing the window?', ko: '창문 좀 닫아줄 수 있어요?' },
    { en: 'Would you mind waiting here?', ko: '여기서 기다려줄 수 있어요?' },
    { en: 'Would you mind helping me?', ko: '저 좀 도와줄 수 있어요?' },
    { en: 'Would you mind moving over a little?', ko: '조금만 옮겨줄 수 있어요?' },
  ],
  'pt8-5': [
    { en: 'Is it okay if I leave a little early?', ko: '조금 일찍 가도 괜찮을까?' },
    { en: 'Is it okay if I sit here?', ko: '여기 앉아도 괜찮아?' },
    { en: 'Is it okay if I bring a friend?', ko: '친구를 데려와도 괜찮아?' },
    { en: 'Is it okay if I call you tonight?', ko: '오늘 밤에 전화해도 괜찮아?' },
    { en: 'Is it okay if I open the window?', ko: '창문 열어도 괜찮아?' },
  ],

  // ── Story 9 · 질문하기 ─────────────────────────────────────────────────
  'pt9-1': [
    { en: 'Make sure you bring your passport.', ko: '여권 꼭 챙겨.' },
    { en: 'Make sure you lock the door.', ko: '문 꼭 잠가.' },
    { en: 'Make sure you charge your phone.', ko: '핸드폰 꼭 충전해.' },
    { en: 'Make sure you arrive on time.', ko: '꼭 제시간에 도착해.' },
    { en: 'Make sure you eat something.', ko: '꼭 뭐라도 먹어.' },
  ],
  'pt9-2': [
    { en: 'Do you prefer the beach or the old town?', ko: '너는 해변이 좋아, 아니면 구시가지가 좋아?' },
    { en: 'Do you like spicy food?', ko: '매운 음식 좋아해?' },
    { en: 'Do you have any plans tonight?', ko: '오늘 밤에 무슨 계획 있어?' },
    { en: 'Do you want to come with us?', ko: '우리랑 같이 갈래?' },
    { en: 'Do you know this song?', ko: '이 노래 알아?' },
  ],
  'pt9-3': [
    { en: 'Have you ever tried fresh oysters?', ko: '신선한 굴 먹어본 적 있어?' },
    { en: 'Have you ever been to Japan?', ko: '일본에 가본 적 있어?' },
    { en: 'Have you ever met him before?', ko: '그를 전에 만난 적 있어?' },
    { en: 'Have you ever ridden a horse?', ko: '말을 타본 적 있어?' },
    { en: 'Have you ever read this book?', ko: '이 책 읽어본 적 있어?' },
  ],
  'pt9-4': [
    { en: 'Do you know a good place to stay there?', ko: '거기 묵을 만한 좋은 곳 알아?' },
    { en: 'Do you know what time it is?', ko: '지금 몇 시인지 알아?' },
    { en: 'Do you know where the station is?', ko: '역이 어디 있는지 알아?' },
    { en: 'Do you know her name?', ko: '그녀의 이름을 알아?' },
    { en: 'Do you know how to get there?', ko: '거기 가는 법 알아?' },
  ],
  'pt9-5': [
    { en: 'What if we leave on Friday night instead?', ko: '차라리 금요일 밤에 떠나면 어떨까?' },
    { en: 'What if it rains tomorrow?', ko: '내일 비가 오면 어떡하지?' },
    { en: 'What if we try a different way?', ko: '다른 방법을 시도하면 어떨까?' },
    { en: 'What if she says no?', ko: '그녀가 안 된다고 하면 어떡하지?' },
    { en: 'What if we meet earlier?', ko: '우리 더 일찍 만나면 어떨까?' },
  ],

  // ── Story 10 · 감정 표현 ───────────────────────────────────────────────
  'pt10-1': [
    { en: 'What do you think about my decision?', ko: '내 결정에 대해 어떻게 생각해?' },
    { en: 'What do you think about this color?', ko: '이 색깔 어떻게 생각해?' },
    { en: 'What do you think about the plan?', ko: '그 계획에 대해 어떻게 생각해?' },
    { en: 'What do you think about moving here?', ko: '여기로 이사하는 거 어떻게 생각해?' },
    { en: 'What do you think about this idea?', ko: '이 아이디어 어떻게 생각해?' },
  ],
  'pt10-2': [
    { en: 'I wonder what my new life will be like.', ko: '내 새로운 삶이 어떨지 궁금하다.' },
    { en: "I wonder why she didn't come.", ko: '그녀가 왜 안 왔는지 궁금하다.' },
    { en: "I wonder what's for dinner.", ko: '저녁이 뭔지 궁금하다.' },
    { en: 'I wonder if he remembers me.', ko: '그가 나를 기억하는지 궁금하다.' },
    { en: 'I wonder how they are doing.', ko: '그들이 어떻게 지내는지 궁금하다.' },
  ],
  'pt10-3': [
    { en: "I can't wait to decorate my own little apartment.", ko: '내 작은 아파트를 꾸밀 게 너무 기대된다.' },
    { en: "I can't wait to see you again.", ko: '다시 너를 보는 게 너무 기대돼.' },
    { en: "I can't wait to start my new job.", ko: '새 일을 시작하는 게 너무 기대돼.' },
    { en: "I can't wait to try the food there.", ko: '거기 음식을 먹어보는 게 너무 기대돼.' },
    { en: "I can't wait to go home.", ko: '집에 가는 게 너무 기대돼.' },
  ],
  'pt10-4': [
    { en: "I'm glad my family supports me so much.", ko: '가족이 나를 이렇게 응원해줘서 다행이다.' },
    { en: "I'm glad you made it home safely.", ko: '네가 무사히 집에 도착해서 다행이야.' },
    { en: "I'm glad we talked today.", ko: '오늘 우리가 이야기해서 기뻐.' },
    { en: "I'm glad you like it.", ko: '네가 마음에 들어 해서 기뻐.' },
    { en: "I'm glad the weather is nice.", ko: '날씨가 좋아서 다행이야.' },
  ],
  'pt10-5': [
    { en: "I'm worried about making new friends.", ko: '새 친구를 사귀는 게 걱정된다.' },
    { en: "I'm worried about the exam results.", ko: '시험 결과가 걱정된다.' },
    { en: "I'm worried about my health.", ko: '내 건강이 걱정된다.' },
    { en: "I'm worried about being late.", ko: '늦을까 봐 걱정된다.' },
    { en: "I'm worried about the weather tomorrow.", ko: '내일 날씨가 걱정된다.' },
  ],
}

/** patternId로 연습 예문 5개를 반환 (없으면 빈 배열) */
export function getPatternExamples(patternId: string): PracticeExample[] {
  return patternExamples[patternId] ?? []
}
