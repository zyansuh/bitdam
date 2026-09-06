import { CUSTOM_TEMPLATES } from '../data/customOptions'

interface CustomStepTemplateProps {
  templateId: string
  line1: string
  line2: string
  onTemplate: (id: string) => void
  onLine1: (value: string) => void
  onLine2: (value: string) => void
}

export default function CustomStepTemplate({
  templateId,
  line1,
  line2,
  onTemplate,
  onLine1,
  onLine2,
}: CustomStepTemplateProps) {
  return (
    <section className="custom-panel">
      <h3>2. 라벨 템플릿 선택</h3>
      <p className="custom-panel__lead">전통 무늬부터 모던 라인까지, 병 라벨 뼈대를 고릅니다.</p>
      <div className="custom-chips">
        {CUSTOM_TEMPLATES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`custom-chip${templateId === item.id ? ' custom-chip--on' : ''}`}
            onClick={() => onTemplate(item.id)}
          >
            {item.label}
            {item.extra ? ` · +${item.extra.toLocaleString()}` : ''}
          </button>
        ))}
      </div>
      <h3>라벨 문구 작성</h3>
      <label className="custom-field">
        큰 문구
        <input value={line1} maxLength={16} onChange={(event) => onLine1(event.target.value)} />
      </label>
      <label className="custom-field">
        작은 문구
        <input value={line2} maxLength={20} onChange={(event) => onLine2(event.target.value)} />
      </label>
    </section>
  )
}
