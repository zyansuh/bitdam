import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './shared/providers/authProvider'
import { CartProvider } from './shared/providers/cartProvider'
import { CouponProvider } from './shared/providers/couponProvider'
import { ThemeProvider } from './shared/providers/themeProvider'
import { WishlistProvider } from './shared/providers/wishlistProvider'
import { AppRoutes } from './routing/routes'

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <CouponProvider>
            <WishlistProvider>
                <AppRoutes />
              </WishlistProvider>
          </CouponProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
