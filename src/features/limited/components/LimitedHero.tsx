import { LIMITED_EDITION } from '../data/limitedEdition'

export default function LimitedHero() {
  const item = LIMITED_EDITION

  return (
    <section
      className="limited-hero"
      style={{
        backgroundImage:
          'url(/images/tour-hero.svg',
      }}
    >
      <div>
        <p>
          <span>D-{item.daysLeft}</span>
          <span>한정수량 {item.stock}병</span>
        </p>
        <h1>
          {item.master} × 빛담 크리에이터 한정판 패키지
        </h1>
      </div>
    </section>
  )
}
