> 🚀 Feature: 결제와 마이페이지에서 쿠폰을 실제로 차감한다

## 📌 PR Summary
- 로그인 사용자는 `bitdam.coupons.wallet`에 환영·투어·세트 쿠폰을 받습니다.
- 장바구니에서 쿠폰을 고르면 할인·무료배송이 적용되고, 조건이 안 되면 결제가 막힙니다.
- 결제 시 쿠폰이 사용 처리되고 `ShopOrder`에 코드·할인액이 남습니다.
- 마이페이지 쿠폰 목록·통계 타일, 출석 복주머니(`LUCKY`)가 같은 지갑을 씁니다.
- **이 PR은 `docs/commerce-first-five-readme` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 쿠폰 페이지가 장식만이면 결제 금액과 마이페이지 혜택이 어긋납니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `WalletCoupon` · `couponEffect` · `couponStorage` · `useCouponWallet`
- `CartCoupon` 셀렉트 · 체크아웃 차감
- 마이페이지 쿠폰 목록·미사용 카운트
- 복주머니 지급 · 영수증 쿠폰 표기

### 2. 세부 변경 사항
- [x] hooks 분리/추가
- [x] 컴포넌트 분리/추가
- [x] 스타일 / UI 수정

---

## 🎯 Expected Impact
- `/cart`에서 쿠폰 선택 후 결제하면 `/mypage/coupons`에 사용 완료로 보입니다.
- 데모 계정 `admin@bitdam.kr` / `bitdam1234`로 확인할 수 있습니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리

### 영향 받는 주요 영역
- `src/shared/types/coupon.ts`
- `src/shared/utils/couponStorage.ts`
- `src/shared/utils/couponEffect.ts`
- `src/features/cart/`
- `src/features/account/pages/MypageCouponsPage.tsx`

---

## 🔥 Breaking Changes
- 없음. 서버 쿠폰 API는 없습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)**
   - 장바구니 쿠폰 셀렉트가 요약 위에 보이는지
2. **태블릿 (600~999px)**
   - 마이페이지 쿠폰 목록
3. **데스크톱 (>=1000px)**
   - 결제 후 주문 영수증에 쿠폰 코드
4. 최소금액 미달 쿠폰은 결제 버튼이 막히는지

### 확인 결과
- [x] 빌드 확인. 브라우저 결제 플로우는 로컬에서 한 번 더 확인하세요.

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits를 따른다
- [ ] 이번 변경에 맞춰 README를 갱신했다 (`docs/second-five-readme`에서 일괄)
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- `feat/catalog-search`

---

## 📝 Additional Notes
- 머지 순서: `docs/commerce-first-five-readme` → **이 PR** → `feat/catalog-search` → `feat/mypage-reservations` → `feat/community-public-feed` → `feat/content-idb-api` → `docs/second-five-readme`
