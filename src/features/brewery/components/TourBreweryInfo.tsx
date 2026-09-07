import { Link } from 'react-router-dom'
import type { BreweryDetail } from '../types/breweryDetail'
import SafeImage from '../../../shared/components/media/SafeImage'

interface TourBreweryInfoProps {
  brewery: BreweryDetail
}

export default function TourBreweryInfo({ brewery }: TourBreweryInfoProps) {
  return (
    <article className="tour-info">
      <SafeImage src={brewery.heroImage} alt="" className="tour-info__image" />
      <p className="tour-info__kicker">{brewery.subtitle}</p>
      <h2 className="tour-info__title">{brewery.heroTitle}</h2>
      <p className="tour-info__meta">
        {brewery.address} · ★ {brewery.rating.toFixed(1)}
      </p>
      {brewery.story.map((paragraph) => (
        <p key={paragraph} className="tour-info__story">
          {paragraph}
        </p>
      ))}
      <dl className="tour-info__facts">
        <div>
          <dt>프로그램</dt>
          <dd>{brewery.programDesc}</dd>
        </div>
        <div>
          <dt>운영</dt>
          <dd>{brewery.hours}</dd>
        </div>
        <div>
          <dt>주차</dt>
          <dd>{brewery.parking}</dd>
        </div>
        <div>
          <dt>1인 요금</dt>
          <dd>{brewery.programPrice.toLocaleString()}원</dd>
        </div>
      </dl>
      <Link to={`/breweries/${brewery.id}`} className="tour-info__more">
        양조장 상세 보기
      </Link>
    </article>
  )
}
