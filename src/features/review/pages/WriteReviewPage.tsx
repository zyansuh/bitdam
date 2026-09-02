import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../../data/products'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useAuth } from '../../../shared/hooks/useAuth'
import LoginLink from '../../../shared/components/navigation/LoginLink'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import ReviewBodyField from '../components/ReviewBodyField'
import ReviewMediaDropzone from '../components/ReviewMediaDropzone'
import ReviewProductCard from '../components/ReviewProductCard'
import ReviewRatingBlock from '../components/ReviewRatingBlock'
import ReviewTagPicker from '../components/ReviewTagPicker'
import { useReviewForm } from '../hooks/useReviewForm'

export default function WriteReviewPage() {
  const { id } = useParams()
  const product = getProductById(Number(id))
  const { isLoggedIn } = useAuth()
  const form = useReviewForm(product?.id ?? 0)

  if (!product) {
    return (
      <PageLayout>
        <CatalogHeader />
        <main className="review-page">
          <p>상품을 찾을 수 없습니다.</p>
          <Link to="/products">목록으로</Link>
        </main>
        <Footer />
      </PageLayout>
    )
  }

  const extraTags = product.tasteTags.map((tag) => tag.replace(/^#/, ''))

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="review-page">
        <h1 className="review-page__title">구매 후기 작성</h1>
        <p className="review-page__lead">고객님의 소중한 후기는 다른 분들에게 큰 도움이 됩니다.</p>
        <ReviewProductCard product={product} />
        {form.done ? (
          <p className="review-page__done">후기가 등록되었습니다.</p>
        ) : (
          <form
            className="review-page__form"
            onSubmit={(event) => {
              event.preventDefault()
              form.submit()
            }}
          >
            <ReviewRatingBlock
              recommend={form.recommend}
              onRecommend={form.setRecommend}
              attributes={form.attributes}
              onAttribute={form.setAttribute}
            />
            <ReviewTagPicker selected={form.tags} extraTags={extraTags} onToggle={form.toggleTag} />
            <ReviewBodyField value={form.body} onChange={form.setBody} />
            <ReviewMediaDropzone photos={form.photos} onAdd={form.addFiles} onRemove={form.removePhoto} />
            {form.error ? <p className="review-page__error">{form.error}</p> : null}
            {isLoggedIn ? (
              <button type="submit" className="review-page__submit">
                리뷰 등록 완료
              </button>
            ) : (
              <LoginLink className="review-page__submit">로그인하고 후기 작성</LoginLink>
            )}
          </form>
        )}
        {form.done ? (
          <Link to={`/products/${product.id}`} className="review-page__back">
            상품으로 돌아가기
          </Link>
        ) : null}
      </main>
      <Footer />
    </PageLayout>
  )
}
