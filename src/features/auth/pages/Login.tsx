import InfiniteProductFeed from '../../../shared/components/feed/InfiniteProductFeed'
import InfiniteStoryFeed from '../../../shared/components/feed/InfiniteStoryFeed'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useLoginReturnPath } from '../../../shared/hooks/useLoginReturnPath'
import { useScrollPageTop } from '../../../shared/hooks/useScrollPageTop'
import LoginForm from '../components/LoginForm'
import LoginHeroPanelDesktop from '../components/LoginHeroPanelDesktop'
import LoginHeroPanelMobile from '../components/LoginHeroPanelMobile'

export default function Login() {
  const returnTo = useLoginReturnPath()
  useScrollPageTop()

  return (
    <PageLayout>
      <div className="login-page">
        <LoginHeroPanelMobile />
        <LoginHeroPanelDesktop />
        <div className="login-page__main">
          <LoginForm returnTo={returnTo} />
          <InfiniteProductFeed
            title="로그인 전 미리보기 · 급상승 술"
            subtitle="스크롤하면 더 많은 상품을 불러옵니다"
            showHeader
            className="login-feed"
          />
          <InfiniteStoryFeed />
        </div>
      </div>
    </PageLayout>
  )
}
