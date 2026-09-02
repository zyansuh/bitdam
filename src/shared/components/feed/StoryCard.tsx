import type { Story } from '../../../data/stories'

interface StoryCardProps {
  story: Story
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="story-card">
      <span className="story-card__tag">{story.tag}</span>
      <h3 className="story-card__title">{story.title}</h3>
      <p className="story-card__region">{story.region}</p>
    </article>
  )
}
