import { SlidersHorizontal } from 'lucide-react'

interface FilterToggleProps {
  open: boolean
  onToggle: () => void
}

export default function FilterToggle({ open, onToggle }: FilterToggleProps) {
  return (
    <button type="button" onClick={onToggle} className="catalog-filter-toggle">
      <SlidersHorizontal size={16} />
      {open ? '필터 닫기' : '상세 필터'}
    </button>
  )
}
