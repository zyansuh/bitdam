import CountdownBoxes from '../../../shared/components/feedback/CountdownBoxes'
import { useCountdown } from '../../../shared/hooks/useCountdown'
import { HOLIDAY_GIFT_END } from '../data/holidayGiftSets'

export default function HolidayGiftHero() {
  const parts = useCountdown(HOLIDAY_GIFT_END)

  return (
    <section
      className="hgift-hero"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=720&fit=crop&q=80)',
      }}
    >
      <div className="hgift-hero__veil">
        <div>
          <p>추석 명절 선물세트</p>
          <h1>전통주 최대 30% 특별 할인전</h1>
          <strong className="hgift-hero__script">추석</strong>
        </div>
        <div className="hgift-hero__count">
          <p>명절 특별전 마감 남은 시간</p>
          <CountdownBoxes parts={parts} showDays />
        </div>
      </div>
    </section>
  )
}
