> 🚀 Feature: 명절·특가가 같이 쓰는 남은 시간 공용 부품

## 📌 PR Summary
- `CountdownParts` · `splitDuration` · `useCountdown` · `CountdownBoxes`를 shared에 둡니다.
- 캠페인 페이지 공통 골드 버튼·카운트다운 박스 스타일을 `shop.css`로 넣습니다.
- 헤더 링크가 늘어날 수 있게 데스크톱 간격을 좁힙니다.
- **이 PR은 `chore/auto-branch-rule` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 추석 특별전과 타임 특가가 같은 TIME REMAINING UI를 씁니다.
- 훅과 컴포넌트를 feature 안에 복제하지 않으려고 공용으로 뺐습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/shared/types/countdown.ts` — 남은 시간 타입
- `src/shared/utils/splitDuration.ts` — ms → 일/시/분/초
- `src/shared/hooks/useCountdown.ts` — 1초 틱
- `src/shared/components/feedback/CountdownBoxes.tsx` — 골드 박스 UI
- `src/shared/styles/shop.css` — 버튼·카운트다운·이후 페이지 레이아웃
- `src/index.css` — shop.css import
- `src/shared/styles/navigation/navbar.css` — 링크 간격

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

> hook/component/style을 파일로 나눴습니다.

---

## 🎯 Expected Impact
- 이후 선물·추석·특가 PR이 카운트다운을 다시 구현하지 않습니다.
- 이 PR만 머지해도 사용자 화면은 거의 그대로입니다(스타일 시트만 추가).

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [ ] 특정 페이지
- [x] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/shared/hooks/useCountdown.ts`
- `src/shared/components/feedback/CountdownBoxes.tsx`
- `src/shared/styles/shop.css`

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
1. **모바일 (<600px)** — 기존 페이지 레이아웃 유지
2. **태블릿 (600~999px)** — 동일
3. **데스크톱 (>=1000px)** — 헤더 링크 간격이 조금 좁아짐
4. 다음 PR에서 카운트다운이 초 단위로 줄어드는지 확인

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
- 위 스택: `feat/gift-flow`

---

## 📝 Additional Notes
- 머지 순서: #43 → auto-branch-rule → **이 PR** → gift → holiday → deals → subscribe → corporate → readme
