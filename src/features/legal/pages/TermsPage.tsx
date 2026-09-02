import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import PolicyChapterSection from '../components/PolicyChapterSection'
import PolicyCompanyCard from '../components/PolicyCompanyCard'
import PolicyHeader from '../components/PolicyHeader'
import PolicyToc from '../components/PolicyToc'
import { operatingPolicy } from '../data/operatingPolicy'
import { useScrollToHash } from '../hooks/useScrollToHash'

export default function TermsPage() {
  useScrollToHash()

  return (
    <PageLayout>
      <Navbar />
      <main className="policy-page">
        <PolicyHeader document={operatingPolicy} />
        <PolicyToc
          chapters={operatingPolicy.chapters}
          label="운영정책 목차"
          extras={[{ id: 'business', label: '사업자 정보' }]}
        />
        <div className="policy-body">
          {operatingPolicy.chapters.map((chapter) => (
            <PolicyChapterSection key={chapter.id} chapter={chapter} />
          ))}
          <PolicyCompanyCard rows={operatingPolicy.company} />
          <section className="policy-addendum" id="addendum">
            <h2 className="policy-addendum__title">부칙</h2>
            <p>{operatingPolicy.addendum}</p>
          </section>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
