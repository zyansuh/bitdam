import type { BreweryProfile } from '../types/breweryDetail'

export const breweryProfiles: Record<string, BreweryProfile> = {
  hansan: {
    subtitle: '충남 서천 · 백제 전통 가양주',
    heroTitle: '1500년 전통, 한산소곡주 양조원',
    heroImage:
      'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=1600&h=720&fit=crop&q=80',
    storyTitle: '백제의 향과 흥을 담아온 양조장 이야기',
    story: [
      '한산 소곡주는 백제 때부터 이어져 온 가양주로, 누룩과 찹쌀을 겹겹이 쌓아 천천히 익힙니다. 진한 황금빛과 은은한 국화 향이 특징이며, 잔을 기울일수록 단맛과 산미가 층을 이룹니다.',
      '서천의 한산면은 물이 맑고 바람이 부드러워 발효가 서두르지 않습니다. 빚담은 이 도가의 계절 항아리를 한정으로 열어, 명인이 직접 고른 병만 식탁으로 보냅니다.',
    ],
    masterName: '우희열',
    masterRole: '무형문화재 우희열 명인',
    masterQuote:
      '소곡주는 서두르면 향이 달아납니다. 항아리가 스스로 숨 쉴 때까지 기다리는 것이 우리 일의 전부입니다.',
    masterPhoto:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&fit=crop&q=80',
    awards: [
      '국가 지정 무형문화재 제3호',
      '우리술 품평회 대상',
      '대한민국 식품명인',
      '충남 우수 전통주',
    ],
    programTitle: '체험 프로그램 안내',
    programDesc: '한산 소곡주 시음과 항아리·도자기 밑불 체험을 함께합니다. 명인 해설이 포함됩니다.',
    programPrice: 35000,
    hours: '09:00 – 18:00 (월요일 휴무)',
    parking: '양조장 내 주차 가능 (약 10대)',
  },
  samhae: {
    subtitle: '경기 김포 · 삼해주 증류',
    heroTitle: '서울 삼해주의 맥을 잇는 김포 도가',
    heroImage:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=720&fit=crop&q=80',
    storyTitle: '밑술에서 증류까지, 삼해의 결을 지키는 이야기',
    story: [
      '삼해소주는 겨울 한파에 밑술을 빚고, 봄이 오기 전 증류해 맑은 잔을 만듭니다. 김포 도가는 옛 서울 삼해주의 레시피를 현대 설비로 정밀하게 되살렸습니다.',
      '곡향이 먼저 올라오고 끝맛은 짧게 떨어집니다. 안주 없이 마셔도 부담이 적어, 저녁 식탁의 첫 잔으로 자주 고릅니다.',
    ],
    masterName: '김포 삼해 명인',
    masterRole: '삼해주 전수 명인',
    masterQuote: '증류는 온도가 아니라 인내입니다. 한 방울이 맑아질 때까지 불을 거두지 않습니다.',
    masterPhoto:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&q=80',
    awards: ['우리술 품평회 금상', '경기도 우수 전통주', '증류주 부문 선정'],
    programTitle: '체험 프로그램 안내',
    programDesc: '명인과 함께하는 삼해소주 증류 시연과 테이스팅. 홈브루잉 입문 클래스와 연계할 수 있습니다.',
    programPrice: 85000,
    hours: '10:00 – 17:00 (화요일 휴무)',
    parking: '도가 앞 전용 주차장',
  },
}
