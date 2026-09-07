import { DEMO_STAFF_PASSWORD } from '../data/demoStaff'

export default function LoginDemoHint() {
  return (
    <p className="login-form__demo">
      직원 데모 <code>admin@bitdam.kr</code> · 셀러 데모 <code>seolah@hansan.kr</code> · 비밀번호{' '}
      <code>{DEMO_STAFF_PASSWORD}</code>
    </p>
  )
}
