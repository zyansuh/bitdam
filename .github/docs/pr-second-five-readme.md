> 🚀 Docs: 두 번째 다섯 경로를 README에 적는다

## 📌 PR Summary
- 쿠폰 결제, 카탈로그 검색, 예약 내역, 공개 피드, 공지/커뮤니티 IndexedDB를 README 라우트·구조·Changelog에 넣습니다.
- **이 PR은 `feat/content-idb-api` 위에 쌓입니다. 그 아래 다섯 feature PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

## 🔍 Background / Why
- 폴더·기능이 늘면 같은 세션에서 README를 갱신하는 규칙입니다.

## 🛠 Changes
- `README.md` 라우트·커뮤니티·검색·장바구니·api 폴더·Changelog
- `.github/docs/pr-second-five-readme.md`

## 🎯 Expected Impact
- `/mypage/reservations`, 공개 피드, IndexedDB 저장을 README로 찾을 수 있습니다.

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test
1. README에 `/mypage/reservations`와 IndexedDB가 있는지 확인

## 📝 Additional Notes
- 머지 순서: `docs/commerce-first-five-readme` → `feat/coupon-checkout` → `feat/catalog-search` → `feat/mypage-reservations` → `feat/community-public-feed` → `feat/content-idb-api` → **이 PR**
