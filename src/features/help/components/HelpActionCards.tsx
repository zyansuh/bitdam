import { Link } from 'react-router-dom'

export default function HelpActionCards() {
  return (
    <div className="help-actions">
      <Link to="/mypage/support" className="help-actions__card">
        <p className="help-actions__title">1:1 문의하기</p>
        <p className="help-actions__desc">문의하신 답변이 완료되면 메시지로 알려드릴게요.</p>
      </Link>
      <Link to="/help/chat" className="help-actions__card">
        <p className="help-actions__title">AI 실시간 챗봇 상담</p>
        <p className="help-actions__desc">빠른 수령 및 취소 등 단순 업무는 바로 해결!</p>
      </Link>
    </div>
  )
}
