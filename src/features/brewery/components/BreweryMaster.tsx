import type { BreweryDetail } from '../types/breweryDetail'
import SafeImage from '../../../shared/components/media/SafeImage'

interface BreweryMasterProps {
  brewery: BreweryDetail
}

export default function BreweryMaster({ brewery }: BreweryMasterProps) {
  return (
    <section className="brewery-master">
      <SafeImage src={brewery.masterPhoto} alt="" className="brewery-master__photo" />
      <div>
        <p className="brewery-master__role">{brewery.masterRole}</p>
        <p className="brewery-master__quote">“{brewery.masterQuote}”</p>
      </div>
    </section>
  )
}
