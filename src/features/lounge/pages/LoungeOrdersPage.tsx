import LoungeLayout from '../components/LoungeLayout'
import LoungeOrderTable from '../components/LoungeOrderTable'
import { useScopedLoungeOrders } from '../hooks/useScopedLoungeOrders'

export default function LoungeOrdersPage() {
  return (
    <LoungeLayout>
      <LoungeOrdersBody />
    </LoungeLayout>
  )
}

function LoungeOrdersBody() {
  const rows = useScopedLoungeOrders()
  return <LoungeOrderTable rows={rows} />
}
