import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useWishlist } from '../../../shared/hooks/useWishlist'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import WishlistCard from '../components/WishlistCard'
import WishlistToolbar from '../components/WishlistToolbar'
import { useWishlistSort } from '../hooks/useWishlistSort'

export default function WishlistPage() {
  const { items, count } = useWishlist()
  const { sort, setSort, sorted } = useWishlistSort(items)

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="wish-page">
        <div className="wish-page__head">
          <div>
            <h1 className="wish-page__title">위시리스트</h1>
            <p className="wish-page__lead">
              원픽해주신 소중한 우리술을 한눈에 모아보고 장바구니에 담으세요.
            </p>
          </div>
          <WishlistToolbar count={count} sort={sort} onSort={setSort} />
        </div>
        {sorted.length === 0 ? (
          <div className="wish-page__empty">
            <p>담아 둔 술이 없습니다.</p>
            <Link to="/products">상품 보러 가기</Link>
          </div>
        ) : (
          <div className="wish-page__grid">
            {sorted.map((item) => (
              <WishlistCard key={item.product.id} product={item.product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
