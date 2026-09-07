const STEPS = [
  { n: '01', t: '플랜 선택', d: '라이트부터 노블레스까지 마시는 리듬에 맞게 고릅니다.' },
  { n: '02', t: '소믈리에 큐레이션', d: '그달의 명인과 권역 이야기를 담아 구성합니다.' },
  { n: '03', t: '한랭 안전 배송', d: '주질을 지키는 보냉 포장으로 집 앞까지 보냅니다.' },
  { n: '04', t: '전통 안주 페어링', d: '한과와 견과로 첫 잔의 상을 완성합니다.' },
]

export default function SubscribeGuide() {
  return (
    <section className="sub-guide">
      <h2>전통주 구독 서비스 이용 가이드</h2>
      <ul>
        {STEPS.map((item) => (
          <li key={item.n}>
            <em>{item.n}</em>
            <strong>{item.t}</strong>
            <p>{item.d}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
