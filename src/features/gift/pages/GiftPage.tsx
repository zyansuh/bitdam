import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import GiftMessage from '../components/GiftMessage'
import GiftPay from '../components/GiftPay'
import GiftProductPick from '../components/GiftProductPick'
import GiftStepBar from '../components/GiftStepBar'
import GiftSummary from '../components/GiftSummary'
import { useGiftFlow } from '../hooks/useGiftFlow'

export default function GiftPage() {
  const gift = useGiftFlow()
  const { draft } = gift

  return (
    <PageLayout>
      <SiteHeader links={navLinks} />
      <main className="gift-page">
        <GiftStepBar step={draft.step} canEnter={gift.canEnter} onSelect={gift.goTo} />
        <div className="gift-grid">
          {draft.step === 1 ? (
            <GiftProductPick
              productId={draft.productId}
              onPick={(id) => gift.patch({ productId: id })}
              onNext={gift.next}
            />
          ) : null}
          {draft.step === 2 ? (
            <GiftMessage
              skinId={draft.skinId}
              message={draft.message}
              wrapId={draft.wrapId}
              onSkin={(id) => gift.patch({ skinId: id })}
              onMessage={(value) => gift.patch({ message: value })}
              onWrap={(id) => gift.patch({ wrapId: id })}
              onNext={gift.next}
              onBack={gift.prev}
            />
          ) : null}
          {draft.step === 3 ? (
            <GiftPay total={gift.total} paid={draft.paid} onPay={gift.pay} onBack={gift.prev} />
          ) : null}
          <GiftSummary draft={draft} total={gift.total} />
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
