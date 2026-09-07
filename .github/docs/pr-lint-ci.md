> 🚀 Chore: oxlint와 빌드를 GitHub Actions에서 돌린다

## 📌 PR Summary
- `.github/workflows/ci.yml`이 `main` push와 PR에서 `npm ci` → `npm run lint` → `npm run build`를 실행합니다.
- **이 PR은 `feat/seller-pause` 위에 쌓입니다.**

## 🔍 Background / Why
- README TODO에 린트·CI가 남아 있었고 워크플로 폴더가 없었습니다.

## 🛠 Changes

### 1. 주요 변경 사항
- `.github/workflows/ci.yml`

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경

---

## 🎯 Expected Impact
- PR마다 Ubuntu에서 oxlint와 `tsc -b && vite build`가 돕니다.

## ⚠️ Impact Scope
- [x] 전체 프로젝트

### 영향 받는 주요 영역
- `.github/workflows/ci.yml`

---

## 🔥 Breaking Changes
- 없음. 로컬 Windows에서 oxlint native binding이 없으면 `npm i`로 optional dep를 다시 받아야 할 수 있습니다.

## 🧪 How to Test

### 기본 확인
- [ ] GitHub Actions `CI` 워크플로가 이 PR에서 초록인지 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. Actions 탭에서 `check` job 로그 확인

### 확인 결과
- [ ] CI 확인 필요 (푸시 후)

## 📸 Screenshots / Videos
- 없음

## ✅ Self Review Checklist
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] Next Steps 정의 완료

## 🚀 Next Steps
- `feat/a11y-shell`을 이 PR 위에 머지

## 📝 Additional Notes
- 머지 순서: seller-pause → **이 PR** → a11y → naver → docs
