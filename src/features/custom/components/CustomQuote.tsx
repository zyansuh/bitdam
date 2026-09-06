import { formatWon } from '../../../shared/utils/formatWon'
import type { CustomQuote as Quote } from '../types/customLabel'

interface CustomQuoteProps {
  quote: Quote
}

export default function CustomQuote({ quote }: CustomQuoteProps) {
  return (
    <div className="custom-quote">
      <ul className="custom-quote__list">
        {quote.lines.map((line) => (
          <li key={line.label}>
            <span>{line.label}</span>
            <strong>{formatWon(line.amount)}</strong>
          </li>
        ))}
      </ul>
      <p className="custom-quote__total">
        <span>최종 견적 금액</span>
        <strong>{formatWon(quote.total)}</strong>
      </p>
    </div>
  )
}
