interface EventHowToProps {
  steps: string[]
}

export default function EventHowTo({ steps }: EventHowToProps) {
  return (
    <section className="event-howto">
      <h2>이벤트 참여 방법 및 혜택</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <aside className="event-share">
        <h3>SNS 소문내고 당첨 확률 2배 올리기</h3>
        <div>
          <button type="button" className="shop-kakao-btn">
            카카오톡 공유
          </button>
          <button type="button" className="shop-navy-btn">
            인스타그램 공유
          </button>
        </div>
      </aside>
    </section>
  )
}
