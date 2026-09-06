import { useLocation } from 'react-router-dom'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { breweryNavLinks } from '../data/breweryNavLinks'
import { isTourNavActive } from '../utils/isTourNavActive'

export default function BrewerySiteHeader() {
  const { pathname } = useLocation()

  return <SiteHeader links={breweryNavLinks} isLinkActive={(to) => isTourNavActive(pathname, to)} />
}
