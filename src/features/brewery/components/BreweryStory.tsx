import type { BreweryDetail } from '../types/breweryDetail'

interface BreweryStoryProps {
  brewery: BreweryDetail
}

export default function BreweryStory({ brewery }: BreweryStoryProps) {
  return (
    <section>
      <h2 className="brewery-detail__heading">{brewery.storyTitle}</h2>
      {brewery.story.map((paragraph) => (
        <p key={paragraph} className="brewery-detail__prose">
          {paragraph}
        </p>
      ))}
    </section>
  )
}
