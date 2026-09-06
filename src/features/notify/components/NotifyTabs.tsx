import { noticeTabs } from '../data/noticeTabs'
import type { NoticeKind } from '../types/siteNotice'

interface NotifyTabsProps {
  active: 'all' | NoticeKind
  onSelect: (id: 'all' | NoticeKind) => void
}

export default function NotifyTabs({ active, onSelect }: NotifyTabsProps) {
  return (
    <div className="notify-tabs">
      {noticeTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`notify-tabs__item${active === tab.id ? ' notify-tabs__item--on' : ''}`}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
