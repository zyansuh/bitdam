import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { Product } from '../../../data/products'
import { useFeaturedCarousel } from '../hooks/useFeaturedCarousel'

interface FeaturedProductProps {
  products: Product[]
}

export default function FeaturedProduct({ products }: FeaturedProductProps) {
  const featured = products.slice(0, 5)
  const { index, goPrev, goNext } = useFeaturedCarousel(featured.length, products)
  const current = featured[index] ?? featured[0]

  if (!current || featured.length === 0) {
    return <div className="featured-empty">이 조건에 맞는 대표 상품이 없습니다</div>
  }

  return (
    <article className="featured">
      <div className="featured__media">
        <Link to={`/products/${current.id}`}>
          <img src={current.image} alt={current.name} className="featured__image" />
        </Link>
        {featured.length > 1 && (
          <>
            <button
              type="button"
              aria-label="이전 대표 상품"
              onClick={goPrev}
              className="featured__arrow featured__arrow--prev"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="다음 대표 상품"
              onClick={goNext}
              className="featured__arrow featured__arrow--next"
            >
              <ChevronRight size={20} />
            </button>
            <p className="featured__pager">
              {index + 1} / {featured.length}
            </p>
          </>
        )}
      </div>
      <div className="featured__body">
        <Link to={`/products/${current.id}`} className="featured__link">
          <div>
            <p className="featured__region">
              {current.region} · {current.abv}%
            </p>
            <h3 className="featured__name">{current.name}</h3>
          </div>
          <div className="featured__meta">
            <span className="featured__price">{current.price.toLocaleString()}원</span>
            <span className="featured__rating">
              <Star size={14} className="featured__star" />
              {current.rating}
            </span>
          </div>
        </Link>
      </div>
    </article>
  )
}
