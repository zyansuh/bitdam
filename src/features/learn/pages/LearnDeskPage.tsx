import { Link } from 'react-router-dom'
import StaffLayout from '../../staff/components/StaffLayout'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { useLearnDesk } from '../hooks/useLearnDesk'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canEditCmsDocument } from '../../cms/utils/canEditCmsDocument'

export default function LearnDeskPage() {
  const { user } = useAuth()
  const allowed = canEditCmsDocument(user, 'learn.desk')
  const desk = useLearnDesk()

  return (
    <StaffLayout allowCms>
      <section className="lounge-panel">
        <h2>술 상식 하루 한 장</h2>
        <p className="staff-lead">
          초안은 `/api/openai`를 통합니다. 브라우저에 OpenAI 키를 넣지 마세요. Vercel·로컬 `.env`의 `OPENAI_API_KEY`만 씁니다. 카카오톡 발송은 채널 API·서버가 필요합니다.
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
            <button type="submit" className="lounge-btn" disabled={desk.busy}>
              {desk.busy ? '초안 작성 중' : '초안 만들고 예약'}
            </button>
            {desk.message ? <p>{desk.message}</p> : null}
          </form>
        )}
      </section>
      {allowed ? (
        <section className="lounge-panel">
          <h3>오늘의 카드 고정</h3>
          <p className="staff-lead">비우면 날짜 회전으로 돌아갑니다. 이 기기의 편집자 픽입니다.</p>
          <form
            className="lounge-form"
            onSubmit={(event) => {
              event.preventDefault()
              desk.savePick()
            }}
          >
            <label>
              고정할 slug
              <input
                list="learn-slugs"
                value={desk.pick}
                onChange={(event) => desk.setPick(event.target.value)}
                placeholder="how-makgeolli-is-made"
              />
            </label>
            <datalist id="learn-slugs">
              {desk.lessonSlugs.map((slug) => (
                <option key={slug} value={slug} />
              ))}
            </datalist>
            <button type="submit" className="lounge-btn">
              픽 저장
            </button>
          </form>
        </section>
      ) : null}
      {allowed && desk.editingSlug ? (
        <section className="lounge-panel">
          <h3>초안 검수 · {desk.editingSlug}</h3>
          <form
            className="lounge-form"
            onSubmit={(event) => {
              event.preventDefault()
              desk.saveEdit()
            }}
          >
            <label>
              제목
              <input value={desk.editTitle} onChange={(event) => desk.setEditTitle(event.target.value)} />
            </label>
            <label>
              리드
              <textarea value={desk.editLead} onChange={(event) => desk.setEditLead(event.target.value)} rows={3} />
            </label>
            <label>
              본문 (빈 줄로 절 구분)
              <textarea value={desk.editBody} onChange={(event) => desk.setEditBody(event.target.value)} rows={10} />
            </label>
            <label>
              공개일
              <input type="date" value={desk.editOn} onChange={(event) => desk.setEditOn(event.target.value)} />
            </label>
            <button type="submit" className="lounge-btn">
              검수본 저장
            </button>
          </form>
        </section>
      ) : null}
      <section className="lounge-panel">
        <h3>예약·공개 목록</h3>
        <ul className="cms-list">
          {desk.drafts.length === 0 ? <li>아직 예약된 AI 글이 없습니다.</li> : null}
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
                <button type="button" className="lounge-btn lounge-btn--ghost" onClick={() => desk.openEdit(item)}>
                  편집
                </button>
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
