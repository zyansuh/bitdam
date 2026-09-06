interface HelpSearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function HelpSearchBar({ value, onChange }: HelpSearchBarProps) {
  return (
    <label className="help-search">
      <span className="help-search__label">검색</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="궁금한 점을 검색해보세요 (예: 배송, 반품)"
      />
    </label>
  )
}
