> 🚀 Feature: 상시 타임 특가 (카운트다운 · 할인 필터)

## 📌 PR Summary
- `/deals`는 당일 마감 카운트다운, 마감 임박 히어로, 주종·할인율 필터, 소진 바가 있는 그리드입니다.
- 할인 대상은 `/products` 카탈로그 16종입니다. 마켓과 별도 페이지입니다.
- 헤더 캠페인 줄·햄버거·푸터에 「타임 특가」를 넣습니다.
- **이 PR은 `feat/holiday-event` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 타임 특가는 명절과 달리 항상 열려 있어야 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/deals/` — 타입·데이터·필터 훅·배너·히어로·필터·그리드·페이지
- `/deals` 라우트와 네비 연결

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
- `/deals`에서 오늘 자정까지 남은 시간과 할인 필터가 동작합니다.
- 구매 버튼은 아직 결제 연동이 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/deals/**`
- `src/data/campaignNav.ts` · `siteMenu.ts` · `footerLinks.ts`

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
1. **모바일 (<600px)** — 필터가 그리드 위로 갑니다
2. **태블릿 (600~999px)** — 카드 2열
3. **데스크톱 (>=1000px)** — 좌측 필터 + 3열 그리드
4. 증류 소주 · 30%+ 칩을 눌러 목록이 줄어드는지 확인
5. 헤더·햄버거 「타임 특가」

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
- 위 스택: `feat/subscribe`

---

## 📝 Additional Notes
- 머지 순서: #43 → auto-branch → countdown → gift → holiday → **이 PR** → subscribe → corporate → readme
