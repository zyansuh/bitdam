import { brandStoryPhilosophies } from '../data/brandStory'

export default function BrandStoryPhilosophies() {
  return (
    <section className="brand-philo">
      <h2 className="brand-philo__title">빚담이 추구하는 3대 핵심 철학</h2>
      <div className="brand-philo__grid">
        {brandStoryPhilosophies.map((item) => (
          <article key={item.id} className="brand-philo__card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
