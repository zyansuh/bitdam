import { ABV_RANGES } from '../../data/filterOptions'

interface AbvFilterProps {
  selected: string | null
  onSelect: (id: string | null) => void
}

export default function AbvFilter({ selected, onSelect }: AbvFilterProps) {
  return (
    <fieldset>
      <legend className="filter-legend">도수</legend>
      <ul className="filter-list">
        {ABV_RANGES.map((range) => (
          <li key={range.id}>
            <label className="filter-check">
              <input
                type="radio"
                name="abv-range"
                checked={selected === range.id}
                onChange={() => onSelect(range.id)}
                className="filter-radio__input"
              />
              {range.label}
            </label>
          </li>
        ))}
        <li>
          <button type="button" onClick={() => onSelect(null)} className="filter-clear">
            도수 선택 해제
          </button>
        </li>
      </ul>
    </fieldset>
  )
}
