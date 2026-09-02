import type { PolicyChapter } from '../types/policy'
import PolicyArticleSection from './PolicyArticleSection'

interface PolicyChapterSectionProps {
  chapter: PolicyChapter
}

export default function PolicyChapterSection({ chapter }: PolicyChapterSectionProps) {
  return (
    <section className="policy-chapter" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="policy-chapter__meta">
        <p className="policy-chapter__number">{chapter.number}</p>
        <h2 id={`${chapter.id}-title`} className="policy-chapter__title">
          {chapter.title}
        </h2>
      </div>
      {chapter.articles.map((article) => (
        <PolicyArticleSection key={article.id} article={article} />
      ))}
    </section>
  )
}
