> 🚀 Feature: 주문·문의·댓글·예약을 알림 센터에 연동한다

## 📌 PR Summary
- 실시간 알림은 `bitdam.notify.events` + `audienceId`입니다.
- `/account/notifications` 토글이 주문/마케팅/투어 알림을 가립니다.
- **이 PR은 `feat/support-desk` 위에 쌓입니다.**

## 🔍 Background / Why
- 알림 센터가 mock 4건뿐이고 설정 토글이 목록에 닿지 않았습니다.

## 🛠 Changes
- `siteNoticeStorage` · `useSiteNotices` · checkout/support/comment/lucky/booking push

## 🔥 Breaking Changes
- 없음. mock 안내는 그대로 두고 실시간 행을 앞에 붙입니다.

## 🧪 How to Test
1. 결제 후 `/notifications` 주문 알림
2. 마케팅 끄면 복주머니 알림 숨김, 투어 끄면 예약 알림 숨김

## 📝 Additional Notes
- 머지 순서: `feat/support-desk` → **이 PR** → `docs/third-five-readme`
