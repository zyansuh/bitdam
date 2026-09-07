import { IR_ROUND } from '../data/irPeople'

export default function IrRound() {
  return (
    <section className="ir-block" id="round">
      <article className="ir-round">
        <div>
          <p className="ir-round__badge">{IR_ROUND.badge}</p>
          <h2>{IR_ROUND.title}</h2>
          <p>{IR_ROUND.lead}</p>
        </div>
        <dl>
          <div>
            <dt>목표 투자 금액</dt>
            <dd className="ir-gold">{IR_ROUND.target}</dd>
          </div>
          <div>
            <dt>기업 가치 (Pre-Valuation)</dt>
            <dd>{IR_ROUND.preValue}</dd>
          </div>
          <div>
            <dt>라운드 클로징 타겟</dt>
            <dd className="ir-green">{IR_ROUND.close}</dd>
          </div>
        </dl>
      </article>
    </section>
  )
}
