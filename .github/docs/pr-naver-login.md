> 🚀 Feature: 네이버 로그인 OAuth · Apple은 안내만

## 📌 PR Summary
- 네이버 로그인 버튼이 카카오와 같은 코드 플로우로 `/login/naver/callback`까지 갑니다.
- Vite·Vercel에 `/naver-oauth` · `/naver-api` 프록시를 넣었습니다.
- Apple은 비공개 키 JWT가 필요해 SPA에서 안내 다이얼로그만 띄웁니다.
- **이 PR은 `feat/a11y-shell` 위에 쌓입니다.**

## 🔍 Background / Why
- 소셜 버튼만 있고 OAuth는 카카오뿐이었습니다.

## 🛠 Changes

### 1. 주요 변경 사항
- `naver.ts` · `naverAuth.ts` · `useNaverLogin` · `NaverCallbackPage`
- `vite.config.ts` · `vercel.json` · `.env.example`
- `useAppleLogin` · `LoginSocialButtons` · `SettingsConnectionsPage`

### 2. 세부 변경 사항
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `VITE_NAVER_CLIENT_ID` / `VITE_NAVER_CLIENT_SECRET`이 있으면 네이버로 로그인됩니다. Secret은 빌드에 포함됩니다.

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/auth/`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음. 키가 없으면 기존처럼 안내 다이얼로그가 뜹니다.

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. 키 없이 네이버 클릭 → 설정 안내 다이얼로그
2. Apple 클릭 → 서버 키 필요 안내
3. 키를 넣은 뒤 네이버 콘솔 Callback URL 등록 후 로그인

### 확인 결과
- [x] 키 없음 경로 확인

## 📸 Screenshots / Videos
- 없음

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] Next Steps 정의 완료

## 🚀 Next Steps
- `docs/followup-readme`를 이 PR 위에 머지

## 📝 Additional Notes
- 머지 순서: a11y-shell → **이 PR** → docs/followup-readme
