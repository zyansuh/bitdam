import { brandStoryHero } from '../data/brandStory'

interface BrandStoryHeroProps {
  title?: string
  lead?: string
}

export default function BrandStoryHero({ title, lead }: BrandStoryHeroProps) {
  return (
    <header className="brand-story-hero">
      <div className="brand-story-hero__media">
        <img src={brandStoryHero.image} alt={brandStoryHero.imageAlt} className="brand-story-hero__image" />
        <div className="brand-story-hero__shade" />
      </div>
      <div className="brand-story-hero__copy">
        <p className="brand-story-hero__kicker">{brandStoryHero.kicker}</p>
        <p className="brand-story-hero__name">{brandStoryHero.name}</p>
        <h1 className="brand-story-hero__title">{title ?? brandStoryHero.title}</h1>
        <p className="brand-story-hero__lead">{lead ?? brandStoryHero.lead}</p>
      </div>
    </header>
  )
}
