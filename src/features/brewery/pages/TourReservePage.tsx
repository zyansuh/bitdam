import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import BreweryRegionTabs from '../components/BreweryRegionTabs'
import BreweryReserveCard from '../components/BreweryReserveCard'
import BrewerySiteHeader from '../components/BrewerySiteHeader'
import TourBreweryInfo from '../components/TourBreweryInfo'
import TourBreweryPicker from '../components/TourBreweryPicker'
import { useTourDesk } from '../hooks/useTourDesk'

export default function TourReservePage() {
  const desk = useTourDesk()

  return (
    <PageLayout>
      <BrewerySiteHeader />
      <main className="tour-desk">
        <header className="tour-desk__head">
          <h1>지역별 투어 예약</h1>
          <p>권역을 고른 뒤 양조장 정보를 보고 날짜·인원을 신청하세요.</p>
        </header>
        <BreweryRegionTabs regionId={desk.regionId} onSelect={desk.selectRegion} />
        <div className="tour-desk__grid">
          <TourBreweryPicker
            breweries={desk.list}
            selectedId={desk.breweryId}
            onSelect={desk.setBreweryId}
          />
          {desk.selected ? <TourBreweryInfo brewery={desk.selected} /> : null}
          {desk.selected ? <BreweryReserveCard brewery={desk.selected} /> : null}
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
