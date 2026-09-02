import type { Product } from '../../../data/products'
import type { ProductReview } from '../../../shared/types/review'
import { usePdpSectionTab } from '../hooks/usePdpSectionTab'
import ProductReviewList from './ProductReviewList'

interface ProductDetailStoryProps {
  product: Product
  reviews: ProductReview[]
}

export default function ProductDetailStory({ product, reviews }: ProductDetailStoryProps) {
  const { tab, setTab } = usePdpSectionTab()

  return (
    <section className="pdp-story">
      <div className="pdp-story__tabs">
        <button
          type="button"
          className={tab === 'detail' ? 'pdp-story__tab pdp-story__tab--on' : 'pdp-story__tab'}
          onClick={() => setTab('detail')}
        >
          상세 정보
        </button>
        <button
          type="button"
          className={tab === 'reviews' ? 'pdp-story__tab pdp-story__tab--on' : 'pdp-story__tab'}
          onClick={() => setTab('reviews')}
        >
          리뷰 ({product.reviewCount + reviews.length})
        </button>
        <button
          type="button"
          className={tab === 'shipping' ? 'pdp-story__tab pdp-story__tab--on' : 'pdp-story__tab'}
          onClick={() => setTab('shipping')}
        >
          배송 / 반품
        </button>
      </div>
      {tab === 'detail' && (
        <>
          <h2 className="pdp-story__title">{product.tagline}</h2>
          <p className="pdp-story__body">{product.story}</p>
          {product.awards.length > 0 && (
            <ul className="pdp-story__awards">
              {product.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          )}
        </>
      )}
      {tab === 'reviews' && (
        <ProductReviewList
          productId={product.id}
          catalogCount={product.reviewCount}
          reviews={reviews}
        />
      )}
      {tab === 'shipping' && (
        <p className="pdp-story__body">
          7만 원 이상 구매 시 배송비가 없습니다. 주류는 관련 법령에 따라 19세 이상만 수령할 수
          있으며, 단순 변심 반품은 개봉 전 상품에 한합니다.
        </p>
      )}
    </section>
  )
}
