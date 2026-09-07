import { ORDER_STEPS } from '../data/orderSteps'

interface OrderStepperProps {
  status: string
}

export default function OrderStepper({ status }: OrderStepperProps) {
  const active = ORDER_STEPS.findIndex((step) => step.id === status)
  const on = active < 0 ? 0 : active

  return (
    <ol className="order-steps">
      {ORDER_STEPS.map((step, index) => (
        <li
          key={step.no}
          className={index <= on ? 'order-steps__item order-steps__item--on' : 'order-steps__item'}
        >
          <span className={index <= on ? 'order-steps__dot order-steps__dot--on' : 'order-steps__dot'}>
            {step.no}
          </span>
          <span className="order-steps__label">{step.label}</span>
        </li>
      ))}
    </ol>
  )
}
