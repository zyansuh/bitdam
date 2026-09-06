import { navLinks } from '../../../data/navLinks'
import SiteHeader from './SiteHeader'

export default function Navbar() {
  return <SiteHeader links={navLinks} />
}
