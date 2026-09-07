import { useParams } from 'react-router-dom'
import { getLearnArticle } from '../data/learnArticles'

export function useLearnArticle() {
  const { slug = '' } = useParams()
  return getLearnArticle(slug)
}
