# Cursor 작업 규칙 (BITDAM — React 반응형 레이아웃 프로젝트)

> 이 문서는 Cursor(AI)가 이 저장소에서 코드를 작성/수정할 때 반드시 따라야 하는 규칙입니다.
> Cursor Settings > Rules 또는 `.cursor/rules/project.mdc`에 연결되어 **항상 적용**됩니다.
> push는 사용자가 직접 수행하므로, Cursor는 **커밋까지만** 책임지고 push는 하지 않습니다.

---

## 0. 최우선 원칙

1. 파일 하나에 여러 책임을 섞지 않는다. (hook + component + style + provider 혼합 금지)
2. 새 파일을 만들 때는 반드시 "1. 폴더 구조 규칙"에 맞는 위치에 생성한다. 애매하면 가장 가까운 카테고리에 넣고, PR/커밋 설명에 왜 그 위치를 선택했는지 한 줄로 남긴다.
3. 커밋 메시지는 영어로, 상세하게 작성한다. (아래 "2. 커밋 메시지 규칙" 참고)
4. 기능 단위 작업이 끝나면 README를 항상 갱신한다. (아래 "4. README 갱신 규칙" 참고)
5. Cursor는 `git commit`까지만 수행하고, **`git push`는 절대 실행하지 않는다.**

---

## 1. 폴더 구조 규칙 (아주 상세하게 분류)

기준: **"같은 종류의 파일은 반드시 같은 폴더 안에서만 산다."**
기능(feature) 단위로 묶기 전에, 먼저 "종류"로 1차 분리한다.

```
src/
├── shared/                        # 여러 feature에서 공유되는 것만
│   ├── components/                  # 순수 UI 컴포넌트 (상태 없음 또는 최소 상태)
│   │   ├── layout/                  # MainLayout, ResponsiveLayout, ResponsiveCenter
│   │   ├── navigation/              # Navbar, BottomNav, NavigationRail
│   │   ├── buttons/
│   │   ├── inputs/
│   │   └── feedback/                # 로딩, 에러, 토스트 등
│   ├── hooks/                       # 커스텀 훅 — 반드시 use{Name} 형태
│   │   ├── useResponsiveBreakpoint.ts
│   │   └── useDebounce.ts
│   ├── providers/                   # Context / Zustand — 전역/공용만
│   │   └── authProvider.tsx
│   ├── utils/                       # 순수 함수, 상수, 포맷터
│   │   ├── responsive.ts            # isMobile / isTablet / isDesktop / value<T>
│   │   └── breakpoints.ts
│   ├── styles/                      # 디자인 토큰 — 컴포넌트에 색상/폰트 하드코딩 금지
│   │   ├── tokens.css               # @theme 변수
│   │   ├── spacing.ts
│   │   └── theme.ts
│   └── types/                       # 여러 feature가 공유하는 타입
│
├── features/
│   ├── auth/
│   │   ├── pages/                   # Login.tsx 등
│   │   ├── components/              # 해당 feature 전용 UI만
│   │   ├── hooks/
│   │   ├── providers/
│   │   └── types/
│   ├── home/
│   │   ├── pages/                   # HomeLanding.tsx
│   │   ├── components/              # Hero, Stats, ProductCard 등
│   │   ├── hooks/
│   │   └── data/                    # products.ts (feature 전용 mock)
│   └── (기타 feature)/
│       └── (동일 구조)
│
├── routing/                         # react-router 라우트 정의만
│   └── routes.tsx
│
├── data/                            # 전역 mock/정적 데이터 (feature 전용이면 features/{name}/data)
└── assets/                          # 이미지, 아이콘, 폰트 파일
```

### 현재 프로젝트 (마이그레이션 완료)

레거시 `src/components`, `src/pages`는 제거했고, 새 파일은 위 구조를 따른다.

| 경로 | 역할 |
|------|------|
| `src/features/auth/pages/Login.tsx` | 로그인 페이지 |
| `src/features/home/pages/HomeLanding.tsx` | 홈 랜딩 |
| `src/shared/components/navigation/Navbar.tsx` | 전역 네비 |
| `src/shared/components/layout/footer/Footer.tsx` | 푸터 조합 |
| `src/shared/styles/` | 토큰 · 글로벌 · 공용 컴포넌트 CSS |
| `src/routing/routes.tsx` | 라우트 정의 |

### 분류 판단 규칙

