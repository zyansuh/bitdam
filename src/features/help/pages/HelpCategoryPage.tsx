import { Navigate, useParams } from 'react-router-dom'
import HelpActionCards from '../components/HelpActionCards'
import HelpFaqList from '../components/HelpFaqList'
import HelpLayout from '../components/HelpLayout'
import { getHelpCategory, isHelpCategoryId } from '../data/helpCategories'
import { useHelpFaqs } from '../hooks/useHelpFaqs'
import { useHelpSearch } from '../hooks/useHelpSearch'

export default function HelpCategoryPage() {
  const { category } = useParams()
  const valid = isHelpCategoryId(category)
  const { query, setQuery } = useHelpSearch()
  const current = valid ? getHelpCategory(category) : undefined
  const { items, openId, toggle, searching } = useHelpFaqs(valid ? category : 'shipping', query)

  if (!valid) {
    return <Navigate to="/help/shipping" replace />
  }

  return (
    <HelpLayout query={query} onQuery={setQuery}>
      <p className="help-crumb">자주 묻는 질문 {'>'} {searching ? '검색' : current?.label}</p>
      <HelpFaqList items={items} openId={openId} onToggle={toggle} />
      <HelpActionCards />
    </HelpLayout>
  )
}
