# PR 작성 예시 — 초기 홈/로그인 구현

> 참고용 예시입니다. 실제 PR 작성 시 `.github/pull_request_template.md`가 자동으로 불러와집니다.

---

> 🚀 Feature: 빛담(Bitdam) React 홈 랜딩 및 로그인 페이지 초기 구현

## 📌 PR Summary
- Vite + React + TypeScript 기반으로 빛담 프론트엔드 프로젝트를 신규 구성했습니다.
- 디자인 시안(`pc-home-landing`)에 맞춰 홈 랜딩 페이지(네비, 히어로, 통계, 상품, 배너, 푸터)를 컴포넌트 단위로 구현했습니다.
- 디자인 시안(`pc-onboarding-login`)에 맞춰 2단 분할 로그인 페이지를 추가했습니다.
- `react-router-dom`으로 `/`(홈), `/login`(로그인) 라우팅을 연결했습니다.
- Tailwind CSS v4 디자인 토큰(크림/골드/네이비)과 Google Fonts(나눔명조, Noto Sans KR)를 적용했습니다.

---

## 🔍 Background / Why
- 빛담 브랜드 웹사이트 UI가 디자인으로 완료되어, 실제 서비스에 연결 가능한 React 프론트엔드 기반 구축이 필요했습니다.
- 홈과 로그인 두 핵심 진입 화면을 먼저 구현해 이후 기능(스토어, 커뮤니티, 인증 API 연동 등) 확장의 기반을 마련합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- **프로젝트 초기화**: Vite 6 + React 19 + TypeScript 셋업
- **스타일링**: Tailwind CSS v4 + `@theme` 디자인 토큰 (`src/index.css`)
- **홈 랜딩**: `HomeLanding` 페이지 및 7개 UI 컴포넌트
- **로그인**: `Login` 페이지 (좌측 히어로 / 우측 폼 + 소셜 로그인 UI)
- **라우팅**: `App.tsx`에 `BrowserRouter` 및 페이지 라우트 추가
- **데이터**: `src/data/products.ts` — 급상승 상품 mock 데이터

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- 디자인 시안 기준으로 홈·로그인 화면을 브라우저에서 바로 확인할 수 있습니다.
- 컴포넌트 단위 구조로 이후 페이지·기능 추가 시 재사용과 확장이 용이합니다.

---

## ⚠️ Impact Scope
- [x] 전체 프로젝트
- [ ] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/pages/HomeLanding.tsx` — 홈 랜딩 페이지 조합
- `src/pages/Login.tsx` — 로그인 페이지
- `src/components/*` — Navbar, Hero, Stats, ProductCard, TrendingProducts, PromoBanner, Footer
- `src/App.tsx` — 라우팅 설정
- `src/index.css` — Tailwind 테마 및 글로벌 스타일

---

## 🔥 Breaking Changes
- 없음 (신규 프로젝트 초기 구현)

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [x] 콘솔 에러 없음 (빌드 기준)

### 기능 확인 절차
1. **모바일 (<600px)** — 홈 상품 2열, 로그인 폼 단일 컬럼
2. **태블릿 (600~999px)** — 레이아웃 깨짐 없음
3. **데스크톱 (>=1000px)** — 홈 2단 히어로, 로그인 50:50 분할
4. **라우팅** — `/`, `/login`, Navbar 프로필 아이콘 이동

### 확인 결과
- [x] 정상 동작 확인 (로컬 빌드 성공)
- [ ] 추가 확인 필요 (실제 디자인 에셋 교체, lint, 반응형 수동 QA)

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [ ] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [ ] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- 실제 디자인 에셋으로 플레이스홀더 이미지 교체
- 로그인·회원가입 API 연동 및 폼 validation
- README 작성

---

## 📝 Additional Notes
- Vite 8은 Node v20.18 환경에서 rolldown 오류 발생 → Vite 6.4.3 사용
- 소셜 로그인 버튼은 UI만 구현 (OAuth 미연동)

**Suggested commit message:**
```
feat: add Bitdam home landing and login pages with React routing
```
