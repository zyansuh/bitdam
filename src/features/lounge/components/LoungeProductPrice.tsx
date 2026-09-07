interface LoungeProductPriceProps {
  price: string
  stock: string
  onPrice: (value: string) => void
  onStock: (value: string) => void
}

export default function LoungeProductPrice({ price, stock, onPrice, onStock }: LoungeProductPriceProps) {
  return (
    <div className="lounge-form">
      <h2>가격 / 재고</h2>
      <label>
        판매가 (원)
        <input value={price} onChange={(event) => onPrice(event.target.value)} />
      </label>
      <label>
        안전 재고 (병)
        <input value={stock} onChange={(event) => onStock(event.target.value)} />
      </label>
    </div>
  )
}
