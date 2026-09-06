> 🚀 Feature: 전통주 선물 3단계 (상품 → 메시지 → 결제)

## 📌 PR Summary
- `/gift`에서 상품 선택 → 메시지·보자기 → 결제 순으로만 진행합니다.
- 상품을 고르기 전에 메시지 단계로, 메시지를 쓰기 전에 결제로 갈 수 없습니다.
- 헤더·햄버거·푸터에 「선물하기」를 넣습니다. `/products` 마켓은 그대로입니다.
- **이 PR은 `feat/countdown-shared` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 기념주 맞춤과 별개로, 카탈로그 병을 골라 카드와 보자기로 보내는 흐름이 필요했습니다.
- 시안은 3단 스텝 바와 우측 미리보기 카드입니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/gift/` — types, options, quote, `useGiftFlow`, step UI, `GiftPage`
- `src/routing/routes.tsx` — `/gift`
- `src/data/navLinks.ts` · `siteMenu.ts` · `footerLinks.ts` — 선물하기 링크

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

> hook/component/page를 파일로 나눴고 결제는 로컬 접수만 합니다.

---

## 🎯 Expected Impact
- `/gift`에서 마켓 상품 6종을 골라 카드를 쓰고 결제 접수가 됩니다.
- 실제 PG 연동은 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/gift/**`
- `src/routing/routes.tsx`
- `src/data/navLinks.ts` · `siteMenu.ts` · `footerLinks.ts`

---

## 🔥 Breaking Changes
- 없음. 마켓 `/products`는 유지합니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — `/gift` 스텝 바가 줄바꿈되고 미리보기가 아래로 갑니다
2. **태블릿 (600~999px)** — 상품 카드 2열
3. **데스크톱 (>=1000px)** — 폼 + 우측 미리보기
4. 상품 없이 스텝 2 클릭이 막히는지, 메시지 삭제 후 결제가 막히는지 확인
5. 햄버거 「선물 · 특가 → 선물하기」

### 확인 결과
- [x] 정상 동작 확인
- [ ] 추가 확인 필요

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [ ] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- 위 스택: `feat/holiday-event` (추석·설 특별전)

---

## 📝 Additional Notes
- 머지 순서: #43 → auto-branch → countdown → **이 PR** → holiday → deals → subscribe → corporate → readme
