import { Link } from 'react-router-dom'
import { brandStoryUglyFruit } from '../data/brandStory'

export default function BrandStoryUglyFruit() {
  const block = brandStoryUglyFruit

  return (
    <section className="brand-ugly">
      <div className="brand-ugly__inner">
      <div className="brand-ugly__copy">
        <p className="brand-ugly__badge">{block.badge}</p>
        <h2 className="brand-ugly__title">{block.title}</h2>
        <p className="brand-ugly__text">{block.text}</p>
        <div className="brand-ugly__actions">
          <Link to={block.primary.to} className="brand-ugly__primary">
            {block.primary.label}
          </Link>
          <a href={block.secondary.to} className="brand-ugly__ghost">
            {block.secondary.label}
          </a>
        </div>
      </div>
      <img src={block.image} alt={block.imageAlt} className="brand-ugly__image" />
      </div>
    </section>
  )
}
