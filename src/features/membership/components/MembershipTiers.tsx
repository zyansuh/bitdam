import { formatWon } from '../../../shared/utils/formatWon'
import { MEMBERSHIP_TIERS } from '../data/membership'

export default function MembershipTiers() {
  return (
    <section className="member-card">
      <h2 className="member-card__title">빚담 멤버십 등급 기준</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>등급</th>
            <th>연간 구매 금액</th>
          </tr>
        </thead>
        <tbody>
          {MEMBERSHIP_TIERS.map((tier) => (
            <tr key={tier.id}>
              <td>{tier.name}</td>
              <td>{formatWon(tier.minSpend)} 이상</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
