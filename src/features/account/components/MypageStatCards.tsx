import { mypageStats } from '../data/mypageMock'

export default function MypageStatCards() {
  return (
    <ul className="mypage-stats">
      {mypageStats.map((item) => (
        <li key={item.label} className="mypage-stats__card">
          <p className="mypage-stats__label">{item.label}</p>
          <p className="mypage-stats__value">{item.value}</p>
        </li>
      ))}
    </ul>
  )
}
