> 🚀 Feature: 일상 복주머니 이벤트 (7일 쿠폰 · 공유 스탬프)

## 📌 PR Summary
- `/events/daily`는 매일 복주머니, 7칸 스탬프, 옆 프리미엄 기프트 광고, 유의사항입니다.
- 쿠폰은 **발급일부터 7일**만 유효하고, **일부 한정판에는 적용 불가**, **비정상 응모는 추첨 영구 제외**를 명시합니다.
- **공유하기**는 현재 URL을 공유하고, 성공 시 **당일 1회 스탬프를 추가**합니다. 출석 개봉도 하루 1회입니다.
- **이 PR은 `feat/holiday-gift-sale` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 명절 할인전과 별도로 매일 열리는 출석 이벤트가 필요했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/dailyEvent/` — 타입·규칙·storage·훅·패널·광고·유의사항·페이지
- `/events/daily`를 `/events/:slug`보다 먼저 등록

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- 같은 날 두 번 열거나 두 번 공유해도 스탬프가 늘지 않습니다.
- 공유를 취소하면 스탬프를 주지 않습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/dailyEvent/**`
- `src/shared/hooks/useShareUrl.ts`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 광고가 복주머니 아래
2. **데스크톱 (>=1000px)** — 좌측 이벤트 + 우측 광고
3. 복주머니 열기 → 스탬프 1, 쿠폰 7일 안내
4. 같은 날 다시 열기 버튼 비활성
5. 공유하기 → URL 공유/복사 + 스탬프 +1, 같은 날 재공유는 스탬프 없음
6. `/events/daily`가 추석 응모로 안 열리는지

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
- 위 스택: `feat/holiday-tours`

---

## 📝 Additional Notes
- 머지 순서: #51 → share-url → holiday-gift → **이 PR** → tours → limited → readme
