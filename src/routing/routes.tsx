import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import CategoryPage from '../features/catalog/pages/CategoryPage'
import ProductListPage from '../features/catalog/pages/ProductListPage'
import HomeLanding from '../features/home/pages/HomeLanding'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
    </Routes>
  )
}
