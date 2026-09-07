> 🚀 Feature: 카탈로그 재고와 품절을 결제에 반영한다

## 📌 PR Summary
- 시드 재고 + `bitdam.catalog.stock` 오버레이. 월백(id 15)은 데모 품절입니다.
- 카드/PDP 품절, 장바구니 수량 캡, 결제 시 재고 차감.
- **이 PR은 `feat/seller-catalog` 위에 쌓입니다.**

## 🔍 Background / Why
- 재고 숫자와 품절이 UI 카피만 있고 결제를 막지 않았습니다.

## 🛠 Changes
- `stockStorage` · `consumeCatalogStock` · `isSoldOut` · 카트/PDP

## 🔥 Breaking Changes
- 월백 막걸리는 기본 품절입니다. 오버레이를 지우면 다시 0입니다.

## 🧪 How to Test
1. `/products/15` 품절 · 다른 병 결제 후 재고 배지 감소

## 📝 Additional Notes
- 머지 순서: `feat/seller-catalog` → **이 PR** → `feat/support-desk`
