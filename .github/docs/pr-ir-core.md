> 🚀 Feature: 투자 IR 스냅샷 타입·집계·문의 훅

## 📌 PR Summary
- 투자 IR 페이지가 쓸 KPI·믹스·TAM 타입과, 사이트 카탈로그에서 숫자를 뽑는 계산을 넣습니다.
- 프리 A 요강·리더십·자문단 카피는 `irPeople`에 둡니다. 카드 컴포넌트는 다음 PR입니다.
- 피치덱 TXT 다운로드와 문의 폼 검증(`useIrInquiry`)만 이 PR에 있습니다.
- **이 PR은 `docs/campaign-readme` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- IR 숫자는 하드코딩하면 카탈로그와 바로 어긋납니다.
- hook/utils/data를 UI와 한 파일에 섞지 않기 위해 코어를 먼저 올립니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/ir/types/ir.ts` — `IrKpi` · `IrMixRow` · `IrMarket` · `IrSnapshot`
- `src/features/ir/data/irPeople.ts` — `IR_ROUND` · `IR_LEADERS` · `IR_ADVISORS` · 캔버스 카피
- `src/features/ir/utils/computeIrMetrics.ts` — SKU·양조장·클래스·특가·한정판·구독 ARPU 집계
- `src/features/ir/utils/downloadPitchDeck.ts` — 스냅샷을 TXT blob으로 저장
- `src/features/ir/hooks/useIrInquiry.ts` — 기관명·이메일 필수

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [ ] 스타일 / UI 수정
- [ ] 라우팅 수정

> types / data / utils / hooks만 추가했습니다. 페이지는 다음 PR입니다.

---

## 🎯 Expected Impact
- 이후 IR UI가 같은 스냅샷을 재사용할 수 있습니다.
- `/ir` 라우트는 아직 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [ ] 특정 페이지
- [x] 특정 컴포넌트
- [ ] 공통 UI
- [x] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/features/ir/types/ir.ts`
- `src/features/ir/data/irPeople.ts`
- `src/features/ir/utils/computeIrMetrics.ts`
- `src/features/ir/utils/downloadPitchDeck.ts`
- `src/features/ir/hooks/useIrInquiry.ts`

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
   - 이 PR만으로는 화면이 없습니다. 타입·유틸 커밋만 확인합니다.
2. **태블릿 (600~999px)**
   - 동일
3. **데스크톱 (>=1000px)**
   - `computeIrSnapshot`이 카탈로그 길이와 맞춰 집계하는지 코드 리뷰
4. `useIrInquiry`는 `@` 없는 이메일이면 `sent`가 false인지 확인

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
- `feat/ir-ui`에서 섹션 컴포넌트와 `IrPage`를 붙입니다.
- README는 스택 맨 위 `docs/ir-readme`에서 갱신합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/campaign-readme` → **이 PR** → `feat/ir-ui` → `feat/ir-nav` → `docs/ir-readme`
