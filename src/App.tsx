import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './shared/providers/authProvider'
import { CartProvider } from './shared/providers/cartProvider'
import { WishlistProvider } from './shared/providers/wishlistProvider'
import { ThemeProvider } from './shared/providers/themeProvider'
import { AppRoutes } from './routing/routes'
import ScrollToTop from './routing/ScrollToTop'
import StaffOrderAlertHost from './shared/components/feedback/StaffOrderAlertHost'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <StaffOrderAlertHost />
              <AppRoutes />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
