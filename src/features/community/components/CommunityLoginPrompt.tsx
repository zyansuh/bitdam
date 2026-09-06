import LoginLink from '../../../shared/components/navigation/LoginLink'

export default function CommunityLoginPrompt() {
  return (
    <div className="community-prompt">
      <p className="community-prompt__text">내 글만 보이는 블로그형 커뮤니티입니다. 로그인하면 글을 남길 수 있습니다.</p>
      <LoginLink className="community-prompt__link">로그인하고 글 쓰기</LoginLink>
    </div>
  )
}
