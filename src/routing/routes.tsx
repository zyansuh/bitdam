import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import BrandStoryPage from '../features/brand/pages/BrandStoryPage'
import KakaoCallbackPage from '../features/auth/pages/KakaoCallbackPage'
import Login from '../features/auth/pages/Login'
import SignupPage from '../features/auth/pages/SignupPage'
import BreweryDetailPage from '../features/brewery/pages/BreweryDetailPage'
import ClassBookingPage from '../features/brewery/pages/ClassBookingPage'
import CategoryPage from '../features/catalog/pages/CategoryPage'
import ProductListPage from '../features/catalog/pages/ProductListPage'
import HomeLanding from '../features/home/pages/HomeLanding'
import TermsPage from '../features/legal/pages/TermsPage'
import PrivacyPage from '../features/legal/pages/PrivacyPage'

const BreweryMapPage = lazy(() => import('../features/brewery/pages/BreweryMapPage'))

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/story" element={<BrandStoryPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login/kakao/callback" element={<KakaoCallbackPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route
        path="/breweries"
        element={
          <Suspense fallback={<p className="brewery-map-fallback">지도를 불러오는 중…</p>}>
            <BreweryMapPage />
          </Suspense>
        }
      />
      <Route path="/breweries/:id" element={<BreweryDetailPage />} />
      <Route path="/classes" element={<ClassBookingPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}
