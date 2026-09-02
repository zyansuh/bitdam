import { brandStoryHero } from '../data/brandStory'

export default function BrandStoryHero() {
  return (
    <header className="brand-story-hero">
      <div className="brand-story-hero__media">
        <img
          src={brandStoryHero.image}
          alt={brandStoryHero.imageAlt}
          className="brand-story-hero__image"
        />
        <div className="brand-story-hero__shade" />
      </div>
      <div className="brand-story-hero__copy">
        <p className="brand-story-hero__kicker">{brandStoryHero.kicker}</p>
        <p className="brand-story-hero__name">{brandStoryHero.name}</p>
        <h1 className="brand-story-hero__title">{brandStoryHero.title}</h1>
      </div>
    </header>
  )
}