- **hooks/**: `use`로 시작하는 로직만. UI 반환 없음. 여러 feature에서 쓰면 `shared/hooks`, 한 feature에서만 쓰면 `features/{name}/hooks`.
- **components/**: 화면을 그리는 것. 상태 관리 로직은 최소화하고 provider/hook에 위임.
- **styles/**: 색상·폰트·spacing·breakpoint 상수만. **컴포넌트 안에 `#C5994C` 직접 쓰는 것 금지** — Tailwind `@theme` 토큰(`bg-gold`, `text-charcoal` 등) 또는 `shared/styles` 상수로 참조.
- **providers/**: Context/Zustand 등 상태관리 코드만. UI 코드 포함 금지.
- **types/**: interface/type, Zod schema 등 데이터 타입만.
- **routing/**: `react-router-dom` 라우트 정의와 레이아웃 분기만.
- 하나의 새 파일이 두 카테고리에 걸쳐 있다고 느껴지면, 반드시 두 파일로 쪼갠다.

---

## 2. 커밋 메시지 규칙 (영어, 상세, Conventional Commits 기반)

> push는 사용자가 직접 하고, 이후 global 협업자가 로그를 볼 수 있으므로 **한국어 금지, 영어로만, 맥락을 모르는 사람도 이해할 수 있게 상세히** 작성한다.

### 형식

```
<type>(<scope>): <short summary, imperative mood, ≤72 chars>

<body: what changed and why, 2-6 bullet points>

<footer: breaking changes, related issues>
```

### type 목록

- `feat`: 새 기능
- `fix`: 버그 수정
- `refactor`: 동작 변화 없는 구조 개선 (폴더 이동 포함)
- `style`: 포맷팅, 세미콜론 등 (로직 변화 없음)
- `docs`: README, 주석 등 문서
- `chore`: 빌드 설정, 의존성 등
- `test`: 테스트 추가/수정

### scope 예시

`layout`, `nav`, `auth`, `home`, `routing`, `responsive`, `readme`

### 예시

```
feat(home): add Hero section with responsive two-column layout

- Introduce `Hero` under features/home/components
- Left column: serif heading and CTA buttons
- Right column: product image with hover-safe aspect ratio
- Uses Tailwind tokens from shared/styles (gold, cream, charcoal)

Affected: src/features/home/components/Hero.tsx
```

```
refactor(shared): extract Responsive util into shared/utils

- Move breakpoint logic (mobile <600, tablet 600-999, desktop >=1000)
  into `Responsive` class with value<T>() selector
- No behavior change; existing call sites updated to new import path

Affected: src/shared/utils/responsive.ts, src/shared/utils/breakpoints.ts
```

### 커밋 단위 규칙 (Granular — 아주 세세하게)

> **"Initial setup" / "WIP" / "misc fixes" 같은 뭉치 커밋은 금지.**
> diff 없이 `git log`만 봐도 무엇이 바뀌었는지 알 수 있어야 한다.

#### 핵심 원칙

1. **1 커밋 = 1 논리적 변경 = 가능하면 1~3 파일**
2. **새 파일 추가 시 파일당 1커밋**을 기본으로 한다 (예: `Hero.tsx` 단독, `Stats.tsx` 단독)
3. **deps / config / source / docs**는 절대 한 커밋에 섞지 않는다
4. **페이지 compose**는 하위 컴포넌트 커밋이 모두 끝난 뒤 별도 커밋
5. PR 1개당 **15~40개** 세부 커밋을 목표로 한다

#### 커밋 분리 체크리스트 (매 커밋 전)

- [ ] 이 커밋에 docs(README) 변경이 섞여 있지 않은가?
- [ ] package.json 변경이 UI 코드와 같은 커밋에 없는가?
- [ ] 서로 다른 scope(home vs auth vs routing)가 섞이지 않았는가?
- [ ] Body에 `Affected:` 로 **모든** 변경 파일 경로를 적었는가?
- [ ] 커밋 메시지만 봐도 "왜"와 "무엇"이 즉시 이해되는가?

#### Granular 커밋 예시 (올바른 순서)

```
chore: add gitignore and oxlint config
chore: scaffold Vite React TypeScript project
chore(deps): add Tailwind CSS v4 with Vite plugin
feat(styles): add design tokens and global styles
feat(shared): add breakpoint constants
feat(shared): add Responsive utility with value selector
feat(hooks): add useResponsiveBreakpoint hook
feat(hooks): add useInfiniteScroll hook
feat(layout): add PageLayout scroll wrapper
feat(data): add product mock data and pagination helpers
feat(home): add ProductCard component
feat(nav): add Navbar with responsive mobile menu
feat(home): add Hero section component
... (each component = 1 commit)
feat(routing): configure BrowserRouter and page routes
docs(readme): add project README with setup guide
```

#### 금지 예시

```
❌ feat: initial Bitdam React frontend with home and login pages  (too broad)
❌ chore: setup project and add pages                              (mixed scopes)
❌ feat(home): add Hero, Stats, Footer, and HomeLanding            (4 concerns)
```

#### Body 형식 (필수)

```
<type>(<scope>): <summary>

- Why: <reason this change exists>
- What: <specific behavior or structure added>
- Affected: <path/one>, <path/two>
```

- import 경로만 바뀐 커밋은 `refactor(paths): update import paths after folder reorg` 처럼 명확히 별도로 남긴다.
- 커밋 바디에 **어떤 폴더/파일이 영향을 받았는지 전부** 적는다 (`Affected:` 블록 필수).

---

## 3. Push 단위 그룹핑 전략 (Cursor가 커밋을 쌓는 순서)

> Cursor는 push는 하지 않지만, "한 번의 push로 묶일 덩어리"를 예상하고 그 안에서 커밋을 논리적 순서로 쌓아야 합니다.

| 순서 | 커밋 그룹 | 포함 내용 | 커밋 type |
|------|-----------|-----------|-----------|
| 1 | **Structure** | 새 폴더/파일 뼈대 생성 (내용은 최소) | `chore` / `refactor` |
| 2 | **Core utils** | `Responsive`, `breakpoints.ts` 등 로직 구현 | `feat` |
| 3 | **Styles/tokens** | `@theme`, spacing, color tokens | `feat` / `refactor` |
| 4 | **Shared components** | Navbar, MainLayout, ResponsiveLayout | `feat` |
| 5 | **Hooks** | 신규/이동된 커스텀 훅 | `feat` / `refactor` |
| 6 | **Feature wiring** | auth/home 등 feature 페이지에 실제 적용 | `feat` |
| 7 | **Routing** | react-router 라우트 및 레이아웃 분기 | `feat` |
| 8 | **Import path fixes** | 전체 import 경로 일괄 수정 | `refactor` |
| 9 | **Docs** | README 갱신 | `docs` |

각 그룹은 하나 이상의 커밋으로 이루어질 수 있지만, **그룹 순서를 넘나드는 혼합 커밋은 만들지 않는다.**
한 그룹의 커밋들이 모두 끝나면 Cursor는 작업 요약을 채팅에 남기고, 사용자가 직접 push하도록 안내만 한다.

---

## 4. README 갱신 규칙 (매번, 아주 꼼꼼하게)

Cursor는 **폴더 구조를 바꾸거나 새 기능을 추가할 때마다** README를 갱신한다. 생략 금지.

### 갱신 시 반드시 포함할 섹션

1. **프로젝트 구조 트리** — 위 "1. 폴더 구조 규칙"과 실제 코드가 어긋나지 않도록 최신 트리로 교체
2. **브레이크포인트 기준** — mobile < 600 / tablet 600~999 / desktop ≥ 1000 (변경 시 즉시 반영)
3. **최근 변경 이력 (Changelog)** — 날짜 + 커밋 요약을 bullet로 정리
4. **알려진 제한사항 / TODO** — PR "Next Steps" 항목 유지·갱신
5. **실행/테스트 방법** — `npm install`, `npm run lint`, `npm run build`, `npm run dev` 등 최신 명령어 유지

### 갱신 원칙

- README 갱신은 반드시 **별도 `docs(readme): ...` 커밋**으로 분리한다.
- 오래된 정보(삭제된 폴더, 더 이상 안 쓰는 provider)는 즉시 삭제한다.
- 한국어/영어 중 기존 README 언어를 따르되, 코드 식별자는 영어 유지.

---

## 5. Cursor가 매 작업 시작 전에 스스로 체크할 것

- [ ] 이 파일이 들어갈 폴더가 "1. 폴더 구조 규칙"과 정확히 일치하는가?
- [ ] hook/component/style/provider가 한 파일에 섞여있지 않은가?
- [ ] 커밋이 **Granular 규칙**(1파일·1관심사·Affected 블록)을 지켰는가?
- [ ] 이 커밋이 "3. Push 단위 그룹핑" 표의 어느 그룹에 속하는지 명확한가?
- [ ] 폴더 구조나 기능이 바뀌었다면 README도 같은 세션에서 갱신했는가?
- [ ] `git push`를 실행하지 않았는가? (push는 사용자 전용)

---

## 6. 관련 파일

| 파일 | 용도 |
|------|------|
| `.cursor/rules/project.mdc` | Cursor에 **항상 적용**되는 요약 규칙 |
| `.github/pull_request_template.md` | PR 작성 템플릿 |
| `.github/docs/pr-example-init.md` | PR 작성 예시 (초기 홈/로그인) |
