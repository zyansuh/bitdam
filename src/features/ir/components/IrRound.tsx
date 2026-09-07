import { readIrRound } from '../../cms/utils/irContentStorage'

export default function IrRound() {
  const round = readIrRound()

  return (
    <section className="ir-block" id="round">
      <article className="ir-round">
        <div>
          <p className="ir-round__badge">{round.badge}</p>
          <h2>{round.title}</h2>
          <p>{round.lead}</p>
        </div>
        <dl>
          <div>
            <dt>목표 투자 금액</dt>
            <dd className="ir-gold">{round.target}</dd>
          </div>
          <div>
            <dt>기업 가치 (Pre-Valuation)</dt>
            <dd>{round.preValue}</dd>
          </div>
          <div>
            <dt>라운드 클로징 타겟</dt>
            <dd className="ir-green">{round.close}</dd>
          </div>
        </dl>
      </article>
    </section>
  )
}
