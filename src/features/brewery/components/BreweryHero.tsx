import SafeImage from '../../../shared/components/media/SafeImage'
import { MOCK_IMAGES } from '../../../data/mockImages'

export default function BreweryHero() {
  return (
    <section className="brewery-hero">
      <SafeImage src={MOCK_IMAGES.brewery} fallbackSrc={MOCK_IMAGES.brewery} alt="" className="brewery-hero__image" />
      <div className="brewery-hero__copy">
        <h1 className="brewery-hero__title">전국팔도 양조장 지도</h1>
        <p>팔도의 명인을 찾아, 땅의 냄새와 손의 기억을 한 병으로 만나 보세요.</p>
      </div>
    </section>
  )
}
