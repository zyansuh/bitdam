import type { TasteAxis } from '../types/limited'

interface TasteRadarProps {
  axes: TasteAxis[]
}

function point(index: number, value: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  const radius = (value / 100) * 70
  return `${100 + Math.cos(angle) * radius},${100 + Math.sin(angle) * radius}`
}

export default function TasteRadar({ axes }: TasteRadarProps) {
  const grid = [20, 40, 60, 80, 100]
  const shape = axes.map((axis, index) => point(index, axis.value, axes.length)).join(' ')
  const frame = axes.map((_, index) => point(index, 100, axes.length)).join(' ')

  return (
    <figure className="taste-radar">
      <svg viewBox="0 0 200 200" role="img" aria-label="테이스팅 레이다">
        {grid.map((ring) => (
          <polygon
            key={ring}
            points={axes.map((_, index) => point(index, ring, axes.length)).join(' ')}
            className="taste-radar__grid"
          />
        ))}
        <polygon points={frame} className="taste-radar__frame" />
        <polygon points={shape} className="taste-radar__fill" />
        {axes.map((axis, index) => {
          const [x, y] = point(index, 112, axes.length).split(',')
          return (
            <text key={axis.id} x={x} y={y} className="taste-radar__label">
              {axis.label}
            </text>
          )
        })}
      </svg>
    </figure>
  )
}
