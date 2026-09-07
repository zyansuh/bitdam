> 🚀 Feature: 명절 전용 양조장 투어 (`/holiday/tours`)

## 📌 PR Summary
- `/holiday/tours`는 한가위 미식 양조장 투어 히어로와 추석 단독 3개 패키지입니다.
- 각 카드에 잔여 석을 두고, 예약은 기존 `/tours`로 보냅니다.
- **이 PR은 `feat/daily-lucky-bag` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 명절 세트 할인과 별도로, 보름달 아래 양조장 밤 투어 랜딩이 필요했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/holidayTour/` — 타입·3개 투어·히어로·리스트·페이지
- `/holiday/tours` 라우트와 네비

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `/holiday/tours`에서 안동·한산·페어링 디너를 보고 `/tours`로 예약할 수 있습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/holidayTour/**`
- `src/routing/routes.tsx`
- `src/data/navLinks.ts`

---

## 🔥 Breaking Changes
- 없음. `/tours` · `/breweries`는 유지합니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 투어 카드 1열
2. **데스크톱 (>=1000px)** — 히어로 풀폭, 카드 3열
3. 예약하기 → `/tours`
4. 헤더·햄버거 「명절 투어」

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
- 위 스택: `feat/limited-edition`

---

## 📝 Additional Notes
- 머지 순서: #51 → share-url → holiday-gift → daily → **이 PR** → limited → readme
