import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './shared/providers/authProvider'
import { ThemeProvider } from './shared/providers/themeProvider'
import { AppRoutes } from './routing/routes'
import ScrollToTop from './routing/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
