import { useMemo } from 'react'
import { getLearnDailyArticle } from '../data/learnDaily'

export function useLearnDaily() {
  return useMemo(() => getLearnDailyArticle(), [])
}
