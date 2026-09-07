> 🚀 Feature: `/ir` 라우트 · 헤더 · 햄버거 투자 IR 가지

## 📌 PR Summary
- `/ir`에 `IrPage`를 연결합니다.
- 캠페인 헤더에 `IR`, 푸터 서비스에 `투자 IR`을 넣습니다.
- 햄버거에 **투자 IR** 전용 가지를 둡니다. IR 홈·핵심 지표·프리 A·시장·BMC·리더십·자문·자료·문의 해시로 바로 갑니다.
- **이 PR은 `feat/ir-ui` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 이야기 하위의 한 줄만으로는 햄버거에서 IR을 찾기 어렵습니다.
- 투자 룸은 선물·마켓과 다른 관심사라 독립 가지가 필요합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/routing/routes.tsx` — `/ir`
- `src/data/navLinks.ts` — `IR`
- `src/data/footerLinks.ts` — `투자 IR`
- `src/data/siteMenu.ts` — `id: ir` 브랜치 (이야기 다음, 고객센터 앞)

### 2. 세부 변경 사항
- [ ] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [ ] 스타일 / UI 수정
- [x] 라우팅 수정

> 네비 데이터만 이 PR에 있습니다. README는 다음 PR입니다.

---

## 🎯 Expected Impact
- 햄버거에서 투자 IR을 펼치면 섹션 해시로 이동합니다.
- 헤더 `IR`과 푸터에서도 `/ir`에 갈 수 있습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/routing/routes.tsx`
- `src/data/navLinks.ts`
- `src/data/footerLinks.ts`
- `src/data/siteMenu.ts`

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
   - 햄버거 → 투자 IR → IR 홈. 핵심 지표·IR 자료·문의 탭이 해당 섹션으로 스크롤되는지 확인
2. **태블릿 (600~999px)**
   - 동일. 헤더에 IR이 보이면 탭
3. **데스크톱 (>=1000px)**
   - 헤더 `IR` → `/ir`. 푸터 `투자 IR` 확인
4. `/ir#contact`로 직접 열면 문의 블록이 헤더 아래에 보이는지 확인

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
- `docs/ir-readme`에서 README와 이 스택 안내를 올립니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/campaign-readme` → `feat/ir-core` → `feat/ir-ui` → **이 PR** → `docs/ir-readme`
