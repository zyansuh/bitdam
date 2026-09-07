import LoungeLayout from '../components/LoungeLayout'
import LoungeProductBasics from '../components/LoungeProductBasics'
import LoungeProductDetail from '../components/LoungeProductDetail'
import LoungeProductPrice from '../components/LoungeProductPrice'
import LoungeProductShip from '../components/LoungeProductShip'
import LoungeProductSteps from '../components/LoungeProductSteps'
import { useProductRegister } from '../hooks/useProductRegister'

export default function LoungeProductNewPage() {
  return (
    <LoungeLayout>
      <LoungeProductNewBody />
    </LoungeLayout>
  )
}

function LoungeProductNewBody() {
  const form = useProductRegister()
  const { draft } = form

  return (
    <section className="lounge-register">
      <LoungeProductSteps step={draft.step} onSelect={form.go} />
      {draft.step === 1 ? (
        <LoungeProductBasics
          draft={draft}
          onName={(value) => form.patch({ name: value })}
          onCategory={(value) => form.patch({ category: value })}
          onSubcategory={(value) => form.patch({ subcategory: value })}
          onBlurb={(value) => form.patch({ blurb: value })}
        />
      ) : null}
      {draft.step === 2 ? <LoungeProductDetail story={draft.story} onStory={(value) => form.patch({ story: value })} /> : null}
      {draft.step === 3 ? (
        <LoungeProductPrice
          price={draft.price}
          stock={draft.stock}
          onPrice={(value) => form.patch({ price: value })}
          onStock={(value) => form.patch({ stock: value })}
        />
      ) : null}
      {draft.step === 4 ? (
        <LoungeProductShip memo={draft.shipMemo} onMemo={(value) => form.patch({ shipMemo: value })} />
      ) : null}
      <div className="lounge-register__nav">
        <button type="button" className="lounge-btn lounge-btn--ghost" onClick={form.saveDraft}>
          {draft.saved ? '임시저장됨' : '임시저장'}
        </button>
        {draft.step < 4 ? (
          <button type="button" className="lounge-btn" onClick={form.next}>
            다음 단계로
          </button>
        ) : (
          <button type="button" className="lounge-btn" onClick={form.saveDraft}>
            등록 완료 (로컬)
          </button>
        )}
      </div>
    </section>
  )
}
