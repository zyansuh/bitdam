> 🚀 Feature: 양조장·클래스 예약을 마이페이지 예약 내역으로 모은다

## 📌 PR Summary
- `SiteBooking`을 `bitdam.bookings`에 저장합니다.
- 양조장 투어 카드와 클래스 예약이 로그인 사용자의 예약 내역으로 들어갑니다.
- `/mypage/reservations`와 마이페이지 사이드바 「예약 내역」을 추가합니다.
- **이 PR은 `feat/catalog-search` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 투어·클래스를 잡아도 마이페이지에서 다시 볼 수 없었습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `bookingStorage` · `useMypageBookings`
- `MypageReservationsPage` · 라우트 · 사이드바
- 투어·클래스 `onBook`이 세션을 넘김

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] hooks 분리/추가
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `/breweries/:id` 또는 `/classes`에서 예약한 뒤 `/mypage/reservations`에 줄이 생깁니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 라우팅
- [x] 상태관리

### 영향 받는 주요 영역
- `src/shared/utils/bookingStorage.ts`
- `src/features/account/pages/MypageReservationsPage.tsx`
- `src/features/brewery/`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음. 비로그인 예약은 기존처럼 저장하지 않습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)**
   - 마이페이지 사이드바 예약 내역
2. **태블릿 (600~999px)**
   - 클래스 카드 예약
3. **데스크톱 (>=1000px)**
   - 양조장 상세 투어 제출 후 예약 목록
4. 다른 계정으로 로그인하면 목록이 비는지

### 확인 결과
- [x] 빌드 확인

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] 커밋 메시지가 Conventional Commits를 따른다
- [ ] README는 `docs/second-five-readme`에서 갱신
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- `feat/community-public-feed`

---

## 📝 Additional Notes
- 머지 순서: `feat/catalog-search` → **이 PR** → `feat/community-public-feed` → …
