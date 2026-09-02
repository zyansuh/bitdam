interface ReviewBodyFieldProps {
  value: string
  onChange: (value: string) => void
}

export default function ReviewBodyField({ value, onChange }: ReviewBodyFieldProps) {
  return (
    <section>
      <h2 className="review-section__title">후기 작성</h2>
      <textarea
        className="review-body"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="맛과 향, 목넘김에 대한 경험을 적어 주세요."
        rows={7}
      />
      <p className="review-body__count">{value.trim().length}자 / 최소 10자</p>
    </section>
  )
}
