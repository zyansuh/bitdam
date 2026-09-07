import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { patchShopOrder } from '../../../shared/utils/shopOrderStorage'
import type { ShopOrderStatus } from '../../../shared/types/shopOrder'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import OrderShippingBlock from '../components/OrderShippingBlock'
import OrderStepper from '../components/OrderStepper'
import { ORDER_STEPS } from '../data/orderSteps'
import { useShopOrderParam } from '../hooks/useShopOrderParam'

export default function OrderDetailPage() {
  const { order, reload } = useShopOrderParam()

  if (!order) {
    return (
      <PageLayout>
        <CatalogHeader />
        <main className="order-complete">
          <div className="order-complete__empty">
            <p>주문을 찾을 수 없습니다.</p>
            <Link to="/mypage">마이페이지</Link>
          </div>
        </main>
        <Footer />
      </PageLayout>
    )
  }

  const current = ORDER_STEPS.findIndex((step) => step.id === order.status)
  const next = ORDER_STEPS[current + 1]

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="order-complete">
        <h1 className="order-complete__title">주문 상세</h1>
        <p className="order-complete__lead">배송 상태는 결제완료 → 준비중 → 배송중 → 배송완료 순입니다.</p>
        <OrderStepper status={order.status} />
        <OrderShippingBlock order={order} />
        {next ? (
          <button
            type="button"
            className="order-complete__solid"
            onClick={() => {
              patchShopOrder(order.id, { status: next.id as ShopOrderStatus })
              reload()
            }}
          >
            다음 단계로 ({next.label})
          </button>
        ) : (
          <p className="order-complete__lead">배송이 완료되었습니다.</p>
        )}
        <p>
          <Link to="/mypage">마이페이지 목록</Link>
        </p>
      </main>
      <Footer />
    </PageLayout>
  )
}
