> 🚀 Feature: 상시 빚담박스 정기 구독

## 📌 PR Summary
- `/subscribe`는 월간 빚담박스 히어로, Light/Signature/Noblesse, 이용 가이드, 역대 박스, 후기·FAQ입니다.
- 헤더 캠페인 줄·햄버거·푸터에 「정기 구독」을 넣습니다.
- **이 PR은 `feat/time-sale` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 구독은 명절과 달리 항상 열려 있어야 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/subscribe/` — 타입·플랜 데이터·FAQ 훅·히어로·플랜·가이드·아카이브·FAQ·페이지
- `/subscribe` 라우트와 네비 연결

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
- `/subscribe`에서 플랜을 고르고 FAQ를 열 수 있습니다.
- 실제 정기결제 연동은 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/subscribe/**`
- `src/data/campaignNav.ts` · `siteMenu.ts` · `footerLinks.ts`

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
1. **모바일 (<600px)** — 플랜·가이드가 1열
2. **태블릿 (600~999px)** — 카드가 넓어짐
3. **데스크톱 (>=1000px)** — 히어로 2단, 플랜 3열
4. FAQ를 열어 한 칸만 열리는지 확인
5. 「지금 구독 시작하기」가 `#plans`로 이동하는지 확인

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
- 위 스택: `feat/corporate`

---

## 📝 Additional Notes
- 머지 순서: #43 → auto-branch → countdown → gift → holiday → deals → **이 PR** → corporate → readme
