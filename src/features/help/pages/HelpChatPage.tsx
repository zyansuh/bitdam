import HelpLayout from '../components/HelpLayout'
import { useHelpSearch } from '../hooks/useHelpSearch'

export default function HelpChatPage() {
  const { query, setQuery } = useHelpSearch()

  return (
    <HelpLayout query={query} onQuery={setQuery}>
      <p className="help-crumb">고객센터 {'>'} AI 챗봇</p>
      <section className="help-chat">
        <p className="help-chat__bubble help-chat__bubble--bot">
          안녕하세요, 빚담입니다. 배송·취소·성인인증처럼 자주 묻는 내용은 FAQ에서 바로 확인할 수 있어요.
        </p>
        <p className="help-chat__bubble help-chat__bubble--bot">
          주문번호가 있으면 1:1 문의에 남겨 주시면 평일 순서로 답변드립니다.
        </p>
      </section>
    </HelpLayout>
  )
}
