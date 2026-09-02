import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import CompareEmpty from '../components/CompareEmpty'
import CompareTable from '../components/CompareTable'
import { useCompareProducts } from '../hooks/useCompareProducts'

export default function ComparePage() {
  const { products, pathWithout } = useCompareProducts()

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="compare-page">
        <div className="compare-page__head">
          <div>
            <h1 className="compare-page__title">우리술 정밀 분석 비교</h1>
            <p className="compare-page__lead">
              가격·도수·용량·지역·양조장과 맛 프로필을 같은 기준으로 나란히 봅니다.
            </p>
          </div>
          <Link to="/products" className="compare-page__add">
            + 비교 항목 추가
          </Link>
        </div>
        {products.length === 0 ? (
          <CompareEmpty />
        ) : (
          <CompareTable products={products} pathWithout={pathWithout} />
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
