import { formatWon } from '../../../shared/utils/formatWon'
import MypageLayout from '../components/MypageLayout'
import { useMypageBookings } from '../hooks/useMypageBookings'

export default function MypageReservationsPage() {
  const { rows } = useMypageBookings()

  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">예약 내역</h1>
        {rows.length === 0 ? (
          <p className="account-panel__sub">양조장 투어나 클래스를 신청하면 여기에 쌓입니다.</p>
        ) : (
          <div className="mypage-table-wrap">
            <table className="mypage-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>프로그램</th>
                  <th>일정</th>
                  <th>인원 / 금액</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.kind === 'tour' ? '투어' : '클래스'}</td>
                    <td>
                      <p>{row.title}</p>
                      <p className="mypage-table__sub">{row.place}</p>
                    </td>
                    <td>
                      {row.date} {row.time}
                    </td>
                    <td>
                      {row.guests}명 · {formatWon(row.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </MypageLayout>
  )
}
