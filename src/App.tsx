import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLanding from './pages/HomeLanding'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
