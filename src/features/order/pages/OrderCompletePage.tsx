import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import OrderCompleteActions from '../components/OrderCompleteActions'
import OrderCompleteMark from '../components/OrderCompleteMark'
import OrderShippingBlock from '../components/OrderShippingBlock'
import OrderStepper from '../components/OrderStepper'
import { useLastOrder } from '../hooks/useLastOrder'

export default function OrderCompletePage() {
  const order = useLastOrder()

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
            <h1 className="order-complete__title">주문이 빚담 완료되었습니다</h1>
            <p className="order-complete__lead">
              결제 및 성인 인증이 안전하게 완료되었습니다.
            </p>
            <OrderStepper />
            <OrderShippingBlock order={order} />
            <OrderCompleteActions />
          </>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
