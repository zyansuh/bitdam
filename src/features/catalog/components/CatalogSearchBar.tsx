import { Search } from 'lucide-react'

interface CatalogSearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function CatalogSearchBar({ value, onChange }: CatalogSearchBarProps) {
  return (
    <div className="catalog-search">
      <label className="catalog-search__label">
        <Search size={20} strokeWidth={1.5} className="catalog-search__icon" />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="어떤 전통주를 찾고 계신가요?"
          className="catalog-search__input"
        />
      </label>
    </div>
  )
}
