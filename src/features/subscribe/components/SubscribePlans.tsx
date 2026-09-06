import { formatWon } from '../../../shared/utils/formatWon'
import { SUBSCRIBE_PLANS } from '../data/subscribePlans'

export default function SubscribePlans() {
  return (
    <section className="sub-plans" id="plans">
      <h2>나의 라이프스타일에 맞춘 전통주 구독 플랜</h2>
      <ul>
        {SUBSCRIBE_PLANS.map((plan) => (
          <li key={plan.id} className={plan.popular ? 'is-hot' : undefined}>
            {plan.popular ? <span>Most Popular</span> : null}
            <h3>{plan.name}</h3>
            <p>
              <strong>{formatWon(plan.price)}</strong>
              <em>/월</em>
            </p>
            <ul>
              {plan.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <button type="button" className={plan.popular ? 'shop-gold-btn' : 'shop-ghost-btn'}>
              이 플랜으로 시작
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
