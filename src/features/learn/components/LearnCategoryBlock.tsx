import type { LearnArticle, LearnCategory } from '../types/learn'
import LearnArticleCard from './LearnArticleCard'

interface LearnCategoryBlockProps {
  category: LearnCategory
  articles: LearnArticle[]
}

export default function LearnCategoryBlock({ category, articles }: LearnCategoryBlockProps) {
  if (articles.length === 0) return null

  return (
    <section className="learn-block" id={category.id}>
      <p className="learn-block__kicker">{category.kicker}</p>
      <h2 className="learn-block__title">{category.title}</h2>
      <p className="learn-block__lead">{category.lead}</p>
      <div className="learn-block__grid">
        {articles.map((article) => (
          <LearnArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
