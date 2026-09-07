import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StaffLayout from '../components/StaffLayout'
import { WORK_REPORT_KINDS } from '../data/workReportKinds'
import { useWorkReports } from '../hooks/useWorkReports'
import type { WorkReportKind } from '../types/workReport'

export default function WorkReportWritePage() {
  const navigate = useNavigate()
  const { save } = useWorkReports()
  const [kind, setKind] = useState<WorkReportKind>('duty')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <StaffLayout allowStaff>
      <section className="lounge-panel">
        <h2>업무 보고 작성</h2>
        <form
          className="lounge-form"
          onSubmit={(event) => {
            event.preventDefault()
            const row = save({ kind, title, body, status: 'submitted' })
            navigate(`/mypage/staff/work-reports/${row.id}`)
          }}
        >
          <label>
            보고 유형
            <select value={kind} onChange={(event) => setKind(event.target.value as WorkReportKind)}>
              {WORK_REPORT_KINDS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            제목
            <input value={title} onChange={(event) => setTitle(event.target.value)} required />
          </label>
          <label>
            내용
            <textarea value={body} onChange={(event) => setBody(event.target.value)} required rows={8} />
          </label>
          <button type="submit" className="lounge-btn">
            제출
          </button>
        </form>
      </section>
    </StaffLayout>
  )
}
