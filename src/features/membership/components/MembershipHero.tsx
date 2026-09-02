import { Link } from 'react-router-dom'
import LoginLink from '../../../shared/components/navigation/LoginLink'
import { formatWon } from '../../../shared/utils/formatWon'
import { MEMBERSHIP_EXPIRING, MEMBERSHIP_POINTS } from '../data/membership'
import MembershipProgress from './MembershipProgress'

interface MembershipHeroProps {
  honorific: string
  loggedIn: boolean
  tierName: string
  remain: number
  nextName: string | null
  progress: number
}

export default function MembershipHero({
  honorific,
  loggedIn,
  tierName,
  remain,
  nextName,
  progress,
}: MembershipHeroProps) {
  return (
    <section className="member-hero">
      <div className="member-hero__status">
        {loggedIn ? (
          <h2 className="member-hero__title">
            {honorific}은 현재 <strong>{tierName} 회원</strong>입니다.
          </h2>
        ) : (
          <h2 className="member-hero__title">
            로그인하면 등급과 포인트를 확인할 수 있습니다.
          </h2>
        )}
        {nextName ? (
          <MembershipProgress
            percent={progress}
            label={`${nextName} 승급까지 ${formatWon(remain)} 남음`}
          />
        ) : (
          <p className="member-progress__label">최고 등급입니다.</p>
        )}
        {!loggedIn && (
          <LoginLink className="member-hero__login">로그인하고 등급 보기</LoginLink>
        )}
      </div>
      <aside className="member-hero__points">
        <p>사용 가능 포인트</p>
        <strong>{MEMBERSHIP_POINTS.toLocaleString()} P</strong>
        <span>당월 소멸 예정 포인트 {MEMBERSHIP_EXPIRING.toLocaleString()} P</span>
        <Link to="/coupons" className="member-hero__coupon">
          쿠폰함 보기
        </Link>
      </aside>
    </section>
  )
}
