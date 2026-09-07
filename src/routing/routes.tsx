import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import BrandStoryPage from '../features/brand/pages/BrandStoryPage'
import KakaoCallbackPage from '../features/auth/pages/KakaoCallbackPage'
import NaverCallbackPage from '../features/auth/pages/NaverCallbackPage'
import Login from '../features/auth/pages/Login'
import SignupPage from '../features/auth/pages/SignupPage'
import BreweryDetailPage from '../features/brewery/pages/BreweryDetailPage'
import ClassBookingPage from '../features/brewery/pages/ClassBookingPage'
import CategoryPage from '../features/catalog/pages/CategoryPage'
import ProductListPage from '../features/catalog/pages/ProductListPage'
import ProductDetailPage from '../features/product/pages/ProductDetailPage'
import WriteReviewPage from '../features/review/pages/WriteReviewPage'
import WishlistPage from '../features/wishlist/pages/WishlistPage'
import CartPage from '../features/cart/pages/CartPage'
import OrderCompletePage from '../features/order/pages/OrderCompletePage'
import OrderDetailPage from '../features/order/pages/OrderDetailPage'
import HomeLanding from '../features/home/pages/HomeLanding'
import CommunityPage from '../features/community/pages/CommunityPage'
import CommunityPostPage from '../features/community/pages/CommunityPostPage'
import CommunityWritePage from '../features/community/pages/CommunityWritePage'
import CommunityEditPage from '../features/community/pages/CommunityEditPage'
import TermsPage from '../features/legal/pages/TermsPage'
import PrivacyPage from '../features/legal/pages/PrivacyPage'
import MypagePage from '../features/account/pages/MypagePage'
import MypageCertificatesPage from '../features/account/pages/MypageCertificatesPage'
import MypageCouponsPage from '../features/account/pages/MypageCouponsPage'
import MypageReservationsPage from '../features/account/pages/MypageReservationsPage'
import MypageAddressesPage from '../features/account/pages/MypageAddressesPage'
import MypagePaymentsPage from '../features/account/pages/MypagePaymentsPage'
import MypageSupportPage from '../features/account/pages/MypageSupportPage'
import AdminSupportPage from '../features/account/pages/AdminSupportPage'
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
import NoticeEditPage from '../features/notice/pages/NoticeEditPage'
import NoticeDigestPage from '../features/notice/pages/NoticeDigestPage'
import NoticeDetailPage from '../features/notice/pages/NoticeDetailPage'
import ChatPage from '../features/chat/pages/ChatPage'
import CustomLabelPage from '../features/custom/pages/CustomLabelPage'
import TourReservePage from '../features/brewery/pages/TourReservePage'
import GiftPage from '../features/gift/pages/GiftPage'
import HolidayEventPage from '../features/event/pages/HolidayEventPage'
import TimeSalePage from '../features/deals/pages/TimeSalePage'
import SubscribePage from '../features/subscribe/pages/SubscribePage'
import CorporateGiftPage from '../features/corporate/pages/CorporateGiftPage'
import HolidayGiftSalePage from '../features/holidayGift/pages/HolidayGiftSalePage'
import DailyEventPage from '../features/dailyEvent/pages/DailyEventPage'
import HolidayTourPage from '../features/holidayTour/pages/HolidayTourPage'
import LimitedEditionPage from '../features/limited/pages/LimitedEditionPage'
import IrPage from '../features/ir/pages/IrPage'
import NotFoundPage from '../features/error/pages/NotFoundPage'
import LoungeDashboardPage from '../features/lounge/pages/LoungeDashboardPage'
import LoungeProductsPage from '../features/lounge/pages/LoungeProductsPage'
import LoungeProductNewPage from '../features/lounge/pages/LoungeProductNewPage'
import LoungeOrdersPage from '../features/lounge/pages/LoungeOrdersPage'
import LoungeSettlementsPage from '../features/lounge/pages/LoungeSettlementsPage'
import LoungeReportsPage from '../features/lounge/pages/LoungeReportsPage'
import LoungeCustomersPage from '../features/lounge/pages/LoungeCustomersPage'
import LoungeSubscriptionsPage from '../features/lounge/pages/LoungeSubscriptionsPage'
import LoungeVerifyPage from '../features/lounge/pages/LoungeVerifyPage'
import CmsListPage from '../features/cms/pages/CmsListPage'
import CmsIrLeadersPage from '../features/cms/pages/CmsIrLeadersPage'
import CmsIrRoundPage from '../features/cms/pages/CmsIrRoundPage'
import AdminPeoplePage from '../features/staff/pages/AdminPeoplePage'
import AdminPerformancePage from '../features/staff/pages/AdminPerformancePage'
import WorkReportListPage from '../features/staff/pages/WorkReportListPage'
import WorkReportWritePage from '../features/staff/pages/WorkReportWritePage'
import WorkReportDetailPage from '../features/staff/pages/WorkReportDetailPage'

