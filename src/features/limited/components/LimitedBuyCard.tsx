import { formatWon } from '../../../shared/utils/formatWon'
import { LIMITED_EDITION } from '../data/limitedEdition'

interface LimitedBuyCardProps {
  reserved: boolean
  shareDone: boolean
  onReserve: () => void
  onShare: () => void
}

export default function LimitedBuyCard({ reserved, shareDone, onReserve, onShare }: LimitedBuyCardProps) {
  const item = LIMITED_EDITION

  return (
    <aside className="limited-buy">
      <p>빛담 EXCLUSIVE COLLAB</p>
      <h2>{item.title}</h2>
      <p className="limited-buy__price">
        <s>{formatWon(item.origin)}</s>
        <strong>{formatWon(item.sale)}</strong>
        <em>한정 예약 특가</em>
      </p>
      <div className="limited-fund">
        상생 펀딩: 결제액의 {item.fundShare}%가 전통주 보존에 쓰입니다.
      </div>
      {reserved ? (
        <p className="gift-done">선예약이 접수되었습니다. 오픈 시 안내 메일을 보냅니다.</p>
      ) : (
        <button type="button" className="shop-gold-btn" onClick={onReserve}>
          한정판 펀딩 선예약하기
        </button>
      )}
      <button type="button" className="shop-ghost-btn" onClick={onShare}>
        이 특별한 콜라보 소문내기
      </button>
      {shareDone ? <p>이 페이지 주소를 공유했습니다.</p> : null}
    </aside>
  )
}
