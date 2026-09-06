import MypageCertGrid from '../components/MypageCertGrid'
import MypageLayout from '../components/MypageLayout'

export default function MypageCertificatesPage() {
  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">전통주 인증서 (NFT)</h1>
        <p className="account-panel__sub">명인 항아리와 시즌 한정 디지털 보증서입니다.</p>
        <MypageCertGrid />
      </section>
    </MypageLayout>
  )
}
