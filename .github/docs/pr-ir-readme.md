> 🚀 Docs: `/ir` 투자 IR을 README에 적는다

## 📌 PR Summary
- 라우트 표, feature 표, 소스 트리, 로컬 URL, Changelog에 `/ir`를 적습니다.
- **이 PR은 `feat/ir-nav` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 폴더·기능이 늘면 같은 세션에서 README를 갱신하는 규칙입니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `README.md` — `/ir` · `features/ir` · Changelog

### 2. 세부 변경 사항
- [ ] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [ ] 스타일 / UI 수정
- [ ] 라우팅 수정

> 문서만 고쳤습니다.

---

## 🎯 Expected Impact
- README만 보고 `http://localhost:5173/ir`를 열 수 있습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [ ] 특정 페이지
- [ ] 특정 컴포넌트
- [ ] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `README.md`

---

## 🔥 Breaking Changes
- 없음

---

## 🧪 How to Test

### 기본 확인
- [ ] `npm install`
- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. README 라우트 표에 `/ir`가 있는지 확인
2. Changelog에 투자 IR 행이 있는지 확인

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
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- 스택을 아래부터 머지합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/campaign-readme` → `feat/ir-core` → `feat/ir-ui` → `feat/ir-nav` → **이 PR**
