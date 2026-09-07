import { Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../../data/products'
import { isSoldOut } from '../../../data/products'
import WishHeartButton from '../../../shared/components/product/WishHeartButton'
import { formatWon } from '../../../shared/utils/formatWon'
import { useItemQuantity } from '../hooks/useItemQuantity'
import TasteBars from './TasteBars'

interface ProductDetailInfoProps {
  product: Product
  similar: Product[]
}

export default function ProductDetailInfo({ product, similar }: ProductDetailInfoProps) {
  const { quantity, decrease, increase } = useItemQuantity(1, product.stock ?? 9)
  const soldOut = isSoldOut(product)

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
        <span className="pdp-info__badge">재고 {soldOut ? '품절' : `${product.stock}병`}</span>
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
        {soldOut ? (
          <span className="pdp-info__cart pdp-info__cart--sold">품절</span>
        ) : (
          <Link to={`/cart?product=${product.id}&qty=${quantity}`} className="pdp-info__cart">
            구매하기 · {formatWon(product.price * quantity)}
          </Link>
        )}
        <WishHeartButton productId={product.id} />
        <Link to="/wishlist" className="pdp-info__compare">
          위시리스트
        </Link>
      </div>
      {similar.length > 0 ? (
        <div className="pdp-info__links">
          <p className="pdp-info__compare">비슷한 술</p>
          {similar.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`} className="pdp-info__compare">
              {item.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
