> 🚀 Feature: 기념주 라벨 4단계 맞춤과 실시간 견적

## 📌 PR Summary
- `/custom`에서 용도 → 템플릿·문구 → 주종·도수·자수 색 → 각인·예약 순으로 진행합니다.
- 병 미리보기와 **최종 견적**이 옵션마다 다시 계산됩니다.
- 헤더 **기념주**, 금색 **기념주 제작하기**, 햄버거·푸터에 넣었습니다.
- **이 PR은 `chore/default-split-prs` 위입니다.** 그 PR을 먼저 머지하세요.

---

## 🔍 Background / Why
- 기념주가 핵심인데 제작 페이지와 헤더 진입점이 없었습니다.

---

## � 기념주가 핵심인데 제작 페이지와 헤더 진입점이 없었습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/custom/` — types, data, quote util, hook, 단계 UI, 미리보기, 견적, 페이지
- `/custom` 라우트 · `custom.css`
- `navLinks` · `siteMenu` · `footerLinks` · `NavbarActions` CTA

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- 헤더에서 기념주를 만들고 견적을 바로 볼 수 있습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/custom/`
- `src/data/navLinks.ts` · `siteMenu.ts` · `footerLinks.ts`
- `src/shared/components/navigation/NavbarActions.tsx`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음. 결제 연동은 로컬 예약 확인만 있습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — `/custom` 단계·미리보기·견적이 세로로 쌓이는지
2. **태블릿 (600~999px)** — 카테고리 칩, 템플릿, 테두리 색 변경 시 견적
3. **데스크톱 (>=1000px)** — 헤더 기념주 · CTA · 3열 레이아웃
4. 4단계까지 다음 → 이름 새기기 → 예약 문구

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저)

---

## 📸 Screenshots / Videos
- 없음 (시안 3열 맞춤)

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
- 규칙 PR 머지 후 이 PR. 이어서 스토리(못난이 과일) PR.

---

## 📝 Additional Notes
- **base:** `chore/default-split-prs`
- **head:** `feat/custom-label`
