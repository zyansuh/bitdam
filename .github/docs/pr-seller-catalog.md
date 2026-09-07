> 🚀 Feature: 셀러 라운지 상품을 공개 카탈로그에 올린다

## 📌 PR Summary
- 라운지 4단계 등록이 `bitdam.catalog.seller`에 Product를 저장합니다.
- `/products` · PDP · 선물 · 채팅 카탈로그가 `listCatalogProducts`로 시드+셀러를 봅니다.
- **이 PR은 `feat/staff-performance-stats` 위에 쌓입니다.**

## 🔍 Background / Why
- 「등록 완료 (로컬)」은 플래그만 켜고 쇼핑 목록에 병이 없었습니다.

## 🛠 Changes
- `sellerCatalogStorage` · `draftToCatalogProduct` · `useProductRegister.publish`

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test
1. 셀러/ADMIN 라운지에서 상품 등록 → `/products`와 PDP

## 📝 Additional Notes
- 머지 순서: `feat/staff-performance-stats` → **이 PR** → `feat/catalog-stock`
