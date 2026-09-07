import LoungeLayout from '../components/LoungeLayout'
import { LOUNGE_SUBSCRIBES } from '../data/loungeRecords'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { inSellerScope } from '../utils/inSellerScope'
import { sellerIdsForScope } from '../utils/loungeSnapshot'

export default function LoungeSubscriptionsPage() {
  return (
    <LoungeLayout>
      <LoungeSubscriptionsBody />
    </LoungeLayout>
  )
}

function LoungeSubscriptionsBody() {
  const { scopeId } = useLoungeScope()
  const rows = inSellerScope(LOUNGE_SUBSCRIBES, sellerIdsForScope(scopeId))

  return (
    <section className="lounge-panel">
      <h2>구독 관리</h2>
      <div className="lounge-table-wrap">
        <table className="lounge-table">
          <thead>
            <tr>
              <th>플랜</th>
              <th>회원</th>
              <th>다음 발송</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.plan}</td>
                <td>{row.member}</td>
                <td>{row.nextShip}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
