import { brandStoryPartners } from '../data/brandStory'

export default function BrandStoryPartners() {
  return (
    <section className="brand-partners">
      <h2 className="brand-partners__title">함께하는 양조장</h2>
      <ul>
        {brandStoryPartners.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
