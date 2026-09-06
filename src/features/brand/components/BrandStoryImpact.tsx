import { brandStoryStats } from '../data/brandStory'

export default function BrandStoryImpact() {
  return (
    <section className="brand-impact">
      {brandStoryStats.map((item) => (
        <article key={item.label} className="brand-impact__card">
          <p className="brand-impact__value">{item.value}</p>
          <p className="brand-impact__label">{item.label}</p>
        </article>
      ))}
    </section>
  )
}
