> 🚀 Feature: 명절 특별전 (TIME REMAINING · 응모 인원)

## 📌 PR Summary
- `/events/chuseok`는 추석 한정 히어로, 참여 방법, TIME REMAINING, 응모 인원, 소원 폼, 경품, 당첨자 표입니다.
- `/events/seollal`은 다음 명절 데이터입니다. `holidayEvents.ts`의 `active`만 바꾸면 헤더 라벨이 바뀝니다.
- 헤더에는 활성 명절만, 햄버거에는 추석·설 모두 넣습니다.
- **이 PR은 `feat/gift-flow` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 명절마다 선물세트와 응모 이벤트를 열고, 남은 시간과 참여 인원을 보여 줘야 합니다.

---

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/event/` — 타입·데이터·응모 훅·히어로·참여·응모 카드·경품·당첨자·페이지
- `src/data/campaignNav.ts` — 활성 명절 헤더 항목
- 라우트 `/events`, `/events/:slug`

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
- 추석 페이지에서 카운트다운과 “8,431명 응모”가 보입니다.
- 응모는 로컬 접수입니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/event/**`
- `src/data/campaignNav.ts` · `navLinks.ts` · `siteMenu.ts`

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
1. **모바일 (<600px)** — 응모 카드가 참여 방법 아래로 갑니다
2. **태블릿 (600~999px)** — 동일
3. **데스크톱 (>=1000px)** — 좌측 가이드 + 우측 TIME REMAINING
4. `/events`가 활성 추석으로 열리는지, `/events/seollal`이 설 카피인지 확인
5. 이름·주문번호·소원 없이 응모가 막히는지 확인

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
- 위 스택: `feat/time-sale`

---

## 📝 Additional Notes
- 머지 순서: #43 → auto-branch → countdown → gift → **이 PR** → deals → subscribe → corporate → readme
