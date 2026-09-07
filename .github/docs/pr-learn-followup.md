> 🚀 feat: add learn search, covers, and a server OpenAI proxy

## 📌 PR Summary
- `/learn` 검색·태그 필터, 분류 커버 SVG, 상품/도가 링크, 초안 잠금, 북마크, 에디터 픽을 넣습니다.
- 브라우저는 `VITE_OPENAI_API_KEY` 대신 `/api/openai`와 서버 `OPENAI_API_KEY`를 씁니다.
- **이 PR은 `main` 위에 쌓입니다.** (`feat/learn-guides`는 #123으로 머지됨)

---

## 🔍 Background / Why
- 100장을 배포해도 `main`에 없으면 프로덕션에 안 보입니다. 이 후속은 허브 UX와 키 노출을 고칩니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- 허브 검색, 커버, 관련 링크, CMS 편집/픽
- `api/openai.ts` · `api/learn-daily.ts` · Vite 개발 프록시
- 알림 센터 오늘의 카드

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] hooks / components / styles
- [x] 라우팅 수정 없음 (`/learn` 유지)

---

## 🎯 Expected Impact
- 배포 후 Vercel에 `OPENAI_API_KEY`만 넣으면 키가 프론트에 안 나갑니다.

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 라우팅 (Vercel `/api` rewrite 제외)

## 🔥 Breaking Changes
- `.env`의 `VITE_OPENAI_API_KEY`는 더 이상 쓰지 않습니다. `OPENAI_API_KEY`로 옮기세요.

## 🧪 How to Test
1. `/learn` 검색·필터
2. 예약 초안은 로그아웃 시 잠금
3. CMS 초안 편집·오늘의 카드 픽

## 🚀 Next Steps
- Vercel Production Branch를 `main`으로 두고, 최신 `main`(#123 이후)을 Redeploy 해야 배포 사이트에 100장이 보입니다.

## 📝 Additional Notes
- 현재 `https://bitdam.vercel.app` JS는 예전 홈 스토리 카드(`전통 장독대…`)입니다. GitHub `main`과 배포 커밋이 다릅니다.
