import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import BreweryHero from '../components/BreweryHero'
import BreweryMapCanvas from '../components/BreweryMapCanvas'
import BreweryRecommendList from '../components/BreweryRecommendList'
import BreweryRegionTabs from '../components/BreweryRegionTabs'
import { useBreweryMap } from '../hooks/useBreweryMap'

export default function BreweryMapPage() {
  const map = useBreweryMap()

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="brewery-page">
        <BreweryHero />
        <BreweryRegionTabs regionId={map.regionId} onSelect={map.selectRegion} />
        <div className="brewery-page__layout">
          <BreweryMapCanvas
            selected={map.selected}
            regionId={map.regionId}
            onSelect={map.setSelectedId}
            onSelectRegion={map.selectRegion}
          />
          <BreweryRecommendList
            breweries={map.list}
            selectedId={map.selected?.id}
            onSelect={map.setSelectedId}
          />
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
