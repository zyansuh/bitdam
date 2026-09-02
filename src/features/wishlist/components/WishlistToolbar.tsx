import type { WishlistSort } from '../hooks/useWishlistSort'

interface WishlistToolbarProps {
  count: number
  sort: WishlistSort
  onSort: (sort: WishlistSort) => void
}

export default function WishlistToolbar({ count, sort, onSort }: WishlistToolbarProps) {
  return (
    <div className="wish-toolbar">
      <p className="wish-toolbar__count">전체 {count}개</p>
      <label className="wish-toolbar__sort">
        <span className="sr-only">정렬</span>
        <select value={sort} onChange={(event) => onSort(event.target.value as WishlistSort)}>
          <option value="latest">최신순</option>
          <option value="price">낮은 가격순</option>
          <option value="rating">평점순</option>
        </select>
      </label>
    </div>
  )
}
