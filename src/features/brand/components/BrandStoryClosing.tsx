import { brandStoryClosing } from '../data/brandStory'

export default function BrandStoryClosing() {
  return (
    <section className="brand-story-closing">
      <p className="brand-story-closing__name">{brandStoryClosing.name}</p>
      <div className="brand-story-closing__words">
        {brandStoryClosing.words.map((item) => (
          <div key={item.word} className="brand-story-closing__word">
            <p className="brand-story-closing__word-title">{item.word}</p>
            <p className="brand-story-closing__word-meaning">{item.meaning}</p>
          </div>
        ))}
      </div>
      <p className="brand-story-closing__join">{brandStoryClosing.join}</p>
      <ul className="brand-story-closing__promises">
        {brandStoryClosing.promises.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="brand-story-closing__tagline">
        {brandStoryClosing.tagline.map((line) => (
          <span key={line} className="brand-story-closing__tagline-line">
            {line}
          </span>
        ))}
      </p>
      <p className="brand-story-closing__signature">{brandStoryClosing.signature}</p>
      {brandStoryClosing.endLines.map((line) => (
        <p key={line} className="brand-story-closing__line">
          {line}
        </p>
      ))}
    </section>
  )
}
