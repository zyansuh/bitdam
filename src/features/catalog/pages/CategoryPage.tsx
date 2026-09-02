import { Navigate, useParams } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useFilterPanel } from '../../../shared/hooks/useFilterPanel'
import CatalogBreadcrumb from '../components/CatalogBreadcrumb'
import CatalogHeader from '../components/CatalogHeader'
import CatalogProductGrid from '../components/CatalogProductGrid'
import FeaturedProduct from '../components/FeaturedProduct'
import FilterSidebar from '../components/FilterSidebar'
import FilterToggle from '../components/FilterToggle'
import ProductToolbar from '../components/ProductToolbar'
import { getCategoryBySlug } from '../data/categories'
import { useProductFilters } from '../hooks/useProductFilters'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const { breakpoint, filtersOpen, showSidebar, toggleFilters } = useFilterPanel()
  const catalog = useProductFilters({ categorySlug: category?.slug ?? null })

  if (!category) {
    return <Navigate to="/products" replace />
  }

  return (
    <PageLayout>
      <CatalogHeader variant="navy" />
      <main className="catalog-main">
        <CatalogBreadcrumb categoryTitle={category.shortLabel} />
        <h1 className="catalog-title">{category.title}</h1>
        {breakpoint !== 'desktop' && (
          <FilterToggle open={filtersOpen} onToggle={toggleFilters} />
        )}
        <div className="catalog-layout">
          {showSidebar && (
            <div className="catalog-layout__sidebar">
              <FilterSidebar
                sections={['price', 'region', 'abv']}
                regions={catalog.filters.regions}
                onToggleRegion={catalog.toggleRegion}
                priceMin={catalog.filters.priceMin}
                priceMax={catalog.filters.priceMax}
                onPriceChange={catalog.setPriceRange}
                tasteTags={catalog.filters.tasteTags}
                onToggleTasteTag={catalog.toggleTasteTag}
                abvRangeId={catalog.filters.abvRangeId}
                onAbvChange={catalog.setAbvRangeId}
              />
            </div>
          )}
          <section className="catalog-layout__content">
            <ProductToolbar
              count={catalog.products.length}
              countSuffix="있습니다"
              sort={catalog.filters.sort}
              onSortChange={catalog.setSort}
            />
            <FeaturedProduct products={catalog.products} />
            <div className="catalog-featured-grid">
              <CatalogProductGrid products={catalog.products} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
