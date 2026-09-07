import { Check } from 'lucide-react'

export default function OrderCompleteMark() {
  return (
    <div className="order-complete__mark" aria-hidden>
      <Check size={40} strokeWidth={2.2} />
    </div>
  )
}
