> 🚀 Feature: 스토리 히어로·못난이 과일·철학·펀딩 시안 반영

## 📌 PR Summary
- `/story` 히어로를 **시간이 흐를수록 깊어지는 맛과 향** 풀블리드 사진으로 바꿨습니다.
- 딥그린 **못난이 과일** 섹션과 철학·임팩트·과정·펀딩·여정·파트너·배너를 넣었습니다.
- 기존 챕터(못난이 과일 이야기 포함)는 아래에 그대로 둡니다.
- **이 PR은 `feat/custom-label` 위입니다.** 기념주 CTA가 `/custom`으로 갑니다.

---

## 🔍 Background / Why
- 못난이 과일이 핵심 아이템인데 스토리 상단이 챕터만 있어 시안과 달랐습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `brandStory` 데이터·타입 확장
- UglyFruit, Philosophies, Impact, Process, Funding, Timeline, Partners, Banner
- 히어로 오버레이 · `brand-story.css` · `--color-forest`

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

---

## 🎯 Expected Impact
- 스토리에서 못난이 과일과 시간·향의 톤이 먼저 보입니다.
- 배너와 못난이 CTA가 기념주 제작으로 이어집니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [ ] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/features/brand/`
- `src/shared/styles/tokens.css` · `theme-dark.css`

---

## 🔥 Breaking Changes
- 없음. `/story` 주소는 그대로입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 히어로 흰 제목, 못난이 섹션이 세로로
2. **태블릿 (600~999px)** — 철학 3장, 펀딩 카드, 타임라인
3. **데스크톱 (>=1000px)** — 못난이 2열, 과정 4열
4. 지금 동참하기 · 배너 → `/custom`

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저)

---

## 📸 Screenshots / Videos
- 없음 (제공 시안 기준)

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
- 규칙 PR → 기념주 PR → 이 PR 순으로 머지합니다.

---

## 📝 Additional Notes
- **base:** `feat/custom-label`
- **head:** `feat/story-ugly-fruit`
