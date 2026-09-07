import { noticeTabs } from '../data/noticeTabs'
import NoticeLayout from '../components/NoticeLayout'
import { useNoticeComposer } from '../hooks/useNoticeComposer'

export default function NoticeWritePage() {
  const form = useNoticeComposer()

  return (
    <NoticeLayout>
      {!form.canWrite ? (
        <p className="notice-error">공지 작성은 직원·팀장·ADMIN만 할 수 있습니다.</p>
      ) : (
        <form
          className="notice-form"
          onSubmit={(event) => {
            event.preventDefault()
            form.submit()
          }}
        >
          <label className="notice-field">
            <span>분류</span>
            <select
              value={form.category}
              onChange={(event) => form.setCategory(event.target.value as typeof form.category)}
            >
              {noticeTabs
                .filter((tab) => tab.id !== 'all')
                .map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
            </select>
          </label>
          <label className="notice-field">
            <span>제목</span>
            <input value={form.title} onChange={(event) => form.setTitle(event.target.value)} />
          </label>
          <label className="notice-field">
            <span>본문</span>
            <textarea rows={8} value={form.body} onChange={(event) => form.setBody(event.target.value)} />
          </label>
          {form.canImportant ? (
            <label className="notice-important-toggle">
              <input
                type="checkbox"
                checked={form.important}
                onChange={(event) => form.setImportant(event.target.checked)}
              />
              중요
            </label>
          ) : (
            <p className="notice-error">직원은 일반 공지만 등록할 수 있습니다. 중요 공지는 팀장·ADMIN 권한입니다.</p>
          )}
          {form.error ? <p className="notice-error">{form.error}</p> : null}
          <button type="submit" className="notice-save">
            공지 등록
          </button>
        </form>
      )}
    </NoticeLayout>
  )
}
