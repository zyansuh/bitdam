import { CUSTOM_BOTTLE_ALT, CUSTOM_BOTTLE_IMAGE, CUSTOM_BORDERS, CUSTOM_TEMPLATES } from '../data/customOptions'
import type { CustomLabelDraft } from '../types/customLabel'

interface CustomPreviewProps {
  draft: CustomLabelDraft
}

export default function CustomPreview({ draft }: CustomPreviewProps) {
  const border = CUSTOM_BORDERS.find((item) => item.id === draft.borderId)
  const template = CUSTOM_TEMPLATES.find((item) => item.id === draft.templateId)

  return (
    <section className="custom-preview">
      <h2 className="custom-preview__title">나만의 라벨 실시간 미리보기</h2>
      <div className="custom-preview__stage">
        <img src={CUSTOM_BOTTLE_IMAGE} alt={CUSTOM_BOTTLE_ALT} className="custom-preview__bottle" />
        <div
          className={`custom-preview__label custom-preview__label--${draft.templateId}`}
          style={{ borderColor: border?.hex ?? '#c5994c' }}
        >
          <p className="custom-preview__brand">명가 전통 백양 명산 소주</p>
          <p className="custom-preview__line">{draft.line1.trim() || '라벨 문구'}</p>
          <p className="custom-preview__sub">{draft.line2.trim() || '한 줄 더'}</p>
          {draft.engraveName.trim() ? (
            <p className="custom-preview__engrave">{draft.engraveName}</p>
          ) : null}
        </div>
      </div>
      <p className="custom-preview__meta">
        {template?.label ?? '템플릿'} · 자수 테두리 {border?.label ?? '미선택'}
      </p>
    </section>
  )
}
