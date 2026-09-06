> 🚀 Chore: PR을 잘게 나누는 스택을 기본값으로 고정

## 📌 PR Summary
- Cursor가 큰 PR 하나 대신 **관심사별 스택 PR**을 기본으로 열도록 규칙을 넣었습니다.
- `.cursor/rules/pr-split.mdc`를 always-apply로 추가했습니다.
- `project.mdc`와 `cursor-workflow-rules.md`의 “push 절대 금지”를, **사용자가 PR을 요청하면 스택을 푸시**하는 쪽으로 바꿨습니다.

---

## 🔍 Background / Why
- 기념주·스토리처럼 한 세션에 기능이 여럿이면 한 PR에 섞이기 쉬웠습니다.
- 사용자는 잘게 나눈 PR이 **설정상 기본값**이기를 원했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `pr-split.mdc` — PR 1개 = 관심사 1개, base는 바로 아래 head
- `project.mdc` · `cursor-workflow-rules.md` — 체크리스트와 push 문장 정리

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [ ] 스타일 / UI 수정
- [ ] 라우팅 수정

---

## 🎯 Expected Impact
- 이후 “커밋하고 PR”이면 기능마다 PR이 갈라집니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [ ] 특정 페이지
- [ ] 특정 컴포넌트
- [ ] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `.cursor/rules/pr-split.mdc`
- `.cursor/rules/project.mdc`
- `.cursor/docs/cursor-workflow-rules.md`

---

## 🔥 Breaking Changes
- 없음. 앱 코드 변경 없음.

---

## 🧪 How to Test

### 기본 확인
- [x] 규칙 파일만 변경
- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 해당 없음
2. **태블릿 (600~999px)** — 해당 없음
3. **데스크톱 (>=1000px)** — 해당 없음
4. 다음 PR들이 이 브랜치 위에 쌓이는지 확인

### 확인 결과
- [x] 정상 동작 확인 (문서만)
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
- 이어서 **기념주 PR** → **스토리 PR** 순으로 머지합니다.

---

## 📝 Additional Notes
- **base:** `style/unify-typography` (#35)
- **head:** `chore/default-split-prs`
