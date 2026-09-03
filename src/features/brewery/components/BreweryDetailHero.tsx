import type { BreweryDetail } from '../types/breweryDetail'

interface BreweryDetailHeroProps {
  brewery: BreweryDetail
}

export default function BreweryDetailHero({ brewery }: BreweryDetailHeroProps) {
  return (
    <section className="brewery-detail-hero">
      <img src={brewery.heroImage} alt="" className="brewery-detail-hero__image" />
      <div className="brewery-detail-hero__copy">
        <p className="brewery-detail-hero__kicker">{brewery.subtitle}</p>
        <h1 className="brewery-detail-hero__title">{brewery.heroTitle}</h1>
      </div>
    </section>
  )
}
