import type { DealCategory, DealDiscountBand } from '../types/timeSale'

const CATS: { id: DealCategory; label: string }[] = [
  { id: 'all', label: '전체 상품' },
  { id: '증류주', label: '증류 소주' },
  { id: '약주', label: '약주/청주' },
  { id: '막걸리', label: '탁주/막걸리' },
  { id: '과실주', label: '과실주/리큐르' },
]

const BANDS: { id: DealDiscountBand; label: string }[] = [
  { id: 'all', label: '전체 할인' },
  { id: '30', label: '30%+ 슈퍼딜' },
  { id: '20', label: '20~30% 알뜰딜' },
  { id: '10', label: '10~20% 실속딜' },
]

interface DealFiltersProps {
  category: DealCategory
  band: DealDiscountBand
  onCategory: (id: DealCategory) => void
  onBand: (id: DealDiscountBand) => void
}

export default function DealFilters({ category, band, onCategory, onBand }: DealFiltersProps) {
  return (
    <aside className="deal-filters">
      <h3>특가 주종별 분류</h3>
      <ul>
        {CATS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={category === item.id ? 'is-on' : undefined}
              onClick={() => onCategory(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <h3>특가 할인율 선택</h3>
      <ul>
        {BANDS.map((item) => (
          <li key={item.id}>
            <button type="button" className={band === item.id ? 'is-on' : undefined} onClick={() => onBand(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
