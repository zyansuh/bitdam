import CountdownBoxes from '../../../shared/components/feedback/CountdownBoxes'
import { useCountdown } from '../../../shared/hooks/useCountdown'
import { TIME_SALE_END } from '../data/timeSales'

export default function DealBanner() {
  const parts = useCountdown(TIME_SALE_END)

  return (
    <div className="deal-banner">
      <p>Time Sale Limited Quantity: 오늘의 명인 전통주 선착순 마감 임박!</p>
      <CountdownBoxes parts={parts} />
    </div>
  )
}
