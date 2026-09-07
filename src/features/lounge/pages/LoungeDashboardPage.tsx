import LoungeKpiRow from '../components/LoungeKpiRow'
import LoungeLayout from '../components/LoungeLayout'
import LoungeOrderTable from '../components/LoungeOrderTable'
import LoungeSalesBars from '../components/LoungeSalesBars'
import LoungeSplitDonut from '../components/LoungeSplitDonut'
import { LOUNGE_ORDERS } from '../data/loungeRecords'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { inSellerScope } from '../utils/inSellerScope'
import { barsForScope, kpisForScope, sellerIdsForScope, splitForScope } from '../utils/loungeSnapshot'

export default function LoungeDashboardPage() {
  return (
    <LoungeLayout>
      <LoungeDashboardBody />
    </LoungeLayout>
  )
}

function LoungeDashboardBody() {
  const { scopeId } = useLoungeScope()
  const orders = inSellerScope(LOUNGE_ORDERS, sellerIdsForScope(scopeId))

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
