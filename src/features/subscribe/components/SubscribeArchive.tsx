import { SUBSCRIBE_BOXES } from '../data/subscribePlans'

export default function SubscribeArchive() {
  return (
    <section className="sub-archive">
      <h2>역대 빚담 구독 박스 모아보기</h2>
      <ul>
        {SUBSCRIBE_BOXES.map((box) => (
          <li key={box.id}>
            <img src={box.image} alt="" />
            <p>{box.month}</p>
            <strong>{box.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
