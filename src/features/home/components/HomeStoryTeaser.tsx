import { Link } from 'react-router-dom'
import { generateStories } from '../../../data/stories'
import StoryCard from '../../../shared/components/feed/StoryCard'

const HOME_STORY_COUNT = 4

export default function HomeStoryTeaser() {
  const stories = generateStories(0, HOME_STORY_COUNT)

  return (
    <section className="story-feed">
      <div className="story-feed__inner">
        <h2 className="story-feed__title">빚담 이야기</h2>
        <p className="story-feed__lead">양조장·장인의 짧은 장면입니다. 긴 브랜드는 스토리 페이지에서 이어집니다.</p>
        <div className="story-feed__grid">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} href="/story" />
          ))}
        </div>
        <div className="story-feed__more">
          <Link to="/story" className="shop-gold-btn">
            브랜드 이야기 더보기
          </Link>
          <Link to="/community" className="shop-ghost-btn">
            커뮤니티 글 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
