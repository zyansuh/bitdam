> 🚀 Feature: 라운지에서 카탈로그 SKU 판매 중지·재개

## 📌 PR Summary
- 셀러가 라운지 상품 목록에서 판매 중지하면 `/products` 피드에서 빠집니다.
- PDP와 장바구니는 중지 SKU 구매를 막습니다.
- **이 PR은 `feat/lounge-settlements` 위에 쌓입니다.**

## 🔍 Background / Why
- 품절·재고 차감은 있었지만 목록에서 빼는 플래그가 없었습니다.

## 🛠 Changes

### 1. 주요 변경 사항
- `catalogPauseStorage.ts` · `listCatalogInventory` / `listCatalogProducts`
- `useLoungeCatalogRows` · `LoungeProductList`
- `ProductDetailInfo` · `cartProvider`

### 2. 세부 변경 사항
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] providers / 상태관리 수정

---

## 🎯 Expected Impact
- 중지한 병은 검색·무한스크롤에 안 나오고, 직접 URL은 판매 중지 표시입니다.

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리

### 영향 받는 주요 영역
- `src/data/products.ts`
- `src/features/lounge/`
- `src/shared/providers/cartProvider.tsx`

---

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. 셀러로 라운지 상품 → 판매 중지 → `/products`에서 해당 병 사라짐
2. PDP 직접 진입 시 구매 버튼이 판매 중지로 바뀜
3. 판매 재개 후 목록에 다시 보임

### 확인 결과
- [x] 정상 동작 확인

## 📸 Screenshots / Videos
- 없음

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] Next Steps 정의 완료

## 🚀 Next Steps
- `chore/lint-ci`를 이 PR 위에 머지

## 📝 Additional Notes
- 머지 순서: lounge-settlements → **이 PR** → lint-ci → a11y → naver → docs
