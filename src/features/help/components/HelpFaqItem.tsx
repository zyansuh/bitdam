import type { HelpFaq } from '../types/helpFaq'

interface HelpFaqItemProps {
  faq: HelpFaq
  open: boolean
  onToggle: () => void
}

export default function HelpFaqItem({ faq, open, onToggle }: HelpFaqItemProps) {
  return (
    <article className="help-faq">
      <button type="button" className="help-faq__q" aria-expanded={open} onClick={onToggle}>
        <span>{faq.question}</span>
        <span className="help-faq__mark">{open ? '−' : '+'}</span>
      </button>
      {open ? <p className="help-faq__a">{faq.answer}</p> : null}
    </article>
  )
}
