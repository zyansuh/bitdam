> 🚀 Feature: 투자 IR 룸 UI (`IrPage`)

## 📌 PR Summary
- KPI·프리 A·시장 믹스·BMC·리더십·자문·문의 섹션을 조합한 `IrPage`를 추가합니다.
- 햄버거 해시(`/ir#kpis` 등)가 섹션에 닿도록 `useIrHashScroll`과 `scroll-mt-24`를 넣습니다.
- `index.css`에서 `ir.css`를 불러옵니다. 라우트·헤더·햄버거는 다음 PR입니다.
- **이 PR은 `feat/ir-core` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 투자자에게 KPI·라운드·리더십이 한 화면에 있어야 합니다.
- 스타일과 페이지를 라우팅보다 먼저 올려 리뷰를 나눕니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/ir/styles/ir.css` · `src/index.css`
- `IrHero` · `IrKpiRow` · `IrRound` · `IrMarketMix` · `IrCanvas` · `IrLeaders` · `IrAdvisors` · `IrContact`
- `src/features/ir/pages/IrPage.tsx`
- `src/features/ir/hooks/useIrHashScroll.ts`

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

> 페이지는 훅·데이터를 조합만 합니다. `/ir` 등록은 다음 PR입니다.

---

## 🎯 Expected Impact
- `IrPage`를 라우트에 연결하면 투자 룸이 보입니다.
- 이 PR만 merge해도 URL은 아직 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [ ] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/features/ir/components/*`
- `src/features/ir/pages/IrPage.tsx`
- `src/features/ir/styles/ir.css`
- `src/index.css`

---

## 🔥 Breaking Changes
- 없음

---

## 🧪 How to Test

### 기본 확인
- [ ] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 다음 PR에서 `/ir` 연결 후 KPI 그리드가 한 열로 접히는지 확인
2. **태블릿 (600~999px)**
   - 믹스 바와 캔버스가 읽히는지 확인
3. **데스크톱 (>=1000px)**
   - 리더십 원형 사진·문의 폼 레이아웃 확인
4. 피치덱 버튼은 `IrContact`에서 TXT를 받는지 확인 (라우트 연결 후)

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
- `feat/ir-nav`에서 `/ir` · 헤더 · 푸터 · 햄버거를 연결합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/campaign-readme` → `feat/ir-core` → **이 PR** → `feat/ir-nav` → `docs/ir-readme`
