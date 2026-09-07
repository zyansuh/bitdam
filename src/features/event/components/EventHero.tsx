import type { HolidayEvent } from '../types/holidayEvent'

interface EventHeroProps {
  event: HolidayEvent
}

export default function EventHero({ event }: EventHeroProps) {
  return (
    <section className="event-hero" style={{ backgroundImage: `url(${event.heroImage})` }}>
      <div className="event-hero__veil">
        <p className="event-hero__badge">{event.badge}</p>
        <h1>{event.title}</h1>
        <p>{event.lead}</p>
      </div>
    </section>
  )
}
