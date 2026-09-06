import { allProducts } from '../../../data/products'
import { formatWon } from '../../../shared/utils/formatWon'

interface GiftProductPickProps {
  productId: number | null
  onPick: (id: number) => void
  onNext: () => void
}

export default function GiftProductPick({ productId, onPick, onNext }: GiftProductPickProps) {
  const picks = allProducts.slice(0, 6)

  return (
    <section className="gift-panel">
      <header>
        <h1>선물할 전통주를 고르세요</h1>
        <p>마켓 카탈로그의 상품만 담습니다. 한 병을 고른 뒤 메시지를 작성할 수 있습니다.</p>
      </header>
      <ul className="gift-pick">
        {picks.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`gift-pick__card${productId === item.id ? ' gift-pick__card--on' : ''}`}
              onClick={() => onPick(item.id)}
            >
              <img src={item.image} alt="" />
              <strong>{item.name}</strong>
              <span>{item.region}</span>
              <em>{formatWon(item.price)}</em>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="shop-gold-btn" disabled={productId == null} onClick={onNext}>
        메시지 작성으로
      </button>
    </section>
  )
}
