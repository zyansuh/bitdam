import { DEMO_STAFF_PASSWORD } from '../data/demoStaff'

export default function LoginDemoHint() {
  return (
    <p className="login-form__demo">
      직원 <code>admin@bitdam.kr</code> · 셀러 <code>seolah@hansan.kr</code> · 비밀번호{' '}
      <code>{DEMO_STAFF_PASSWORD}</code>
      <br />
      셀러는 로그인 뒤 사업자 <code>314-81-67890</code> (대표 김설아)로 한산 공방을 지정합니다.
    </p>
  )
}
