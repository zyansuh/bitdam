import { mypageCertificates } from '../data/mypageMock'
import SafeImage from '../../../shared/components/media/SafeImage'

interface MypageCertGridProps {
  limit?: number
}

export default function MypageCertGrid({ limit }: MypageCertGridProps) {
  const cards = limit ? mypageCertificates.slice(0, limit) : mypageCertificates

  return (
    <ul className="mypage-certs">
      {cards.map((cert) => (
        <li key={cert.id} className="mypage-certs__card">
          <SafeImage src={cert.image} alt="" className="mypage-certs__image" />
          <p className="mypage-certs__no">No. {cert.id}</p>
          <h3 className="mypage-certs__name">{cert.name}</h3>
          <p className="mypage-certs__desc">{cert.desc}</p>
        </li>
      ))}
    </ul>
  )
}
