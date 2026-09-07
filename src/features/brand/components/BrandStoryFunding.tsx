import { brandStoryFunding } from '../data/brandStory'
import SafeImage from '../../../shared/components/media/SafeImage'

export default function BrandStoryFunding() {
  return (
    <section className="brand-fund">
      <h2 className="brand-fund__title">진행 중인 크라우드 양조 펀딩</h2>
      <div className="brand-fund__grid">
        {brandStoryFunding.map((item) => (
          <article key={item.id} className="brand-fund__card">
            <SafeImage src={item.image} alt="" className="brand-fund__image" />
            <div className="brand-fund__body">
              <p className="brand-fund__tag">{item.tag}</p>
              <h3>{item.title}</h3>
              <div className="brand-fund__bar" aria-hidden>
                <i style={{ width: `${Math.min(item.percent, 100)}%` }} />
              </div>
              <p className="brand-fund__meta">
                {item.percent}% · {item.amount}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
