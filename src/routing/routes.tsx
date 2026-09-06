import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import BrandStoryPage from '../features/brand/pages/BrandStoryPage'
import KakaoCallbackPage from '../features/auth/pages/KakaoCallbackPage'
import Login from '../features/auth/pages/Login'
import SignupPage from '../features/auth/pages/SignupPage'
import BreweryDetailPage from '../features/brewery/pages/BreweryDetailPage'
import ClassBookingPage from '../features/brewery/pages/ClassBookingPage'
import CategoryPage from '../features/catalog/pages/CategoryPage'
import ProductListPage from '../features/catalog/pages/ProductListPage'
import HomeLanding from '../features/home/pages/HomeLanding'
import CommunityPage from '../features/community/pages/CommunityPage'
import CommunityPostPage from '../features/community/pages/CommunityPostPage'
import CommunityWritePage from '../features/community/pages/CommunityWritePage'
import TermsPage from '../features/legal/pages/TermsPage'
import PrivacyPage from '../features/legal/pages/PrivacyPage'
import MypagePage from '../features/account/pages/MypagePage'
import MypageCertificatesPage from '../features/account/pages/MypageCertificatesPage'
import MypageCouponsPage from '../features/account/pages/MypageCouponsPage'
import MypageAddressesPage from '../features/account/pages/MypageAddressesPage'
import MypagePaymentsPage from '../features/account/pages/MypagePaymentsPage'
import MypageSupportPage from '../features/account/pages/MypageSupportPage'
import SettingsProfilePage from '../features/account/pages/SettingsProfilePage'
import SettingsSecurityPage from '../features/account/pages/SettingsSecurityPage'
import SettingsNotificationsPage from '../features/account/pages/SettingsNotificationsPage'
import SettingsConnectionsPage from '../features/account/pages/SettingsConnectionsPage'
import SettingsWithdrawPage from '../features/account/pages/SettingsWithdrawPage'
import HelpHomePage from '../features/help/pages/HelpHomePage'
import HelpCategoryPage from '../features/help/pages/HelpCategoryPage'
import HelpChatPage from '../features/help/pages/HelpChatPage'
import NotificationsPage from '../features/notify/pages/NotificationsPage'
import NoticeListPage from '../features/notice/pages/NoticeListPage'
import NoticeWritePage from '../features/notice/pages/NoticeWritePage'
import NoticeDigestPage from '../features/notice/pages/NoticeDigestPage'
import NoticeDetailPage from '../features/notice/pages/NoticeDetailPage'
import ChatPage from '../features/chat/pages/ChatPage'

const BreweryMapPage = lazy(() => import('../features/brewery/pages/BreweryMapPage'))

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/story" element={<BrandStoryPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login/kakao/callback" element={<KakaoCallbackPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route
        path="/breweries"
        element={
          <Suspense fallback={<p className="brewery-map-fallback">지도를 불러오는 중…</p>}>
            <BreweryMapPage />
          </Suspense>
        }
      />
      <Route path="/breweries/:id" element={<BreweryDetailPage />} />
      <Route path="/classes" element={<ClassBookingPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/community/new" element={<CommunityWritePage />} />
      <Route path="/community/:id" element={<CommunityPostPage />} />
      <Route path="/mypage" element={<MypagePage />} />
      <Route path="/mypage/certificates" element={<MypageCertificatesPage />} />
      <Route path="/mypage/coupons" element={<MypageCouponsPage />} />
      <Route path="/mypage/addresses" element={<MypageAddressesPage />} />
      <Route path="/mypage/payments" element={<MypagePaymentsPage />} />
      <Route path="/mypage/support" element={<MypageSupportPage />} />
      <Route path="/account" element={<SettingsProfilePage />} />
      <Route path="/account/security" element={<SettingsSecurityPage />} />
      <Route path="/account/notifications" element={<SettingsNotificationsPage />} />
      <Route path="/account/connections" element={<SettingsConnectionsPage />} />
      <Route path="/account/withdraw" element={<SettingsWithdrawPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/help" element={<HelpHomePage />} />
      <Route path="/help/chat" element={<HelpChatPage />} />
      <Route path="/help/:category" element={<HelpCategoryPage />} />
      <Route path="/notices" element={<NoticeListPage />} />
      <Route path="/notices/new" element={<NoticeWritePage />} />
      <Route path="/notices/digest" element={<NoticeDigestPage />} />
      <Route path="/notices/:id" element={<NoticeDetailPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}
