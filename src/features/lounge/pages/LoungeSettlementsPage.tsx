import { formatWon } from '../../../shared/utils/formatWon'
import LoungeLayout from '../components/LoungeLayout'
import LoungeSalesBars from '../components/LoungeSalesBars'
import LoungeSettlementTable from '../components/LoungeSettlementTable'
import { SETTLEMENT_FEE_RATE } from '../data/settlementFee'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { barsFromShopOrders } from '../utils/barsFromShopOrders'
import { downloadSettlementCsv } from '../utils/downloadSettlementCsv'
import { inSellerScope } from '../utils/inSellerScope'
import { sellerIdsForScope } from '../utils/loungeSnapshot'
import { shopOrdersToSettlements } from '../utils/shopOrdersToSettlements'

export default function LoungeSettlementsPage() {
  return (
    <LoungeLayout>
      <LoungeSettlementsBody />
    </LoungeLayout>
  )
}

function LoungeSettlementsBody() {
  const { scopeId } = useLoungeScope()
  const ids = sellerIdsForScope(scopeId)
  const rows = inSellerScope(shopOrdersToSettlements(), ids)
  const now = new Date()
  const monthPrefix = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`
  const monthRows = rows.filter((row) => row.date.startsWith(monthPrefix))
  const paid = monthRows.reduce((sum, row) => sum + row.paid, 0)
  const fee = rows.reduce((sum, row) => sum + row.fee, 0)
  const due = rows.filter((row) => row.status === '정산대기').reduce((sum, row) => sum + row.due, 0)
  const percent = Math.round(SETTLEMENT_FEE_RATE * 100)

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
          <p className="lounge-kpi__note">ShopOrder 라인 합계</p>
        </article>
        <article className="lounge-kpi">
          <p className="lounge-kpi__label">정산 예정 금액</p>
          <p className="lounge-kpi__value">{formatWon(due)}</p>
          <p className="lounge-kpi__note">대기 건 정산예정액 합</p>
        </article>
        <article className="lounge-kpi">
          <p className="lounge-kpi__label">플랫폼 수수료 ({percent}%)</p>
          <p className="lounge-kpi__value">{formatWon(fee)}</p>
          <p className="lounge-kpi__note">부가세 별도</p>
        </article>
      </section>
      <LoungeSalesBars bars={barsFromShopOrders(ids)} />
      <section className="lounge-panel">
        <h2>정산 건별 내역</h2>
        {rows.length === 0 ? (
          <p className="staff-lead">아직 이 공방의 쇼핑몰 주문이 없습니다. 결제하면 여기에 수수료와 정산예정액이 생깁니다.</p>
        ) : (
          <LoungeSettlementTable rows={rows} />
        )}
      </section>
    </>
  )
}
