import { Link } from 'react-router-dom'
import type { Story } from '../../../data/stories'

interface StoryCardProps {
  story: Story
  href?: string
}

export default function StoryCard({ story, href }: StoryCardProps) {
  const body = (
    <>
      <span className="story-card__tag">{story.tag}</span>
      <h3 className="story-card__title">{story.title}</h3>
      <p className="story-card__region">{story.region}</p>
    </>
  )

  if (href) {
    return (
      <article className="story-card">
        <Link to={href} className="story-card__link">
          {body}
        </Link>
      </article>
    )
  }

  return <article className="story-card">{body}</article>
}
