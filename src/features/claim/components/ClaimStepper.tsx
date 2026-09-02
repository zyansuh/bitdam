import { CLAIM_STEPS } from '../data/claimOptions'

export default function ClaimStepper() {
  return (
    <section className="claim-process">
      <h2 className="claim-section__title">진행 프로세스 안내</h2>
      <ol className="claim-steps">
        {CLAIM_STEPS.map((step, index) => (
          <li
            key={step.no}
            className={index === 0 ? 'claim-steps__item claim-steps__item--on' : 'claim-steps__item'}
          >
            <span className={index === 0 ? 'claim-steps__dot claim-steps__dot--on' : 'claim-steps__dot'}>
              {step.no}
            </span>
            <span className="claim-steps__label">{step.label}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
