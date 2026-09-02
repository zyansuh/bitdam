import { ORDER_STEPS } from '../data/orderSteps'

export default function OrderStepper() {
  return (
    <ol className="order-steps">
      {ORDER_STEPS.map((step, index) => (
        <li
          key={step.no}
          className={index === 0 ? 'order-steps__item order-steps__item--on' : 'order-steps__item'}
        >
          <span className={index === 0 ? 'order-steps__dot order-steps__dot--on' : 'order-steps__dot'}>
            {step.no}
          </span>
          <span className="order-steps__label">{step.label}</span>
        </li>
      ))}
    </ol>
  )
}
