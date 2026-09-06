> 🚀 Feature: 페이지 URL 공유 유틸과 캠페인 레이아웃 CSS

## 📌 PR Summary
- `shareCurrentUrl`은 지원되면 시스템 공유 시트를 열고, 아니면 주소를 복사합니다.
- `useShareUrl`이 성공 시에만 콜백을 호출합니다. 복주머니 스탬프와 한정판 소문내기가 이걸 씁니다.
- `campaign-pages.css`를 미리 넣어 다음 스택 페이지가 스타일 없이 열리지 않게 합니다.
- **이 PR은 `docs/shop-readme`(#51) 위에 쌓입니다. #51을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 일상 이벤트와 한정판 BM이 같은 URL 공유를 필요로 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/shared/utils/shareUrl.ts`
- `src/shared/hooks/useShareUrl.ts`
- `src/shared/styles/campaign-pages.css`
- `src/index.css`

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

---

## 🎯 Expected Impact
- 이 PR만 머지해도 화면은 거의 그대로입니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [ ] 특정 페이지
- [x] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/shared/utils/shareUrl.ts`
- `src/shared/hooks/useShareUrl.ts`
- `src/shared/styles/campaign-pages.css`

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
1. 기존 페이지 레이아웃이 그대로인지 확인
2. 다음 PR에서 공유 버튼이 주소를 내보내는지 확인

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
- 위 스택: `feat/holiday-gift-sale`

---

## 📝 Additional Notes
- 머지 순서: #51 → **이 PR** → holiday-gift → daily → holiday-tours → limited → readme
