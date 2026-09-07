import type { LearnArticle } from '../types/learn'

export interface LearnRelatedLink {
  kind: 'catalog' | 'brewery'
  label: string
  to: string
  hint: string
}

export interface LearnRelated {
  catalog: LearnRelatedLink[]
  breweries: LearnRelatedLink[]
}

export function relatedForArticle(article: LearnArticle): LearnRelated {
  const catalog: LearnRelatedLink[] = []
  const breweries: LearnRelatedLink[] = []

  if (['brew', 'grain', 'ferment'].includes(article.category) || article.slug.includes('makgeolli') || article.slug.includes('takju')) {
    catalog.push({
      kind: 'catalog',
      label: '탁주 / 막걸리 모아보기',
      to: '/category/takju',
      hint: '이 글에서 말한 뿌연 잔을 카탈로그에서 고릅니다.',
    })
    breweries.push({
      kind: 'brewery',
      label: '부산 막걸리 도가',
      to: '/breweries/busan',
      hint: '탁주를 빚는 도가의 이야기와 위치를 엽니다.',
    })
  }
  if (article.slug.includes('nuruk') || article.slug.includes('ipguk') || article.category === 'grain') {
    breweries.push({
      kind: 'brewery',
      label: '누룩 이야기가 있는 삼해소주',
      to: '/breweries/samhae',
      hint: '누룩과 밑술이 중심인 도가로 이어 줍니다.',
    })
  }
  if (article.category === 'kinds' && (article.slug.includes('yakju') || article.slug.includes('cheongju') || article.slug.includes('sake'))) {
    catalog.push({
      kind: 'catalog',
      label: '청주 / 약주 모아보기',
      to: '/category/yakju',
      hint: '맑게 내린 잔을 카테고리에서 비교합니다.',
    })
    breweries.push({
      kind: 'brewery',
      label: '한산 소곡주',
      to: '/breweries/hansan',
      hint: '약주·청주 쪽 도가 한 곳을 자세히 봅니다.',
    })
  }
  if (article.category === 'distill' || article.category === 'distill-deep' || article.slug.includes('soju')) {
    catalog.push({
      kind: 'catalog',
      label: '증류식 소주 모아보기',
      to: '/category/soju',
      hint: '증류 이야기 다음으로 실제 소주 잔을 고릅니다.',
    })
    breweries.push(
      {
        kind: 'brewery',
        label: '안동소주',
        to: '/breweries/andong',
        hint: '단식 증류 도가의 공정을 이어서 읽습니다.',
      },
      {
        kind: 'brewery',
        label: '문배주',
        to: '/breweries/munbae',
        hint: '과실 향이 남는 증류 도가로 연결합니다.',
      },
    )
  }
  if (article.category === 'oak') {
    catalog.push({
      kind: 'catalog',
      label: '숙성 증류주 보기',
      to: '/category/soju',
      hint: '오크와 시간이 붙은 병을 목록에서 찾습니다.',
    })
  }
  if (article.slug.includes('fruit') || article.slug.includes('maesil') || article.slug.includes('brandy') || article.slug.includes('calvados')) {
    catalog.push({
      kind: 'catalog',
      label: '과실주 모아보기',
      to: '/category/fruit',
      hint: '과일로 빚은 잔을 카탈로그에서 고릅니다.',
    })
    breweries.push(
      {
        kind: 'brewery',
        label: '매실 도가',
        to: '/breweries/plum',
        hint: '매실을 다루는 도가 페이지를 엽니다.',
      },
      {
        kind: 'brewery',
        label: '복분자 도가',
        to: '/breweries/bokbunja',
        hint: '베리 과실주 도가로 이어 줍니다.',
      },
    )
  }
  if (article.slug.includes('liqueur') || article.category === 'world') {
    catalog.push({
      kind: 'catalog',
      label: '리큐르 / 기타',
      to: '/category/liqueur',
      hint: '가향·침출 쪽 병을 카테고리에서 봅니다.',
    })
  }
  if (catalog.length === 0) {
    catalog.push({
      kind: 'catalog',
      label: '전통주 전체',
      to: '/products',
      hint: '글에서 읽은 맛을 상점 전체에서 찾아봅니다.',
    })
  }
  if (breweries.length === 0) {
    breweries.push({
      kind: 'brewery',
      label: '전국 양조장 지도',
      to: '/breweries',
      hint: '도가 위치를 지도에서 고릅니다.',
    })
  }

  return {
    catalog: unique(catalog),
    breweries: unique(breweries),
  }
}

function unique(links: LearnRelatedLink[]): LearnRelatedLink[] {
  return links.filter((item, index) => links.findIndex((row) => row.to === item.to) === index)
}
