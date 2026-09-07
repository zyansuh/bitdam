import type {
  BrandStoryCard,
  BrandStoryChapter,
  BrandStoryClosing,
  BrandStoryFunding,
  BrandStoryMilestone,
  BrandStoryProcessStep,
  BrandStoryStat,
} from '../types/brandStory'
import { MOCK_IMAGES } from '../../../data/mockImages'

export const brandStoryHero = {
  kicker: '브랜드 이야기',
  name: '빚담',
  title: '시간이 흐를수록 깊어지는 맛과 향',
  lead: '명인의 땀과 숨결을 다음 세대에 남기는 것. 빚담은 그 꿈을 한 병에 담습니다.',
  image: MOCK_IMAGES.brewery,
  imageAlt: '숲과 계곡이 이어진 풍경 위에 얹은 빚담 스토리',
}

export const brandStoryUglyFruit = {
  badge: '가치 있는 소비를 위한 전통주 프로젝트',
  title: '버려지는 못난이 과일, 장인의 손길로 명품 전통주가 되다',
  text: '모양이 고르지 않아 버려질 뻔한 우리 농가의 과일이, 전통 양조를 거쳐 시간이 흐를수록 깊어지는 맛과 향으로 다시 태어납니다.',
  image:
    '/images/catalog/soju-1.svg',
  imageAlt: '나무 위에 놓인 못난이 과일과 잘린 과육',
  primary: { label: '지금 동참하기', to: '/custom' },
  secondary: { label: '여섯 장 읽기', to: '#brand-story-essay' },
}

export const brandStoryPhilosophies: BrandStoryCard[] = [
  {
    id: 'tradition',
    title: '전통 보존',
    text: '1500년을 이어 온 양조를 오늘의 손으로 다시 빚습니다.',
  },
  {
    id: 'modern',
    title: '현대적 감각',
    text: '기념주 라벨과 패키지로 전통을 지금 감각의 선물로 만듭니다.',
  },
  {
    id: 'together',
    title: '상생 양조',
    text: '지역 양조장·농가와 함께 못난이 과일의 가치를 나눕니다.',
  },
]

export const brandStoryStats: BrandStoryStat[] = [
  { value: '12.8t', label: '구해 낸 못난이 과일' },
  { value: '3.2t', label: '줄어든 탄소' },
  { value: '48', label: '함께하는 농가' },
]

export const brandStoryProcess: BrandStoryProcessStep[] = [
  { id: '01', title: '선별', text: '떨어진 과일과 못난이 과일을 골라 한 철의 시간을 남깁니다.' },
  { id: '02', title: '손질', text: '장인의 손으로 씻고 깎아 술의 재료로 다시 앉힙니다.' },
  { id: '03', title: '발효와 숙성', text: '기다림 속에서 맛과 향이 깊어집니다.' },
  { id: '04', title: '가치 소비', text: '한 병이 농가와 지구에 돌아가는 소비가 됩니다.' },
]

export const brandStoryFunding: BrandStoryFunding[] = [
  {
    id: 'apple',
    tag: '목표 초과',
    title: '충주 못난이 사과 약주',
    percent: 145,
    amount: '14,500,000원',
    image: '/images/catalog/yakju-1.svg',
  },
  {
    id: 'pear',
    tag: '진행 중',
    title: '나주 배 과실주 크라우드',
    percent: 82,
    amount: '8,200,000원',
    image: '/images/catalog/fruit-1.svg',
  },
  {
    id: 'citrus',
    tag: '진행 중',
    title: '제주 감귤 증류 펀딩',
    percent: 61,
    amount: '6,100,000원',
    image: '/images/catalog/makgeolli-1.svg',
  },
]

export const brandStoryMilestones: BrandStoryMilestone[] = [
  { date: '2023.04', text: '빚담 프로젝트 시작. 작은 양조장과 못난이 과일을 잇기 시작했습니다.' },
  { date: '2024.08', text: '디지털 전통 명인 인증서를 열고, 한 병의 내력을 기록합니다.' },
  { date: '2025.01', text: '조명화 명인 한정 패키지와 탄소 저감 기부를 함께 열었습니다.' },
]

