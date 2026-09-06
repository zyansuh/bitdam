> 🚀 Chore: 관심사가 바뀌면 브랜치를 자동으로 만든다

## 📌 PR Summary
- 한 채팅에 기능이 여러 개면 브랜치도 PR도 여러 개라는 기존 규칙을 유지합니다.
- **브랜치는 사용자가 시키기 전에 자동으로** `feat|fix|chore|docs/{kebab}`로 만듭니다.
- 스택의 바로 아래 head에서 분기하고, 한 브랜치에 선물+추석+구독을 쌓지 않습니다.
- **이 PR은 `feat/chat-policy-split`(#43) 위에 쌓입니다. #43을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 에이전트가 현재 브랜치에 여러 기능을 올려 두어 리뷰와 머지가 커졌습니다.
- 사용자는 브랜치 생성을 기본값으로, 게다가 자동으로 하길 요청했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `.cursor/rules/pr-split.mdc` — 브랜치 자동 생성 트리거·이름·베이스
- `.cursor/rules/project.mdc` — 최우선 원칙·체크리스트
- `.cursor/docs/cursor-workflow-rules.md` — 워크플로 가이드 동기화

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [ ] 스타일 / UI 수정
- [ ] 라우팅 수정

> 코드가 아니라 Cursor 규칙만 바꿉니다.

---

## 🎯 Expected Impact
- 다음 작업부터 관심사마다 브랜치가 먼저 생깁니다.
- 기존 Granular 커밋·스택 PR 규칙은 그대로입니다.

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
- 없음. 앱 런타임에 영향 없습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 해당 없음
2. **태블릿 (600~999px)** — 해당 없음
3. **데스크톱 (>=1000px)** — 해당 없음
4. 규칙 파일에 “자동으로 만든다”가 보이는지 확인

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
- 위 스택: `feat/countdown-shared` (공용 남은 시간)

---

## 📝 Additional Notes
- 머지 순서: #43 → 이 PR → countdown → gift → holiday → deals → subscribe → corporate → readme
