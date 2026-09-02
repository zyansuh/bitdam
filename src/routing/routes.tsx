import { Route, Routes } from 'react-router-dom'
import BrandStoryPage from '../features/brand/pages/BrandStoryPage'
import KakaoCallbackPage from '../features/auth/pages/KakaoCallbackPage'
import Login from '../features/auth/pages/Login'
import CategoryPage from '../features/catalog/pages/CategoryPage'
import ProductListPage from '../features/catalog/pages/ProductListPage'
import ComparePage from '../features/product/pages/ComparePage'
import ProductDetailPage from '../features/product/pages/ProductDetailPage'
import HomeLanding from '../features/home/pages/HomeLanding'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/story" element={<BrandStoryPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/kakao/callback" element={<KakaoCallbackPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
    </Routes>
  )
}
