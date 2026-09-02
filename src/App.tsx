import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './shared/providers/authProvider'
import { CartProvider } from './shared/providers/cartProvider'
import { ThemeProvider } from './shared/providers/themeProvider'
import { AppRoutes } from './routing/routes'

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
