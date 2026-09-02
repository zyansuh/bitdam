import { Link } from 'react-router-dom'
import { heroContent } from '../data/hero'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__backdrop" />
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            다섯 개의 손이
            <br />
            한 병에 모이다.
          </h1>
          <p className="hero__lead">
            전국 31개 양조장의 장인들이 정성껏 빚어낸 빚담의 전통주.
            시간이 깊어질수록 더욱 풍부해지는 우리 고유의 맛과 향을 한 병에 담았습니다.
          </p>
          <div className="hero__actions">
            <button type="button" className="hero__cta-primary">
              브랜드 이야기
            </button>
            <Link to="/products" className="hero__cta-secondary">
              브랜드 스토어
            </Link>
          </div>
        </div>
        <div className="hero__media-wrap">
          <div className="hero__media">
            <div className="hero__image-frame">
              <img src={heroContent.image} alt={heroContent.imageAlt} className="hero__image" />
            </div>
            <div className="hero__accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
