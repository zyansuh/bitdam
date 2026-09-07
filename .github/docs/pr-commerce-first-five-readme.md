> 🚀 Docs: 첫 다섯 커머스 경로를 README에 적는다

## 📌 PR Summary
- PDP, 장바구니, 주문 완료/상세, 리뷰, 위시리스트 URL을 README에 넣습니다.
- **이 PR은 `feat/wishlist-sync` 위에 쌓입니다. 그 아래 다섯 feature PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

## 🔍 Background / Why
- 폴더·기능이 늘면 같은 세션에서 README를 갱신하는 규칙입니다.

## 🛠 Changes
- `README.md` 라우트·feature 표·Changelog·TODO PDP 완료

## 🎯 Expected Impact
- `/products/1`, `/cart`, `/wishlist`, `/order/complete/:id`를 README로 찾을 수 있습니다.

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test
1. README에 `/products/:id`와 `/cart`가 있는지 확인

## 📝 Additional Notes
- 머지 순서: `docs/admin-moderate-readme` → `feat/pdp` → `feat/cart-lounge` → `feat/order-status` → `feat/product-reviews` → `feat/wishlist-sync` → **이 PR**
