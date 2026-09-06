import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import CustomPreview from '../components/CustomPreview'
import CustomQuote from '../components/CustomQuote'
import CustomStepList from '../components/CustomStepList'
import CustomStepMessage from '../components/CustomStepMessage'
import CustomStepOccasion from '../components/CustomStepOccasion'
import CustomStepOptions from '../components/CustomStepOptions'
import CustomStepTemplate from '../components/CustomStepTemplate'
import { useCustomLabel } from '../hooks/useCustomLabel'

export default function CustomLabelPage() {
  const custom = useCustomLabel()
  const { draft } = custom

  return (
    <PageLayout>
      <SiteHeader links={navLinks} />
      <main className="custom-page">
        <CustomStepList step={draft.step} canEnter={custom.canEnter} onSelect={custom.goTo} />
        <CustomPreview draft={draft} />
        <div className="custom-editor">
          {draft.step === 1 ? (
            <CustomStepOccasion occasionId={draft.occasionId} onPick={(id) => custom.patch({ occasionId: id })} />
          ) : null}
          {draft.step === 2 ? (
            <CustomStepTemplate
              templateId={draft.templateId}
              line1={draft.line1}
              line2={draft.line2}
              onTemplate={(id) => custom.patch({ templateId: id })}
              onLine1={(value) => custom.patch({ line1: value })}
              onLine2={(value) => custom.patch({ line2: value })}
            />
          ) : null}
          {draft.step === 3 ? (
            <CustomStepOptions
              spiritId={draft.spiritId}
              abvId={draft.abvId}
              borderId={draft.borderId}
              onSpirit={(id) => custom.patch({ spiritId: id })}
              onAbv={(id) => custom.patch({ abvId: id })}
              onBorder={(id) => custom.patch({ borderId: id })}
            />
          ) : null}
          {draft.step === 4 ? (
            <CustomStepMessage
              name={draft.engraveName}
              message={draft.engraveMessage}
              reserved={draft.reserved}
              onName={(value) => custom.patch({ engraveName: value })}
              onMessage={(value) => custom.patch({ engraveMessage: value })}
              onReserve={custom.reserve}
            />
          ) : null}
          <CustomQuote quote={custom.quote} />
          <div className="custom-nav">
            <button type="button" className="custom-nav__ghost" disabled={draft.step === 1} onClick={custom.prev}>
              이전
            </button>
            {draft.step < 4 ? (
              <button type="button" className="custom-nav__next" onClick={custom.next}>
                다음 단계
              </button>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
