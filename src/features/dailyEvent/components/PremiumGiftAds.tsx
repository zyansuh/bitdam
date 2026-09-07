import { formatWon } from '../../../shared/utils/formatWon'
import { PREMIUM_GIFT_ADS } from '../data/dailyEventCopy'

interface PremiumGiftAdsProps {
  sharedToday: boolean
  shareDone: boolean
  onShare: () => void
}

export default function PremiumGiftAds({ sharedToday, shareDone, onShare }: PremiumGiftAdsProps) {
  return (
    <aside className="lucky-ads">
      <h2>설날 한정 프리미엄 기프트</h2>
      <ul>
        {PREMIUM_GIFT_ADS.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="" />
            <div>
              <strong>{item.name}</strong>
              <em>{formatWon(item.price)}</em>
              <p>{item.perk}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="lucky-share">
        <p>이벤트를 공유하면 스탬프 1개를 추가 지급합니다!</p>
        <button type="button" className="shop-gold-btn" onClick={onShare} disabled={sharedToday}>
          {sharedToday ? '오늘은 공유 스탬프를 이미 받았습니다' : '공유하기'}
        </button>
        {shareDone && !sharedToday ? <p>주소를 공유했습니다.</p> : null}
        {shareDone && sharedToday ? <p>이 페이지 주소를 공유했고 스탬프를 추가했습니다.</p> : null}
      </div>
    </aside>
  )
}
