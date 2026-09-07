> 🚀 Feature: 1:1 문의를 직원 답변 스레드로 연다

## 📌 PR Summary
- 문의는 `bitdam.support.tickets` 공용 인박스입니다.
- 회원 `/mypage/support`, 직원 `/mypage/admin/support` (`canReplySupport`).
- **이 PR은 `feat/catalog-stock` 위에 쌓입니다.**

## 🔍 Background / Why
- 문의가 회원 localStorage에만 남아 답변이 불가능했습니다.

## 🛠 Changes
- `supportStorage` · `useSupportDesk` · `AdminSupportPage` · 라우트

## 🔥 Breaking Changes
- 예전 per-user 문의는 최초 로드 때 공용 인박스로 이전됩니다.

## 🧪 How to Test
1. 회원 문의 등록 → ADMIN/직원 답변 → 회원 목록에 답변

## 📝 Additional Notes
- 머지 순서: `feat/catalog-stock` → **이 PR** → `feat/notify-events`
