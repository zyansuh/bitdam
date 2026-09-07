import type { LearnArticle } from '../types/learn'

interface LearnArticleBodyProps {
  article: LearnArticle
}

export default function LearnArticleBody({ article }: LearnArticleBodyProps) {
  return (
    <div className="learn-article__body">
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </section>
      ))}
      {article.takeaways.length > 0 ? (
        <section className="learn-article__takeaways">
          <h2>핵심 정리</h2>
          <ul>
            {article.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
