import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { catalogLightLinks, catalogNavyLinks } from '../data/headerLinks'

export type CatalogHeaderVariant = 'light' | 'navy'

interface CatalogHeaderProps {
  variant?: CatalogHeaderVariant
}

export default function CatalogHeader({ variant = 'light' }: CatalogHeaderProps) {
  return (
    <SiteHeader
      tone={variant === 'navy' ? 'navy' : 'light'}
      links={variant === 'navy' ? catalogNavyLinks : catalogLightLinks}
    />
  )
}
