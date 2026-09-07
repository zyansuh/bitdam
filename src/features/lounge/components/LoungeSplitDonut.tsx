import type { LoungeSplitSlice } from '../types/lounge'

interface LoungeSplitDonutProps {
  slices: LoungeSplitSlice[]
}

export default function LoungeSplitDonut({ slices }: LoungeSplitDonutProps) {
  let cursor = 0
  const gradient = slices
    .map((slice, index) => {
      const start = cursor
      cursor += slice.percent
      const color = index === 0 ? '#c5994c' : index === 1 ? '#1a2332' : '#d9d0c8'
      return `${color} ${start}% ${cursor}%`
    })
    .join(', ')

  return (
    <section className="lounge-panel">
      <h2>정산 분할 비율</h2>
      <div className="lounge-donut-wrap">
        <div className="lounge-donut" style={{ background: `conic-gradient(${gradient})` }} />
        <ul>
          {slices.map((slice) => (
            <li key={slice.id}>
              {slice.label} {slice.percent}%
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
