import { useCouponWallet } from '../../../shared/hooks/useCouponWallet'
import { useMypageOrders } from '../hooks/useMypageOrders'

export default function MypageStatCards() {
  const { unused } = useCouponWallet()
  const orders = useMypageOrders()
  const stats = [
    { label: '진행 중 주문', value: String(orders.filter((row) => row.status !== '배송 완료').length) },
    { label: '보유 쿠폰', value: String(unused.length) },
    { label: '보유 포인트', value: '4,500P' },
    { label: '명인 인증서', value: '4' },
  ]

  return (
    <ul className="mypage-stats">
      {stats.map((item) => (
        <li key={item.label} className="mypage-stats__card">
          <p className="mypage-stats__label">{item.label}</p>
          <p className="mypage-stats__value">{item.value}</p>
        </li>
      ))}
    </ul>
  )
}
