import { useEffect } from 'react'
import { getLearnDailyArticle } from '../data/learnDaily'
import { appendSiteNotice, makeSiteNotice, readLiveNotices } from '../../notify/utils/siteNoticeStorage'

const FLAG = 'bitdam.learn.daily-notice'

export function useLearnDailyNotice() {
  useEffect(() => {
    const article = getLearnDailyArticle()
    const today = new Date().toISOString().slice(0, 10)
    const already = readLiveNotices().some((item) => item.id === `learn-daily-${today}`)
    try {
      if (sessionStorage.getItem(FLAG) === today || already) return
      appendSiteNotice(
        makeSiteNotice({
          id: `learn-daily-${today}`,
          kind: 'system',
          title: `오늘의 술 상식 · ${article.title}`,
          body: article.lead,
          actionLabel: '카드 읽기',
          actionTo: `/learn/${article.slug}`,
        }),
      )
      sessionStorage.setItem(FLAG, today)
    } catch {
      // storage may be blocked
    }
  }, [])
}
