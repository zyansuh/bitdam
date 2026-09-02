import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useAuth } from '../../../shared/hooks/useAuth'
import { formatUserHonorific } from '../../../shared/utils/formatUserHonorific'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import MembershipBenefits from '../components/MembershipBenefits'
import MembershipHero from '../components/MembershipHero'
import MembershipTiers from '../components/MembershipTiers'
import PointHistoryList from '../components/PointHistoryList'
import { useMembershipProfile } from '../hooks/useMembershipProfile'

export default function MembershipPage() {
  const { user, isLoggedIn } = useAuth()
  const profile = useMembershipProfile()
  const honorific = formatUserHonorific(user?.nickname ?? '회원')

  return (
    <PageLayout>
      <CatalogHeader variant="navy" />
      <main className="member-page">
        <h1 className="member-page__title">포인트 & 멤버십</h1>
        <MembershipHero
          honorific={honorific}
          loggedIn={isLoggedIn}
          tierName={profile.current?.name ?? 'VIP'}
          remain={profile.remain}
          nextName={profile.next?.name ?? null}
          progress={profile.progress}
        />
        <div className="member-page__grid">
          <PointHistoryList />
          <div className="member-page__side">
            <MembershipBenefits />
            <MembershipTiers />
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
