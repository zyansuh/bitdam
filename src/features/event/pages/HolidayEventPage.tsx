import { Navigate, useParams } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import { getActiveHolidayEvent, getHolidayEvent } from '../data/holidayEvents'
import EventEntryCard from '../components/EventEntryCard'
import EventHero from '../components/EventHero'
import EventHowTo from '../components/EventHowTo'
import EventPrizes from '../components/EventPrizes'
import EventWinners from '../components/EventWinners'
import { useEventEntry } from '../hooks/useEventEntry'

export default function HolidayEventPage() {
  const { slug } = useParams()
  const event = slug ? getHolidayEvent(slug) : getActiveHolidayEvent()
  const entry = useEventEntry()

  if (!event) {
    return <Navigate to={`/events/${getActiveHolidayEvent().slug}`} replace />
  }

  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <EventHero event={event} />
      <main className="event-page">
        <div className="event-split">
          <EventHowTo steps={event.steps} />
          <EventEntryCard
            endsAt={event.endsAt}
            entries={event.entries}
            draft={entry.draft}
            onName={(value) => entry.patch({ name: value })}
            onOrderNo={(value) => entry.patch({ orderNo: value })}
            onWish={(value) => entry.patch({ wish: value })}
            onSubmit={entry.submit}
          />
        </div>
        <EventPrizes prizes={event.prizes} />
        <EventWinners winners={event.winners} />
      </main>
      <Footer />
    </PageLayout>
  )
}
