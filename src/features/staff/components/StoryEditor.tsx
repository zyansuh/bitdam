import type { StoryOverride } from '../utils/storyOverrideStorage'

interface StoryEditorProps {
  draft: StoryOverride
  saved: boolean
  onTitle: (value: string) => void
  onLead: (value: string) => void
  onSave: () => void
}

export default function StoryEditor({ draft, saved, onTitle, onLead, onSave }: StoryEditorProps) {
  return (
    <form
      className="staff-story"
      onSubmit={(event) => {
        event.preventDefault()
        onSave()
      }}
    >
      <h2>스토리 히어로 수정 (팀장·ADMIN)</h2>
      <label>
        제목
        <input value={draft.title} onChange={(event) => onTitle(event.target.value)} />
      </label>
      <label>
        리드 문장
        <textarea rows={3} value={draft.lead} onChange={(event) => onLead(event.target.value)} />
      </label>
      <button type="submit" className="lounge-btn">
        {saved ? '저장됨' : '스토리 저장'}
      </button>
    </form>
  )
}
