import LoungeLayout from '../components/LoungeLayout'
import LoungeOrderTable from '../components/LoungeOrderTable'
import { LOUNGE_ORDERS } from '../data/loungeRecords'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { inSellerScope } from '../utils/inSellerScope'
import { sellerIdsForScope } from '../utils/loungeSnapshot'

export default function LoungeOrdersPage() {
  return (
    <LoungeLayout>
      <LoungeOrdersBody />
    </LoungeLayout>
  )
}

function LoungeOrdersBody() {
  const { scopeId } = useLoungeScope()
  return <LoungeOrderTable rows={inSellerScope(LOUNGE_ORDERS, sellerIdsForScope(scopeId))} />
}
