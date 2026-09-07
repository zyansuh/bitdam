import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canEditStory, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import StoryEditor from '../../staff/components/StoryEditor'
import { useStoryOverride } from '../../staff/hooks/useStoryOverride'
import BrandStoryBanner from '../components/BrandStoryBanner'
import BrandStoryChapterSection from '../components/BrandStoryChapterSection'
import BrandStoryClosing from '../components/BrandStoryClosing'
import BrandStoryFunding from '../components/BrandStoryFunding'
import BrandStoryHero from '../components/BrandStoryHero'
import BrandStoryImpact from '../components/BrandStoryImpact'
import BrandStoryPartners from '../components/BrandStoryPartners'
import BrandStoryPhilosophies from '../components/BrandStoryPhilosophies'
import BrandStoryProcess from '../components/BrandStoryProcess'
import BrandStoryTimeline from '../components/BrandStoryTimeline'
import BrandStoryUglyFruit from '../components/BrandStoryUglyFruit'
import { brandStoryChapters } from '../data/brandStory'

export default function BrandStoryPage() {
  const { user } = useAuth()
  const canEdit = canEditStory(resolveWorkspaceRole(user))
  const story = useStoryOverride()

  return (
    <PageLayout>
      <SiteHeader links={navLinks} />
      <main className="brand-story">
        {canEdit ? (
          <StoryEditor
            draft={story.draft}
            saved={story.saved}
            onTitle={(value) => story.setDraft({ ...story.draft, title: value })}
            onLead={(value) => story.setDraft({ ...story.draft, lead: value })}
            onSave={story.save}
          />
        ) : null}
        <BrandStoryHero title={story.draft.title} lead={story.draft.lead} />
        <BrandStoryUglyFruit />
        <BrandStoryPhilosophies />
        <BrandStoryImpact />
        <BrandStoryProcess />
        <BrandStoryFunding />
        <BrandStoryTimeline />
        <BrandStoryPartners />
        <div id="brand-story-body" className="brand-story__body">
          {brandStoryChapters.map((chapter) => (
            <BrandStoryChapterSection key={chapter.id} chapter={chapter} />
          ))}
        </div>
        <BrandStoryClosing />
        <BrandStoryBanner />
      </main>
      <Footer />
    </PageLayout>
  )
}
