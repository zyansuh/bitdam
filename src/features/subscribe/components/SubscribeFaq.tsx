import { SUBSCRIBE_FAQS } from '../data/subscribePlans'
import { useSubscribeFaq } from '../hooks/useSubscribeFaq'

export default function SubscribeFaq() {
  const { open, toggle } = useSubscribeFaq()

  return (
    <section className="sub-faq">
      <div>
        <h2>구독자 후기</h2>
        <blockquote>
          <p>매달 어떤 병이 올지 기다리는 맛이 생겼어요. 안주 카드도 식탁에 바로 올립니다.</p>
          <cite>김*현 (6개월 구독)</cite>
        </blockquote>
        <blockquote>
          <p>부모님 선물 대신 구독을 보냈더니 전화가 먼저 왔어요.</p>
          <cite>이*우 (3개월 구독)</cite>
        </blockquote>
      </div>
      <div>
        <h2>자주 묻는 질문</h2>
        {SUBSCRIBE_FAQS.map((item, index) => (
          <details key={item.q} open={open === index} onClick={(event) => {
            event.preventDefault()
            toggle(index)
          }}>
            <summary>{item.q}</summary>
            {open === index ? <p>{item.a}</p> : null}
          </details>
        ))}
      </div>
    </section>
  )
}
