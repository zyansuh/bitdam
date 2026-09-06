> 🚀 Feature: 상시 단체·기업 선물과 헤더 캠페인 줄

## 📌 PR Summary
- `/corporate`는 단체 히어로, 테마 세트, 수량 할인 표, 비즈니스 견적 폼입니다.
- 헤더 캠페인 줄에 「단체선물」을 넣고, 데스크톱 헤더는 전통주·선물·명절·특가·구독·단체·기념주만 남깁니다. 클래스·스토리·커뮤니티·고객센터는 햄버거에 있습니다.
- **이 PR은 `feat/subscribe` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 기업·단체 선물은 항상 열려 있어야 하고, 헤더에 캠페인 네 칸을 넣으면 기존 링크가 넘칩니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/corporate/` — 타입·세트·견적 훅·히어로·세트·폼·페이지
- `/corporate` 라우트
- `navLinks.ts` 헤더 슬림

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `/corporate`에서 수량 혜택을 보고 견적을 남길 수 있습니다.
- 실제 영업 메일 연동은 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/corporate/**`
- `src/data/navLinks.ts` · `campaignNav.ts` · `siteMenu.ts`

---

## 🔥 Breaking Changes
- 데스크톱 헤더에서 양조장·클래스·스토리·커뮤니티·고객센터 링크가 빠집니다. 햄버거와 마켓(`/products`)은 그대로입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 세트 1열, 견적 폼이 표 아래
2. **태블릿 (600~999px)** — 세트 카드가 넓어짐
3. **데스크톱 (>=1000px)** — 세트 3열, 표+견적 2단, 헤더가 한 줄인지
4. 회사명·연락처 없이 견적이 막히는지 확인
5. 햄버거에 양조장·고객센터가 남아 있는지 확인

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
- 위 스택: `docs/shop-readme`

---

## 📝 Additional Notes
- 머지 순서: #43 → auto-branch → countdown → gift → holiday → deals → subscribe → **이 PR** → readme
