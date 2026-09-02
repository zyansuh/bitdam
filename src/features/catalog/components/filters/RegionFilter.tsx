import { REGION_GROUPS } from '../../data/filterOptions'

interface RegionFilterProps {
  selected: string[]
  onToggle: (region: string) => void
}

export default function RegionFilter({ selected, onToggle }: RegionFilterProps) {
  return (
    <fieldset>
      <legend className="filter-legend">지역별</legend>
      <ul className="filter-list">
        {REGION_GROUPS.map((region) => (
          <li key={region}>
            <label className="filter-check">
              <input
                type="checkbox"
                checked={selected.includes(region)}
                onChange={() => onToggle(region)}
                className="filter-check__input"
              />
              {region}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}
