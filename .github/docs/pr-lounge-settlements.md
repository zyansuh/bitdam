> 🚀 Feature: 라운지 정산을 ShopOrder에서 집계한다

## 📌 PR Summary
- `/mypage/lounge/settlements`가 `LOUNGE_SETTLEMENTS` 목업 대신 `bitdam.shop.orders` 라인으로 수수료·정산예정액을 계산합니다.
- 수수료율은 11%입니다. 배송 완료는 정산완료, 그 외 결제 건은 정산대기입니다.
- **이 PR은 `docs/third-five-readme` 위에 쌓입니다.**

## 🔍 Background / Why
- 성과 보드는 실주문을 쓰는데 정산 화면만 목업이었습니다.

## 🛠 Changes

### 1. 주요 변경 사항
- `settlementFee.ts` · `shopOrdersToSettlements.ts` · `barsFromShopOrders.ts`
- `LoungeSettlementsPage`

### 2. 세부 변경 사항
- [x] hooks 분리/추가
- [x] 스타일 / UI 수정

---

## 🎯 Expected Impact
- 데모 결제 후 라운지 정산에 같은 주문이 보입니다.

## ⚠️ Impact Scope
- [x] 특정 페이지

### 영향 받는 주요 영역
- `src/features/lounge/`

---

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. `admin@bitdam.kr` / `bitdam1234`로 로그인
2. 카탈로그에서 결제 후 `/mypage/lounge/settlements` KPI·표 확인
3. 주문이 없으면 빈 안내가 보이는지 확인

### 확인 결과
- [x] 정상 동작 확인

## 📸 Screenshots / Videos
- 없음

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] Next Steps 정의 완료

## 🚀 Next Steps
- `feat/seller-pause`를 이 PR 위에 머지

## 📝 Additional Notes
- 머지 순서: `docs/third-five-readme` → **이 PR** → seller-pause → lint-ci → a11y → naver → docs/followup-readme
