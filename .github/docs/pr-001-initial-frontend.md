> 🚀 Feature: 빛담(Bitdam) React 프론트엔드 초기 구현 — 홈 랜딩, 로그인, 반응형, 무한 스크롤

## 📌 PR Summary
- Vite 6 + React 19 + TypeScript + Tailwind CSS v4 기반으로 빛담 프론트엔드 프로젝트를 신규 구성했습니다.
- 디자인 시안(`pc-home-landing`, `pc-onboarding-login`)에 맞춰 홈 랜딩·로그인 페이지를 구현했습니다.
- 모바일(<600px) · 태블릿(600~999px) · 데스크톱(≥1000px) 반응형 레이아웃을 전 페이지에 적용했습니다.
- Intersection Observer 기반 무한 스크롤(상품 피드, 스토리 피드)을 홈·로그인 페이지에 추가했습니다.
- Cursor 작업 규칙, PR 템플릿, README, GitHub 원격(`origin/main`) 연결까지 포함합니다.

---

## 🔍 Background / Why
- 빛담 브랜드 웹사이트 UI 디자인이 완료되어, 실제 서비스 확장 가능한 React 프론트엔드 기반이 필요했습니다.
- 홈(브랜드 소개·상품 노출)과 로그인(진입점)을 먼저 구현하고, 이후 스토어·커뮤니티·API 연동으로 확장할 수 있도록 컴ponent 단위 구조를 잡았습니다.
- 모바일·태블릿·데스크톱 전 구간에서 동일한 UX를 제공하고, 콘텐츠 탐색을 위해 무한 스크롤 패턴을 도입했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- **프로젝트 셋업**: Vite 6, React 19, TypeScript, Tailwind CSS v4, lucide-react, react-router-dom
- **홈 랜딩** (`/`): Navbar, Hero, Stats, InfiniteProductFeed, PromoBanner, InfiniteStoryFeed, Footer
- **로그인** (`/login`): 2단 분할 레이아웃(데스크톱) / 상단 히어로 배너(모바일·태블릿), 소셜 로그인 UI
- **반응형**: `shared/utils/breakpoints.ts`, `responsive.ts`, `useResponsiveBreakpoint` 훅
- **무한 스크롤**: `useInfiniteScroll` 훅, `InfiniteProductFeed`, `InfiniteStoryFeed`
- **디자인 토큰**: `index.css` — cream / gold / navy / charcoal
- **협업 설정**: `.cursor/rules/project.mdc`, `.github/pull_request_template.md`, README

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

> `shared/`(공용 hook·util·layout·feed)와 `components/`·`pages/`(레거시) 구조로 분리. feature 폴더 마이그레이션은 Next Steps.

---

## 🎯 Expected Impact
- 디자인 시안 기준 홈·로그인 화면을 모든 디바이스에서 확인할 수 있습니다.
- 무한 스크롤로 상품·스토리 콘텐츠를 자연스럽게 탐색할 수 있습니다.
- 컴포넌트·훅 단위 구조로 이후 API 연동·페이지 추가가 용이합니다.

---

## ⚠️ Impact Scope
- [x] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/pages/HomeLanding.tsx`, `src/pages/Login.tsx` — 페이지 진입점
- `src/components/*` — Navbar, Hero, Stats, ProductCard, PromoBanner, Footer
- `src/shared/hooks/useInfiniteScroll.ts` — 무한 스크롤 로직
- `src/shared/components/feed/*` — 상품·스토리 피드
- `src/shared/utils/breakpoints.ts`, `responsive.ts` — 반응형 기준
- `src/App.tsx` — `/`, `/login` 라우팅
- `src/data/products.ts` — mock 상품 데이터 (48종)

---

## 🔥 Breaking Changes
- 없음 (신규 프로젝트 초기 구현)

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [x] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 홈: 햄버거 메뉴, Hero 이미지 상단, 상품 2열 그리드, 무한 스크롤 로드
   - 로그인: 상단 히어로 배너 + 폼, 소셜 버튼 2열, 하단 피드 스크롤
2. **태블릿 (600~999px)**
   - 홈: 상품 3열, Stats 4열, 배너 레이아웃 정상
   - 로그인: 폼 중앙 정렬, 피드 3열 그리드
3. **데스크톱 (>=1000px)**
   - 홈: Hero 2단, Nav 링크 노출, 상품 4열
   - 로그인: 좌측 sticky 히어로 + 우측 스크롤(폼 + 피드)
4. **라우팅 & 무한 스크롤**
   - `/` ↔ `/login` Navbar 프로필 아이콘 이동
   - 페이지 하단 스크롤 시 "불러오는 중..." → 상품·스토리 추가 로드

### 확인 결과
- [x] 정상 동작 확인 (로컬 빌드·dev 서버)
- [ ] 추가 확인 필요 (lint, 실제 디자인 에셋, OAuth 연동)

---

## 📸 Screenshots / Videos
- 없음 (PR 리뷰 시 `/`, `/login` 데스크톱·모바일 스크린샷 첨부 권장)

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료 (신규 프로젝트)
- [x] 불필요한 코드 제거 (Vite 기본 template, TrendingProducts 중복)
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- [ ] `src/` → `shared/` + `features/` 폴더 구조로 리팩터
- [ ] Unsplash 플레이스홀더 → 실제 디자인 에셋 교체
- [ ] 로그인·회원가입 API 및 OAuth(카카오/네이버/Apple) 연동
- [ ] `npm run lint` 통과 및 CI 설정

---

## 📝 Additional Notes
- Vite 8은 Node v20.18 환경에서 rolldown binding 오류 → **Vite 6.4.3** 사용
- 소셜 로그인 버튼은 UI만 구현 (OAuth 미연동)
- 이미지는 Unsplash URL placeholder
- **Commit**: `4939bed` — `feat: initial Bitdam React frontend with home and login pages`

---

## 📦 Commits in this PR

| Commit | Description |
|--------|-------------|
| `4939bed` | feat: initial Bitdam React frontend with home and login pages |

**Suggested PR title:**
```
feat: initial Bitdam React frontend with home, login, responsive layout and infinite scroll
```
