import { brandStoryProcess } from '../data/brandStory'

export default function BrandStoryProcess() {
  return (
    <section className="brand-process">
      <h2 className="brand-process__title">가치 있는 전통주가 빚어지는 과정</h2>
      <ol className="brand-process__grid">
        {brandStoryProcess.map((item) => (
          <li key={item.id} className="brand-process__card">
            <span>{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
