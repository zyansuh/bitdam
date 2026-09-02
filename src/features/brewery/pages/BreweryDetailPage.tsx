import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import BreweryAwards from '../components/BreweryAwards'
import BreweryDetailHero from '../components/BreweryDetailHero'
import BreweryMaster from '../components/BreweryMaster'
import BreweryProgramCard from '../components/BreweryProgramCard'
import BrewerySideProducts from '../components/BrewerySideProducts'
import BreweryStory from '../components/BreweryStory'
import BreweryTourBar from '../components/BreweryTourBar'
import BreweryVisitInfo from '../components/BreweryVisitInfo'
import { useBreweryDetail } from '../hooks/useBreweryDetail'

export default function BreweryDetailPage() {
  const brewery = useBreweryDetail()

  if (!brewery) {
    return (
      <PageLayout>
        <CatalogHeader />
        <main className="brewery-detail-missing">
          <p>양조장을 찾을 수 없습니다.</p>
          <Link to="/breweries">지도로 돌아가기</Link>
        </main>
        <Footer />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="brewery-detail">
        <BreweryDetailHero brewery={brewery} />
        <div className="brewery-detail__grid">
          <div className="brewery-detail__main">
            <BreweryStory brewery={brewery} />
            <BreweryMaster brewery={brewery} />
            <BreweryAwards awards={brewery.awards} />
          </div>
          <aside className="brewery-detail__aside">
            <BrewerySideProducts products={brewery.products} />
            <BreweryProgramCard brewery={brewery} />
            <BreweryVisitInfo brewery={brewery} />
          </aside>
        </div>
        <BreweryTourBar name={brewery.name} breweryId={brewery.id} />
      </main>
      <Footer />
    </PageLayout>
  )
}
