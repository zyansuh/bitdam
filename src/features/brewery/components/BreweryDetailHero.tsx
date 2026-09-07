import type { BreweryDetail } from '../types/breweryDetail'
import SafeImage from '../../../shared/components/media/SafeImage'

interface BreweryDetailHeroProps {
  brewery: BreweryDetail
}

export default function BreweryDetailHero({ brewery }: BreweryDetailHeroProps) {
  return (
    <section className="brewery-detail-hero">
      <SafeImage src={brewery.heroImage} alt="" className="brewery-detail-hero__image" />
      <div className="brewery-detail-hero__copy">
        <p className="brewery-detail-hero__kicker">{brewery.subtitle}</p>
        <h1 className="brewery-detail-hero__title">{brewery.heroTitle} 투어</h1>
        <p className="brewery-detail-hero__lead">{brewery.programDesc}</p>
      </div>
    </section>
  )
}
