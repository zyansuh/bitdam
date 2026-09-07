import { Link } from 'react-router-dom'
import StaffLayout from '../../staff/components/StaffLayout'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { useLearnDesk } from '../hooks/useLearnDesk'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canEditCmsDocument } from '../../cms/utils/canEditCmsDocument'
import { getOpenAiKey } from '../../chat/services/askBitdamModel'

export default function LearnDeskPage() {
  const { user } = useAuth()
  const allowed = canEditCmsDocument(user, 'learn.desk')
  const desk = useLearnDesk()
  const hasKey = Boolean(getOpenAiKey())

  return (
    <StaffLayout allowCms>
      <section className="lounge-panel">
        <h2>술 상식 하루 한 장</h2>
        <p className="staff-lead">
          제목을 넣고 예약하면, 그 날짜가 되는 순간 방문객 허브에 글이 열립니다. 서버 크론 대신 브라우저가 오늘 날짜와 비교합니다.{' '}
          {hasKey ? 'OpenAI 키로 초안을 받습니다.' : '키가 없으면 로컬 뼈대 초안을 넣습니다. .env의 VITE_OPENAI_API_KEY를 쓰면 모델이 씁니다.'}
        </p>
        {!allowed ? (
          <p>이 문서는 수정 권한이 없습니다.</p>
        ) : (
          <form
            className="lounge-form"
            onSubmit={(event) => {
              event.preventDefault()
              void desk.queueDraft()
            }}
          >
            <label>
              질문형 제목
              <input value={desk.title} onChange={(event) => desk.setTitle(event.target.value)} required />
            </label>
            <label>
              분류
              <select
                value={desk.category}
                onChange={(event) => desk.setCategory(event.target.value as typeof desk.category)}
              >
                {LEARN_CATEGORIES.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              공개일
              <input
                type="date"
                value={desk.publishOn}
                onChange={(event) => desk.setPublishOn(event.target.value)}
                required
              />
            </label>
            <p>증류·세계 술 분류는 원리와 안전만 쓰도록 모델에 못 박아 두었습니다. 공개 전에 문장을 꼭 검수하세요.</p>
            <button type="submit" className="lounge-btn" disabled={desk.busy}>
              {desk.busy ? '초안 작성 중' : '초안 만들고 예약'}
            </button>
            {desk.message ? <p>{desk.message}</p> : null}
          </form>
        )}
      </section>
      <section className="lounge-panel">
        <h3>예약·공개 목록</h3>
        <ul className="cms-list">
          {desk.drafts.length === 0 ? <li>아직 예약된 AI 글이 없습니다. 100장의 기본 카드는 이미 허브에 있습니다.</li> : null}
          {desk.drafts.map((item) => (
            <li key={item.slug} className="cms-list__item">
              <div>
                <strong>
                  {item.publishOn} · {item.title}
                </strong>
                <p>
                  {item.source === 'ai' ? '모델 초안' : '로컬 뼈대'} · /learn/{item.slug}
                </p>
              </div>
              <div className="cms-list__actions">
                <Link to={`/learn/${item.slug}`} className="lounge-btn lounge-btn--ghost">
                  보기
                </Link>
                <button type="button" className="lounge-btn" onClick={() => desk.dropDraft(item.slug)}>
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </StaffLayout>
  )
}
