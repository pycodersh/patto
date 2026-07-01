// ── Editor's Notes — PATTO ────────────────────────────────────────────────────
// 30 editorial essays on language acquisition and PATTO's philosophy.
// Written as a connected small book: read 1–30 to understand how language works.

export type IllustrationType =
  | 'lightbulb'
  | 'coffee'
  | 'book'
  | 'brain'
  | 'pattern'
  | 'speech'
  | 'pen'
  | 'wave'
  | 'eye'
  | 'clock'

export type LangMap<T> = {
  en: T
  ko?: T
  ja?: T
  es?: T
  fr?: T
  de?: T
  'zh-cn'?: T
}

export type ResearchRef = {
  author: string        // always English
  title: string         // always English
  year: number
  brief: LangMap<string>
}

export type EditorNote = {
  id: number
  part: 1 | 2 | 3
  partTitle: string     // always English editorial header
  title: LangMap<string>
  readTimeSec: number
  illustration: IllustrationType
  body: LangMap<string[]>
  research: ResearchRef[]
  oneThingToRemember: LangMap<string>
}

export const EDITOR_NOTES: EditorNote[] = [

  // ── PART 1: The Nature of Language ────────────────────────────────────────

  {
    id: 1,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'Why Translation Slows You Down', ko: '번역이 당신을 느리게 만드는 이유' },
    readTimeSec: 40,
    illustration: 'brain',
    body: {
      en: [
        'When you hear the word "apple," what happens? If you\'re a native English speaker, nothing much. The word arrives, and you understand it. There is no gap, no middle step.',
        'But for most language learners, something else happens. The word arrives in English, gets converted into your native language, and then you understand it. That conversion is the problem.',
        'This extra step — translation — is not just slow. It\'s exhausting. Every sentence becomes a math equation you have to solve. And by the time you\'ve solved one, the speaker has moved on to the next.',
        'Research in cognitive psychology calls this processing load. The more cognitive resources you spend on converting language, the fewer you have for actually understanding what\'s being said. Translation doesn\'t help you comprehend faster. It keeps you permanently one step behind.',
        'Native speakers don\'t translate because they never had to. They learned English by experiencing it directly. A dog was always "dog." Coffee was always "coffee." The concept and the word arrived together, as a single unit.',
        'This is what PATTO is built on. Not translation. Direct recognition. When you read a pattern enough times in context, it stops being foreign. It becomes familiar. And familiarity is where fluency lives.',
      ],
      ko: [
        '"사과"라는 단어를 들으면 어떤 일이 일어날까요? 한국어 원어민이라면 별 일 없습니다. 단어가 들어오고, 이해가 됩니다. 간격도, 중간 단계도 없습니다.',
        '하지만 대부분의 언어 학습자에게는 다른 일이 일어납니다. 단어가 영어로 들어오고, 모국어로 변환되고, 그제야 이해가 됩니다. 그 변환이 바로 문제입니다.',
        '이 여분의 단계, 즉 번역은 단순히 느린 것이 아닙니다. 지칩니다. 모든 문장이 풀어야 할 수학 문제가 됩니다. 그리고 하나를 푸는 동안 상대방은 이미 다음 문장으로 넘어가 있습니다.',
        '인지심리학에서는 이를 처리 부하라고 합니다. 언어 변환에 인지 자원을 많이 쓸수록, 실제 내용 이해에 쓸 자원이 줄어듭니다. 번역은 이해를 빠르게 해주지 않습니다. 오히려 영원히 한 발 뒤처지게 만듭니다.',
        '원어민이 번역을 안 하는 이유는 처음부터 그럴 필요가 없었기 때문입니다. 그들은 영어를 직접 경험하며 배웠습니다. 개는 항상 "dog"였고, 커피는 항상 "coffee"였습니다. 개념과 단어가 하나의 단위로 함께 들어왔습니다.',
        '이것이 PATTO가 기반하는 원칙입니다. 번역이 아닌, 직접 인식. 패턴을 문맥 속에서 충분히 많이 읽으면, 그것은 낯선 것이 아니라 친숙한 것이 됩니다. 그리고 친숙함이 곧 유창함이 사는 곳입니다.',
      ],
    },
    research: [
      {
        author: 'John Sweller',
        title: 'Cognitive Load Theory',
        year: 1988,
        brief: { en: 'Mental resources are finite. Translation uses up resources that should be used for comprehension.', ko: '정신적 자원은 유한합니다. 번역은 이해에 써야 할 자원을 소모합니다.' },
      },
      {
        author: 'Stephen Krashen',
        title: 'The Input Hypothesis',
        year: 1982,
        brief: { en: 'Acquisition happens when we receive input we understand directly — not through conscious translation.', ko: '우리가 직접 이해할 수 있는 입력을 받을 때 언어 습득이 일어납니다. 의식적인 번역을 통해서가 아닙니다.' },
      },
    ],
    oneThingToRemember: { en: "Don't translate. Recognize.", ko: '번역하지 마세요. 인식하세요.' },
  },

  {
    id: 2,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'English Isn\'t Mathematics', ko: '영어는 수학이 아니다' },
    readTimeSec: 35,
    illustration: 'pattern',
    body: {
      en: [
        'We were taught English as if it were a system of rules. Subject + verb + object. Add -ed for past tense. Use "a" before consonants, "an" before vowels.',
        'Then we discovered exceptions. "I went," not "I goed." "An hour," not "a hour." And we assumed we hadn\'t learned enough rules yet.',
        'But language doesn\'t work that way. Rules in language are descriptions of what people tend to do — not laws of what they must do. The "rules" of English are someone\'s attempt to describe patterns that evolved over a thousand years without any designer in charge.',
        'Mathematics has proofs. Language has tendencies. Mathematics is closed. Language is alive.',
        'This matters because it changes what you should practice. In math, you master a rule and apply it. In language, you encounter a pattern so many times that it becomes instinct. You don\'t apply "I went" — you simply know it. The knowing comes from exposure, not from memorizing an exception list.',
        'When you stop looking for the rule behind every sentence and start noticing what feels natural, something shifts. You stop solving and start sensing. That shift is the beginning of real fluency.',
      ],
      ko: [
        '우리는 영어를 마치 규칙의 체계인 것처럼 배웠습니다. 주어 + 동사 + 목적어. 과거형에는 -ed를 붙이세요. 자음 앞에는 "a", 모음 앞에는 "an"을 쓰세요.',
        '그러다 예외를 발견했습니다. "I goed"가 아니라 "I went". "a hour"가 아니라 "an hour". 그리고 우리는 아직 배워야 할 규칙이 더 있다고 생각했습니다.',
        '그런데 언어는 그런 식으로 작동하지 않습니다. 언어의 규칙은 사람들이 하는 경향을 묘사한 것이지, 반드시 지켜야 할 법이 아닙니다. 영어의 "규칙"은 누군가가 수천 년에 걸쳐 자연스럽게 형성된 패턴을 설계자도 없이 기술한 것입니다.',
        '수학에는 증명이 있습니다. 언어에는 경향이 있습니다. 수학은 닫혀 있습니다. 언어는 살아 있습니다.',
        '이것이 중요한 이유는 연습해야 할 것이 달라지기 때문입니다. 수학에서는 규칙을 익혀서 적용합니다. 언어에서는 패턴을 수없이 많이 접하다 보면 그것이 본능이 됩니다. "I went"를 적용하는 게 아니라, 그냥 알게 됩니다. 그 앎은 예외 목록 암기가 아닌 노출에서 옵니다.',
        '모든 문장 뒤에서 규칙을 찾으려는 대신 무엇이 자연스럽게 느껴지는지 주목하기 시작하면 뭔가가 바뀝니다. 풀려는 노력을 멈추고 감각하기 시작합니다. 그 전환이 진정한 유창함의 시작입니다.',
      ],
    },
    research: [
      {
        author: 'Paul Nation',
        title: 'Learning Vocabulary in Another Language',
        year: 2001,
        brief: { en: 'Frequency of exposure, not rule memorization, determines how well vocabulary and patterns are retained.', ko: '어휘와 패턴이 얼마나 잘 유지되는지는 규칙 암기가 아닌 노출 빈도가 결정합니다.' },
      },
    ],
    oneThingToRemember: { en: 'Learn what\'s common, not what\'s correct.', ko: '흔한 것을 배우세요. 옳은 것이 아닌.' },
  },

  {
    id: 3,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'Patterns Before Grammar', ko: '문법보다 패턴이 먼저다' },
    readTimeSec: 35,
    illustration: 'pattern',
    body: {
      en: [
        'A child learning their first language never studies grammar. No one sits a three-year-old down and explains verb conjugation. Yet by age four, most children are using language with remarkable accuracy.',
        'How? Patterns. Children hear "I go," "she goes," "they go" hundreds of times before they ever learn that this is called subject-verb agreement. They feel the pattern before they can name it.',
        'This is not a coincidence. It is how the human brain acquires language. The brain is a pattern-recognition machine. It extracts regularities from input without being explicitly taught what to look for.',
        '"I don\'t know what I\'m doing" is one pattern. "What are you talking about?" is another. You don\'t need to analyze them. You need to encounter them — repeatedly, in context — until they feel like your own.',
        'Grammar comes after patterns, not before them. Grammar is what linguists write after observing what speakers actually do. It is a description of the patterns, not the source of them.',
        'This is why PATTO leads with stories and patterns, not grammar tables. Not because grammar is wrong. But because for the brain, patterns come first. Always.',
      ],
      ko: [
        '모국어를 배우는 아이는 문법을 공부하지 않습니다. 세 살짜리에게 동사 변화를 설명해 주는 사람은 없습니다. 그런데도 네 살이 되면 대부분의 아이들이 놀라울 만큼 정확하게 언어를 사용합니다.',
        '어떻게 가능할까요? 패턴입니다. 아이들은 "I go", "she goes", "they go"를 수백 번 듣고 나서야 비로소 이것이 주어-동사 일치라는 것을 배웁니다. 이름을 붙이기도 전에 패턴을 느끼는 것입니다.',
        '이것은 우연이 아닙니다. 인간의 뇌가 언어를 습득하는 방식입니다. 뇌는 패턴 인식 기계입니다. 무엇을 찾아야 하는지 명시적으로 가르쳐 주지 않아도 입력에서 규칙성을 추출합니다.',
        '"I don\'t know what I\'m doing"은 하나의 패턴입니다. "What are you talking about?"도 마찬가지입니다. 분석할 필요가 없습니다. 그냥 만나면 됩니다. 문맥 속에서 반복적으로, 자신의 것처럼 느껴질 때까지.',
        '문법은 패턴 뒤에 옵니다. 먼저 오는 것이 아닙니다. 문법은 언어학자들이 화자들의 실제 행동을 관찰한 후 쓴 것입니다. 패턴의 묘사이지, 패턴의 출처가 아닙니다.',
        '이것이 PATTO가 문법 표 대신 이야기와 패턴으로 시작하는 이유입니다. 문법이 틀려서가 아니라, 뇌에게는 패턴이 항상 먼저이기 때문입니다.',
      ],
    },
    research: [
      {
        author: 'Nick Ellis',
        title: 'Frequency Effects in Language Processing',
        year: 2002,
        brief: { en: 'Language acquisition is fundamentally statistical. The brain tracks frequency and extracts patterns automatically.', ko: '언어 습득은 근본적으로 통계적입니다. 뇌는 빈도를 추적하고 자동으로 패턴을 추출합니다.' },
      },
    ],
    oneThingToRemember: { en: 'Trust the pattern. Question the rule.', ko: '패턴을 믿으세요. 규칙은 의심하세요.' },
  },

  {
    id: 4,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'Why Stories Matter', ko: '이야기가 중요한 이유' },
    readTimeSec: 40,
    illustration: 'book',
    body: {
      en: [
        'Consider two ways to learn the phrase "I couldn\'t help but notice." One: write it in a notebook twenty times. Two: read a story where a character says it to someone they\'ve been quietly watching.',
        'The second one stays.',
        'This is not a matter of preference. It is a matter of how memory works. The brain stores information in networks. When a phrase is embedded in a story — in a scene, with characters, with emotion — it connects to dozens of other stored memories. Those connections make retrieval effortless.',
        'A flashcard is an island. A story is a map. Every phrase in a story is connected to the phrases around it, to the situation, to the feeling of the moment. When you encounter that phrase again in real life, the whole map activates at once.',
        'Language was born in stories. Before writing existed, humans transmitted knowledge, culture, and identity through narrative. The brain did not evolve for flashcards. It evolved to understand and remember stories.',
        'Every story you read in PATTO is not just a vehicle for patterns. It is the pattern\'s natural home. You are not studying language. You are living it for a few minutes at a time.',
      ],
      ko: [
        '"I couldn\'t help but notice"라는 표현을 배우는 두 가지 방법을 생각해 보세요. 하나는 노트에 스무 번 받아쓰는 것. 다른 하나는 한 인물이 조용히 지켜보던 누군가에게 이 말을 하는 이야기를 읽는 것.',
        '두 번째가 기억에 남습니다.',
        '이것은 취향의 문제가 아닙니다. 기억이 작동하는 방식의 문제입니다. 뇌는 정보를 네트워크로 저장합니다. 표현이 이야기 속에 담길 때, 즉 장면과 인물과 감정 속에 놓일 때, 그것은 다른 수십 개의 기억과 연결됩니다. 그 연결이 기억 인출을 쉽게 만들어 줍니다.',
        '플래시카드는 섬입니다. 이야기는 지도입니다. 이야기 속의 모든 표현은 주변 표현들, 상황, 그 순간의 감정과 연결되어 있습니다. 실생활에서 그 표현을 다시 만나면, 지도 전체가 한꺼번에 활성화됩니다.',
        '언어는 이야기에서 태어났습니다. 문자가 존재하기 전, 인간은 지식과 문화와 정체성을 이야기를 통해 전달했습니다. 뇌는 플래시카드를 위해 진화하지 않았습니다. 이야기를 이해하고 기억하기 위해 진화했습니다.',
        'PATTO의 모든 이야기는 단순히 패턴을 담는 그릇이 아닙니다. 패턴의 자연스러운 집입니다. 당신은 언어를 공부하는 것이 아닙니다. 잠시 동안 언어 속에서 살고 있는 것입니다.',
      ],
    },
    research: [
      {
        author: 'Jerome Bruner',
        title: 'Actual Minds, Possible Worlds',
        year: 1986,
        brief: { en: 'Narrative is one of the two fundamental modes of human thought. It is also the most powerful memory structure we have.', ko: '서사는 인간 사고의 두 가지 근본적 방식 중 하나입니다. 또한 우리가 가진 가장 강력한 기억 구조이기도 합니다.' },
      },
      {
        author: 'Gordon Bower',
        title: 'Mood and Memory',
        year: 1981,
        brief: { en: 'Emotional context dramatically improves memory encoding. Stories create emotion; lists do not.', ko: '정서적 맥락은 기억 인코딩을 극적으로 향상시킵니다. 이야기는 감정을 만들지만, 목록은 그렇지 않습니다.' },
      },
    ],
    oneThingToRemember: { en: 'A story remembered is a lesson learned.', ko: '기억된 이야기는 배운 교훈입니다.' },
  },

  {
    id: 5,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'Language Is Experience', ko: '언어는 경험이다' },
    readTimeSec: 38,
    illustration: 'coffee',
    body: {
      en: [
        'Close your eyes and think of the word "coffee." What comes up? For most people, it\'s not a definition. It\'s something closer to a sensation — warmth, a smell, a morning, a feeling.',
        'Language is not a code for reality. Language is tied to experience. Every word carries the weight of every time you\'ve encountered what it represents.',
        'This is why translation is never perfect. When you translate "커피" into "coffee," you\'re not moving between two identical containers. The word "coffee" carries decades of English-speaking culture inside it. Morning rituals. Coffee shop conversations. The smell of a New York diner. "커피" carries something different.',
        'You don\'t learn the full meaning of an English word by reading its definition. You learn it by encountering it in context, repeatedly, across different situations, until it starts to carry its own weight in your memory.',
        'This is also why immersion works. Not because you hear more English — but because you start having experiences in English. Emotions, reactions, thoughts in the language. The language stops being foreign when it starts carrying your experiences.',
        'Every story in PATTO is a small experience. A moment. A scene. The goal is not to teach you what words mean. It\'s to give you memories in English.',
      ],
      ko: [
        '"커피"라는 단어를 떠올려 보세요. 무엇이 떠오르나요? 대부분의 사람들에게는 정의가 아닙니다. 따뜻함, 향, 아침, 기분 같은 감각에 가까운 무언가입니다.',
        '언어는 현실을 코딩한 것이 아닙니다. 언어는 경험과 묶여 있습니다. 모든 단어는 그것이 대표하는 것을 만났던 모든 순간의 무게를 담고 있습니다.',
        '이것이 번역이 결코 완벽할 수 없는 이유입니다. "커피"를 "coffee"로 번역할 때, 동일한 두 그릇 사이를 이동하는 것이 아닙니다. "coffee"라는 단어 안에는 수십 년의 영어권 문화가 담겨 있습니다. 아침 의식들, 카페에서의 대화들, 뉴욕 식당의 냄새. "커피"는 다른 무언가를 담고 있습니다.',
        '영어 단어의 완전한 의미는 정의를 읽는다고 배울 수 없습니다. 다양한 상황에서 반복적으로 문맥 속에서 만나야 배울 수 있습니다. 그것이 기억 속에서 자체적인 무게를 갖기 시작할 때까지.',
        '이것이 몰입이 효과적인 이유이기도 합니다. 더 많은 영어를 들어서가 아니라, 영어로 경험을 시작하기 때문입니다. 그 언어로 감정을 느끼고, 반응하고, 생각하는 것. 언어가 자신의 경험을 담기 시작할 때 비로소 낯설지 않게 됩니다.',
        'PATTO의 모든 이야기는 작은 경험입니다. 하나의 순간, 하나의 장면. 목표는 단어의 뜻을 가르치는 것이 아닙니다. 영어로 된 기억을 드리는 것입니다.',
      ],
    },
    research: [
      {
        author: 'Eleanor Rosch',
        title: 'Cognitive Representations of Semantic Categories',
        year: 1975,
        brief: { en: 'Words are not stored as definitions. They are stored as prototypes — mental images built from experience.', ko: '단어는 정의로 저장되지 않습니다. 경험에서 만들어진 원형(prototype)으로 저장됩니다.' },
      },
    ],
    oneThingToRemember: { en: 'Experience English. Don\'t study it.', ko: '영어를 경험하세요. 공부하지 말고.' },
  },

  {
    id: 6,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'The Grammar Illusion', ko: '문법의 환상' },
    readTimeSec: 35,
    illustration: 'pen',
    body: {
      en: [
        'There is a widely shared belief about language learning: if you understand the grammar, you can speak the language. Study enough rules, pass enough tests, and fluency will follow.',
        'It doesn\'t.',
        'We know this because we can observe people who score perfectly on grammar tests but can\'t hold a five-minute conversation. And we can observe native speakers who couldn\'t pass a grammar test but speak fluidly and precisely.',
        'Understanding grammar is like understanding how an engine works. Useful knowledge. But it doesn\'t mean you can drive. Driving requires a different kind of knowing — muscle memory, spatial intuition, automatic response — built through hours of practice, not hours of studying car manuals.',
        'Grammar tells you what\'s possible. Experience tells you what\'s natural. "It is I" is grammatically correct. "It\'s me" is what everyone says. If your goal is to communicate, the second matters more.',
        'Studying grammar gives you a map. But you learn a city by walking its streets, not by memorizing its layout. At some point, the map has to become something you no longer need to look at.',
      ],
      ko: [
        '언어 학습에 대해 널리 퍼진 믿음이 있습니다. 문법을 이해하면 언어를 말할 수 있다는 것. 규칙을 충분히 익히고, 충분한 시험을 통과하면 유창함이 따라온다는 것입니다.',
        '그렇지 않습니다.',
        '우리는 이것을 관찰로 알 수 있습니다. 문법 시험에서 만점을 받아도 5분짜리 대화를 이어가지 못하는 사람들이 있습니다. 그리고 문법 시험에 통과하지 못해도 유창하고 정확하게 말하는 원어민들이 있습니다.',
        '문법을 이해하는 것은 엔진 작동 원리를 이해하는 것과 같습니다. 유용한 지식입니다. 하지만 운전할 수 있다는 뜻은 아닙니다. 운전에는 다른 종류의 앎이 필요합니다. 자동차 매뉴얼을 읽는 시간이 아니라 수시간의 연습으로 쌓이는 근육 기억, 공간 직관, 자동 반응.',
        '문법은 가능한 것을 알려줍니다. 경험은 자연스러운 것을 알려줍니다. "It is I"는 문법적으로 맞습니다. "It\'s me"는 모두가 하는 말입니다. 목표가 소통이라면, 두 번째가 더 중요합니다.',
        '문법 공부는 지도를 줍니다. 하지만 도시는 지도를 외운다고 아는 것이 아니라, 거리를 걸어야 알게 됩니다. 어느 시점에는 지도 없이도 찾아갈 수 있어야 합니다.',
      ],
    },
    research: [
      {
        author: 'Stephen Krashen',
        title: 'Principles and Practice in Second Language Acquisition',
        year: 1982,
        brief: { en: 'Consciously learned grammar rules play a limited role in actual language production. Acquisition comes from input, not instruction.', ko: '의식적으로 배운 문법 규칙은 실제 언어 생산에서 제한적인 역할만 합니다. 습득은 지도가 아닌 입력에서 옵니다.' },
      },
    ],
    oneThingToRemember: { en: 'Stop correcting. Start feeling.', ko: '교정을 멈추세요. 느끼기 시작하세요.' },
  },

  {
    id: 7,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'A Word Is Never Just a Word', ko: '단어는 단순한 단어가 아니다' },
    readTimeSec: 38,
    illustration: 'speech',
    body: {
      en: [
        'Open any English-Korean dictionary and look up the word "sorry." You\'ll find a translation. But what you won\'t find is everything else that word carries.',
        'In English, "sorry" can mean sympathy ("I\'m sorry for your loss"), apology ("I\'m sorry I was late"), surprise ("Sorry?"), or refusal ("Sorry, I can\'t"). The same word, said differently, means four completely different things.',
        'Vocabulary is an iceberg. The definition is the part above the water. Below it: tone, register, cultural context, implied meaning, what it signals about the speaker, when it\'s appropriate, when it\'s not.',
        'This is why learning vocabulary from lists fails so reliably. You learn the definition. You miss the iceberg. You use the word, and something feels slightly wrong, and you don\'t know why.',
        'Context doesn\'t just help you remember a word. It teaches you the whole word — the part below the surface. When you read "sorry" in different situations, across different stories, used by different characters, you begin to feel its full range. And that feeling is what makes language natural.',
        'Every vocabulary word you know from a list is a word you half-know. Every word you know from a story is a word you actually know.',
      ],
      ko: [
        '영한 사전을 펴고 "sorry"를 찾아보세요. 번역이 나옵니다. 하지만 그 단어가 담고 있는 다른 모든 것은 없습니다.',
        '영어에서 "sorry"는 공감("I\'m sorry for your loss"), 사과("I\'m sorry I was late"), 놀람("Sorry?"), 또는 거절("Sorry, I can\'t")을 의미할 수 있습니다. 같은 단어를 다르게 말하면 완전히 다른 네 가지 뜻이 됩니다.',
        '어휘는 빙산입니다. 정의는 수면 위에 보이는 부분입니다. 아래에는 어조, 격식, 문화적 맥락, 함축된 의미, 화자에 대해 암시하는 것, 어울리는 상황과 어울리지 않는 상황이 있습니다.',
        '이것이 목록으로 어휘를 배우는 것이 그렇게 자주 실패하는 이유입니다. 정의를 배웁니다. 빙산은 놓칩니다. 단어를 사용하면, 뭔가 약간 어색한 느낌이 드는데, 이유를 모릅니다.',
        '맥락은 단어를 기억하는 데 도움이 될 뿐만이 아닙니다. 단어 전체를 가르쳐 줍니다. 수면 아래 부분까지. 다른 이야기에서, 다른 인물들이 쓰는 다양한 상황에서 "sorry"를 읽다 보면, 그 단어의 전체 범위를 느끼기 시작합니다. 그리고 그 느낌이 언어를 자연스럽게 만드는 것입니다.',
        '목록으로 아는 모든 어휘 단어는 절반만 아는 단어입니다. 이야기로 아는 단어는 진짜로 아는 단어입니다.',
      ],
    },
    research: [
      {
        author: 'Paul Nation',
        title: 'High Frequency Vocabulary and Reading',
        year: 2006,
        brief: { en: 'Full knowledge of a word — including its collocations, register, and connotations — requires multiple encounters in varied contexts.', ko: '배치, 격식, 어감을 포함한 단어의 완전한 지식은 다양한 문맥에서의 여러 번의 만남을 필요로 합니다.' },
      },
    ],
    oneThingToRemember: { en: 'Learn words in context. Always.', ko: '단어는 항상 문맥 속에서 배우세요.' },
  },

  {
    id: 8,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'What a Pattern Really Is', ko: '패턴이란 진정으로 무엇인가' },
    readTimeSec: 36,
    illustration: 'pattern',
    body: {
      en: [
        'When a native speaker hears "What do you think about —", they don\'t hear five separate words. They hear one unit. The words have merged into a single chunk, stored and retrieved together.',
        'This is what a pattern is. Not a collection of words. A compressed unit of meaning that the brain treats as a single piece.',
        'George Miller, a cognitive psychologist, famously showed that working memory can hold about seven items at once — plus or minus two. The trick is that a "chunk" counts as one item, regardless of its actual length.',
        '"What do you think about that?" is one chunk. "I\'m not sure what you mean" is one chunk. Fluent speakers are not processing more words per second than beginners. They are processing more chunks. And chunks compress the load.',
        'This is why native speakers can carry on a conversation while making coffee, or thinking about something else. Most of what they\'re saying is retrieved, not constructed. The patterns are already assembled.',
        'When you practice a pattern until it becomes automatic, you are building a chunk. You are compressing something that used to require effort into something that requires none. This is not repetition for the sake of repetition. It is the actual mechanism of fluency.',
      ],
      ko: [
        '원어민이 "What do you think about —"을 들을 때, 다섯 개의 개별 단어를 듣는 것이 아닙니다. 하나의 단위로 듣습니다. 단어들이 함께 저장되고 함께 인출되는 하나의 덩어리로 합쳐진 것입니다.',
        '이것이 패턴입니다. 단어들의 모음이 아닙니다. 뇌가 하나의 조각으로 다루는 압축된 의미 단위입니다.',
        '인지심리학자 George Miller는 작업 기억이 한 번에 약 7개(±2)의 항목을 보유할 수 있다는 것을 밝혔습니다. 핵심은 "덩어리(chunk)"가 실제 길이에 관계없이 하나의 항목으로 계산된다는 것입니다.',
        '"What do you think about that?"은 하나의 덩어리입니다. "I\'m not sure what you mean"도 하나의 덩어리입니다. 유창한 화자들이 초보자보다 초당 더 많은 단어를 처리하는 것이 아닙니다. 더 많은 덩어리를 처리하는 것입니다. 그리고 덩어리는 부하를 압축합니다.',
        '이것이 원어민이 커피를 만들면서, 혹은 다른 것을 생각하면서 대화를 이어갈 수 있는 이유입니다. 그들이 말하는 것의 대부분은 구성된 것이 아니라 인출된 것입니다. 패턴은 이미 조립되어 있습니다.',
        '패턴을 자동화될 때까지 연습할 때, 당신은 덩어리를 만들고 있는 것입니다. 노력이 필요하던 것을 노력이 필요 없는 것으로 압축하는 것입니다. 이것은 반복을 위한 반복이 아닙니다. 유창함의 실제 메커니즘입니다.',
      ],
    },
    research: [
      {
        author: 'George Miller',
        title: 'The Magical Number Seven, Plus or Minus Two',
        year: 1956,
        brief: { en: 'Working memory is limited in capacity, but chunking allows us to hold more information by grouping it into meaningful units.', ko: '작업 기억은 용량이 제한되어 있지만, 청킹을 통해 의미 있는 단위로 묶어 더 많은 정보를 하나의 단위로 처리할 수 있습니다.' },
      },
    ],
    oneThingToRemember: { en: 'One pattern is worth ten vocabulary words.', ko: '패턴 하나가 단어 열 개보다 낫습니다.' },
  },

  {
    id: 9,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'Reading Without Thinking', ko: '생각 없이 읽기' },
    readTimeSec: 34,
    illustration: 'book',
    body: {
      en: [
        'There is a particular experience that readers in their native language know well. You are deep in a book and you suddenly realize you\'ve been reading for two hours without noticing. You were not aware of the words. You were only aware of the story.',
        'That is what fluency feels like from the inside.',
        'When you first learn to drive, every action is conscious. Mirror, signal, brake, gear. You think about every move. Then, years later, you arrive at your destination and barely remember the drive. The mechanics became automatic.',
        'Language fluency works the same way. In the beginning, you notice the language. You decode each sentence. Over time, with enough exposure, the decoding becomes invisible. You stop noticing the words and start noticing only what they mean.',
        'This shift — from noticing language to noticing meaning — is the most significant threshold in language acquisition. It doesn\'t happen through a single study session. It happens gradually, through thousands of hours of comprehensible input, until the processing becomes automatic.',
        'Every story you read in PATTO is practice in this direction. Not studying English. Reading in English — and one day, reading without thinking about English at all.',
      ],
      ko: [
        '모국어로 책을 읽는 독자들이 잘 알고 있는 경험이 있습니다. 책에 깊이 빠져들다 보니 2시간이 흐른 것을 전혀 몰랐던 것. 단어를 의식하지 않았습니다. 이야기만 의식했습니다.',
        '그것이 유창함이 내부에서 느껴지는 방식입니다.',
        '운전을 처음 배울 때, 모든 동작이 의식적입니다. 사이드미러, 방향지시등, 브레이크, 기어. 모든 움직임을 생각합니다. 그러다 몇 년 후, 목적지에 도착했는데 어떻게 왔는지 잘 기억이 나지 않습니다. 그 기계적인 동작들이 자동화되었습니다.',
        '언어 유창함도 같은 방식으로 작동합니다. 처음에는 언어를 알아챕니다. 각 문장을 해독합니다. 시간이 흐르면서, 충분한 노출을 통해, 해독이 보이지 않게 됩니다. 단어를 알아채기 멈추고 그것이 의미하는 것만 알아채기 시작합니다.',
        '이 전환, 즉 언어를 알아채는 것에서 의미를 알아채는 것으로의 전환은 언어 습득에서 가장 중요한 문턱입니다. 하나의 공부 세션으로 이루어지지 않습니다. 수천 시간의 이해 가능한 입력을 통해 처리가 자동화될 때까지 서서히 일어납니다.',
        'PATTO에서 읽는 모든 이야기는 이 방향으로의 연습입니다. 영어를 공부하는 것이 아닌 영어로 읽는 것. 그리고 언젠가는 영어에 대해 전혀 생각하지 않고 읽게 됩니다.',
      ],
    },
    research: [
      {
        author: 'David LaBerge & S. Jay Samuels',
        title: 'Toward a Theory of Automatic Information Processing in Reading',
        year: 1974,
        brief: { en: 'Reading fluency develops when decoding becomes automatic, freeing cognitive resources for comprehension.', ko: '읽기 유창함은 해독이 자동화될 때 발달하며, 그때 인지 자원이 이해에 해방됩니다.' },
      },
    ],
    oneThingToRemember: { en: 'Read until you forget you\'re reading.', ko: '읽고 있다는 것을 잊을 때까지 읽으세요.' },
  },

  {
    id: 10,
    part: 1,
    partTitle: 'The Nature of Language',
    title: { en: 'The Voice in Your Head', ko: '머릿속의 목소리' },
    readTimeSec: 37,
    illustration: 'brain',
    body: {
      en: [
        'Right now, as you read this, there is a voice in your head. It is probably reading in Korean. And that voice — that internal narrator — is one of the most significant barriers between you and English fluency.',
        'Language learners often describe a specific moment of breakthrough: the first time they had a dream in English, or the first time they caught themselves thinking in English before translating. These moments feel remarkable because they are. They signal that the internal voice has started to shift.',
        'The internal voice is not just a quirk of consciousness. It shapes how we process everything. When your internal voice speaks Korean, you are fundamentally operating in Korean — translating in and out of English as needed. That is tiring, slow, and always one step removed.',
        'The shift doesn\'t happen by trying to "think in English." That effort is usually forced and awkward. It happens through enough exposure that English starts to feel like a natural channel for thought — not a foreign one you switch into.',
        'Start small. When you see a color, name it in English. When you think of an object, try the English word first. Not as a translation exercise — but as a tiny attempt to let English become part of how you see the world.',
        'The voice follows the experience. Give it enough English experiences, and it starts reaching for English on its own.',
      ],
      ko: [
        '지금 이것을 읽으면서, 머릿속에 목소리가 있을 것입니다. 아마도 한국어로 읽고 있을 것입니다. 그리고 그 목소리, 즉 내면의 내레이터는 영어 유창함 사이의 가장 중요한 장벽 중 하나입니다.',
        '언어 학습자들은 종종 특정 돌파구 순간을 묘사합니다. 처음으로 영어로 꿈을 꿨을 때, 혹은 처음으로 번역하기 전에 영어로 생각하는 자신을 발견했을 때. 이 순간들이 놀라운 이유는 실제로 놀랍기 때문입니다. 내면의 목소리가 전환되기 시작했다는 신호입니다.',
        '내면의 목소리는 단순한 의식의 특이점이 아닙니다. 우리가 모든 것을 처리하는 방식을 형성합니다. 내면의 목소리가 한국어로 말할 때, 근본적으로 한국어로 작동하면서 필요에 따라 영어로 번역하는 것입니다. 그것은 피곤하고, 느리며, 항상 한 발 떨어져 있습니다.',
        '전환은 "영어로 생각하려고" 노력해서 일어나지 않습니다. 그 노력은 보통 강요되고 어색합니다. 충분한 노출을 통해 영어가 낯선 채널이 아닌 자연스러운 생각의 채널처럼 느껴지기 시작할 때 일어납니다.',
        '작게 시작하세요. 색상을 볼 때 영어로 이름을 떠올려 보세요. 사물이 생각날 때 영어 단어를 먼저 떠올려 보세요. 번역 연습이 아닌, 영어가 세상을 보는 방식의 일부가 되도록 하는 작은 시도로서.',
        '목소리는 경험을 따라갑니다. 충분한 영어 경험을 주면, 스스로 영어를 찾기 시작합니다.',
      ],
    },
    research: [
      {
        author: 'François Grosjean',
        title: 'Bilingual: Life and Reality',
        year: 2010,
        brief: { en: 'Bilinguals shift dominant language based on context. The more comfortable the context, the more natural the switch.', ko: '이중언어자는 맥락에 따라 주요 언어를 전환합니다. 문맥이 편안할수록 전환이 더 자연스럽습니다.' },
      },
    ],
    oneThingToRemember: { en: 'Change the voice. Change the language.', ko: '목소리를 바꾸세요. 언어가 바뀝니다.' },
  },

  // ── PART 2: How the Brain Learns ──────────────────────────────────────────

  {
    id: 11,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Why Repetition Isn\'t Enough', ko: '반복만으로는 충분하지 않다' },
    readTimeSec: 38,
    illustration: 'clock',
    body: {
      en: [
        'Most people assume that the more times you encounter something, the better you remember it. This is true — but only partially. What matters is not just how often you repeat something, but how you repeat it.',
        'Passive repetition — reading the same flashcard, hearing the same audio, scrolling through the same word list — creates familiarity, not memory. You know you\'ve seen it before. But when you need to retrieve it, nothing comes.',
        'Cognitive scientists call this the "fluency illusion." Something feels familiar, so we assume we know it. But familiarity and retrievability are completely different things. You might recognize a word but still fail to produce it when you need it.',
        'The key distinction is between recognition and retrieval. Recognition is passive — it fires when you see something again. Retrieval is active — it fires when you need to produce something from scratch. Fluency requires retrieval.',
        'To build retrievable memory, you need to practice retrieving it. Close the book and try to recall. Answer a question before you see the answer. The effort of retrieval — even when you fail — is what makes memory durable.',
        'This is why PATTO\'s review system asks you to recall before showing the answer. The difficulty is not a flaw. It is the mechanism.',
      ],
      ko: [
        '대부분의 사람들은 무언가를 더 많이 접할수록 더 잘 기억한다고 생각합니다. 맞습니다. 하지만 일부분만 맞습니다. 중요한 것은 얼마나 자주 반복하느냐가 아니라, 어떻게 반복하느냐입니다.',
        '수동적인 반복, 즉 같은 플래시카드를 읽고, 같은 오디오를 듣고, 같은 단어 목록을 스크롤하는 것은 친숙함을 만들 뿐, 기억을 만들지 않습니다. 본 적이 있다는 것은 압니다. 하지만 필요할 때 인출하려 하면, 아무것도 떠오르지 않습니다.',
        '인지 과학자들은 이것을 "유창함의 환상"이라고 부릅니다. 무언가가 친숙하게 느껴지면 알고 있다고 생각합니다. 하지만 친숙함과 인출 가능성은 완전히 다른 것입니다. 단어를 인식할 수 있어도 필요할 때 떠올리지 못할 수 있습니다.',
        '핵심 구분은 인식과 인출 사이에 있습니다. 인식은 수동적입니다. 다시 볼 때 작동합니다. 인출은 능동적입니다. 처음부터 무언가를 생산해야 할 때 작동합니다. 유창함에는 인출이 필요합니다.',
        '인출 가능한 기억을 만들기 위해서는 인출을 연습해야 합니다. 책을 덮고 기억하려고 해 보세요. 정답을 보기 전에 질문에 대답해 보세요. 인출하려는 노력 자체가, 실패해도, 기억을 지속적으로 만드는 것입니다.',
        '이것이 PATTO의 복습 시스템이 정답을 보여주기 전에 기억하도록 요청하는 이유입니다. 어려움은 결함이 아닙니다. 메커니즘입니다.',
      ],
    },
    research: [
      {
        author: 'Henry Roediger & Jeffrey Karpicke',
        title: 'Test-Enhanced Learning',
        year: 2006,
        brief: { en: 'Retrieval practice produces greater long-term retention than repeated study, even when initial performance looks the same.', ko: '인출 연습은 초기 성적이 같아 보여도 반복 학습보다 훨씬 높은 장기 기억 유지를 만들어냅니다.' },
      },
    ],
    oneThingToRemember: { en: "Don't review. Recall.", ko: '복습하지 마세요. 기억하세요.' },
  },

  {
    id: 12,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Active Recall', ko: '능동적 기억 떠올리기' },
    readTimeSec: 36,
    illustration: 'brain',
    body: {
      en: [
        'Here is a counterintuitive finding from memory research: being tested on material improves retention far more than reading that material again. Not slightly more. Dramatically more.',
        'This is called the testing effect, or retrieval practice effect. And it works even when you get the answer wrong. The act of attempting retrieval — of searching for an answer — strengthens the memory trace more than passive review.',
        'Why? Because retrieval is reconstruction. Every time you pull a memory out of storage, you rebuild it slightly. That rebuilding process makes it stronger, more interconnected, more retrievable in the future.',
        'The implication for language learning is significant. Reading through vocabulary lists, even carefully, leaves weak traces. Trying to remember a word before checking, even imperfectly, builds strong ones.',
        'This is also why the difficulty of recall is not a problem to be reduced. The effort is the point. Cognitive scientists call this a "desirable difficulty" — harder to do in the moment, but dramatically better in the long run.',
        'When you review in PATTO and have to think before you see the answer, you are not struggling because you haven\'t learned enough. You are struggling because that struggle is what learning is.',
      ],
      ko: [
        '기억 연구에서 직관에 반하는 발견이 있습니다. 자료를 시험받는 것이 같은 자료를 다시 읽는 것보다 훨씬 더 기억 유지를 향상시킨다는 것입니다. 조금이 아닙니다. 극적으로.',
        '이것을 시험 효과, 또는 인출 연습 효과라고 합니다. 그리고 틀렸을 때도 효과가 있습니다. 인출을 시도하는 행위, 즉 답을 찾는 행위 자체가 수동적 복습보다 기억 흔적을 더 강하게 만듭니다.',
        '왜일까요? 인출은 재구성이기 때문입니다. 기억 저장소에서 기억을 꺼낼 때마다 그것을 약간씩 다시 만듭니다. 그 재구성 과정이 기억을 더 강하고, 더 상호 연결되고, 미래에 더 잘 인출 가능하게 만듭니다.',
        '언어 학습에 대한 함의는 중요합니다. 어휘 목록을 아무리 주의 깊게 읽어도 약한 흔적을 남깁니다. 확인하기 전에 단어를 기억하려고 노력하면, 불완전하더라도, 강한 흔적을 만듭니다.',
        '이것이 또한 어려움이 줄여야 할 문제가 아닌 이유입니다. 노력이 핵심입니다. 인지 과학자들은 이것을 "바람직한 어려움"이라고 부릅니다. 당장은 하기 어렵지만, 장기적으로는 극적으로 더 효과적입니다.',
        'PATTO에서 복습하다가 정답을 보기 전에 생각해야 할 때, 충분히 배우지 않아서 힘든 것이 아닙니다. 그 힘듦이 곧 학습이기 때문에 힘든 것입니다.',
      ],
    },
    research: [
      {
        author: 'Robert Bjork',
        title: 'Memory and Metamemory Considerations in the Training of Human Beings',
        year: 1994,
        brief: { en: 'Desirable difficulties — challenges that slow learning in the short term — dramatically improve long-term retention.', ko: '바람직한 어려움, 즉 단기적으로 학습을 느리게 하는 도전들은 장기 기억 유지를 극적으로 향상시킵니다.' },
      },
    ],
    oneThingToRemember: { en: 'Close the book. Try to remember.', ko: '책을 덮으세요. 기억해 보세요.' },
  },

  {
    id: 13,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Context Beats Memorization', ko: '맥락이 암기를 이긴다' },
    readTimeSec: 37,
    illustration: 'book',
    body: {
      en: [
        'There is a research finding that surprises almost everyone who hears it: learning vocabulary from word lists is significantly less effective than learning the same words in context.',
        'Not slightly less effective. Paul Nation\'s research suggests words learned in rich contexts are retained at roughly three times the rate of words learned in isolation. Three times.',
        'The reason is how memory actually works. The brain doesn\'t store isolated pieces of information. It stores networks. Every memory is a node connected to other nodes — to the context in which it was learned, to the emotions present at the time, to the other information encountered simultaneously.',
        'A word on a list has one connection: its definition. A word in a story has dozens: the scene, the character, the emotion, the surrounding sentences, the word before and after it. That network is what retrieval pulls on.',
        'Think of it like anchoring a boat. One anchor holds reasonably well. Five anchors in different directions, and nothing is moving that boat. Context is what provides the extra anchors.',
        'When you read a story in PATTO and encounter a pattern in a scene — not on a list — you are building a network, not planting a single flag. That network is what survives.',
      ],
      ko: [
        '거의 모든 사람이 들으면 놀라는 연구 결과가 있습니다. 단어 목록으로 어휘를 배우는 것은 같은 단어를 맥락 속에서 배우는 것보다 훨씬 덜 효과적이라는 것입니다.',
        '조금 덜 효과적인 것이 아닙니다. Paul Nation의 연구에 따르면 풍부한 맥락 속에서 배운 단어는 고립되어 배운 단어보다 약 세 배의 비율로 기억됩니다. 세 배입니다.',
        '그 이유는 기억이 실제로 작동하는 방식에 있습니다. 뇌는 고립된 정보를 저장하지 않습니다. 네트워크를 저장합니다. 모든 기억은 학습된 맥락, 그 당시의 감정, 동시에 만난 다른 정보와 연결된 노드입니다.',
        '목록의 단어는 한 개의 연결이 있습니다. 그 정의. 이야기의 단어는 수십 개의 연결이 있습니다. 장면, 인물, 감정, 주변 문장들, 앞뒤 단어들. 그 네트워크가 인출이 잡아당기는 것입니다.',
        '닻을 내리는 것과 같습니다. 하나의 닻은 꽤 잘 잡아줍니다. 다섯 개의 닻을 다른 방향에 내리면, 아무것도 그 배를 움직일 수 없습니다. 맥락이 여분의 닻을 제공하는 것입니다.',
        'PATTO에서 이야기를 읽으며 목록이 아닌 장면 속에서 패턴을 만날 때, 단일 깃발을 세우는 것이 아닌 네트워크를 만드는 것입니다. 그 네트워크가 살아남는 것입니다.',
      ],
    },
    research: [
      {
        author: 'Paul Nation',
        title: 'Learning Vocabulary in Another Language',
        year: 2001,
        brief: { en: 'Contextual vocabulary acquisition is significantly more effective than decontextualized word learning.', ko: '맥락적 어휘 습득은 탈맥락화된 단어 학습보다 훨씬 더 효과적입니다.' },
      },
    ],
    oneThingToRemember: { en: 'Context creates memory. Lists don\'t.', ko: '맥락이 기억을 만듭니다. 목록은 그렇지 않습니다.' },
  },

  {
    id: 14,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Spaced Repetition', ko: '간격 반복' },
    readTimeSec: 39,
    illustration: 'clock',
    body: {
      en: [
        'In 1885, Hermann Ebbinghaus charted what happens to a memory over time. Without review, memory declines rapidly — 50% gone within an hour, 70% within a day. He called this the forgetting curve.',
        'But Ebbinghaus also found something more useful: every time you successfully recall something before it disappears completely, the forgetting curve resets — and becomes shallower. The memory lasts longer before the next review is needed.',
        'This is the logic of spaced repetition. Review something once, and it lasts a day. Review it again, and it lasts a week. Again, a month. The intervals grow with each successful recall, until the memory becomes near-permanent.',
        'The critical detail: the timing matters. Reviewing immediately after learning produces little benefit. Reviewing just before you forget produces the maximum benefit. The ideal moment to review is the moment you\'re on the edge of forgetting.',
        'This is what PATTO\'s SRS system calculates. It is not scheduling reviews arbitrarily. It is finding the precise moment when retrieval is difficult enough to strengthen memory, but not so late that the memory is already gone.',
        'The result feels harder in the short term. You sometimes struggle to recall things you thought you knew. That struggle is not failure. It is the system working exactly as designed.',
      ],
      ko: [
        '1885년, Hermann Ebbinghaus는 기억이 시간이 지남에 따라 어떻게 되는지 기록했습니다. 복습 없이는 기억이 빠르게 감소합니다. 한 시간 안에 50%, 하루 안에 70%가 사라집니다. 그는 이것을 망각 곡선이라고 불렀습니다.',
        '그러나 Ebbinghaus는 더 유용한 것도 발견했습니다. 기억이 완전히 사라지기 전에 성공적으로 떠올릴 때마다 망각 곡선이 리셋되고, 더 완만해집니다. 다음 복습이 필요하기 전까지 기억이 더 오래 지속됩니다.',
        '이것이 간격 반복의 논리입니다. 한 번 복습하면 하루가 지속됩니다. 다시 복습하면 일주일이 지속됩니다. 또 복습하면 한 달이 지속됩니다. 성공적인 기억 떠올리기마다 간격이 늘어나고, 결국 기억이 거의 영구적이 됩니다.',
        '중요한 세부사항: 타이밍이 중요합니다. 학습 직후 복습은 큰 효과가 없습니다. 잊으려는 순간 직전에 복습하는 것이 최대 효과를 냅니다. 복습하기 이상적인 순간은 막 잊으려는 순간입니다.',
        '이것이 PATTO의 SRS 시스템이 계산하는 것입니다. 복습을 임의로 잡는 것이 아닙니다. 인출이 기억을 강화할 만큼 충분히 어렵지만, 기억이 이미 사라지지는 않는 정확한 순간을 찾는 것입니다.',
        '결과는 단기적으로 더 어렵게 느껴집니다. 안다고 생각했던 것을 떠올리는 데 종종 힘들어합니다. 그 어려움은 실패가 아닙니다. 시스템이 정확히 설계대로 작동하고 있다는 신호입니다.',
      ],
    },
    research: [
      {
        author: 'Hermann Ebbinghaus',
        title: 'Über das Gedächtnis (Memory: A Contribution to Experimental Psychology)',
        year: 1885,
        brief: { en: 'The forgetting curve and the spacing effect — foundational research showing that spaced review dramatically outperforms massed practice.', ko: '망각 곡선과 간격 효과. 간격 복습이 집중 연습보다 훨씬 효과적임을 보여주는 기초 연구입니다.' },
      },
    ],
    oneThingToRemember: { en: 'Review before you forget completely.', ko: '완전히 잊기 전에 복습하세요.' },
  },

  {
    id: 15,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Why Images Help Memory', ko: '이미지가 기억에 도움이 되는 이유' },
    readTimeSec: 36,
    illustration: 'lightbulb',
    body: {
      en: [
        'When you encounter the phrase "the sun was setting behind the mountains," your brain doesn\'t just store the words. It generates an image — light, color, silhouette. That image is stored separately from the words, in a different part of the brain.',
        'This is the basis of dual coding theory, developed by Allan Paivio in the 1970s. Language is encoded verbally. But it is also encoded visually, emotionally, spatially. The more encoding channels activated, the stronger and more durable the memory.',
        'This is one reason why reading stories is more effective than studying word lists. Stories generate mental images. They activate the visual encoding channel that lists leave dormant. Every scene you picture is another layer of encoding.',
        'It also explains why abstract language is harder to retain. "Ambiguity" is harder to picture than "rain." "Conceptual" resists imagery in a way that "brick wall" does not. Abstract concepts need to be anchored to concrete images before they stick.',
        'When you read in PATTO and notice that you\'ve formed a mental picture of the scene — a character in a coffee shop, a conversation in a car — that picture is not a distraction. It is your brain building a second memory system for the same content.',
        'Read visually. See the story as you read it. The image and the language will reinforce each other.',
      ],
      ko: [
        '"해가 산 너머로 지고 있었다"는 표현을 만나면, 뇌는 단어만 저장하지 않습니다. 이미지를 만들어냅니다. 빛, 색깔, 실루엣. 그 이미지는 단어와 별도로, 뇌의 다른 부분에 저장됩니다.',
        '이것이 Allan Paivio가 1970년대에 발전시킨 이중 코딩 이론의 기초입니다. 언어는 언어적으로 인코딩됩니다. 그러나 동시에 시각적으로, 감정적으로, 공간적으로도 인코딩됩니다. 더 많은 인코딩 채널이 활성화될수록, 기억은 더 강하고 지속적이 됩니다.',
        '이것이 이야기를 읽는 것이 단어 목록을 공부하는 것보다 더 효과적인 이유 중 하나입니다. 이야기는 정신적 이미지를 만들어냅니다. 목록이 잠들게 하는 시각적 인코딩 채널을 활성화합니다. 떠올리는 모든 장면이 또 다른 인코딩 층입니다.',
        '또한 추상적인 언어가 왜 기억하기 더 어려운지도 설명합니다. "모호함"은 "비"보다 상상하기 어렵습니다. "개념적"은 "벽돌 담"처럼 이미지를 거부합니다. 추상적인 개념은 구체적인 이미지에 고정되어야 비로소 기억에 남습니다.',
        'PATTO에서 읽다가 장면의 정신적 그림을 만들고 있음을 알아챌 때, 즉 카페 속 인물, 차 안의 대화, 그 그림은 산만함이 아닙니다. 같은 내용을 위한 두 번째 기억 시스템을 만들고 있는 것입니다.',
        '시각적으로 읽으세요. 읽으면서 이야기를 보세요. 이미지와 언어가 서로를 강화할 것입니다.',
      ],
    },
    research: [
      {
        author: 'Allan Paivio',
        title: 'Dual Coding Theory and Education',
        year: 1991,
        brief: { en: 'Information stored in both verbal and visual codes is recalled more reliably than information stored in one code alone.', ko: '언어 코드와 시각 코드 모두에 저장된 정보는 하나의 코드에만 저장된 것보다 더 안정적으로 기억됩니다.' },
      },
    ],
    oneThingToRemember: { en: 'See the word. Don\'t just read it.', ko: '단어를 보세요. 읽기만 하지 말고.' },
  },

  {
    id: 16,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Why Speaking Changes Memory', ko: '말하기가 기억을 바꾸는 이유' },
    readTimeSec: 37,
    illustration: 'wave',
    body: {
      en: [
        'Reading and speaking use different parts of the brain. This is not a minor distinction. It is the reason why people who can read English well still struggle to speak it — and why reading alone is never enough.',
        'When you speak, you are doing something different from when you read. You are producing language, not just recognizing it. And production reveals gaps that recognition conceals.',
        'Merrill Swain, a Canadian applied linguist, called this the output hypothesis. Her research showed that learners who were only exposed to input — reading, listening — acquired some language naturally. But learners who also had to produce output — speak, write — acquired more, and retained it longer.',
        'The act of production forces your brain to do something recognition never requires: retrieve the pattern under pressure, assemble it in real time, and notice when it doesn\'t come. That noticing — the gap between what you wanted to say and what you could say — is itself a learning signal.',
        'This is why reading a pattern silently and reading it aloud are not equivalent. Saying "I was wondering if you could..." out loud activates motor memory, auditory feedback, and production circuits that silent reading never touches.',
        'Read aloud when you can. Not because it\'s more serious. Because it\'s more complete.',
      ],
      ko: [
        '읽기와 말하기는 뇌의 다른 부분을 사용합니다. 이것은 사소한 구분이 아닙니다. 영어를 잘 읽는 사람들이 말하기는 여전히 어려운 이유이며, 읽기만으로는 절대 충분하지 않은 이유입니다.',
        '말할 때, 읽을 때와 다른 일을 합니다. 언어를 단순히 인식하는 것이 아닌, 생산하는 것입니다. 그리고 생산은 인식이 감추는 공백을 드러냅니다.',
        '캐나다의 응용언어학자 Merrill Swain은 이것을 출력 가설이라고 불렀습니다. 그녀의 연구는 읽기와 듣기 같은 입력에만 노출된 학습자들도 어느 정도 언어를 자연스럽게 습득한다는 것을 보여주었습니다. 하지만 말하기와 쓰기 같은 출력도 해야 했던 학습자들은 더 많이, 그리고 더 오래 유지했습니다.',
        '생산 행위는 뇌에게 인식이 절대 요구하지 않는 것을 하도록 강제합니다. 압박 속에서 패턴을 인출하고, 실시간으로 조합하고, 안 나올 때 알아채는 것. 그 알아챔, 즉 말하고 싶었던 것과 말할 수 있는 것 사이의 격차가 그 자체로 학습 신호입니다.',
        '이것이 패턴을 조용히 읽는 것과 소리 내어 읽는 것이 동등하지 않은 이유입니다. "I was wondering if you could..." 를 소리 내어 말하면 조용한 읽기가 절대 닿지 않는 운동 기억, 청각 피드백, 생산 회로를 활성화합니다.',
        '가능하면 소리 내어 읽으세요. 더 진지해서가 아닙니다. 더 완전하기 때문입니다.',
      ],
    },
    research: [
      {
        author: 'Merrill Swain',
        title: 'The Output Hypothesis: Theory and Research',
        year: 1995,
        brief: { en: 'Language output — speaking and writing — produces acquisition that input alone does not, by forcing learners to process language more deeply.', ko: '언어 출력, 즉 말하기와 쓰기는 언어를 더 깊이 처리하도록 학습자를 강제함으로써 입력만으로는 얻지 못하는 습득을 만들어냅니다.' },
      },
    ],
    oneThingToRemember: { en: 'Say it out loud. Something changes.', ko: '소리 내어 말해보세요. 무언가 달라집니다.' },
  },

  {
    id: 17,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Emotion and Memory', ko: '감정과 기억' },
    readTimeSec: 35,
    illustration: 'lightbulb',
    body: {
      en: [
        'Think back to the most vivid memory you have from five years ago. Chances are, it involves a strong emotion — surprise, joy, fear, or loss. The memory is clear not despite the emotion, but because of it.',
        'The amygdala — the brain\'s emotional processing center — flags emotionally significant events for enhanced encoding. It signals the hippocampus to pay extra attention and store this more deeply. Emotion is the brain\'s natural highlighter.',
        'This matters for language learning because it means that boring material is not just unpleasant — it is harder to remember. Content that engages you emotionally, that surprises you, that moves you, gets encoded more deeply and retrieved more reliably.',
        'This is one of the strongest arguments for learning through stories rather than through exercises. Exercises are emotionally neutral. Stories are not. A well-written scene carries tension, humor, longing, regret. That emotional charge is what makes the language in it stick.',
        'It also means that what you find interesting matters. If you force yourself to read content you find completely dull, you are working against your own neurology. Finding material you actually care about is not a luxury. It is a learning strategy.',
        'Engagement is not a reward for learning. It is a condition for it.',
      ],
      ko: [
        '5년 전의 가장 선명한 기억을 떠올려 보세요. 아마도 강한 감정이 관여되어 있을 것입니다. 놀람, 기쁨, 두려움, 혹은 상실. 그 기억이 선명한 것은 감정에도 불구한 것이 아니라, 감정 때문입니다.',
        '편도체, 즉 뇌의 감정 처리 중추는 감정적으로 중요한 사건에 강화 인코딩을 표시합니다. 해마에 신호를 보내 더 주의를 기울이고 더 깊이 저장하도록 합니다. 감정은 뇌의 자연스러운 형광펜입니다.',
        '이것이 언어 학습에 중요한 이유는 지루한 내용이 불쾌할 뿐만 아니라 기억하기 더 어렵다는 뜻이기 때문입니다. 감정적으로 참여하게 하는 내용, 놀라게 하고, 감동시키는 내용은 더 깊이 인코딩되고 더 안정적으로 인출됩니다.',
        '이것이 연습 문제보다 이야기를 통해 배우는 것의 가장 강력한 논거 중 하나입니다. 연습 문제는 감정적으로 중립입니다. 이야기는 그렇지 않습니다. 잘 쓰인 장면은 긴장감, 유머, 그리움, 후회를 담고 있습니다. 그 감정적 충전이 그 안의 언어를 기억에 남게 하는 것입니다.',
        '또한 자신이 흥미롭다고 생각하는 것이 중요하다는 뜻이기도 합니다. 완전히 지루한 내용을 억지로 읽으면, 자신의 신경학과 싸우는 것입니다. 실제로 관심 있는 내용을 찾는 것은 사치가 아닙니다. 학습 전략입니다.',
        '참여는 학습에 대한 보상이 아닙니다. 학습의 조건입니다.',
      ],
    },
    research: [
      {
        author: 'James McGaugh',
        title: 'Memory and Emotion: The Making of Lasting Memories',
        year: 2003,
        brief: { en: 'Emotionally arousing experiences are remembered better because the amygdala modulates memory consolidation in the hippocampus.', ko: '감정적으로 자극적인 경험은 편도체가 해마의 기억 통합을 조절하기 때문에 더 잘 기억됩니다.' },
      },
    ],
    oneThingToRemember: { en: "If it moves you, you'll remember it.", ko: '감동받는다면, 기억할 것입니다.' },
  },

  {
    id: 18,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'The Testing Effect', ko: '시험 효과' },
    readTimeSec: 34,
    illustration: 'pen',
    body: {
      en: [
        'In 2006, Roediger and Karpicke ran an experiment. They had students study a passage in two different ways. Group A read the passage four times. Group B read it once, then was tested on it three times.',
        'A week later, Group B remembered 50% more.',
        'This result was striking enough that it changed how psychologists think about memory. The act of retrieval — of pulling something out of memory — is not a neutral measurement of what you know. It is itself a powerful act of learning.',
        'Every time you retrieve a memory, you rebuild it. You pull the pattern out, examine it briefly, and put it back — slightly stronger, slightly more connected. The retrieval process is also the reinforcement process.',
        'This has an uncomfortable implication: studying for an exam by reading your notes is far less effective than being tested on them. The test is not something you do after you\'ve learned. The test is how you learn.',
        'In PATTO, every review session is a testing event. You are not checking what you know. You are building what you know. The difficulty you feel when trying to recall is not a sign that the system is too hard. It is the sign that the system is working.',
      ],
      ko: [
        '2006년, Roediger와 Karpicke는 실험을 진행했습니다. 학생들이 두 가지 다른 방식으로 글을 공부하도록 했습니다. A 그룹은 글을 네 번 읽었습니다. B 그룹은 한 번 읽고, 세 번 시험을 받았습니다.',
        '일주일 후, B 그룹이 50% 더 많이 기억했습니다.',
        '이 결과는 심리학자들이 기억에 대해 생각하는 방식을 바꿀 만큼 충격적이었습니다. 인출 행위, 즉 기억에서 무언가를 꺼내는 행위는 단순히 알고 있는 것의 중립적인 측정이 아닙니다. 그 자체로 강력한 학습 행위입니다.',
        '기억을 인출할 때마다 그것을 재구성합니다. 패턴을 꺼내 잠깐 살펴보고 다시 넣습니다. 약간 더 강해지고, 약간 더 연결되어서. 인출 과정이 곧 강화 과정이기도 합니다.',
        '불편한 함의가 있습니다. 노트를 읽으며 시험 준비를 하는 것은 시험을 받는 것보다 훨씬 덜 효과적입니다. 시험은 배우고 나서 하는 것이 아닙니다. 시험이 곧 배우는 방법입니다.',
        'PATTO에서 모든 복습 세션은 시험 이벤트입니다. 아는 것을 확인하는 것이 아닙니다. 아는 것을 만드는 것입니다. 기억하려고 할 때의 어려움은 시스템이 너무 어렵다는 신호가 아닙니다. 시스템이 작동하고 있다는 신호입니다.',
      ],
    },
    research: [
      {
        author: 'Henry Roediger & Jeffrey Karpicke',
        title: 'The Power of Testing Memory',
        year: 2006,
        brief: { en: 'Retrieval practice produces more durable long-term memory than restudying the same material.', ko: '인출 연습은 같은 자료를 다시 공부하는 것보다 더 지속적인 장기 기억을 만들어냅니다.' },
      },
    ],
    oneThingToRemember: { en: 'The test IS the study.', ko: '시험이 곧 공부입니다.' },
  },

  {
    id: 19,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'Sleep and Language', ko: '수면과 언어' },
    readTimeSec: 36,
    illustration: 'wave',
    body: {
      en: [
        'There is a moment in language learning that many people report: they go to sleep having struggled with a concept, and wake up the next morning finding it somehow clearer. This is not magical thinking. It is neuroscience.',
        'During sleep — particularly during slow-wave and REM sleep — the brain consolidates the day\'s learning. New memories, still fragile and unstable after initial encoding, are replayed, reorganized, and transferred into long-term storage. Sleep is not the absence of learning. It is part of the learning process.',
        'Matthew Walker\'s research showed that sleep-deprived subjects retained approximately 40% less than those who slept adequately. Not a modest difference. Almost half the learning was lost.',
        'For language learning specifically, this matters because patterns need consolidation to become automatic. You can practice a phrase until it feels almost natural during a session. But the final step — from almost natural to truly automatic — happens during sleep.',
        'This also means that late-night cramming is one of the least efficient ways to study. You are encoding material at a time when consolidation will be poorest, and you are depleting the sleep that would have reinforced that morning\'s learning.',
        'Short, consistent daily practice followed by adequate sleep beats long, exhausting sessions every time.',
      ],
      ko: [
        '많은 사람들이 언어 학습에서 이런 순간을 경험합니다. 어떤 개념과 씨름하며 잠들었는데 다음 날 아침 깨어나니 어쩐지 더 명확해져 있습니다. 이것은 신비로운 생각이 아닙니다. 신경과학입니다.',
        '수면 중에, 특히 서파 수면과 REM 수면 동안 뇌는 그날의 학습을 통합합니다. 처음 인코딩 후 여전히 취약하고 불안정한 새로운 기억들이 재생, 재구성되어 장기 저장소로 이전됩니다. 수면은 학습의 부재가 아닙니다. 학습 과정의 일부입니다.',
        'Matthew Walker의 연구에 따르면 수면이 부족한 피험자들은 충분히 잠을 잔 사람들에 비해 약 40% 덜 기억했습니다. 작은 차이가 아닙니다. 학습의 거의 절반이 사라진 것입니다.',
        '언어 학습 특히 패턴이 자동화되려면 통합이 필요하기 때문에 이것이 중요합니다. 세션 동안 거의 자연스럽게 느껴질 때까지 표현을 연습할 수 있습니다. 하지만 마지막 단계, 거의 자연스러운 것에서 진정으로 자동화되는 것은 수면 중에 일어납니다.',
        '이것은 또한 밤늦은 벼락치기가 가장 비효율적인 공부 방법 중 하나임을 의미합니다. 통합이 가장 나쁠 시간에 자료를 인코딩하고 있으며, 그날 아침의 학습을 강화했을 수면을 소진하고 있는 것입니다.',
        '충분한 수면이 뒤따르는 짧고 일관된 일일 연습이 길고 지치는 세션을 항상 이깁니다.',
      ],
    },
    research: [
      {
        author: 'Matthew Walker',
        title: 'Why We Sleep',
        year: 2017,
        brief: { en: 'Sleep plays an active role in memory consolidation. Sleep deprivation reduces memory retention by approximately 40%.', ko: '수면은 기억 통합에 적극적인 역할을 합니다. 수면 부족은 기억 보존을 약 40% 감소시킵니다.' },
      },
    ],
    oneThingToRemember: { en: 'Sleep is part of the lesson.', ko: '수면도 수업의 일부입니다.' },
  },

  {
    id: 20,
    part: 2,
    partTitle: 'How the Brain Learns',
    title: { en: 'How Mistakes Help', ko: '실수가 도움이 되는 방법' },
    readTimeSec: 37,
    illustration: 'brain',
    body: {
      en: [
        'There is a particular kind of moment that feels terrible but turns out to be one of the most powerful learning events possible: making a confident prediction, and being wrong.',
        'When the brain predicts and the prediction fails, it generates what neuroscientists call a prediction error signal. This signal doesn\'t just log the failure. It activates a learning response — a cascade of neural activity that updates the model, adjusts the expectation, and tags the information for stronger encoding.',
        'Mistakes only feel like failures because we\'ve been trained to avoid them in school. But from the brain\'s perspective, a corrected mistake is significantly more memorable than something you got right on the first try. The surprise of being wrong creates the very conditions the brain needs to learn.',
        'This explains a finding that puzzles most learners: trying to answer a question before studying the material, even when you\'re almost certain to get it wrong, improves retention of the correct answer more than studying first and answering after.',
        'The attempt generates a prediction. The mismatch generates a learning signal. The correction provides the new information into a brain that is now primed to receive it.',
        'You are not supposed to get everything right in PATTO review sessions. You are supposed to try, fail sometimes, and be corrected. Each correction is memory in the process of forming.',
      ],
      ko: [
        '끔찍하게 느껴지지만 가능한 가장 강력한 학습 이벤트 중 하나로 밝혀지는 특별한 순간이 있습니다. 자신 있게 예측했는데 틀리는 것입니다.',
        '뇌가 예측하고 예측이 실패하면 신경과학자들이 예측 오류 신호라고 부르는 것을 생성합니다. 이 신호는 단순히 실패를 기록하지 않습니다. 학습 반응을 활성화합니다. 모델을 업데이트하고 기대를 조정하며 더 강한 인코딩을 위해 정보에 태그를 붙이는 신경 활동의 연쇄입니다.',
        '실수는 학교에서 피하도록 훈련받았기 때문에 실패처럼 느껴질 뿐입니다. 하지만 뇌의 관점에서 수정된 실수는 처음에 맞춘 것보다 훨씬 더 기억에 남습니다. 틀렸다는 놀라움이 뇌가 학습하는 데 필요한 바로 그 조건을 만들어냅니다.',
        '이것은 대부분의 학습자를 당혹스럽게 하는 발견을 설명합니다. 자료를 공부하기 전에 질문에 답하려고 시도하는 것이, 심지어 거의 확실히 틀릴 것을 알아도, 먼저 공부하고 나서 답하는 것보다 정답 기억을 더 향상시킵니다.',
        '시도가 예측을 생성합니다. 불일치가 학습 신호를 생성합니다. 수정이 이제 받아들일 준비가 된 뇌에 새로운 정보를 제공합니다.',
        'PATTO 복습 세션에서 모든 것을 맞힐 필요가 없습니다. 시도하고, 때로는 실패하고, 수정받아야 합니다. 각 수정은 형성 중인 기억입니다.',
      ],
    },
    research: [
      {
        author: 'Nate Kornell et al.',
        title: 'Unsuccessful Retrieval Attempts Enhance Subsequent Learning',
        year: 2009,
        brief: { en: 'Failing to retrieve an answer before studying it can enhance subsequent memory for that information more than successful retrieval.', ko: '공부 전에 답을 인출하는 데 실패하는 것이 성공적인 인출보다 그 정보에 대한 이후 기억을 더 향상시킬 수 있습니다.' },
      },
    ],
    oneThingToRemember: { en: 'Every mistake is a memory forming.', ko: '모든 실수는 기억이 형성되는 것입니다.' },
  },

  // ── PART 3: Native Thinking ───────────────────────────────────────────────

  {
    id: 21,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Chunking', ko: '청킹' },
    readTimeSec: 38,
    illustration: 'pattern',
    body: {
      en: [
        'Imagine you are watching a basketball game. A beginner watches individual players — who has the ball, who is running, who is open. An experienced fan watches something different: plays unfolding, formations, strategies. They have chunked the information.',
        'Language works the same way. A beginner in English hears "I was just wondering if you might be able to help me" as nine separate words, each requiring processing. A native speaker hears it as a single polite request formula. One chunk.',
        'This difference is not vocabulary size. The beginner might know every word in that sentence. But they\'ve never stored the sentence as a unit. They process it from scratch every time.',
        'Chunking is the difference between driving a car and thinking about driving a car. Chunked information is automatic. Unchunked information requires effort. In the time it takes a learner to process one chunk word-by-word, a native speaker has processed five.',
        'You build chunks through repetition in context. The first time you encounter "I was just wondering if..." you process it slowly. After twenty encounters in stories and conversations, it starts to become one piece. After a hundred, it is.',
        'Every pattern in PATTO is a chunk waiting to be formed. The review sessions are building the chunks. The stories are the context that makes them meaningful. Together, they are assembling the unit library that fluency runs on.',
      ],
      ko: [
        '농구 경기를 보고 있다고 상상해보세요. 초보자는 개별 선수들을 봅니다. 누가 공을 가졌는지, 누가 달리는지, 누가 열려 있는지. 경험 많은 팬은 다른 것을 봅니다. 펼쳐지는 플레이, 포메이션, 전략. 그들은 정보를 청크화했습니다.',
        '언어도 같은 방식으로 작동합니다. 영어 초보자는 "I was just wondering if you might be able to help me"를 각각 처리가 필요한 아홉 개의 별도 단어로 듣습니다. 원어민은 그것을 단일한 정중한 요청 공식으로 듣습니다. 하나의 청크.',
        '이 차이는 어휘 크기가 아닙니다. 초보자는 그 문장의 모든 단어를 알 수도 있습니다. 하지만 그들은 그 문장을 하나의 단위로 저장한 적이 없습니다. 매번 처음부터 처리합니다.',
        '청킹은 차를 운전하는 것과 차를 어떻게 운전할지 생각하는 것의 차이입니다. 청크화된 정보는 자동적입니다. 청크화되지 않은 정보는 노력이 필요합니다. 학습자가 하나의 청크를 단어별로 처리하는 시간에 원어민은 다섯 개를 처리합니다.',
        '맥락 속에서의 반복을 통해 청크를 만듭니다. "I was just wondering if..."를 처음 만날 때는 천천히 처리합니다. 스토리와 대화에서 스무 번 만나면 하나의 덩어리가 되기 시작합니다. 백 번 후에는 그렇게 됩니다.',
        'PATTO의 모든 패턴은 형성될 기다리는 청크입니다. 복습 세션이 청크를 만들고 있습니다. 스토리는 그것들을 의미 있게 만드는 맥락입니다. 함께, 유창함이 실행되는 단위 라이브러리를 조립하고 있습니다.',
      ],
    },
    research: [
      {
        author: 'George Miller',
        title: 'The Magical Number Seven, Plus or Minus Two',
        year: 1956,
        brief: { en: 'Working memory is limited in units, but chunking allows large amounts of information to function as a single unit.', ko: '작업 기억은 단위로 제한되지만 청킹은 많은 양의 정보가 단일 단위로 기능하도록 허용합니다.' },
      },
    ],
    oneThingToRemember: { en: 'Learn phrases. Not words.', ko: '단어가 아니라 표현을 배우세요.' },
  },

  {
    id: 22,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Why Native Speakers Sound Fast', ko: '원어민이 빠르게 들리는 이유' },
    readTimeSec: 37,
    illustration: 'wave',
    body: {
      en: [
        'Korean learners of English almost universally report the same experience: native speakers talk too fast. Movies require subtitles. Phone calls are stressful. Real conversations leave them several sentences behind.',
        'Here is the thing: native speakers are usually not talking unusually fast. The typical conversational speech rate in English — about 130 to 150 words per minute — is the same it has always been. What\'s changed is the listener.',
        'Processing speed is not about how fast sound enters the ear. It\'s about how quickly the brain can identify patterns, assign meaning, and clear space for the next input. A listener who processes word-by-word will always struggle to keep up, regardless of how slowly the speaker talks.',
        'When you know "I\'d love to, but I can\'t make it" as a chunk — as a single unit — you process it in the same time a learner needs to process "I\'d." When you have enough chunks, the speech rate problem largely disappears.',
        'This is why exposure to natural-speed English matters so much. Slowed-down audio trains your brain to process slowed-down audio. Natural-speed audio trains your brain to process natural-speed audio. The brain adapts to what it practices on.',
        'The goal is not to ask speakers to slow down. The goal is to build enough chunks that their normal speed becomes your normal speed.',
      ],
      ko: [
        '한국인 영어 학습자들은 거의 공통적으로 같은 경험을 보고합니다. 원어민들이 너무 빠르게 말합니다. 영화에는 자막이 필요합니다. 전화통화는 스트레스입니다. 실제 대화에서는 몇 문장 뒤처집니다.',
        '사실은 이렇습니다. 원어민들은 보통 비정상적으로 빠르게 말하지 않습니다. 영어의 일반적인 대화 속도, 분당 약 130에서 150 단어는 항상 같았습니다. 변한 것은 청취자입니다.',
        '처리 속도는 소리가 귀에 얼마나 빨리 들어오는지에 관한 것이 아닙니다. 뇌가 패턴을 얼마나 빨리 식별하고 의미를 부여하며 다음 입력을 위한 공간을 비울 수 있는지에 관한 것입니다. 단어별로 처리하는 청취자는 화자가 아무리 천천히 말해도 항상 따라가기 어렵습니다.',
        '"I\'d love to, but I can\'t make it"을 청크로, 즉 단일 단위로 알고 있으면, 학습자가 "I\'d"를 처리하는 데 걸리는 시간에 그것을 처리합니다. 충분한 청크가 있으면 발화 속도 문제는 대부분 사라집니다.',
        '자연 속도의 영어에 노출되는 것이 왜 그렇게 중요한지 이유입니다. 느려진 오디오는 뇌가 느려진 오디오를 처리하도록 훈련합니다. 자연 속도 오디오는 뇌가 자연 속도 오디오를 처리하도록 훈련합니다. 뇌는 연습하는 것에 적응합니다.',
        '목표는 화자에게 천천히 말하도록 요청하는 것이 아닙니다. 목표는 그들의 정상 속도가 나의 정상 속도가 될 만큼 충분한 청크를 만드는 것입니다.',
      ],
    },
    research: [
      {
        author: 'David Segalowitz',
        title: 'Automaticity and Second Languages',
        year: 2003,
        brief: { en: 'Fluency in spoken language processing depends on automatization — developing rapid, effortless recognition of familiar patterns.', ko: '구어 언어 처리의 유창함은 자동화에 달려 있습니다. 친숙한 패턴을 빠르고 힘들이지 않고 인식하는 능력을 개발하는 것.' },
      },
    ],
    oneThingToRemember: { en: "They don't speak fast. You hear slow.", ko: '그들이 빠르게 말하는 것이 아닙니다. 당신이 느리게 듣는 것입니다.' },
  },

  {
    id: 23,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Linking', ko: '연음' },
    readTimeSec: 36,
    illustration: 'speech',
    body: {
      en: [
        'Listen closely to natural English and you\'ll notice something that textbooks almost never teach: words don\'t end. They flow into each other.',
        '"Did you eat?" becomes "Dijeat?" "What are you doing?" becomes "Whadarya doing?" "I\'ll give it to him" becomes "I\'ll givit timm." This is not sloppy speech. It is natural speech. It has been this way for centuries.',
        'Linguists call this connected speech. When words are spoken at natural speed, the end of one word merges with the beginning of the next. Consonants link to vowels. Similar sounds collapse into each other. Unstressed syllables disappear entirely.',
        'For listeners, this creates a problem: the speech you actually hear sounds nothing like the words you see on a page. You\'ve memorized "I\'m going to" but what hits your ears is "I\'m gonna." You understand the written form but miss the spoken form.',
        'The solution is exposure to natural speech in context — not slowed-down audio engineered to match the written form, but real English as it\'s actually spoken. Your brain will eventually learn to segment the stream correctly, the same way native speaker children do.',
        'Linking is not an exception to English. It is English, spoken at the speed it was designed for.',
      ],
      ko: [
        '자연스러운 영어를 자세히 들어보면 교과서에서 거의 가르치지 않는 것을 발견할 것입니다. 단어가 끝나지 않습니다. 서로 흘러들어갑니다.',
        '"Did you eat?"는 "Dijeat?"가 됩니다. "What are you doing?"은 "Whadarya doing?"이 됩니다. "I\'ll give it to him"은 "I\'ll givit timm"이 됩니다. 이것은 부주의한 말이 아닙니다. 자연스러운 말입니다. 수백 년 동안 이랬습니다.',
        '언어학자들은 이것을 연음이라고 합니다. 자연 속도로 말할 때 한 단어의 끝이 다음 단어의 시작과 합쳐집니다. 자음이 모음과 연결됩니다. 유사한 소리가 하나로 합쳐집니다. 강세 없는 음절은 완전히 사라집니다.',
        '청취자에게 이것은 문제를 만듭니다. 실제로 듣는 말이 페이지에서 보는 단어와 전혀 다르게 들립니다. "I\'m going to"를 외웠지만 귀에 들리는 것은 "I\'m gonna"입니다. 문어체는 이해하지만 구어체는 놓칩니다.',
        '해결책은 맥락 속에서 자연스러운 말에 노출되는 것입니다. 문어체와 일치하도록 조정된 느린 오디오가 아니라 실제로 말해지는 실제 영어. 뇌는 결국 원어민 아이들과 마찬가지로 스트림을 올바르게 분절하는 법을 배울 것입니다.',
        '연음은 영어의 예외가 아닙니다. 그것이 설계된 속도로 말해지는 영어입니다.',
      ],
    },
    research: [
      {
        author: 'Michael Rost',
        title: 'Teaching and Researching Listening',
        year: 2002,
        brief: { en: 'Connected speech phenomena — linking, assimilation, elision — are central to natural listening comprehension and are often undertaught.', ko: '연음 현상, 즉 연결, 동화, 탈락은 자연스러운 청취 이해의 핵심이지만 자주 과소 교육됩니다.' },
      },
    ],
    oneThingToRemember: { en: "Words don't end. They flow.", ko: '단어는 끝나지 않습니다. 흘러갑니다.' },
  },

  {
    id: 24,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Reduction', ko: '축약' },
    readTimeSec: 35,
    illustration: 'wave',
    body: {
      en: [
        'English textbooks teach "I am going to the store." Native speakers say "I\'m gonna go to the store." Textbooks say "Do you want to?" Native speakers say "Wanna?"',
        'These are not casual shortcuts that educated speakers avoid. They are the normal, standard forms of spoken English used by everyone, including presidents, professors, and poets reading aloud.',
        'This disconnect — between taught English and spoken English — is one of the most persistent sources of listening comprehension failure. Learners who have only studied written forms can produce perfect English on a page and still find themselves unable to follow a conversation.',
        'Reduction in English is systematic, not random. Function words — and, but, to, of, for — are routinely compressed in natural speech. Content words — the ones carrying meaning — are stressed and clear. The pattern is predictable once you know it.',
        'Understanding this changes what you should listen for. Don\'t focus on the reduced words; they carry less meaning anyway. Focus on the stressed content words. The meaning is there. The grammar is in the rhythm.',
        'The casual form is not a lazy version of the real thing. It is the real thing.',
      ],
      ko: [
        '영어 교과서는 "I am going to the store"를 가르칩니다. 원어민들은 "I\'m gonna go to the store"라고 합니다. 교과서는 "Do you want to?"라고 합니다. 원어민들은 "Wanna?"라고 합니다.',
        '이것들은 교육받은 화자들이 피하는 캐주얼한 지름길이 아닙니다. 대통령, 교수, 낭독하는 시인을 포함한 모든 사람이 사용하는 일반적이고 표준적인 구어 영어 형태입니다.',
        '이 단절, 즉 가르치는 영어와 말해지는 영어 사이의 간극은 청취 이해 실패의 가장 지속적인 원인 중 하나입니다. 문어체만 공부한 학습자들은 페이지에 완벽한 영어를 작성할 수 있지만 대화를 따라가지 못합니다.',
        '영어의 축약은 무작위가 아니라 체계적입니다. 기능어, and, but, to, of, for는 자연 발화에서 일상적으로 압축됩니다. 의미를 담은 내용어는 강세를 받고 명확합니다. 패턴은 알면 예측 가능합니다.',
        '이것을 이해하면 무엇을 들어야 할지가 달라집니다. 축약된 단어에 집중하지 마세요. 어차피 의미를 덜 담고 있습니다. 강세를 받은 내용어에 집중하세요. 의미는 거기 있습니다. 문법은 리듬 속에 있습니다.',
        '캐주얼한 형태는 진짜의 게으른 버전이 아닙니다. 그것이 진짜입니다.',
      ],
    },
    research: [
      {
        author: 'Gillian Brown',
        title: 'Listening to Spoken English',
        year: 1990,
        brief: { en: 'Reduced forms in spontaneous speech are rule-governed and predictable, not arbitrary, and are essential to natural listening comprehension.', ko: '즉흥 발화에서 축약 형태는 규칙에 지배되고 예측 가능하며 임의적이지 않고 자연스러운 청취 이해에 필수적입니다.' },
      },
    ],
    oneThingToRemember: { en: 'The casual form IS the correct form.', ko: '캐주얼한 형태가 바로 올바른 형태입니다.' },
  },

  {
    id: 25,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Rhythm', ko: '리듬' },
    readTimeSec: 37,
    illustration: 'wave',
    body: {
      en: [
        'English is a stress-timed language. Korean is a syllable-timed language. This difference is more significant than most learners realize.',
        'In a syllable-timed language like Korean, each syllable takes roughly the same amount of time. In a stress-timed language like English, the stressed syllables occur at roughly regular intervals — and the unstressed syllables squeeze in between, however many there are.',
        '"Cats eat fish" and "The cats have been eating the fish" take almost the same amount of time to say in natural English. The stressed syllables (CATS, EAT, FISH) hit at the same rhythm; everything else shrinks to fit.',
        'This rhythmic skeleton is what gives English its characteristic sound. It is also what makes Korean accents in English immediately recognizable: when every syllable is given equal time and weight, the rhythm disappears, and the listener hears something that sounds mechanical.',
        'You cannot learn English rhythm by thinking about it. You absorb it by listening to enormous amounts of natural English at natural speed, until the rhythm becomes something you feel rather than something you calculate.',
        'The stress is where the meaning lives. The rhythm is the frame. When you get both right, everything else — pronunciation, comprehension, naturalness — begins to follow.',
      ],
      ko: [
        '영어는 강세 박자 언어입니다. 한국어는 음절 박자 언어입니다. 이 차이는 대부분의 학습자가 깨닫는 것보다 더 중요합니다.',
        '한국어 같은 음절 박자 언어에서는 각 음절이 거의 같은 시간을 차지합니다. 영어 같은 강세 박자 언어에서는 강세 받은 음절이 거의 규칙적인 간격으로 발생하고, 강세 없는 음절은 그 사이에 끼어들어 갑니다. 몇 개가 있든 상관없이.',
        '"Cats eat fish"와 "The cats have been eating the fish"는 자연스러운 영어에서 거의 같은 시간이 걸립니다. 강세 받은 음절들(CATS, EAT, FISH)은 같은 리듬으로 들어오고 나머지는 맞추기 위해 줄어듭니다.',
        '이 리듬의 뼈대가 영어에 특유의 소리를 주는 것입니다. 또한 영어에서 한국인 억양이 즉시 알아들을 수 있게 만드는 것이기도 합니다. 모든 음절에 동등한 시간과 무게가 주어지면 리듬이 사라지고 청취자는 기계적으로 들리는 무언가를 듣게 됩니다.',
        '영어 리듬은 생각해서 배울 수 없습니다. 리듬이 계산하는 것이 아니라 느끼는 것이 될 때까지 자연 속도의 자연스러운 영어를 엄청나게 많이 들음으로써 흡수합니다.',
        '강세가 의미가 사는 곳입니다. 리듬은 프레임입니다. 둘 다 맞추면 발음, 이해, 자연스러움, 모든 것이 따라오기 시작합니다.',
      ],
    },
    research: [
      {
        author: 'Peter Roach',
        title: 'English Phonetics and Phonology',
        year: 2000,
        brief: { en: 'English is stress-timed, with stressed syllables occurring at roughly equal intervals and unstressed syllables compressed to fit.', ko: '영어는 강세 박자로, 강세 받은 음절이 거의 같은 간격으로 발생하고 강세 없는 음절은 맞추기 위해 압축됩니다.' },
      },
    ],
    oneThingToRemember: { en: 'Feel the beat. Then the words follow.', ko: '박자를 느끼세요. 그러면 단어가 따라옵니다.' },
  },

  {
    id: 26,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Thinking in English', ko: '영어로 생각하기' },
    readTimeSec: 38,
    illustration: 'brain',
    body: {
      en: [
        'The phrase "thinking in English" is often used as a goal without anyone quite explaining what it means. It sounds like talking to yourself in English. But it is something more subtle — and more fundamental — than that.',
        'When a child learns their first language, the language and the thought develop together. There is no separation between "the concept" and "the word." The word is the concept. Later, learning a second language usually means learning words for concepts you already have in your first language.',
        'Thinking in English means eventually having some concepts that live in English — not translated from Korean, but native to English. Idioms, jokes, turns of phrase that simply don\'t have equivalents. A relationship to certain words that is emotional and direct, not processed.',
        'This transition doesn\'t happen by trying. It happens through enough exposure that English begins to feel like a natural channel rather than a foreign one. First you think in Korean and translate. Then you sometimes think in English fragments — a phrase, a sentence. Then, in some contexts, you stop translating entirely.',
        'Start with small, low-stakes contexts. Name objects around you in English. Think through a task step by step in English. Not as a translation exercise, but as an experiment in switching channels.',
        'The goal is not to abandon Korean thought. It is to become someone who can think in two languages — and know, intuitively, which one fits the moment.',
      ],
      ko: [
        '"영어로 생각하기"라는 표현은 그것이 무엇을 의미하는지 아무도 제대로 설명하지 않은 채 목표로 자주 사용됩니다. 혼자 영어로 말하는 것처럼 들립니다. 하지만 그것보다 더 미묘하고 더 근본적인 무언가입니다.',
        '아이가 모국어를 배울 때 언어와 사고가 함께 발전합니다. "개념"과 "단어" 사이에 분리가 없습니다. 단어가 곧 개념입니다. 나중에 제2언어를 배우는 것은 보통 이미 모국어로 가지고 있는 개념의 단어를 배우는 것을 의미합니다.',
        '영어로 생각한다는 것은 결국 영어에 사는 개념들을 갖는 것을 의미합니다. 한국어에서 번역된 것이 아니라 영어에 고유한 것. 단순히 동등한 표현이 없는 관용구, 농담, 어구. 처리되는 것이 아니라 감정적이고 직접적인 특정 단어들과의 관계.',
        '이 전환은 노력으로 일어나지 않습니다. 영어가 낯선 채널이 아니라 자연스러운 채널처럼 느껴지기 시작할 만큼 충분한 노출을 통해 일어납니다. 처음에는 한국어로 생각하고 번역합니다. 그런 다음 때로는 영어 단편으로 생각합니다. 표현, 문장. 그런 다음 일부 맥락에서 번역을 완전히 멈춥니다.',
        '작고 부담 없는 맥락에서 시작하세요. 주변 사물들에 영어로 이름을 붙이세요. 영어로 단계별로 작업을 생각해보세요. 번역 연습이 아니라 채널 전환 실험으로.',
        '목표는 한국어 사고를 포기하는 것이 아닙니다. 두 언어로 생각할 수 있는 사람이 되는 것, 그리고 직관적으로 어떤 것이 순간에 맞는지 아는 것입니다.',
      ],
    },
    research: [
      {
        author: 'François Grosjean',
        title: 'Bilingualism: A Short Introduction',
        year: 2010,
        brief: { en: 'Bilinguals develop language-specific conceptual associations over time. True fluency involves direct concept-to-word access in L2, not translation.', ko: '이중 언어 사용자들은 시간이 지남에 따라 언어 특유의 개념적 연관성을 발전시킵니다. 진정한 유창함은 번역이 아닌 제2언어에서 직접적인 개념-단어 접근을 포함합니다.' },
      },
    ],
    oneThingToRemember: { en: 'Think in feelings first. Words follow.', ko: '먼저 감정으로 생각하세요. 단어가 따라옵니다.' },
  },

  {
    id: 27,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Fluency Is Recognition', ko: '유창함은 인식이다' },
    readTimeSec: 36,
    illustration: 'eye',
    body: {
      en: [
        'We tend to imagine fluency as a kind of speed — speaking faster, responding faster, understanding faster. But speed is a symptom, not the cause. The cause is something more specific: recognition.',
        'Fluency is the ability to recognize — not decode, but recognize — language as it arrives. Fluent readers don\'t sound out letters, combine them into words, and look up definitions. They see a word and understand it in the same instant.',
        'This recognition is what separates a fluent speaker from a proficient one. A proficient speaker knows a lot of English and can use it accurately. A fluent speaker has internalized enough patterns that language production and comprehension happen below the level of conscious effort.',
        'You cannot aim directly at fluency. You can only build the conditions for it. More patterns recognized. More chunks automated. More contexts encountered. More retrieval practiced. And then, gradually, across hundreds of sessions, fluency begins to arrive — not as a sudden gift, but as the natural result of enough practice.',
        'The experience of fluency is the experience of effortlessness. Not that the language is simple, but that processing it no longer requires effort. You stopped learning to ride a bicycle and started riding one.',
        'Every session in PATTO is building the recognition database — the internal library that fluency runs on. You may not feel it happening. But it is.',
      ],
      ko: [
        '우리는 유창함을 일종의 속도로 상상하는 경향이 있습니다. 더 빠르게 말하고, 더 빠르게 반응하고, 더 빠르게 이해하는 것. 하지만 속도는 원인이 아니라 증상입니다. 원인은 더 구체적인 것입니다. 인식.',
        '유창함은 언어가 들어올 때 해독하는 것이 아니라 인식하는 능력입니다. 유창한 독자는 글자를 소리 내어 읽고 단어로 조합하고 정의를 찾아보지 않습니다. 단어를 보고 같은 순간에 이해합니다.',
        '이 인식이 유창한 화자와 능숙한 화자를 구분하는 것입니다. 능숙한 화자는 영어를 많이 알고 정확하게 사용할 수 있습니다. 유창한 화자는 의식적인 노력 수준 아래에서 언어 생산과 이해가 일어날 만큼 충분한 패턴을 내면화했습니다.',
        '유창함을 직접 목표로 할 수 없습니다. 그것을 위한 조건만 만들 수 있습니다. 더 많은 패턴 인식. 더 많은 청크 자동화. 더 많은 맥락 만남. 더 많은 인출 연습. 그런 다음 수백 번의 세션을 거쳐 점진적으로 유창함이 오기 시작합니다. 갑작스러운 선물이 아니라 충분한 연습의 자연스러운 결과로.',
        '유창함의 경험은 힘들이지 않음의 경험입니다. 언어가 간단해서가 아니라 처리하는 데 더 이상 노력이 필요하지 않아서. 자전거 타는 법을 배우는 것을 멈추고 타기 시작한 것입니다.',
        'PATTO의 모든 세션은 인식 데이터베이스를 구축하고 있습니다. 유창함이 실행되는 내부 라이브러리. 그것이 일어나는 것을 느끼지 못할 수도 있습니다. 하지만 일어나고 있습니다.',
      ],
    },
    research: [
      {
        author: 'David LaBerge & S. Jay Samuels',
        title: 'Toward a Theory of Automatic Information Processing in Reading',
        year: 1974,
        brief: { en: 'Automaticity in reading — recognizing language without conscious effort — is the foundation of fluent comprehension.', ko: '읽기에서의 자동성, 즉 의식적 노력 없이 언어를 인식하는 것은 유창한 이해의 기반입니다.' },
      },
    ],
    oneThingToRemember: { en: 'Practice until you stop trying.', ko: '노력을 멈출 때까지 연습하세요.' },
  },

  {
    id: 28,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'The Pause Before Speaking', ko: '말하기 전의 멈춤' },
    readTimeSec: 35,
    illustration: 'clock',
    body: {
      en: [
        'Many language learners are acutely aware of the pause before they speak. The moment between deciding what to say and actually saying it. To them, this pause feels like a failure — evidence of inadequacy.',
        'But pause is normal. Native speakers pause too. The difference is what happens during the pause, and how long it lasts.',
        'When a native speaker pauses, they are retrieving a chunk — pulling a pre-formed unit from memory and slotting it into position. The retrieval is fast because the chunk is already built. When a learner pauses, they are often constructing from scratch — assembling words into a phrase they haven\'t stored as a unit yet.',
        'Willem Levelt\'s model of speech production shows that fluent speakers are not composing language in real time. They are retrieving it. The retrieval of whole chunks dramatically reduces production time compared to composing word-by-word.',
        'This is directly why pattern practice matters for speaking. Each pattern you internalize is one less thing you have to construct from scratch. The pause shrinks not because you\'re trying to speak faster, but because the retrieval becomes faster.',
        'The goal is not to eliminate the pause. It is to fill the pause with retrieval instead of construction.',
      ],
      ko: [
        '많은 언어 학습자들이 말하기 전의 멈춤을 예리하게 인식합니다. 무엇을 말할지 결정하는 것과 실제로 말하는 것 사이의 순간. 그들에게 이 멈춤은 실패처럼 느껴집니다. 부족함의 증거.',
        '하지만 멈춤은 정상입니다. 원어민도 멈춥니다. 차이는 멈춤 동안 무슨 일이 일어나는가, 그리고 얼마나 오래 지속되는가입니다.',
        '원어민이 멈출 때, 그들은 청크를 인출하고 있습니다. 기억에서 미리 형성된 단위를 꺼내 자리에 끼워 넣습니다. 인출이 빠른 것은 청크가 이미 만들어져 있기 때문입니다. 학습자가 멈출 때, 그들은 종종 처음부터 구성하고 있습니다. 아직 단위로 저장하지 않은 표현으로 단어들을 조합합니다.',
        'Willem Levelt의 말하기 생산 모델은 유창한 화자들이 실시간으로 언어를 구성하지 않는다는 것을 보여줍니다. 그들은 인출하고 있습니다. 전체 청크의 인출은 단어별 구성에 비해 생산 시간을 극적으로 줄입니다.',
        '이것이 바로 패턴 연습이 말하기에 중요한 이유입니다. 내면화하는 각 패턴은 처음부터 구성해야 할 것이 하나 줄어드는 것입니다. 더 빠르게 말하려고 노력하기 때문이 아니라 인출이 빨라지기 때문에 멈춤이 줄어듭니다.',
        '목표는 멈춤을 없애는 것이 아닙니다. 구성 대신 인출로 멈춤을 채우는 것입니다.',
      ],
    },
    research: [
      {
        author: 'Willem Levelt',
        title: 'Speaking: From Intention to Articulation',
        year: 1989,
        brief: { en: 'Fluent speech relies on retrieval of pre-formed lexical chunks, not real-time word-by-word construction.', ko: '유창한 말하기는 실시간 단어별 구성이 아닌 미리 형성된 어휘 청크의 인출에 의존합니다.' },
      },
    ],
    oneThingToRemember: { en: 'The pause shrinks when chunks grow.', ko: '청크가 늘어나면 멈춤이 줄어듭니다.' },
  },

  {
    id: 29,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'When You Stop Counting Words', ko: '단어를 세는 것을 멈출 때' },
    readTimeSec: 37,
    illustration: 'eye',
    body: {
      en: [
        'There is a stage in language learning where you become very aware of your own language. You notice which words you used correctly and which felt uncertain. You replay conversations to evaluate them. You listen to yourself as you speak.',
        'Stephen Krashen called this the affective filter — the internal monitor that watches, evaluates, and critiques your language production. In moderate amounts, this awareness is useful. It helps you notice patterns and correct errors.',
        'But at high levels, it becomes an obstacle. When you are preoccupied with monitoring your language, you have fewer cognitive resources available for actually thinking about what you\'re saying. Anxiety about correctness becomes itself a barrier to comprehension and fluency.',
        'You have probably noticed this in your own experience. In low-stakes situations — talking to a friend, or quietly reading — your English flows more naturally. In high-stakes situations — an important meeting, a phone call with a stranger — it tightens up.',
        'The filter can be lowered. Not by trying not to care, but by accumulating enough positive experiences in the language that your baseline anxiety decreases. More exposure. More success. More moments where English worked for you.',
        'Eventually, you stop counting words. You stop evaluating each sentence. You arrive in conversation, and the language is just there, doing its job, unnoticed.',
      ],
      ko: [
        '언어 학습에는 자신의 언어를 매우 인식하게 되는 단계가 있습니다. 어떤 단어를 올바르게 사용했는지, 어떤 것이 불확실하게 느껴졌는지 알아챕니다. 대화를 평가하기 위해 재생합니다. 말하면서 자신을 듣습니다.',
        'Stephen Krashen은 이것을 정의 필터라고 불렀습니다. 언어 생산을 지켜보고, 평가하고, 비판하는 내부 모니터. 적당한 양으로는 이 인식이 유용합니다. 패턴을 알아채고 오류를 수정하는 데 도움을 줍니다.',
        '하지만 높은 수준에서는 장애물이 됩니다. 언어를 모니터링하는 데 몰두할 때, 실제로 무엇을 말하는지 생각하는 데 사용할 수 있는 인지 자원이 줄어듭니다. 정확성에 대한 불안이 그 자체로 이해와 유창성의 장벽이 됩니다.',
        '아마 자신의 경험에서 이것을 알아챘을 것입니다. 부담이 낮은 상황, 친구와 대화하거나 조용히 읽을 때 영어가 더 자연스럽게 흐릅니다. 부담이 높은 상황, 중요한 회의나 낯선 사람과의 전화통화에서는 굳어버립니다.',
        '필터는 낮출 수 있습니다. 신경 쓰지 않으려고 노력해서가 아니라, 언어에서 충분히 긍정적인 경험을 축적해서 기본 불안이 감소하도록. 더 많은 노출. 더 많은 성공. 영어가 나를 위해 작동한 더 많은 순간들.',
        '결국, 단어를 세는 것을 멈춥니다. 각 문장을 평가하는 것을 멈춥니다. 대화에 도착하면 언어가 그냥 거기에 있습니다. 눈에 띄지 않게 자신의 일을 합니다.',
      ],
    },
    research: [
      {
        author: 'Stephen Krashen',
        title: 'The Affective Filter Hypothesis',
        year: 1982,
        brief: { en: 'High anxiety and low confidence raise the affective filter, blocking input from reaching the language acquisition device. Low filter = high acquisition.', ko: '높은 불안과 낮은 자신감은 정의 필터를 높여 입력이 언어 습득 장치에 도달하는 것을 차단합니다. 낮은 필터 = 높은 습득.' },
      },
    ],
    oneThingToRemember: { en: 'Stop watching yourself speak.', ko: '말하는 자신을 바라보는 것을 멈추세요.' },
  },

  {
    id: 30,
    part: 3,
    partTitle: 'Native Thinking',
    title: { en: 'Language Never Ends', ko: '언어는 끝나지 않는다' },
    readTimeSec: 40,
    illustration: 'book',
    body: {
      en: [
        'Native speakers are still learning their language. Every day, they encounter a word they haven\'t seen, a usage they hadn\'t considered, a construction they find elegant in a new way. Language is not something you finish. It is something you inhabit.',
        'This is worth holding on to, especially when language learning feels endless. It doesn\'t end because it was never designed to. The size of any living language — its vocabulary, its patterns, its cultural connotations — far exceeds what any individual could fully acquire in a lifetime. And yet people communicate beautifully with their partial acquisition.',
        'The question is never "Am I done?" The question is "Am I better than I was?" And almost always, the answer is yes — even when it doesn\'t feel that way, even when a conversation goes poorly, even when a review session feels harder than expected.',
        'You began reading this collection to understand how language works. What we\'ve covered — from translation to chunking, from spaced repetition to the voice in your head — is not a syllabus to be memorized. It is a different way of thinking about what you\'re doing when you learn English.',
        'Language acquisition is not studying. It is the slow, patient, often invisible process of building a new way of experiencing the world. It is not separate from who you are. It is becoming part of who you are.',
        'Keep going. Not because fluency is around the corner, but because the journey is the point. Every story you read, every pattern you practice, every session you complete is the language, working on you.',
      ],
      ko: [
        '원어민들도 여전히 자신의 언어를 배우고 있습니다. 매일 처음 보는 단어, 고려하지 않았던 용법, 새로운 방식으로 우아하다고 느끼는 구성을 만납니다. 언어는 끝내는 것이 아닙니다. 거주하는 것입니다.',
        '이것은 특히 언어 학습이 끝없이 느껴질 때 붙들 가치가 있습니다. 그것이 끝나지 않는 것은 그렇게 설계되지 않았기 때문입니다. 살아있는 언어의 크기, 어휘, 패턴, 문화적 함의는 어떤 개인도 평생 동안 완전히 습득할 수 있는 것을 훨씬 초과합니다. 그럼에도 사람들은 부분적인 습득으로 아름답게 소통합니다.',
        '질문은 결코 "다 됐나?"가 아닙니다. 질문은 "전보다 나아졌나?"입니다. 거의 항상 답은 그렇다입니다. 그렇게 느껴지지 않아도, 대화가 잘 안 됐어도, 복습 세션이 예상보다 더 어렵게 느껴져도.',
        '언어가 어떻게 작동하는지 이해하기 위해 이 컬렉션을 읽기 시작했습니다. 번역부터 청킹, 간격 반복부터 머릿속의 목소리까지 다룬 것들은 암기해야 할 교과 과정이 아닙니다. 영어를 배울 때 무엇을 하고 있는지에 대한 다른 생각 방식입니다.',
        '언어 습득은 공부가 아닙니다. 세상을 경험하는 새로운 방식을 구축하는 느리고, 인내심 있고, 종종 보이지 않는 과정입니다. 당신이 누구인지와 별개가 아닙니다. 당신이 누구인지의 일부가 되어가고 있습니다.',
        '계속 나아가세요. 유창함이 코앞에 있기 때문이 아니라 여정이 핵심이기 때문에. 읽는 모든 스토리, 연습하는 모든 패턴, 완료하는 모든 세션이 당신에게 작용하는 언어입니다.',
      ],
    },
    research: [
      {
        author: 'David Crystal',
        title: 'The Cambridge Encyclopedia of Language',
        year: 2010,
        brief: { en: 'Living languages are never fully acquired, even by native speakers. Language development is a lifelong process.', ko: '살아있는 언어는 원어민에게도 완전히 습득되지 않습니다. 언어 발달은 평생의 과정입니다.' },
      },
      {
        author: 'Stephen Krashen',
        title: 'The Input Hypothesis',
        year: 1982,
        brief: { en: 'Language acquisition continues as long as we receive comprehensible input. There is no endpoint — only more language.', ko: '언어 습득은 이해 가능한 입력을 받는 한 계속됩니다. 끝점은 없습니다. 더 많은 언어만 있을 뿐입니다.' },
      },
    ],
    oneThingToRemember: { en: 'The journey is the language.', ko: '여정이 곧 언어입니다.' },
  },
]

export const TOTAL_NOTES = EDITOR_NOTES.length  // 30
