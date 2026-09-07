import type { ProductDraft } from '../types/lounge'
import SafeImage from '../../../shared/components/media/SafeImage'

interface LoungeProductBasicsProps {
  draft: ProductDraft
  onName: (value: string) => void
  onCategory: (value: string) => void
  onSubcategory: (value: string) => void
  onBlurb: (value: string) => void
}

export default function LoungeProductBasics({
  draft,
  onName,
  onCategory,
  onSubcategory,
  onBlurb,
}: LoungeProductBasicsProps) {
  return (
    <div className="lounge-form">
      <h2>기본정보 등록</h2>
      <p>소비자에게 노출될 필수 정보를 입력하세요.</p>
      <label>
        상품명
        <input value={draft.name} onChange={(event) => onName(event.target.value)} />
      </label>
      <div className="lounge-form__row">
        <label>
          대분류
          <input value={draft.category} onChange={(event) => onCategory(event.target.value)} />
        </label>
        <label>
          중분류
          <input value={draft.subcategory} onChange={(event) => onSubcategory(event.target.value)} />
        </label>
      </div>
      <div className="lounge-form__images">
        <figure>
          <SafeImage src={draft.image} alt="" />
          <figcaption>대표 이미지 · 1000×1000 권장</figcaption>
        </figure>
        {draft.extras.map((src) => (
          <SafeImage key={src} src={src} alt="" />
        ))}
      </div>
      <label>
        한 줄 설명
        <input value={draft.blurb} onChange={(event) => onBlurb(event.target.value)} />
      </label>
    </div>
  )
}
