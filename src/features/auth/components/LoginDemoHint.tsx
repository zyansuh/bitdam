import { DEMO_STAFF_PASSWORD } from '../data/demoStaff'

export default function LoginDemoHint() {
  return (
    <p className="login-form__demo">
      ADMIN <code>admin@bitdam.kr</code> · 팀장 <code>lead@bitdam.kr</code> · 직원{' '}
      <code>staff@bitdam.kr</code> · 셀러 <code>seolah@hansan.kr</code>
      <br />
      비밀번호 <code>{DEMO_STAFF_PASSWORD}</code> · 셀러 사업자 <code>314-81-67890</code> (대표 김설아)
    </p>
  )
}
