import type { PolicyArticle } from '../types/policy'
import PolicyBlocks from './PolicyBlocks'

interface PolicyArticleSectionProps {
  article: PolicyArticle
}

export default function PolicyArticleSection({ article }: PolicyArticleSectionProps) {
  return (
    <section className="policy-article" aria-labelledby={article.id}>
      <h3 id={article.id} className="policy-article__title">
        {article.title}
      </h3>
      <PolicyBlocks blocks={article.blocks} />
    </section>
  )
}
