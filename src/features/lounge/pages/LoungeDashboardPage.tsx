import LoungeKpiRow from '../components/LoungeKpiRow'
import LoungeLayout from '../components/LoungeLayout'
import LoungeOrderTable from '../components/LoungeOrderTable'
import LoungeSalesBars from '../components/LoungeSalesBars'
import LoungeSplitDonut from '../components/LoungeSplitDonut'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { useScopedLoungeOrders } from '../hooks/useScopedLoungeOrders'
import { barsForScope, kpisForScope, splitForScope } from '../utils/loungeSnapshot'

export default function LoungeDashboardPage() {
  return (
    <LoungeLayout>
      <LoungeDashboardBody />
    </LoungeLayout>
  )
}

function LoungeDashboardBody() {
  const { scopeId } = useLoungeScope()
  const orders = useScopedLoungeOrders()

  return (
    <>
      <LoungeKpiRow items={kpisForScope(scopeId)} />
      <div className="lounge-split">
        <LoungeSalesBars bars={barsForScope(scopeId)} />
        <LoungeSplitDonut slices={splitForScope(scopeId)} />
      </div>
      <LoungeOrderTable rows={orders} />
    </>
  )
}
