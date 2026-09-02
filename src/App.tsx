import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './shared/providers/authProvider'
import { ThemeProvider } from './shared/providers/themeProvider'
import { AppRoutes } from './routing/routes'

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
