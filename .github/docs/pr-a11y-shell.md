> 🚀 Feature: 셸 다이얼로그·햄버거 포커스 트랩

## 📌 PR Summary
- `useFocusTrap`으로 인증 안내, 햄버거, 계정 메뉴, 라운지 인증 오버레이에서 Tab이 밖으로 나가지 않게 합니다.
- 햄버거는 Escape로 닫히고 `aria-expanded`를 알립니다.
- **전 페이지 alt·포커스 링은 이 PR 범위가 아닙니다.**
- **이 PR은 `chore/lint-ci` 위에 쌓입니다.**

## 🔍 Background / Why
- 모달이 `aria-modal`만 있고 키보드 트랩이 없었습니다.

## 🛠 Changes

### 1. 주요 변경 사항
- `useFocusTrap`
- `AuthNoticeDialog` · `SiteHamburgerMenu` · `NavbarActions` · `SiteHeader` · `LoungeVerifyModal` · `useAccountMenu`

### 2. 세부 변경 사항
- [x] hooks 분리/추가
- [x] 공통 UI

---

## 🎯 Expected Impact
- 키보드만으로 메뉴·다이얼로그를 닫고 Tab이 오버레이 안에 머뭅니다.

## ⚠️ Impact Scope
- [x] 공통 UI

### 영향 받는 주요 영역
- `src/shared/hooks/useFocusTrap.ts`
- `src/shared/components/navigation/`
- `src/features/auth/components/AuthNoticeDialog.tsx`

---

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. 햄버거 열고 Tab이 메뉴 안에서 순환하는지, Escape로 닫히는지
2. 카카오 키 없이 로그인 → 안내 다이얼로그 Tab/Escape
3. 계정 메뉴 Tab

### 확인 결과
- [x] 정상 동작 확인

## 📸 Screenshots / Videos
- 없음

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] Next Steps 정의 완료

## 🚀 Next Steps
- `feat/naver-login`을 이 PR 위에 머지

## 📝 Additional Notes
- 머지 순서: lint-ci → **이 PR** → naver → docs
