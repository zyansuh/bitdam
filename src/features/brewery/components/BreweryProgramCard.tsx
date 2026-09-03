import type { BreweryDetail } from '../types/breweryDetail'

interface BreweryProgramCardProps {
  brewery: BreweryDetail
}

export default function BreweryProgramCard({ brewery }: BreweryProgramCardProps) {
  return (
    <section className="brewery-program">
      <h2 className="brewery-program__title">{brewery.programTitle}</h2>
      <p className="brewery-program__desc">{brewery.programDesc}</p>
      <p className="brewery-program__price">{brewery.programPrice.toLocaleString()}원</p>
    </section>
  )
}
