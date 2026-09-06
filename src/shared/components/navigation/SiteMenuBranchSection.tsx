import { Link } from 'react-router-dom'
import type { SiteMenuBranch } from '../../types/siteMenu'
import SiteMenuLinkList from './SiteMenuLinkList'

interface SiteMenuBranchSectionProps {
  branch: SiteMenuBranch
  onClose: () => void
}

export default function SiteMenuBranchSection({ branch, onClose }: SiteMenuBranchSectionProps) {
  return (
    <section className="site-menu__branch">
      {branch.to ? (
        <Link to={branch.to} className="site-menu__title" onClick={onClose}>
          {branch.label}
        </Link>
      ) : (
        <h2 className="site-menu__title">{branch.label}</h2>
      )}
      {branch.items.length > 0 ? <SiteMenuLinkList items={branch.items} onClose={onClose} /> : null}
      {branch.clusters.map((cluster) => (
        <details key={cluster.id} className="site-menu__cluster">
          <summary className="site-menu__cluster-title">{cluster.label}</summary>
          <SiteMenuLinkList items={cluster.items} onClose={onClose} />
        </details>
      ))}
    </section>
  )
}
