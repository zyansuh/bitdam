import { useState } from 'react'
import { Link } from 'react-router-dom'
import StaffLayout from '../../staff/components/StaffLayout'
import type { IrPerson } from '../../ir/data/irPeople'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canEditCmsDocument } from '../utils/canEditCmsDocument'
import { readIrLeaders, writeIrLeaders } from '../utils/irContentStorage'
import SafeImage from '../../../shared/components/media/SafeImage'

export default function CmsIrLeadersPage() {
  const { user } = useAuth()
  const allowed = canEditCmsDocument(user, 'ir.leaders')
  const [leaders, setLeaders] = useState(() => readIrLeaders())
  const [saved, setSaved] = useState(false)

  function patch(index: number, field: keyof IrPerson, value: string) {
    setLeaders((current) => current.map((item, i) => (i === index ? { ...item, [field]: value } : item)))
    setSaved(false)
  }

  return (
    <StaffLayout allowCms>
      <section className="lounge-panel">
        <h2>IR 리더십 편집</h2>
        {!allowed ? (
          <p>이 문서는 수정 권한이 없습니다.</p>
        ) : (
          <form
            className="lounge-form"
            onSubmit={(event) => {
              event.preventDefault()
              writeIrLeaders(leaders)
              setSaved(true)
            }}
          >
            {leaders.map((person, index) => (
              <fieldset key={person.id} className="cms-person">
                <legend>
                  {person.role} · {person.name}
                </legend>
                <label>
                  이름
                  <input value={person.name} onChange={(event) => patch(index, 'name', event.target.value)} />
                </label>
                <label>
                  직함
                  <input value={person.role} onChange={(event) => patch(index, 'role', event.target.value)} />
                </label>
                <label>
                  소개
                  <textarea value={person.bio} onChange={(event) => patch(index, 'bio', event.target.value)} rows={3} />
                </label>
                <label>
                  사진 URL
                  <input value={person.image} onChange={(event) => patch(index, 'image', event.target.value)} />
                </label>
                {person.image ? <SafeImage src={person.image} alt="" className="cms-person__photo" /> : null}
              </fieldset>
            ))}
            <button type="submit" className="lounge-btn">
              저장
            </button>
            {saved ? <p className="staff-lead">저장했습니다. IR 페이지에서 바로 반영됩니다.</p> : null}
            <p>
              <Link to="/ir#leaders" className="lounge-denied__link">
                IR에서 보기
              </Link>
            </p>
          </form>
        )}
      </section>
    </StaffLayout>
  )
}
