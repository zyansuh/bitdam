> 🚀 Feature: 카탈로그 검색·필터를 상품 데이터에 더 정확히 맞춘다

## 📌 PR Summary
- 검색은 이름·양조장·지역·태그라인·스토리·맛·어워드·도수·용량·가격을 NFC 정규화 후 공백 토큰 AND로 봅니다.
- 숫자 토큰은 도수·용량·가격과 같으면 매칭합니다.
- 맛 태그는 AND, 인기순은 `rating * log10(1+reviewCount)`입니다.
- URL `q`를 유지하고 placeholder에 검색 힌트를 넣습니다.
- **이 PR은 `feat/coupon-checkout` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 이름만 치면 양조장·맛·도수로 병을 못 찾았습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `productMatchesQuery`
- 맛 AND · 인기순
- `useProductFilters` URL `q`
- 검색 placeholder

### 2. 세부 변경 사항
- [x] hooks 분리/추가
- [x] 컴포넌트 분리/추가

---

## 🎯 Expected Impact
- `/products?q=막걸리` 또는 양조장·지역·도수 숫자로 목록이 줄어듭니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지

### 영향 받는 주요 영역
- `src/features/catalog/utils/productMatchesQuery.ts`
- `src/features/catalog/utils/filterProducts.ts`
- `src/features/catalog/hooks/useProductFilters.ts`

---

## 🔥 Breaking Changes
- 없음

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)**
   - 검색바 placeholder
2. **태블릿 (600~999px)**
   - 맛 태그 두 개 선택 시 AND
3. **데스크톱 (>=1000px)**
   - `q`가 주소창에 남는지
4. 숫자만 입력해 도수/용량 매칭

### 확인 결과
- [x] 빌드 확인

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits를 따른다
- [ ] README는 `docs/second-five-readme`에서 갱신
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- `feat/mypage-reservations`

---

## 📝 Additional Notes
- 머지 순서: `feat/coupon-checkout` → **이 PR** → `feat/mypage-reservations` → …
