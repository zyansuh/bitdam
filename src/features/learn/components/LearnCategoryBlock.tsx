import type { LearnCategory } from '../types/learn'
import { listLearnByCategory } from '../data/learnArticles'
import LearnArticleCard from './LearnArticleCard'

interface LearnCategoryBlockProps {
  category: LearnCategory
}

export default function LearnCategoryBlock({ category }: LearnCategoryBlockProps) {
  const articles = listLearnByCategory(category.id)

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
