import { Link } from 'react-router-dom'

interface BreweryTourBarProps {
  name: string
  breweryId: string
}

export default function BreweryTourBar({ name, breweryId }: BreweryTourBarProps) {
  return (
    <div className="brewery-tour-bar">
      <p className="brewery-tour-bar__copy">{name} 방문 예약</p>
      <Link to={`/classes?brewery=${breweryId}`} className="brewery-tour-bar__btn">
        양조장 투어 신청하기
      </Link>
    </div>
  )
}
