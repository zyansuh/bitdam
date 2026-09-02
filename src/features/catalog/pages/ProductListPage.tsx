import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useFilterPanel } from '../../../shared/hooks/useFilterPanel'
import CatalogHeader from '../components/CatalogHeader'
import CatalogProductGrid from '../components/CatalogProductGrid'
import CatalogSearchBar from '../components/CatalogSearchBar'
import CategoryChips from '../components/CategoryChips'
import FilterSidebar from '../components/FilterSidebar'
import FilterToggle from '../components/FilterToggle'
import ProductToolbar from '../components/ProductToolbar'
import { useProductFilters } from '../hooks/useProductFilters'

export default function ProductListPage() {
  const { breakpoint, filtersOpen, showSidebar, toggleFilters } = useFilterPanel()
  const catalog = useProductFilters()

  return (
    <PageLayout>
      <CatalogHeader variant="light" />
      <main className="catalog-main">
        <div className="catalog-main__search">
          <CatalogSearchBar value={catalog.filters.query} onChange={catalog.setQuery} />
        </div>
        <div className="catalog-main__chips">
          <CategoryChips selected={catalog.filters.categorySlug} onSelect={catalog.setCategorySlug} />
        </div>
        {breakpoint !== 'desktop' && (
          <FilterToggle open={filtersOpen} onToggle={toggleFilters} />
        )}
        <div className="catalog-layout">
          {showSidebar && (
            <div className="catalog-layout__sidebar">
              <FilterSidebar
                sections={['region', 'price', 'taste']}
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
              countSuffix="검색되었습니다"
              sort={catalog.filters.sort}
              onSortChange={catalog.setSort}
            />
            <CatalogProductGrid products={catalog.products} />
          </section>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
