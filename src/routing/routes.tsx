import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import HomeLanding from '../features/home/pages/HomeLanding'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
