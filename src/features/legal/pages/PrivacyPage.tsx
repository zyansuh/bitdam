import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import PolicyChapterSection from '../components/PolicyChapterSection'
import PolicyCompanyCard from '../components/PolicyCompanyCard'
import PolicyHeader from '../components/PolicyHeader'
import PolicyIntro from '../components/PolicyIntro'
import PolicyToc from '../components/PolicyToc'
import { privacyPolicy } from '../data/privacyPolicy'
import { useScrollToHash } from '../hooks/useScrollToHash'

export default function PrivacyPage() {
  useScrollToHash()

  return (
    <PageLayout>
      <Navbar />
      <main className="policy-page">
        <PolicyHeader document={privacyPolicy} />
        {privacyPolicy.intro ? <PolicyIntro paragraphs={privacyPolicy.intro} /> : null}
        <PolicyToc
          chapters={privacyPolicy.chapters}
          label="개인정보처리방침 목차"
          extras={[{ id: 'business', label: '사업자 정보' }]}
        />
        <div className="policy-body">
          {privacyPolicy.chapters.map((chapter) => (
            <PolicyChapterSection key={chapter.id} chapter={chapter} />
          ))}
          <PolicyCompanyCard rows={privacyPolicy.company} />
          <section className="policy-addendum" id="addendum">
            <h2 className="policy-addendum__title">부칙</h2>
            <p>{privacyPolicy.addendum}</p>
          </section>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
