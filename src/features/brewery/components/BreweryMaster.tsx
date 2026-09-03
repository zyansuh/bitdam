import type { BreweryDetail } from '../types/breweryDetail'

interface BreweryMasterProps {
  brewery: BreweryDetail
}

export default function BreweryMaster({ brewery }: BreweryMasterProps) {
  return (
    <section className="brewery-master">
      <img src={brewery.masterPhoto} alt="" className="brewery-master__photo" />
      <div>
        <p className="brewery-master__role">{brewery.masterRole}</p>
        <p className="brewery-master__quote">“{brewery.masterQuote}”</p>
      </div>
    </section>
  )
}
