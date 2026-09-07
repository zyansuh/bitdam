> 🚀 Feature: 직원 성과를 공지·커뮤니티 실데이터로 집계한다

## 📌 PR Summary
- 공지 저장 시 `authorId`를 남깁니다.
- 성과 보드는 이메일 길이 난수가 아니라 작성 공지 수·커뮤니티 글 수·담당 공방 수입니다.
- **이 PR은 `docs/second-five-readme` 위에 쌓입니다.**

## 🔍 Background / Why
- ADMIN 성과 표가 데모 난수라 운영 지표로 쓸 수 없었습니다.

## 🛠 Changes
- `SiteNoticePost.authorId` · `performanceForAccount` · `usePeopleDirectory` 비동기 집계

## 🔥 Breaking Changes
- 없음. 예전 공지는 author가 없어 0건으로 잡힙니다.

## 🧪 How to Test
1. `admin@bitdam.kr`로 공지 작성 후 `/mypage/admin/performance` 건수 증가

## 📝 Additional Notes
- 머지 순서: `docs/second-five-readme` → **이 PR** → `feat/seller-catalog` → …
