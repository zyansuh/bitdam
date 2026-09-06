import { Check } from 'lucide-react'

interface BreweryIncludesProps {
  items: string[]
}

export default function BreweryIncludes({ items }: BreweryIncludesProps) {
  return (
    <section>
      <h2 className="brewery-detail__heading">포함 사항</h2>
      <ul className="brewery-includes">
        {items.map((item) => (
          <li key={item} className="brewery-includes__item">
            <Check size={16} strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
