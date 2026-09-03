import { Award } from 'lucide-react'

interface BreweryAwardsProps {
  awards: string[]
}

export default function BreweryAwards({ awards }: BreweryAwardsProps) {
  return (
    <ul className="brewery-awards">
      {awards.map((award) => (
        <li key={award} className="brewery-awards__item">
          <Award size={14} className="brewery-awards__icon" />
          {award}
        </li>
      ))}
    </ul>
  )
}
