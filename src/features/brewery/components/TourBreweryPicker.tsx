import type { BreweryPin } from '../data/breweries'

interface TourBreweryPickerProps {
  breweries: BreweryPin[]
  selectedId: string
  onSelect: (id: string) => void
}

export default function TourBreweryPicker({ breweries, selectedId, onSelect }: TourBreweryPickerProps) {
  if (!breweries.length) {
    return <p className="tour-desk__empty">이 권역에는 아직 예약 가능한 도가가 없습니다.</p>
  }

  return (
    <ul className="tour-desk__list">
      {breweries.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className={`tour-desk__item${selectedId === item.id ? ' tour-desk__item--on' : ''}`}
            onClick={() => onSelect(item.id)}
          >
            <img src={item.image} alt="" />
            <span>
              <strong>{item.name}</strong>
              <em>{item.region}</em>
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}
