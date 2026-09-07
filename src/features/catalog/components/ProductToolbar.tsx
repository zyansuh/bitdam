import { SORT_OPTIONS } from '../data/filterOptions'
import type { SortKey } from '../types/catalog'

interface ProductToolbarProps {
  count: number
  countSuffix: '검색되었습니다' | '있습니다'
  sort: SortKey
  onSortChange: (sort: SortKey) => void
}

export default function ProductToolbar({
  count,
  countSuffix,
  sort,
  onSortChange,
}: ProductToolbarProps) {
  const current = SORT_OPTIONS.find((option) => option.key === sort)?.label ?? '인기순'

  return (
    <div className="product-toolbar">
      <p className="product-toolbar__count">
        총 <span className="product-toolbar__count-num">{count}</span>개의 상품이 {countSuffix}
      </p>
      <div className="product-toolbar__sort">
        <p className="product-toolbar__sort-label">
          정렬 <strong>{current}</strong>
        </p>
        <div className="product-toolbar__chips" role="group" aria-label="상품 정렬">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.key}
              type="button"
              className={`product-toolbar__chip${sort === option.key ? ' product-toolbar__chip--on' : ''}`}
              aria-pressed={sort === option.key}
              onClick={() => onSortChange(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
