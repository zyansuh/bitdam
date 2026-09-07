import { formatWon } from '../../../shared/utils/formatWon'
import LoungeLayout from '../components/LoungeLayout'
import { LOUNGE_CUSTOMERS } from '../data/loungeRecords'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { inSellerScope } from '../utils/inSellerScope'
import { sellerIdsForScope } from '../utils/loungeSnapshot'

export default function LoungeCustomersPage() {
  return (
    <LoungeLayout>
      <LoungeCustomersBody />
    </LoungeLayout>
  )
}

function LoungeCustomersBody() {
  const { scopeId } = useLoungeScope()
  const rows = inSellerScope(LOUNGE_CUSTOMERS, sellerIdsForScope(scopeId))

  return (
    <section className="lounge-panel">
      <h2>고객 관리</h2>
      <div className="lounge-table-wrap">
        <table className="lounge-table">
          <thead>
            <tr>
              <th>구매자</th>
              <th>주문 수</th>
              <th>누적 금액</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.orders}</td>
                <td>{formatWon(row.spend)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
