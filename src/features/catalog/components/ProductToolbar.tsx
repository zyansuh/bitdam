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
  return (
    <div className="product-toolbar">
      <p className="product-toolbar__count">
        총 <span className="product-toolbar__count-num">{count}</span>개의 상품이 {countSuffix}
      </p>
      <label className="sr-only" htmlFor="catalog-sort">
        정렬
      </label>
      <select
        id="catalog-sort"
        value={sort}
        onChange={(event) => onSortChange(event.target.value as SortKey)}
        className="product-toolbar__select"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
