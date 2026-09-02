import { Link } from 'react-router-dom'

interface CatalogBreadcrumbProps {
  categoryTitle: string
}

export default function CatalogBreadcrumb({ categoryTitle }: CatalogBreadcrumbProps) {
  return (
    <nav aria-label="브레드크럼" className="catalog-breadcrumb">
      <ol className="catalog-breadcrumb__list">
        <li>
          <Link to="/" className="catalog-breadcrumb__link">
            홈
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <Link to="/products" className="catalog-breadcrumb__link">
            전통주
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li className="catalog-breadcrumb__current">{categoryTitle}</li>
      </ol>
    </nav>
  )
}
