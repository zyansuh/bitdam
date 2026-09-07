import type { LearnArticle } from '../types/learn'

export interface LearnRelatedLink {
  label: string
  to: string
}

export interface LearnRelated {
  catalog: LearnRelatedLink[]
  breweries: LearnRelatedLink[]
}

export function relatedForArticle(article: LearnArticle): LearnRelated {
  const catalog: LearnRelatedLink[] = []
  const breweries: LearnRelatedLink[] = []

  if (['brew', 'grain', 'ferment'].includes(article.category) || article.slug.includes('makgeolli') || article.slug.includes('takju')) {
    catalog.push({ label: '탁주 / 막걸리 모아보기', to: '/category/takju' })
    breweries.push({ label: '부산 막걸리 도가', to: '/breweries/busan' })
  }
  if (article.slug.includes('nuruk') || article.slug.includes('ipguk') || article.category === 'grain') {
    breweries.push({ label: '누룩 이야기가 있는 삼해소주', to: '/breweries/samhae' })
  }
  if (article.category === 'kinds' && (article.slug.includes('yakju') || article.slug.includes('cheongju') || article.slug.includes('sake'))) {
    catalog.push({ label: '청주 / 약주 모아보기', to: '/category/yakju' })
    breweries.push({ label: '한산 소곡주', to: '/breweries/hansan' })
  }
  if (article.category === 'distill' || article.category === 'distill-deep' || article.slug.includes('soju')) {
    catalog.push({ label: '증류식 소주 모아보기', to: '/category/soju' })
    breweries.push({ label: '안동소주', to: '/breweries/andong' }, { label: '문배주', to: '/breweries/munbae' })
  }
  if (article.category === 'oak') {
    catalog.push({ label: '숙성 증류주 보기', to: '/category/soju' })
  }
  if (article.slug.includes('fruit') || article.slug.includes('maesil') || article.slug.includes('brandy') || article.slug.includes('calvados')) {
    catalog.push({ label: '과실주 모아보기', to: '/category/fruit' })
    breweries.push({ label: '매실 도가', to: '/breweries/plum' }, { label: '복분자 도가', to: '/breweries/bokbunja' })
  }
  if (article.slug.includes('liqueur') || article.category === 'world') {
    catalog.push({ label: '리큐르 / 기타', to: '/category/liqueur' })
  }
  if (catalog.length === 0) {
    catalog.push({ label: '전통주 전체', to: '/products' })
  }
  if (breweries.length === 0) {
    breweries.push({ label: '전국 양조장 지도', to: '/breweries' })
  }

  return {
    catalog: unique(catalog),
    breweries: unique(breweries),
  }
}

function unique(links: LearnRelatedLink[]): LearnRelatedLink[] {
  return links.filter((item, index) => links.findIndex((row) => row.to === item.to) === index)
}
