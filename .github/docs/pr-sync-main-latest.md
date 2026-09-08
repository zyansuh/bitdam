> 🚀 chore: mark current main as the latest production line

## 📌 PR Summary
- 지금 GitHub `main`(`042d7f2`)이 앱의 최신 줄입니다. 술 상식·UX 스택·SafeImage·직원 토스트까지 이미 들어가 있습니다.
- 열려 있는 `#132`~`#136`은 예전 스택 브랜치가 서로를 머지하다가 생긴 꼬인 PR입니다. **머지하지 말고 Close** 하세요.
- 이 PR만 `main`에 머지하면 “최신 줄” 안내가 README에 남고, 배포는 `main`만 보면 됩니다.

---

## 🔍 Background / Why
- 스택 PR이 나중에 옆 브랜치를 다시 머지하면서 제목이 `Merge pull request #108…`처럼 바뀌고, base가 `main`인 옛 브랜치 PR이 5개 남았습니다.
- 그 PR을 지금 `main`에 머지하면 `GiftSummary`가 `SafeImage`에서 예전 `<img>`로 돌아가거나, 이미 있는 `canViewStaffPerformance`와 충돌할 수 있습니다.
- Vercel이 `feat/order-detail-modal`·`feat/staff-work-reports`의 옛 SHA를 빌드하면 `canViewStaffPerformance` 오류가 납니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- README 트러블슈팅: 꼬인 스택 PR은 Close, Production은 `main`
- 이 문서

### 2. 세부 변경 사항
- [x] 문서만 (앱 코드 없음)

---

## 🎯 Expected Impact
- `main`이 단일 최신 줄로 정리됩니다. 옛 미리보기 브랜치는 무시합니다.

## ⚠️ Impact Scope
- [x] 문서 / 운영

### Close without merging
- [#132](https://github.com/zyansuh/bitdam/pull/132) `style/heading-hangul-fallback` → main
- [#133](https://github.com/zyansuh/bitdam/pull/133) `feat/safe-images` → main
- [#134](https://github.com/zyansuh/bitdam/pull/134) `feat/cms-content-admin` → main
- [#135](https://github.com/zyansuh/bitdam/pull/135) `feat/order-detail-modal` → main
- [#136](https://github.com/zyansuh/bitdam/pull/136) `feat/staff-work-reports` → main

이미 `#125`~`#131`과 직접 `main` 푸시로 들어간 작업입니다.

---

## 🔥 Breaking Changes
- 없음. 앱 파일은 바꾸지 않습니다.

## 🧪 How to Test
1. 이 PR diff가 README·PR 문서뿐인지 확인
2. `#132`~`#136` Close (머지 버튼 사용 금지)
3. Vercel Production Branch = `main`, 커밋 `042d7f2` 이후 Redeploy

## 📸 Screenshots / Videos
- 없음

## 🚀 Next Steps
- 이 PR 머지 → 꼬인 PR 5개 Close → Vercel은 `main`만 배포

## 📝 Additional Notes
- 머지 대상: **`main`**
- CLI `gh`가 없는 환경에서는 이 브랜치 compare로 PR을 열어 주세요.
