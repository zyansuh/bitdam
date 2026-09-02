<div align="center">

# 🍶 빚담

**Bitdam** — 전국 양조장의 장인 정신을 담은 프리미엄 전통주 플랫폼

> 시간이 흐를수록 깊어지는 우리 고유의 맛과 향 · 홈 랜딩 · 로그인 · 반응형 · 무한 스크롤

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

<br/>

**📦 저장소:** [github.com/zyansuh/bitdam](https://github.com/zyansuh/bitdam)

</div>

---

## 목차

1. [프로젝트 소개](#-이-프로젝트는)
2. [페이지 · 이용 흐름](#-페이지--이용-흐름)
3. [주요 기능](#-주요-기능)
4. [사용 기술](#-사용-기술-tech-stack)
5. [아키텍처 · 소스 구조](#️-아키텍처--소스-구조)
6. [디자인 토큰 · 반응형](#-디자인-토큰--반응형)
7. [무한 스크롤](#-무한-스크롤)
8. [빠른 시작](#-빠른-시작)
9. [npm 스크립트](#-npm-스크립트)
10. [개발 규칙](#-개발-규칙)
11. [커밋 · PR · Cursor](#-커밋--pr--cursor)
12. [트러블슈팅](#-트러블슈팅)
13. [로드맵 · Changelog](#-로드맵--changelog)

---

## 📖 이 프로젝트는?

**빚담(Bitdam)** 은 전통주 브랜드 웹사이트를 위한 **React SPA 프론트엔드**입니다.  
디자인 시안(`pc-home-landing`, `pc-onboarding-login`)을 기준으로 홈 랜딩·로그인 화면을 구현했으며, 모바일·태블릿·데스크톱 전 구간에서 동일한 UX를 제공합니다.

| 구분 | 설명 |
|------|------|
| **프론트** | React 19 · Vite 6 · TypeScript · Tailwind CSS v4 |
| **라우팅** | react-router-dom — `/`(홈), `/login`(로그인) |
| **상태** | 현재 mock 데이터 · API/OAuth 미연동 |
| **배포** | (예정) Vercel / Netlify 등 정적 호스팅 |

### 브랜드 핵심 메시지

| 항목 | 내용 |
|------|------|
| **슬로건** | 다섯 개의 손이 한 병에 모이다 |
| **규모** | 전국 31개 제휴 양조장 · 9개 권역 · 5개 국가유산 장인 손맛 |
| **톤** | cream / gold / navy — 전통과 현대의 조화 |

---

## 🗺️ 페이지 · 이용 흐름

### 라우트

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | `HomeLanding` | 브랜드 소개 · 통계 · 급상승 술 · 양조장 배너 · 스토리 피드 |
| `/login` | `Login` | 이메일 로그인 · 소셜 로그인 UI · 로그인 전 상품 미리보기 |

### 이용자 흐름

```mermaid
flowchart LR
    A[방문자] --> B{진입}
    B -->|홈| C[/ HomeLanding /]
    B -->|로그인| D[/ Login /]
    C -->|Navbar 프로필| D
    D -->|홈으로 돌아가기| C
    C --> E[상품·스토리 무한 스크롤]
    D --> F[술추천 맞춤 로그인]
    D --> G[소셜 로그인 UI]
```

### 화면별 레이아웃

| 화면 | mobile (<600px) | tablet (600~999px) | desktop (≥1000px) |
|------|-----------------|--------------------|--------------------|
| **홈** | 햄버거 메뉴 · Hero 이미지 상단 · 상품 2열 | 상품 3열 · Stats 4열 | Nav 링크 노출 · Hero 2단 · 상품 4열 |
| **로그인** | 상단 히어로 배너 + 폼 | 폼 중앙 · 피드 3열 | 좌측 sticky 히어로 + 우측 스크롤 |

---

## ✨ 주요 기능

### 🏠 홈 랜딩 (`/`)

| 섹션 | 컴포넌트 | 설명 |
|------|----------|------|
| 네비게이션 | `Navbar` | sticky 헤더 · 1000px 미만 햄버거 메뉴 · 검색·장바구니·프로필 아이콘 |
| 히어로 | `Hero` | 「다섯 개의 손이 한 병에 모이다」· CTA 2종 |
| 통계 | `Stats` | 31곳 · 9개 권역 · 5개 · 100+ 명 |
| 급상승 술 | `InfiniteProductFeed` | 8개씩 paginate · Intersection Observer 무한 스크롤 |
| 프로모션 | `PromoBanner` | 성수동 삼해소주 가옥 · 투어 예약 CTA |
| 스토리 | `InfiniteStoryFeed` | 빚담 이야기 카드 · 4개씩 추가 로드 |
| 푸터 | `Footer` | 서비스·고객지원·법적 고지 링크 · SNS |

### 🔐 로그인 (`/login`)

| 기능 | 설명 |
|------|------|
| **히어로 패널** | 데스크톱 좌측 50% sticky · 모바일 상단 배너 |
| **이메일 로그인** | 이메일·비밀번호 · 약관 동의 체크박스 |
| **소셜 로그인 UI** | 카카오 · 네이버 · Apple (OAuth **미연동**) |
| **하단 피드** | `InfiniteProductFeed` + `InfiniteStoryFeed` (스크롤 탐색) |

### 📱 공통

| 기능 | 구현 |
|------|------|
| **반응형** | `breakpoints.ts` · `Responsive.value<T>()` · Tailwind grid |
| **무한 스크롤** | `useInfiniteScroll` + sentinel ref |
| **페이지 스크롤** | `PageLayout` — `min-h-dvh`, `overflow-y: auto` |
| **폰트** | Nanum Myeongjo(제목) · Noto Sans KR(본문) — Google Fonts |

---

## 🧰 사용 기술 (Tech Stack)

| 분류 | 기술 | 비고 |
|------|------|------|
| 프레임워크 | React 19 | 함수형 컴포넌트 |
| 빌드 | Vite 6.4 | `@vitejs/plugin-react` |
| 언어 | TypeScript 6.0 | `tsc -b` 빌드 타입체크 |
| 스타일 | Tailwind CSS 4.3 | `@tailwindcss/vite` · `@theme` 토큰 |
| 라우팅 | react-router-dom 7 | `BrowserRouter` |
| 아이콘 | lucide-react | Search · Cart · User · Menu 등 |
| 린트 | oxlint | `npm run lint` |

---

## 🏗️ 아키텍처 · 소스 구조

```mermaid
flowchart TB
    subgraph Entry["진입점"]
        MAIN[main.tsx]
        APP[App.tsx]
    end
    subgraph Pages["pages/"]
        HOME[HomeLanding.tsx]
        LOGIN[Login.tsx]
    end
    subgraph Components["components/ (레거시)"]
        NAV[Navbar]
        HERO[Hero]
        STATS[Stats]
        CARD[ProductCard]
        BANNER[PromoBanner]
        FOOT[Footer]
    end
    subgraph Shared["shared/"]
        HOOKS[hooks/]
        UTILS[utils/]
        FEED[components/feed/]
        LAYOUT[components/layout/]
    end
    subgraph Data["data/"]
        PROD[products.ts]
    end
    MAIN --> APP
    APP --> HOME
    APP --> LOGIN
    HOME --> NAV & HERO & STATS & FEED & BANNER & FOOT
    LOGIN --> FEED
    FEED --> HOOKS
    FEED --> PROD
    HOOKS --> UTILS
    HOME --> LAYOUT
```

### 저장소 루트

```
BITDAM/
├── package.json
├── README.md
├── vite.config.ts
├── tsconfig.json · tsconfig.app.json · tsconfig.node.json
├── index.html
├── .gitignore · .oxlintrc.json
├── .github/
│   ├── pull_request_template.md
│   └── docs/
│       ├── pr-001-initial-frontend.md
│       └── pr-example-init.md
├── .cursor/
│   ├── rules/project.mdc          # Cursor alwaysApply 규칙
│   └── docs/cursor-workflow-rules.md
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.tsx
    ├── App.tsx                    # BrowserRouter · 라우트 정의
    ├── index.css                  # @theme 디자인 토큰
    ├── assets/
    ├── components/                # (레거시) 홈 UI 컴포넌트
    ├── pages/                     # (레거시) 페이지 진입점
    ├── data/                      # mock 상품 데이터
    └── shared/
        ├── hooks/
        ├── utils/
        └── components/
            ├── layout/
            └── feed/
```

### `src/components/` — 홈 UI (레거시 위치)

| 파일 | 용도 |
|------|------|
| `Navbar.tsx` | 전역 네비 · 모바일 Sheet-style 메뉴 |
| `Hero.tsx` | 홈 히어로 2단 레이아웃 |
| `Stats.tsx` | 브랜드 규모 통계 4종 |
| `ProductCard.tsx` | 상품 카드 (이미지·카테고리·가격·평점) |
| `PromoBanner.tsx` | 양조장 투어 풀-width 배너 |
| `Footer.tsx` | 사이트 푸터 |

### `src/shared/` — 공용 모듈

| 경로 | 파일 | 설명 |
|------|------|------|
| **utils/** | `breakpoints.ts` | mobile 600 · tablet 1000 상수 |
| | `responsive.ts` | `Responsive.isMobile` · `value<T>()` |
| **hooks/** | `useResponsiveBreakpoint.ts` | resize 구독 → breakpoint 반환 |
| | `useInfiniteScroll.ts` | IntersectionObserver sentinel |
| **components/layout/** | `PageLayout.tsx` | 전 페이지 스크롤 래퍼 |
| **components/feed/** | `InfiniteProductFeed.tsx` | 상품 무한 스크롤 그리드 |
| | `InfiniteStoryFeed.tsx` | 스토리 무한 스크롤 카드 |

### `src/data/`

| 파일 | 설명 |
|------|------|
| `products.ts` | `Product` 타입 · 48종 mock · `getProductsPage()` · `hasMoreProducts()` |

### 목표 폴더 구조 (마이그레이션 예정)

> 상세: `.cursor/docs/cursor-workflow-rules.md`

| 현재 | 목표 |
|------|------|
| `src/pages/Login.tsx` | `src/features/auth/pages/Login.tsx` |
| `src/pages/HomeLanding.tsx` | `src/features/home/pages/HomeLanding.tsx` |
| `src/components/Navbar.tsx` | `src/shared/components/navigation/Navbar.tsx` |
| `src/components/Hero.tsx` 등 | `src/features/home/components/` |
| `src/App.tsx` (라우팅) | `src/routing/routes.tsx` |

---

## 🎨 디자인 토큰 · 반응형

### `@theme` 색상 (`src/index.css`)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `cream` | `#faf7f4` | 페이지 배경 |
| `cream-dark` | `#f0ebe4` | 보더·구분선 |
| `gold` | `#c5994c` | CTA · 강조 · 통계 숫자 |
| `gold-dark` | `#a87d3a` | hover 상태 |
| `navy` | `#1a2332` | 푸터 · 배너 오버레이 |
| `charcoal` | `#2c2c2c` | 본문 텍스트 |
| `muted` | `#888888` | 보조 텍스트 |

### 타이포그래피

| 용도 | 폰트 |
|------|------|
| 제목 (serif) | Nanum Myeongjo |
| 본문 (sans) | Noto Sans KR |

### 브레이크포인트

| 구간 | 범위 | Tailwind / JS |
|------|------|---------------|
| **mobile** | `< 600px` | `BREAKPOINTS.mobile` |
| **tablet** | `600px ~ 999px` | between mobile and tablet |
| **desktop** | `≥ 1000px` | `BREAKPOINTS.tablet` |

```ts
import { Responsive } from '@/shared/utils/responsive';

const columns = Responsive.value(window.innerWidth, {
  mobile: 2,
  tablet: 3,
  desktop: 4,
});
```

### 반응형 그리드 (상품)

| breakpoint | grid columns |
|------------|--------------|
| mobile | 2 |
| tablet | 3 |
| desktop | 4 |

---

## ♾️ 무한 스크롤

### 동작 방식

```mermaid
sequenceDiagram
    participant U as 사용자
    participant S as Sentinel div
    participant IO as IntersectionObserver
    participant H as useInfiniteScroll
    participant F as InfiniteProductFeed
    U->>S: 페이지 하단 스크롤
    S->>IO: isIntersecting true
    IO->>H: onLoadMore()
    H->>F: getProductsPage(nextPage)
    F-->>U: 상품 카드 추가 + 로딩 스피너
```

| 항목 | 값 |
|------|-----|
| **훅** | `useInfiniteScroll(onLoadMore, { rootMargin: '200px' })` |
| **페이지 크기** | 8개 (`PAGE_SIZE`) |
| **mock 총량** | 48종 (`allProducts`) |
| **적용 페이지** | 홈 · 로그인 (상품·스토리 피드) |

### API 연동 시

`src/data/products.ts`의 `getProductsPage()`를 fetch 기반으로 교체하면 UI 변경 없이 백엔드 연동 가능.

---

## 🚀 빠른 시작

### 사전 준비

Node.js 20+, npm 9+

> Vite 8은 Node v20.18에서 rolldown binding 오류가 있어 **Vite 6.4.3** 사용 중.

### 설치 · 실행

```bash
git clone https://github.com/zyansuh/bitdam.git
cd bitdam
npm install
npm run dev          # http://localhost:5173
```

### 확인할 URL

| URL | 화면 |
|-----|------|
| http://localhost:5173/ | 홈 랜딩 |
| http://localhost:5173/login | 로그인 |

---

## 📜 npm 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | Vite 개발 서버 (HMR) |
| `npm run build` | `tsc -b && vite build` → `dist/` |
| `npm run preview` | 빌드 결과물 로컬 프리뷰 |
| `npm run lint` | oxlint |

---

## 📐 개발 규칙

### Import 경로 (현재)

```ts
import Navbar from '../components/Navbar';
import { useInfiniteScroll } from '../shared/hooks/useInfiniteScroll';
import { BREAKPOINTS } from '../shared/utils/breakpoints';
import { getProductsPage } from '../data/products';
```

### 파일 분류 원칙

| 종류 | 위치 | 규칙 |
|------|------|------|
| **hooks** | `shared/hooks/` | `use{Name}` · UI 반환 없음 |
| **components** | `components/` · `shared/components/` | 렌더링 전담 |
| **styles** | `index.css` `@theme` | 컴포넌트 내 hex 하드코딩 금지 |
| **data** | `data/` | mock · pagination helpers |
| **pages** | `pages/` | 섹션 컴포넌트 조합만 |

### Granular 커밋

- **1 커밋 = 1 논리적 변경 = 1~3 파일**
- deps · docs · feature **혼합 금지**
- Body에 `Why` / `What` / `Affected:` 필수
- 상세: `.cursor/rules/project.mdc`

---

## 🤝 커밋 · PR · Cursor

| 파일 | 용도 |
|------|------|
| `.cursor/rules/project.mdc` | Cursor AI **항상 적용** 규칙 |
| `.cursor/docs/cursor-workflow-rules.md` | 폴더 구조 · Granular 커밋 · README 갱신 |
| `.github/pull_request_template.md` | PR 작성 템플릿 |
| `.github/docs/pr-001-initial-frontend.md` | 초기 PR 본문 예시 |

### Git 브랜치 전략

| 브랜치 | 역할 |
|--------|------|
| `main` | 베이스 / merge 대상 |
| `feat/*` | 기능 단위 PR |

> Cursor는 `git commit`까지만 수행 · **`git push`는 직접** 수행

---

## 🩹 트러블슈팅

| 증상 | 해결 |
|------|------|
| `npm run build` rolldown 오류 | Vite **6.x** 사용 확인 (`package.json`) |
| Git `dubious ownership` (Windows) | `git config --global --add safe.directory E:/frontend_project/BITDAM` |
| PR diff 없음 | `main`과 `feat/*`가 동일 커밋인지 확인 |
| 무한 스크롤 안 됨 | sentinel ref가 viewport에 진입하는지 · `hasMore` 상태 확인 |
| 이미지 안 보임 | Unsplash URL placeholder — 네트워크·CORS 확인 |
| 햄버거 메뉴 안 보임 | viewport `< 1000px` 인지 확인 |

---

## 🗺️ 로드맵 · Changelog

### TODO

- [ ] `src/` → `shared/` + `features/` 폴더 구조 리팩터
- [ ] Unsplash placeholder → 실제 디자인 에셋 교체
- [ ] 로그인·회원가입 API 및 OAuth(카카오/네이버/Apple) 연동
- [ ] `npm run lint` 통과 · GitHub Actions CI
- [ ] 프로덕션 배포 (Vercel 등)

### Changelog

| 날짜 | 내용 |
|------|------|
| **2026-09-02** | 홈 랜딩 · 로그인 · 반응형 · 무한 스크롤 초기 구현 |
| **2026-09-02** | Granular 커밋 24개로 히스토리 분리 |
| **2026-09-02** | Cursor 규칙 · PR 템플릿 · GitHub 원격 연결 |

---

## 📎 관련 문서

| 문서 | 내용 |
|------|------|
| [.cursor/docs/cursor-workflow-rules.md](.cursor/docs/cursor-workflow-rules.md) | Cursor 작업 규칙 전문 |
| [.github/docs/pr-001-initial-frontend.md](.github/docs/pr-001-initial-frontend.md) | 초기 PR 본문 |
| [.github/pull_request_template.md](.github/pull_request_template.md) | PR 템플릿 |

버그 제보 · PR 환영합니다.

---

<div align="center">

**Made with React · TypeScript · Vite · Tailwind CSS**

🍶 **빚담 Bitdam** — 전통주, 시간이 깊어질수록

[github.com/zyansuh/bitdam](https://github.com/zyansuh/bitdam)

</div>
