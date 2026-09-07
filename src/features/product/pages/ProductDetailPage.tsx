import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import ProductDetailGallery from '../components/ProductDetailGallery'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailStory from '../components/ProductDetailStory'
import { useProductDetail } from '../hooks/useProductDetail'

export default function ProductDetailPage() {
  const { product, similar } = useProductDetail()

  if (!product) {
    return (
      <PageLayout>
        <CatalogHeader />
        <main className="pdp-missing">
          <p>상품을 찾을 수 없습니다.</p>
          <Link to="/products">목록으로 돌아가기</Link>
        </main>
        <Footer />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="pdp">
        <div className="pdp__hero">
          <ProductDetailGallery product={product} />
          <ProductDetailInfo product={product} similar={similar} />
        </div>
        <ProductDetailStory product={product} reviews={[]} />
      </main>
      <Footer />
    </PageLayout>
  )
}
