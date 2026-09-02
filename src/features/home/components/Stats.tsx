import { homeStats } from '../data/stats'

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        {homeStats.map((stat) => (
          <div key={stat.label} className="stats__item">
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
