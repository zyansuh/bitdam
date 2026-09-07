import LoungeOrderDetailModal from '../../../features/lounge/components/LoungeOrderDetailModal'
import { shopOrderToLoungeRow } from '../../../features/lounge/utils/shopOrderToLoungeRow'
import { useStaffOrderAlerts } from '../../hooks/useStaffOrderAlerts'
import StaffOrderToast from './StaffOrderToast'

export default function StaffOrderAlertHost() {
  const alerts = useStaffOrderAlerts()
  if (!alerts.allowed) return null

  return (
    <>
      <div className="order-toast-stack">
        {alerts.toasts.map((order) => (
          <StaffOrderToast
            key={order.id}
            order={order}
            onOpen={() => alerts.open(order)}
            onDismiss={() => alerts.dismiss(order.id)}
          />
        ))}
      </div>
      <LoungeOrderDetailModal
        row={alerts.openOrder ? shopOrderToLoungeRow(alerts.openOrder) : null}
        onClose={alerts.close}
      />
    </>
  )
}
