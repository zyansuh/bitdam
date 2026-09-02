import { GOLD_BENEFITS } from '../data/membership'

export default function MembershipBenefits() {
  return (
    <section className="member-card">
      <h2 className="member-card__title">골드 등급 혜택 및 조건</h2>
      <ul className="member-benefits">
        {GOLD_BENEFITS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
