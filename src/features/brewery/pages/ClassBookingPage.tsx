import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import ClassFeaturedCard from '../components/ClassFeaturedCard'
import ClassFilterSidebar from '../components/ClassFilterSidebar'
import ClassSessionList from '../components/ClassSessionList'
import { getBreweryById } from '../data/breweries'
import { useClassBooking } from '../hooks/useClassBooking'
import { useClassFilters } from '../hooks/useClassFilters'

export default function ClassBookingPage() {
  const filters = useClassFilters()
  const booking = useClassBooking()
  const brewery = filters.breweryId ? getBreweryById(filters.breweryId) : undefined

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="class-page">
        <header className="class-page__head">
          <h1 className="class-page__title">클래스 예약</h1>
          {brewery ? (
            <p className="class-page__sub">{brewery.name} 체험 · 투어</p>
          ) : (
            <p className="class-page__sub">명인과 함께하는 빚담 클래스</p>
          )}
        </header>
        {filters.featured ? (
          <ClassFeaturedCard
            session={filters.featured}
            booked={booking.isBooked(filters.featured.id)}
            onBook={booking.book}
          />
        ) : null}
        <div className="class-page__layout">
          <ClassFilterSidebar
            dateKey={filters.dateKey}
            onSelectDate={filters.setDateKey}
            availableDates={filters.availableDates}
            levelOn={filters.levelOn}
            onToggleLevel={filters.toggleLevel}
            durationOn={filters.durationOn}
            onToggleDuration={filters.toggleDuration}
          />
          <ClassSessionList sessions={filters.list} isBooked={booking.isBooked} onBook={booking.book} />
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
