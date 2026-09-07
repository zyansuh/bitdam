> 🚀 docs: document SafeImage, Hangul headings, and order toasts

## 📌 PR Summary
- README에 MOCK 이미지, 제목 한글 fallback, 직원 주문 토스트, 영어 PR 제목 규칙을 반영합니다.
- **이 PR은 `chore/pr-title-english` 위에 쌓입니다.**

## 🔍 Background / Why
- 폴더·기능이 늘면 같은 세션에서 README를 갱신합니다.

## 🛠 Changes

### 1. 주요 변경 사항
- `README.md`
- `.github/docs/pr-ux-followup-readme.md`

### 2. 세부 변경 사항
- [x] 스타일 / UI 수정 없음 (문서만)

---

## 🎯 Expected Impact
- 운영자가 SafeImage 교체 지점과 실시간 알림이 서버가 아님을 알 수 있습니다.

## ⚠️ Impact Scope
- [x] 전체 프로젝트 (문서)

### 영향 받는 주요 영역
- `README.md`

---

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test

### 기능 확인 절차
1. README 라우트에 `/mypage/admin/content`, `/mypage/staff/work-reports`가 있는지 확인
2. PR Title 영어 안내가 커밋·PR 섹션에 있는지 확인

### 확인 결과
- [x] 문서 대조

## 📸 Screenshots / Videos
- 없음

## ✅ Self Review Checklist
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] Next Steps 정의 완료

## 🚀 Next Steps
- 없음 (스택 최상단)

## 📝 Additional Notes
- 머지 순서: home-story-teaser → button-spacing → catalog-sort(선물 미리보기 커밋 포함) → staff-work-reports → order-detail-modal → cms-content-admin → safe-images → heading-hangul-fallback → staff-order-toast → remaining-safe-images → pr-title-english → **이 PR**
