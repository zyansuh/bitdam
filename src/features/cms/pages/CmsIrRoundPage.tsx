import { useState } from 'react'
import { Link } from 'react-router-dom'
import StaffLayout from '../../staff/components/StaffLayout'
import { IR_ROUND } from '../../ir/data/irPeople'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canEditCmsDocument } from '../utils/canEditCmsDocument'
import { readIrRound, writeIrRound } from '../utils/irContentStorage'

export default function CmsIrRoundPage() {
  const { user } = useAuth()
  const allowed = canEditCmsDocument(user, 'ir.round')
  const [round, setRound] = useState(() => readIrRound())
  const [saved, setSaved] = useState(false)

  function patch(field: keyof typeof IR_ROUND, value: string) {
    setRound((current) => ({ ...current, [field]: value }))
    setSaved(false)
  }

  return (
    <StaffLayout allowCms>
      <section className="lounge-panel">
        <h2>IR 프리 A 요강 편집</h2>
        {!allowed ? (
          <p>이 문서는 수정 권한이 없습니다.</p>
        ) : (
          <form
            className="lounge-form"
            onSubmit={(event) => {
              event.preventDefault()
              writeIrRound(round)
              setSaved(true)
            }}
          >
            <label>
              배지
              <input value={round.badge} onChange={(event) => patch('badge', event.target.value)} />
            </label>
            <label>
              제목
              <input value={round.title} onChange={(event) => patch('title', event.target.value)} />
            </label>
            <label>
              소개
              <textarea value={round.lead} onChange={(event) => patch('lead', event.target.value)} rows={4} />
            </label>
            <label>
              목표 투자 금액
              <input value={round.target} onChange={(event) => patch('target', event.target.value)} />
            </label>
            <label>
              Pre-Valuation
              <input value={round.preValue} onChange={(event) => patch('preValue', event.target.value)} />
            </label>
            <label>
              클로징 타겟
              <input value={round.close} onChange={(event) => patch('close', event.target.value)} />
            </label>
            <button type="submit" className="lounge-btn">
              저장
            </button>
            {saved ? <p className="staff-lead">저장했습니다.</p> : null}
            <p>
              <Link to="/ir#round" className="lounge-denied__link">
                IR에서 보기
              </Link>
            </p>
          </form>
        )}
      </section>
    </StaffLayout>
  )
}
