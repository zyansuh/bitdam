import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { readLastOrder } from '../../../shared/utils/orderStorage'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import ClaimBreadcrumb from '../components/ClaimBreadcrumb'
import ClaimPhotoDropzone from '../components/ClaimPhotoDropzone'
import ClaimPickupBox from '../components/ClaimPickupBox'
import ClaimProductCard from '../components/ClaimProductCard'
import ClaimStepper from '../components/ClaimStepper'
import { CLAIM_PICKUP_FALLBACK, CLAIM_REASONS } from '../data/claimOptions'
import { useClaimForm } from '../hooks/useClaimForm'
import { useClaimTarget } from '../hooks/useClaimTarget'

export default function ClaimPage() {
  const navigate = useNavigate()
  const { product, orderNo, quantity } = useClaimTarget()
  const form = useClaimForm()
  const order = readLastOrder()
  const pickup = order
    ? { recipient: order.recipient, phone: order.phone, address: order.address }
    : CLAIM_PICKUP_FALLBACK

  if (!product) {
    return (
      <PageLayout>
        <CatalogHeader />
        <main className="claim-page">
          <p>상품을 찾을 수 없습니다.</p>
          <Link to="/products">목록으로</Link>
        </main>
        <Footer />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="claim-page">
        <ClaimBreadcrumb />
        <h1 className="claim-page__title">교환/반품 신청</h1>
        {form.done ? (
          <p className="claim-page__done">교환/반품 신청이 접수되었습니다. (데모)</p>
        ) : (
          <form
            className="claim-page__form"
            onSubmit={(event) => {
              event.preventDefault()
              form.submit()
            }}
          >
            <ClaimProductCard product={product} orderNo={orderNo} quantity={quantity} />
            <ClaimStepper />
            <fieldset className="claim-kind">
              <legend className="claim-section__title">신청 유형</legend>
              <label>
                <input
                  type="radio"
                  name="claim-kind"
                  checked={form.kind === 'exchange'}
                  onChange={() => form.setKind('exchange')}
                />
                교환 신청
              </label>
              <label>
                <input
                  type="radio"
                  name="claim-kind"
                  checked={form.kind === 'return'}
                  onChange={() => form.setKind('return')}
                />
                반품(환불) 신청
              </label>
            </fieldset>
            <label className="claim-field">
              <span className="claim-section__title">
                {form.kind === 'exchange' ? '교환 사유' : '반품 사유'}
              </span>
              <select value={form.reason} onChange={(event) => form.setReason(event.target.value)}>
                {CLAIM_REASONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="claim-field">
              <span className="claim-section__title">상세 사유</span>
              <textarea
                rows={6}
                value={form.detail}
                onChange={(event) => form.setDetail(event.target.value)}
                placeholder="파손 부위, 수량, 개봉 여부 등 상태를 구체적으로 적어 주세요."
              />
            </label>
            <ClaimPhotoDropzone photos={form.photos} onAdd={form.addFiles} onRemove={form.removePhoto} />
            <ClaimPickupBox {...pickup} />
            {form.error ? <p className="claim-page__error">{form.error}</p> : null}
            <div className="claim-page__actions">
              <button type="button" className="claim-page__back" onClick={() => navigate(-1)}>
                이전 단계
              </button>
              <button type="submit" className="claim-page__submit">
                교환/반품 신청 완료
              </button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
