import LoginLink from '../../../shared/components/navigation/LoginLink'

export default function AccountLoginPrompt() {
  return (
    <div className="account-prompt">
      <p className="account-prompt__text">마이페이지와 개인정보 설정은 로그인 후 이용할 수 있습니다.</p>
      <LoginLink className="account-prompt__link">로그인하기</LoginLink>
    </div>
  )
}
