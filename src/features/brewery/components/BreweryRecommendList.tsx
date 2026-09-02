import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { allProducts } from '../../../data/products'
import type { BreweryPin } from '../data/breweries'

interface BreweryRecommendListProps {
  breweries: BreweryPin[]
  selectedId: string | undefined
  onSelect: (id: string) => void
}

function productPath(breweryKey: string) {
  const product = allProducts.find((item) => item.brewery === breweryKey)
  return product ? `/products/${product.id}` : '/products'
}

export default function BreweryRecommendList({
  breweries,
  selectedId,
  onSelect,
}: BreweryRecommendListProps) {
  const shown = breweries.slice(0, 3)

  return (
    <section>
      <h2 className="brewery-section__title">이 지역 추천 양조장 ({shown.length})</h2>
      {shown.length === 0 ? (
        <p className="brewery-empty">이 권역에 등록된 양조장이 아직 없습니다.</p>
      ) : (
        <ul className="brewery-list">
          {shown.map((item) => (
            <li key={item.id}>
              <article
                className={
                  selectedId === item.id ? 'brewery-card brewery-card--on' : 'brewery-card'
                }
              >
                <button
                  type="button"
                  className="brewery-card__hit"
                  onClick={() => onSelect(item.id)}
                >
                  <img src={item.image} alt="" className="brewery-card__image" />
                  <div className="brewery-card__body">
                    <p className="brewery-card__name">{item.name}</p>
                    <p className="brewery-card__meta">
                      {item.region}
                      <Star size={12} className="brewery-card__star" />
                      {item.rating}
                    </p>
                    <p className="brewery-card__summary">{item.summary}</p>
                  </div>
                </button>
                <Link to={productPath(item.breweryKey)} className="brewery-card__link">
                  이 집 술 보기
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
