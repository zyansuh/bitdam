# 빛담 (Bitdam)

전통주 브랜드 **빛담** React 프론트엔드 — Vite + TypeScript + Tailwind CSS v4.

## 실행 방법

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈 랜딩 |
| `/login` | 로그인 |

## 브레이크포인트

| 구간 | 범위 |
|------|------|
| mobile | `< 600px` |
| tablet | `600px ~ 999px` |
| desktop | `>= 1000px` |

## 프로젝트 구조

```
src/
├── components/     # (레거시) → shared/ 또는 features/ 로 점진 이전 예정
├── pages/          # (레거시) → features/{name}/pages 로 점진 이전 예정
├── data/           # mock 데이터
├── App.tsx         # 라우팅 진입점
└── index.css       # Tailwind @theme 디자인 토큰
```

목표 구조 상세: `.cursor/docs/cursor-workflow-rules.md` 참고

## Cursor / 협업 규칙

| 파일 | 용도 |
|------|------|
| `.cursor/rules/project.mdc` | Cursor AI **항상 적용** 작업 규칙 |
| `.cursor/docs/cursor-workflow-rules.md` | 상세 가이드 (폴더 구조, 커밋, README) |
| `.github/pull_request_template.md` | PR 작성 템플릿 |

> Cursor는 `git commit`까지만 수행하고 **`git push`는 사용자가 직접** 합니다.

## Changelog

- **2026-09-02** — 홈 랜딩, 로그인 페이지 초기 구현 / PR template / Cursor 규칙 추가

## TODO

- [ ] `src/` 폴더를 `shared/` + `features/` 구조로 리팩터
- [ ] 실제 디자인 에셋으로 플레이스홀더 이미지 교체
- [ ] 로그인 API 및 OAuth 연동

---

## React + TypeScript + Vite (템플릿 참고)

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
