import { formatEokLabel } from '../utils/computeIrMetrics'
import type { IrMarket, IrMixRow } from '../types/ir'

interface IrMarketMixProps {
  market: IrMarket
  mix: IrMixRow[]
}

export default function IrMarketMix({ market, mix }: IrMarketMixProps) {
  return (
    <section className="ir-split ir-block" id="market">
      <article className="ir-card">
        <h2>잠재적 전통주 시장 규모 (TAM-SAM-SOM)</h2>
        <div className="ir-venn" aria-hidden="true">
          <span className="ir-venn__tam">TAM</span>
          <span className="ir-venn__sam">SAM</span>
          <span className="ir-venn__som">SOM</span>
        </div>
        <ul className="ir-market-list">
          <li>TAM {formatEokLabel(market.tam)} — 국내 전통주 유통 전체</li>
          <li>SAM {formatEokLabel(market.sam)} — 디지털·선물·구독 가능 시장</li>
          <li>SOM {formatEokLabel(market.som)} — 빚담이 3년 안에 가져갈 몫</li>
        </ul>
      </article>
      <article className="ir-card">
        <h2>안정적인 다각화 비즈니스 매출 구조</h2>
        <ul className="ir-bars">
          {mix.map((row) => (
            <li key={row.id}>
              <p>
                {row.label}
                <strong>{row.percent}%</strong>
              </p>
              <div className="ir-bars__track">
                <i className={`ir-bars__fill ir-bars__fill--${row.id}`} style={{ width: `${row.percent}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
