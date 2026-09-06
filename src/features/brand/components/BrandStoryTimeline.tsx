import { brandStoryMilestones } from '../data/brandStory'

export default function BrandStoryTimeline() {
  return (
    <section className="brand-time">
      <h2 className="brand-time__title">전통을 트렌드로 바꾼 빚담의 여정</h2>
      <ol className="brand-time__list">
        {brandStoryMilestones.map((item) => (
          <li key={item.date}>
            <time>{item.date}</time>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
