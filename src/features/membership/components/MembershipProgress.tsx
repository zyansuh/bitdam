interface MembershipProgressProps {
  percent: number
  label: string
}

export default function MembershipProgress({ percent, label }: MembershipProgressProps) {
  return (
    <div className="member-progress">
      <div className="member-progress__track" aria-hidden>
        <span className="member-progress__fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="member-progress__label">{label}</p>
    </div>
  )
}