const BreweryMapPage = lazy(() => import('../features/brewery/pages/BreweryMapPage'))

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/story" element={<BrandStoryPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login/kakao/callback" element={<KakaoCallbackPage />} />
      <Route path="/login/naver/callback" element={<NaverCallbackPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id/review" element={<WriteReviewPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/order/complete/:id" element={<OrderCompletePage />} />
      <Route path="/mypage/orders/:id" element={<OrderDetailPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route
        path="/breweries"
        element={
          <Suspense fallback={<p className="brewery-map-fallback">지도를 불러오는 중…</p>}>
            <BreweryMapPage />
          </Suspense>
        }
      />
      <Route path="/tours" element={<TourReservePage />} />
      <Route path="/breweries/:id" element={<BreweryDetailPage />} />
      <Route path="/classes" element={<ClassBookingPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/community/new" element={<CommunityWritePage />} />
      <Route path="/community/:id/edit" element={<CommunityEditPage />} />
      <Route path="/community/:id" element={<CommunityPostPage />} />
      <Route path="/mypage" element={<MypagePage />} />
      <Route path="/mypage/certificates" element={<MypageCertificatesPage />} />
      <Route path="/mypage/coupons" element={<MypageCouponsPage />} />
      <Route path="/mypage/reservations" element={<MypageReservationsPage />} />
      <Route path="/mypage/addresses" element={<MypageAddressesPage />} />
      <Route path="/mypage/payments" element={<MypagePaymentsPage />} />
      <Route path="/mypage/support" element={<MypageSupportPage />} />
      <Route path="/mypage/lounge/verify" element={<LoungeVerifyPage />} />
      <Route path="/mypage/admin/people" element={<AdminPeoplePage />} />
      <Route path="/mypage/admin/content/ir-leaders" element={<CmsIrLeadersPage />} />
      <Route path="/mypage/admin/content/ir-round" element={<CmsIrRoundPage />} />
      <Route path="/mypage/admin/content" element={<CmsListPage />} />
      <Route path="/mypage/admin/performance" element={<AdminPerformancePage />} />
      <Route path="/mypage/admin/support" element={<AdminSupportPage />} />
      <Route path="/mypage/staff/work-reports/new" element={<WorkReportWritePage />} />
      <Route path="/mypage/staff/work-reports/:id" element={<WorkReportDetailPage />} />
      <Route path="/mypage/staff/work-reports" element={<WorkReportListPage />} />
      <Route path="/mypage/lounge" element={<LoungeDashboardPage />} />
      <Route path="/mypage/lounge/products/new" element={<LoungeProductNewPage />} />
      <Route path="/mypage/lounge/products" element={<LoungeProductsPage />} />
      <Route path="/mypage/lounge/orders" element={<LoungeOrdersPage />} />
      <Route path="/mypage/lounge/settlements" element={<LoungeSettlementsPage />} />
      <Route path="/mypage/lounge/reports" element={<LoungeReportsPage />} />
      <Route path="/mypage/lounge/customers" element={<LoungeCustomersPage />} />
      <Route path="/mypage/lounge/subscriptions" element={<LoungeSubscriptionsPage />} />
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
      <Route path="/notices/:id/edit" element={<NoticeEditPage />} />
      <Route path="/notices/:id" element={<NoticeDetailPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/custom" element={<CustomLabelPage />} />
      <Route path="/gift" element={<GiftPage />} />
      <Route path="/events" element={<HolidayEventPage />} />
      <Route path="/events/daily" element={<DailyEventPage />} />
      <Route path="/events/:slug" element={<HolidayEventPage />} />
      <Route path="/deals" element={<TimeSalePage />} />
      <Route path="/subscribe" element={<SubscribePage />} />
      <Route path="/corporate" element={<CorporateGiftPage />} />
      <Route path="/holiday/gifts" element={<HolidayGiftSalePage />} />
      <Route path="/holiday/tours" element={<HolidayTourPage />} />
      <Route path="/limited" element={<LimitedEditionPage />} />
      <Route path="/ir" element={<IrPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
