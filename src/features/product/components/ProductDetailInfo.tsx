import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../../data/products'
import { useCart } from '../../../shared/hooks/useCart'
import { formatWon } from '../../../shared/utils/formatWon'
import { useItemQuantity } from '../hooks/useItemQuantity'
import { buildComparePath } from '../utils/compareQuery'
import TasteBars from './TasteBars'

interface ProductDetailInfoProps {
  product: Product
  similarIds: number[]
}

export default function ProductDetailInfo({ product, similarIds }: ProductDetailInfoProps) {
  const { quantity, decrease, increase } = useItemQuantity()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const compareTo = buildComparePath([product.id, ...similarIds])

  return (
    <div className="pdp-info">
      <p className="pdp-info__brewery">
        {product.brewery} · {product.region}
      </p>
      <h1 className="pdp-info__name">{product.name}</h1>
      <p className="pdp-info__tagline">{product.tagline}</p>
      <div className="pdp-info__badges">
        <span className="pdp-info__badge">종류 {product.category}</span>
        <span className="pdp-info__badge">도수 {product.abv}%</span>
        <span className="pdp-info__badge">용량 {product.volumeMl}ml</span>
      </div>
      <p className="pdp-info__price">{formatWon(product.price)}</p>
      <div className="pdp-info__taste">
        <h2 className="pdp-info__taste-title">맛 프로필</h2>
        <TasteBars taste={product.taste} />
      </div>
      <div className="pdp-info__actions">
        <div className="pdp-info__qty">
          <button type="button" aria-label="수량 줄이기" onClick={decrease}>
            <Minus size={16} />
          </button>
          <span>{quantity}</span>
          <button type="button" aria-label="수량 늘리기" onClick={increase}>
            <Plus size={16} />
          </button>
        </div>
        <button
          type="button"
          className="pdp-info__cart"
          onClick={() => {
            addItem(product.id, quantity)
            setAdded(true)
          }}
        >
          {added ? '담았습니다' : `장바구니 담기 · ${formatWon(product.price * quantity)}`}
        </button>
      </div>
      <div className="pdp-info__links">
        <Link to={compareTo} className="pdp-info__compare">
          비슷한 술 비교하기
        </Link>
        <Link to={`/products/${product.id}/review`} className="pdp-info__compare">
          구매 후기 작성
        </Link>
      </div>
    </div>
  )
}
