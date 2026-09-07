import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import { useProductReviews } from '../../../shared/hooks/useProductReviews'
import ProductDetailGallery from '../components/ProductDetailGallery'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailStory from '../components/ProductDetailStory'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { useProductDetail } from '../hooks/useProductDetail'

export default function ProductDetailPage() {
  const { product, similar } = useProductDetail()
  const reviews = useProductReviews(product?.id ?? 0)

  usePageMeta({
    title: product ? `${product.name} | 빚담` : '상품을 찾을 수 없습니다 | 빚담',
    description: product?.tagline ?? '요청한 상품이 카탈로그에 없습니다.',
    image: product?.image,
  })

  if (!product) {
    return (
      <PageLayout>
        <CatalogHeader />
        <main className="pdp-missing">
          <EmptyState
            title="상품을 찾을 수 없습니다"
            body="잘못된 상품 번호이거나 판매가 중지된 병입니다."
            action={{ href: '/products', label: '목록으로 돌아가기' }}
          />
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
        <ProductDetailStory product={product} reviews={reviews} />
      </main>
      <Footer />
    </PageLayout>
  )
}
