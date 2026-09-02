import { Clock, MapPin, CircleParking } from 'lucide-react'
import type { BreweryDetail } from '../types/breweryDetail'

interface BreweryVisitInfoProps {
  brewery: BreweryDetail
}

export default function BreweryVisitInfo({ brewery }: BreweryVisitInfoProps) {
  return (
    <section>
      <h2 className="brewery-detail__heading">찾아오시는 길 & 안내</h2>
      <ul className="brewery-visit">
        <li>
          <MapPin size={16} />
          <span>{brewery.address}</span>
        </li>
        <li>
          <Clock size={16} />
          <span>{brewery.hours}</span>
        </li>
        <li>
          <CircleParking size={16} />
          <span>{brewery.parking}</span>
        </li>
      </ul>
    </section>
  )
}
