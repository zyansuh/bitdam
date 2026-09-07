import { LIMITED_EDITION } from '../data/limitedEdition'
import TasteRadar from './TasteRadar'

export default function LimitedStory() {
  const item = LIMITED_EDITION

  return (
    <article className="limited-story">
      <h2>손에서 시작해 대물림되는 고집스러운 맛</h2>
      <p>
        안동 소주 명인 가문의 원액과 전통 캘리그라피 작가 {item.artist}가 라벨을 그렸습니다. 병마다
        번호가 있고, 수익의 {item.fundShare}%는 전통주 보존 펀딩으로 돌아갑니다.
      </p>
      <section className="limited-spec">
        <h3>주류 스펙 및 맛 프로필</h3>
        <dl>
          <div>
            <dt>원재료</dt>
            <dd>{item.ingredients}</dd>
          </div>
          <div>
            <dt>알코올 도수</dt>
            <dd>{item.abv}% Vol</dd>
          </div>
          <div>
            <dt>용량</dt>
            <dd>{item.volume}</dd>
          </div>
          <div>
            <dt>맛 노트</dt>
            <dd>{item.notes}</dd>
          </div>
        </dl>
      </section>
      <section className="limited-taste">
        <h3>테이스팅 레포트</h3>
        <div className="limited-taste__row">
          <TasteRadar axes={item.axes} />
          <div>
            <p>{item.summary}</p>
            <p>{item.tasting}</p>
          </div>
        </div>
      </section>
    </article>
  )
}
