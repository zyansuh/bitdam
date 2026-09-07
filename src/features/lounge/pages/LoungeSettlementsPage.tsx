import { formatWon } from '../../../shared/utils/formatWon'
import LoungeLayout from '../components/LoungeLayout'
import LoungeSalesBars from '../components/LoungeSalesBars'
import LoungeSettlementTable from '../components/LoungeSettlementTable'
import { LOUNGE_SETTLEMENTS } from '../data/loungeRecords'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { downloadSettlementCsv } from '../utils/downloadSettlementCsv'
import { inSellerScope } from '../utils/inSellerScope'
import { barsForScope, sellerIdsForScope } from '../utils/loungeSnapshot'

export default function LoungeSettlementsPage() {
  return (
    <LoungeLayout>
      <LoungeSettlementsBody />
    </LoungeLayout>
  )
}

function LoungeSettlementsBody() {
  const { scopeId } = useLoungeScope()
  const rows = inSellerScope(LOUNGE_SETTLEMENTS, sellerIdsForScope(scopeId))
  const paid = rows.reduce((sum, row) => sum + row.paid, 0)
  const fee = rows.reduce((sum, row) => sum + row.fee, 0)
  const due = rows.reduce((sum, row) => sum + row.due, 0)

  return (
    <>
      <p className="lounge-crumb">홈 &gt; 셀러 라운지 &gt; 정산 관리 &gt; 상세 내역</p>
      <div className="lounge-panel__head">
        <h2>정산 내역 상세</h2>
        <button type="button" className="lounge-btn lounge-btn--ghost" onClick={() => downloadSettlementCsv(rows)}>
          Excel 내보내기
        </button>
      </div>
      <section className="lounge-kpis lounge-kpis--three">
        <article className="lounge-kpi">
          <p className="lounge-kpi__label">이번달 총 매출</p>
          <p className="lounge-kpi__value">{formatWon(paid)}</p>
          <p className="lounge-kpi__note">+12.4% 상향</p>
        </article>
        <article className="lounge-kpi">
          <p className="lounge-kpi__label">정산 예정 금액</p>
          <p className="lounge-kpi__value">{formatWon(due)}</p>
          <p className="lounge-kpi__note">10월 25일 정산 예정</p>
        </article>
        <article className="lounge-kpi">
          <p className="lounge-kpi__label">플랫폼 수수료 (11%)</p>
          <p className="lounge-kpi__value">{formatWon(fee)}</p>
          <p className="lounge-kpi__note">부가세 별도</p>
        </article>
      </section>
      <LoungeSalesBars bars={barsForScope(scopeId)} />
      <section className="lounge-panel">
        <h2>정산 건별 내역</h2>
        <LoungeSettlementTable rows={rows} />
      </section>
    </>
  )
}
