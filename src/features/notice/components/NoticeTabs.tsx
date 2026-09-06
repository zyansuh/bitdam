import { noticeTabs } from '../data/noticeTabs'
import type { NoticeCategoryId } from '../types/notice'

interface NoticeTabsProps {
  active: 'all' | NoticeCategoryId
  onSelect: (id: 'all' | NoticeCategoryId) => void
}

export default function NoticeTabs({ active, onSelect }: NoticeTabsProps) {
  return (
    <div className="notice-tabs">
      {noticeTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`notice-tabs__item${active === tab.id ? ' notice-tabs__item--on' : ''}`}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