export const brandStoryPartners = ['삼해소주', '문배주', '안동소주', '한산모시', '전주이강주', '서울탁주']

export const brandStoryBanner = {
  title: '지구를 위한 한 방울, 우리 술 가치 소비의 시작',
  action: '못난이 친구와 함께 성장하기',
  to: '/custom',
}

export const brandStoryChapters: BrandStoryChapter[] = [
  {
    id: 'time',
    number: '01',
    tocLabel: '한 병의 시간',
    titleLines: ['좋은 술에는', '시간이 필요합니다.'],
    blocks: [
      {
        type: 'scenes',
        items: [
          '과일이 익기를 기다리는 시간,',
          '농부가 한 계절을 보내는 시간,',
          '술을 빚는 사람의 손을 거쳐 발효되고 숙성되는 시간.',
        ],
      },
      { type: 'paragraph', text: '그리고 마침내 한 병의 술이 완성되기까지.' },
      {
        type: 'paragraph',
        text: '우리는 그 긴 시간 끝에 만들어진 술을 너무 쉽게 ‘한 병의 상품’으로만 바라보고 있었는지도 모릅니다.',
      },
      {
        type: 'paragraph',
        text: '빚담은 그 한 병 안에 무엇이 담겨 있는지 이야기하는 것에서 시작했습니다.',
      },
    ],
  },
  {
    id: 'origin',
    number: '02',
    tocLabel: '시작',
    titleLines: ['술을 마시는 것보다,', '술이 만들어지는 시간을 좋아했습니다.'],
    blocks: [
      {
        type: 'paragraph',
        text: '빚담의 시작은 거창한 사업 아이디어가 아니었습니다. 취미로 증류주를 만들고 마시던 한 사람의 작은 질문에서 시작되었습니다.',
      },
      {
        type: 'paragraph',
        text: '같은 과일도 어떻게 빚고 얼마나 기다리는지에 따라 전혀 다른 술이 됩니다. 그 모습을 지켜보다 보면 자연스럽게 술을 만든 사람과 재료가 자란 곳, 그리고 술이 완성되기까지 흘러간 시간을 생각하게 됩니다.',
      },
      { type: 'paragraph', text: '그러던 어느 날 이런 생각을 했습니다.' },
      { type: 'quote', text: '술에 우리의 시간까지 담을 수 있다면 어떨까.' },
      {
        type: 'paragraph',
        text: '해외의 와이너리에서는 특별한 날을 하나의 경험으로 남깁니다. 와이너리를 방문하고, 그곳의 이야기를 듣고, 와인을 맛보고 때로는 자신만의 술을 만들며 한 사람의 기억과 술이 연결됩니다. 우리에게도 그런 경험이 있었으면 했습니다.',
      },
      {
        type: 'scenes',
        items: [
          '아이의 탄생을 기념하며 술을 빚고 스무 살이 되는 날 함께 열어보는 것.',
          '두 사람이 함께 술을 만들고 몇 해 뒤 결혼기념일에 다시 꺼내는 것.',
          '부모님의 생일을 기념해 가족이 함께 술을 빚고 먼 훗날 같은 자리에서 그 병을 다시 여는 것.',
        ],
      },
      {
        type: 'paragraph',
        text: '사진과 영상처럼 술도 우리의 시간을 보관할 수 있다고 생각했습니다.',
      },
      {
        type: 'paragraph',
        text: '그래서 빚담은 술을 단순히 소비하는 것이 아니라,',
      },
      { type: 'quote', text: '오늘의 시간을 빚어 미래의 기억으로 남기는 방법을 만들고자 합니다.' },
    ],
  },
  {
    id: 'brewery',
    number: '03',
    tocLabel: '작은 양조장',
    titleLines: ['작은 양조장의 좋은 술이', '작은 이름으로 남지 않도록.'],
    blocks: [
      {
        type: 'paragraph',
        text: '우리나라 곳곳에는 좋은 술을 만드는 사람들이 있습니다. 지역에서 난 재료를 사용하고, 오랫동안 이어진 방식을 지키기도 하며, 자신만의 새로운 방식으로 술을 빚는 작은 양조장들이 있습니다.',
      },
      {
        type: 'paragraph',
        text: '좋은 술을 만드는 사람은 많습니다. 하지만 좋은 술이 반드시 잘 알려지는 것은 아닙니다. 술을 만드는 것과 브랜드를 만드는 것은 서로 다른 일이기 때문입니다.',
      },
      {
        type: 'scenes',
        items: [
          '제품의 이름을 정하고,',
          '그 술만의 이야기를 발견하고,',
          '디자인하고, 촬영하고, 사람들에게 알리는 일.',
        ],
      },
      {
        type: 'paragraph',
        text: '작은 양조장이 이 모든 일을 혼자 해내기는 쉽지 않습니다. 빚담은 그 사이에 서고 싶었습니다. 우리가 술을 대신 만드는 것이 아니라,',
      },
      { type: 'quote', text: '이미 좋은 술을 만드는 사람들이 더 잘 보이게 만드는 것.' },
      {
        type: 'paragraph',
        text: '술이 가진 이야기를 발견하고, 브랜드로 만들고, 그 가치를 더 많은 사람에게 전달합니다. 한 병의 술을 통해 사람들이 작은 양조장의 이름을 기억하게 만드는 것. 그것이 빚담이 생각하는 브랜딩입니다.',
      },
    ],
  },
  {
    id: 'fruit',
    number: '04',
    tocLabel: '못난이 과일',
    titleLines: ['못생긴 과일은 있어도,', '가치 없는 과일은 없습니다.'],
    blocks: [
      {
        type: 'paragraph',
        text: '한편 농가에서는 매년 많은 과일이 상품이 되지 못합니다.',
      },
      {
        type: 'scenes',
        items: ['조금 작아서,', '모양이 고르지 않아서,', '표면에 흠집이 생겨서.'],
      },
      {
        type: 'paragraph',
        text: '맛과 향에는 문제가 없어도 우리가 기대하는 모양과 조금 다르다는 이유로 상품성을 잃기도 합니다. 농부에게 그것은 단순한 ‘못난이 과일’이 아닙니다. 한 계절 동안 키운 시간입니다.',
      },
      {
        type: 'paragraph',
        text: '빚담은 그 시간이 버려지는 것이 아쉬웠습니다. 그래서 생각했습니다.',
      },
      { type: 'quote', text: '과일을 꼭 과일의 모습으로만 보관해야 할까.' },
      {
        type: 'paragraph',
        text: '사과를 술로 빚으면 사과가 자란 계절을 더 오래 기억할 수 있습니다. 복숭아를 술로 만들면 짧은 여름에만 만날 수 있었던 향을 조금 더 오래 간직할 수 있습니다.',
      },
      {
        type: 'paragraph',
        text: '지역에서 자란 과일이 그 지역의 술이 되고, 그 술을 통해 누군가는 처음으로 그 지역의 이름을 알게 됩니다.',
      },
      {
        type: 'promises',
        items: [
          '버려질 뻔한 과일에서 새로운 상품을 만들고,',
          '그 상품에 농가와 지역의 이야기를 입히고,',
          '다시 사람들에게 소개하는 것.',
        ],
      },
      {
        type: 'paragraph',
        text: '빚담은 술을 통해 지역의 좋은 것들이 조금 더 오래 살아남는 방법을 고민합니다.',
      },
    ],
  },
  {
    id: 'heritage',
    number: '05',
    tocLabel: '전통',
    titleLines: ['전통을 지킨다는 건,', '계속 만나게 하는 것.'],
    blocks: [
      {
        type: 'paragraph',
        text: '우리에게는 오래전부터 이어져 온 술과 문화가 있습니다. 지역마다 다른 양조 방식이 있고, 그 방법을 지켜온 사람들이 있으며, 무형문화재와 유형문화재를 비롯해 우리가 아직 발견하지 못한 수많은 이야기가 있습니다.',
      },
      {
        type: 'paragraph',
        text: '하지만 소중하다는 것과 가까이 느껴진다는 것은 다릅니다. 우리는 전통을 어렵게 설명하기보다 직접 경험하게 하고 싶습니다.',
      },
      {
        type: 'questions',
        items: [
          '한 번 찾아가 보고 싶은 곳.',
          '한 번 만들어 보고 싶은 술.',
          '한 번 만나 보고 싶은 사람.',
        ],
      },
      {
        type: 'paragraph',
        text: '그 경험을 통해 자연스럽게 우리 문화와 지역을 알게 되는 것. 빚담에서는 전통주를 발견하고 구매하는 것에서 그치지 않고, 직접 술을 빚는 경험과 지역의 이야기를 함께 만날 수 있도록 하고자 합니다.',
      },
      {
        type: 'paragraph',
        text: '우리가 생각하는 전통의 계승은 과거의 모습을 그대로 보존하는 것만이 아닙니다.',
      },
      { type: 'quote', text: '오늘의 사람들이 다시 찾게 만드는 것.' },
      {
        type: 'paragraph',
        text: '그렇게 한 번 더 경험되고, 한 번 더 이야기될 때 전통은 다음 세대로 이어질 수 있다고 믿습니다.',
      },
    ],
  },
  {
    id: 'stories',
    number: '06',
    tocLabel: '이야기',
    titleLines: ['우리는 술보다', '술에 담길 이야기를 생각합니다.'],
    blocks: [
      {
        type: 'scenes',
        items: [
          '누군가에게는 아이가 태어난 해의 술.',
          '누군가에게는 결혼을 약속한 날의 술.',
          '누군가에게는 부모님의 고향에서 자란 과일로 만든 술.',
          '그리고 누군가에게는 여행 중 우연히 발견한 작은 양조장의 술.',
        ],
      },
      {
        type: 'paragraph',
        text: '같은 한 병이라도 그 안에 담기는 이야기는 모두 다릅니다. 그래서 빚담은 더 많은 술을 판매하는 것만을 목표로 하지 않습니다.',
      },
      {
        type: 'promises',
        items: [
          '좋은 술을 발견하고,',
          '작은 양조장을 브랜드로 만들고,',
          '버려질 뻔한 지역의 재료에 새로운 쓰임을 만들고,',
          '우리의 전통과 문화를 지금의 방식으로 소개하고,',
          '누군가에게는 직접 자신의 술을 만들어 오래 간직할 수 있는 경험을 제공합니다.',
        ],
      },
      {
        type: 'paragraph',
        text: '농부가 보낸 한 계절과 양조장이 지켜온 시간과 한 지역이 가진 문화와 한 사람이 기억하고 싶은 순간. 서로 다른 이야기들이 술이라는 하나의 매개체를 통해 연결됩니다.',
      },
      {
        type: 'paragraph',
        text: '그리고 언젠가 그 병을 다시 꺼내는 날, 우리는 술의 맛보다 먼저 그날의 이야기를 떠올리게 될지도 모릅니다.',
      },
    ],
  },
]

export const brandStoryClosing: BrandStoryClosing = {
  name: '빚담',
  words: [
    {
      word: '빚다.',
      meaning: '재료를 고르고, 사람의 손을 거쳐, 시간을 기다려 술을 만드는 일.',
    },
    {
      word: '담다.',
      meaning: '지역을 담고, 사람을 담고, 기억하고 싶은 순간을 남기는 일.',
    },
  ],
  join: '두 단어가 만나 빚담이 되었습니다. 우리는 오늘의 술만 만들지 않습니다.',
  promises: [
    '농가의 한 계절이 버려지지 않도록,',
    '작은 양조장의 이름이 더 멀리 알려지도록,',
    '우리의 문화가 다음 세대에게 계속 이야기되도록,',
    '그리고 당신이 기억하고 싶은 오늘이 몇 년 뒤에도 다시 꺼내볼 수 있는 이야기가 되도록.',
  ],
  tagline: ['시간을 빚고,', '이야기를 담습니다.'],
  signature: '빚담',
  endLines: ['빚어서 담다.', '시간이 술이 되고, 술이 이야기가 되는 곳.'],
}
