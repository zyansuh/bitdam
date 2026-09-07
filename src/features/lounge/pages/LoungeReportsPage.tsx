import LoungeLayout from '../components/LoungeLayout'
import LoungeSalesBars from '../components/LoungeSalesBars'
import LoungeSplitDonut from '../components/LoungeSplitDonut'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { barsForScope, splitForScope } from '../utils/loungeSnapshot'

export default function LoungeReportsPage() {
  return (
    <LoungeLayout>
      <LoungeReportsBody />
    </LoungeLayout>
  )
}

function LoungeReportsBody() {
  const { scopeId } = useLoungeScope()
  return (
    <div className="lounge-split">
      <LoungeSalesBars bars={barsForScope(scopeId)} />
      <LoungeSplitDonut slices={splitForScope(scopeId)} />
    </div>
  )
}
