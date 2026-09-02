import type { PolicyDocument } from '../types/policy'

interface PolicyHeaderProps {
  document: PolicyDocument
}

export default function PolicyHeader({ document }: PolicyHeaderProps) {
  return (
    <header className="policy-header">
      <div className="policy-header__inner">
        <p className="policy-header__kicker">{document.version}</p>
        <h1 className="policy-header__title">{document.title}</h1>
        <div className="policy-header__meta">
          <p>시행일자: {document.effectiveDate}</p>
          <p>최종개정일자: {document.revisedDate}</p>
        </div>
      </div>
    </header>
  )
}
