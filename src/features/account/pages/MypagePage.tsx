import { Link } from 'react-router-dom'
import MypageCertGrid from '../components/MypageCertGrid'
import MypageLayout from '../components/MypageLayout'
import MypageOrderTable from '../components/MypageOrderTable'
import MypageStatCards from '../components/MypageStatCards'

export default function MypagePage() {
  return (
    <MypageLayout>
      <MypageStatCards />
      <section className="account-panel">
        <div className="account-panel__head">
          <h1 className="account-panel__title">최근 주문 내역</h1>
          <Link to="/mypage" className="account-panel__more">
            전체 보기
          </Link>
        </div>
        <MypageOrderTable compact />
      </section>
      <section className="account-panel">
        <div className="account-panel__head">
          <h2 className="account-panel__title">마스터 보증서</h2>
          <Link to="/mypage/certificates" className="account-panel__more">
            전체 보기
          </Link>
        </div>
        <p className="account-panel__sub">NFT 디지털 인증</p>
        <MypageCertGrid limit={3} />
      </section>
    </MypageLayout>
  )
}
