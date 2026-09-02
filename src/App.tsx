import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './shared/providers/authProvider'
import { AppRoutes } from './routing/routes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
