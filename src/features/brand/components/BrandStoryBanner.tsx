import { Link } from 'react-router-dom'
import { brandStoryBanner } from '../data/brandStory'

export default function BrandStoryBanner() {
  return (
    <section className="brand-banner">
      <h2>{brandStoryBanner.title}</h2>
      <Link to={brandStoryBanner.to} className="brand-banner__cta">
        {brandStoryBanner.action}
      </Link>
    </section>
  )
}
