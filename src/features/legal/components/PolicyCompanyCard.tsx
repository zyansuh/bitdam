import type { PolicyPair } from '../types/policy'

interface PolicyCompanyCardProps {
  rows: PolicyPair[]
}

export default function PolicyCompanyCard({ rows }: PolicyCompanyCardProps) {
  return (
    <section className="policy-company" id="business" aria-labelledby="business-title">
      <h2 id="business-title" className="policy-company__title">
        사업자 정보
      </h2>
      <dl className="policy-company__list">
        {rows.map((row) => (
          <div key={row.label} className="policy-blocks__pair">
            <dt className="policy-blocks__pair-label">{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
