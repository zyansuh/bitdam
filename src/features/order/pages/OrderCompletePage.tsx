import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import OrderCompleteActions from '../components/OrderCompleteActions'
import OrderCompleteMark from '../components/OrderCompleteMark'
import OrderShippingBlock from '../components/OrderShippingBlock'
import OrderStepper from '../components/OrderStepper'
import { useShopOrderParam } from '../hooks/useShopOrderParam'

export default function OrderCompletePage() {
  const { order } = useShopOrderParam()

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="order-complete">
        {!order ? (
          <div className="order-complete__empty">
            <p>최근 주문 내역이 없습니다.</p>
            <Link to="/products">상품 보러 가기</Link>
          </div>
        ) : (
          <>
            <OrderCompleteMark />
            <h1 className="order-complete__title">주문이 완료되었습니다</h1>
            <p className="order-complete__lead">결제가 끝나면 셀러 라운지와 마이페이지에 같은 주문번호로 쌓입니다.</p>
            <OrderStepper status={order.status} />
            <OrderShippingBlock order={order} />
            <OrderCompleteActions orderId={order.id} />
          </>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
