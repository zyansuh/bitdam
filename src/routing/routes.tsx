import { Route, Routes } from 'react-router-dom'
import BrandStoryPage from '../features/brand/pages/BrandStoryPage'
import KakaoCallbackPage from '../features/auth/pages/KakaoCallbackPage'
import Login from '../features/auth/pages/Login'
import SignupPage from '../features/auth/pages/SignupPage'
import CategoryPage from '../features/catalog/pages/CategoryPage'
import ProductListPage from '../features/catalog/pages/ProductListPage'
import HomeLanding from '../features/home/pages/HomeLanding'
import TermsPage from '../features/legal/pages/TermsPage'
import PrivacyPage from '../features/legal/pages/PrivacyPage'

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
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}
