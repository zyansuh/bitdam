import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import NotifyList from '../components/NotifyList'
import NotifyTabs from '../components/NotifyTabs'
import { useSiteNotices } from '../hooks/useSiteNotices'

export default function NotificationsPage() {
  const { tab, setTab, items, read, markRead, markAllRead } = useSiteNotices()

  return (
    <PageLayout>
      <Navbar />
      <main className="notify-page">
        <section className="notify-panel">
          <div className="notify-panel__head">
            <h1 className="notify-panel__title">알림 센터</h1>
            <button type="button" className="notify-panel__read" onClick={markAllRead}>
              모두 읽음으로 표시
            </button>
          </div>
          <NotifyTabs active={tab} onSelect={setTab} />
          <NotifyList items={items} read={read} onOpen={markRead} />
        </section>
      </main>
      <Footer />
    </PageLayout>
  )
}
