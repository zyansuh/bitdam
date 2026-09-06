import type { GiftCompose, GiftOccasion, GiftPriceBand, GiftRecipient } from '../types/holidayGift'

const OCCASIONS: { id: GiftOccasion; label: string }[] = [
  { id: 'all', label: '전체' },
  { id: 'hyo', label: '효도선물' },
  { id: 'biz', label: '비즈니스' },
  { id: 'couple', label: '연인' },
  { id: 'friend', label: '친구' },
]

const PRICES: { id: GiftPriceBand; label: string }[] = [
  { id: 'under30', label: '3만원 이하' },
  { id: 'mid', label: '3~7만원' },
  { id: 'high', label: '7~15만원' },
  { id: 'vip', label: '15만원 이상' },
]

const COMPOSES: { id: GiftCompose; label: string }[] = [
  { id: 'spirit', label: '소주/약주' },
  { id: 'takju', label: '막걸리/증류주' },
  { id: 'package', label: '고급 선물 패키지' },
  { id: 'glass', label: '전통 잔/술 세트' },
]

const RECIPIENTS: { id: GiftRecipient; label: string }[] = [
  { id: 'family', label: '부모님/상사' },
  { id: 'partner', label: '비즈니스 파트너' },
  { id: 'friend', label: '지인/친구' },
  { id: 'teacher', label: '스승님' },
]

interface HolidayGiftFiltersProps {
  occasion: GiftOccasion
  prices: GiftPriceBand[]
  composes: GiftCompose[]
  recipients: GiftRecipient[]
  onOccasion: (id: GiftOccasion) => void
  onPrice: (id: GiftPriceBand) => void
  onCompose: (id: GiftCompose) => void
  onRecipient: (id: GiftRecipient) => void
}

export default function HolidayGiftFilters({
  occasion,
  prices,
  composes,
  recipients,
  onOccasion,
  onPrice,
  onCompose,
  onRecipient,
}: HolidayGiftFiltersProps) {
  return (
    <div className="contents">
      <nav className="hgift-tabs">
        {OCCASIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={occasion === item.id ? 'is-on' : undefined}
            onClick={() => onOccasion(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <aside className="hgift-filters">
        <h2>선물 맞춤 필터</h2>
        <h3>가격대</h3>
        {PRICES.map((item) => (
          <label key={item.id}>
            <input type="checkbox" checked={prices.includes(item.id)} onChange={() => onPrice(item.id)} />
            {item.label}
          </label>
        ))}
        <h3>구성</h3>
        {COMPOSES.map((item) => (
          <label key={item.id}>
            <input type="checkbox" checked={composes.includes(item.id)} onChange={() => onCompose(item.id)} />
            {item.label}
          </label>
        ))}
        <h3>받는 분</h3>
        {RECIPIENTS.map((item) => (
          <label key={item.id}>
            <input type="checkbox" checked={recipients.includes(item.id)} onChange={() => onRecipient(item.id)} />
            {item.label}
          </label>
        ))}
      </aside>
    </div>
  )
}
