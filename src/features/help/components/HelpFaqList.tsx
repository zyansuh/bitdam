import type { HelpFaq } from '../types/helpFaq'
import HelpFaqItem from './HelpFaqItem'

interface HelpFaqListProps {
  items: HelpFaq[]
  openId: string | null
  onToggle: (id: string) => void
}

export default function HelpFaqList({ items, openId, onToggle }: HelpFaqListProps) {
  if (items.length === 0) {
    return <p className="help-empty">해당 질문이 없습니다. 다른 분류나 검색어를 시도해 보세요.</p>
  }

  return (
    <div className="help-faq-list">
      {items.map((faq) => (
        <HelpFaqItem key={faq.id} faq={faq} open={openId === faq.id} onToggle={() => onToggle(faq.id)} />
      ))}
    </div>
  )
}
