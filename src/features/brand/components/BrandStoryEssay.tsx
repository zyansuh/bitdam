import BrandStoryChapterSection from './BrandStoryChapterSection'
import BrandStoryEssayNav from './BrandStoryEssayNav'
import BrandStoryEssayPager from './BrandStoryEssayPager'
import { useBrandStoryChapter } from '../hooks/useBrandStoryChapter'

export default function BrandStoryEssay() {
  const reader = useBrandStoryChapter()

  return (
    <section id="brand-story-essay" className="brand-story-essay">
      <header className="brand-story-essay__head">
        <p>긴 글은 여섯 장</p>
        <h2>빚담이 태어난 이야기</h2>
        <p>한 장만 펼칩니다. 목차를 누르면 다음 장으로 넘어갑니다.</p>
      </header>
      <BrandStoryEssayNav activeId={reader.chapter.id} onSelect={reader.open} />
      <div className="brand-story-essay__page">
        <BrandStoryChapterSection chapter={reader.chapter} />
      </div>
      <BrandStoryEssayPager previous={reader.previous} next={reader.next} onSelect={reader.open} />
    </section>
  )
}
