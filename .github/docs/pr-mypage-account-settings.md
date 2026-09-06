> 🚀 Feature: 마이페이지·개인정보 설정, 커뮤니티 글쓰기/상세, 양조장 예약 카드

## 📌 PR Summary
- 시안(`pc-my-page`, `pc-account-settings`) 기준으로 마이페이지 7개 화면과 개인정보 설정 5개 화면을 추가했습니다.
- 헤더 **고객센터**·**프로필 이미지**·햄버거에서 프로필/보안/알림/연동/탈퇴로 바로 들어가게 했습니다.
- 커뮤니티에 글쓰기(`/community/new`)·상세(`/community/:id`)·좋아요·댓글·임시저장을 붙였습니다.
- 양조장 상세에 날짜·타임·인원 예약 카드와 포함 사항 목록을 넣었습니다.
- 카카오 Redirect URI를 env에 고정하지 않고 `window.location.origin`만 쓰도록 고쳤습니다. 커밋은 1파일·1관심사로 89개입니다.

---

## 🔍 Background / Why
- 마이페이지·설정 시안이 있었지만 라우트와 페이지가 없어 헤더에서 들어갈 수 없었습니다.
- 커뮤니티는 목록만 있어 본인 글을 쓰고 다시 열어보는 흐름이 없었습니다.
- 양조장 상세는 이야기만 있고 시안형 예약 UI가 없었습니다.
- `VITE_KAKAO_REDIRECT_URI`를 localhost로 넣으면 배포 빌드도 localhost로 콜백되어 카카오 로그인이 깨집니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- **마이페이지** (`/mypage*`): 대시보드(주문 요약·NFT 3장), 인증서, 쿠폰, 배송지, 결제수단, 1:1 고객센터
- **개인정보 설정** (`/account*`): 프로필(사진 JPG/PNG 10MB, 닉네임, 이메일 인증 배지, 전화, 생년월일, 관심 주종, 비밀번호, 저장), 보안, 알림, 연동, 탈퇴
- **헤더**: `CustomerCenterMenu`, `AccountMenu` 설정 링크, 햄버거 내 계정, 푸터 1:1 문의 → `/mypage/support`
- **커뮤니티**: 분류·해시태그·글쓰기·상세·좋아요·댓글·draft localStorage
- **양조장**: `BreweryReserveCard`, `BreweryIncludes`, `useTourReservation`, 햄버거 투어 예약
- **카카오**: `getKakaoRedirectUri()`가 origin + `/login/kakao/callback`만 사용. `.env.example`에서 Redirect 변수 제거
- **문서**: README 라우트 표·폴더 트리·Changelog 갱신

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [x] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

> `features/account/`에 types · data · hooks · components · pages · styles를 분리했습니다. hook/UI/CSS를 한 파일에 섞지 않았습니다.

---

## 🎯 Expected Impact
- 로그인 후 마이페이지에서 주문·NFT·쿠폰·배송지·결제·문의를 볼 수 있습니다.
- 고객센터/프로필에서 설정 5개 페이지로 이동합니다.
- 커뮤니티에서 본인 글을 쓰고 상세에서 좋아요·댓글을 남길 수 있습니다.
- 양조장 상세에서 날짜·타임·인원을 고를 수 있습니다.
- 배포 사이트에서 카카오 콜백이 localhost로 고정되지 않습니다.

---

## ⚠️ Impact Scope
- [x] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [x] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/account/` — 마이페이지·설정 페이지, 사이드바, mock, localStorage 훅
- `src/shared/providers/authProvider.tsx` · `src/shared/types/auth.ts` — `updateUser`, 프로필 필드
- `src/shared/components/navigation/` — `CustomerCenterMenu`, `AccountMenu`, `SiteHamburgerMenu`, `NavbarDesktopLinks`
- `src/features/community/` — 글쓰기·상세·분류·해시태그
- `src/features/brewery/` — 예약 카드·포함 사항
- `src/features/auth/data/kakao.ts` · `.env.example` · `src/vite-env.d.ts` — Redirect URI 제거
- `src/routing/routes.tsx` — `/mypage*` · `/account*` · `/community/new` · `/community/:id`
- `README.md` — 라우트·구조·Changelog

---

## 🔥 Breaking Changes
- 카카오: `VITE_KAKAO_REDIRECT_URI`는 더 이상 읽지 않습니다. Vercel에 이 변수가 있으면 **삭제**하세요. 카카오 콘솔에는 localhost와 배포 origin 콜백을 **둘 다** 등록합니다.
- 없음 (그 외 API/경로 호환). 기존 `/community` 목록은 유지됩니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 햄버거 → 마이페이지·설정 5항목·글쓰기. 마이페이지 사이드바·통계 카드가 세로로 쌓이는지 확인.
2. **태블릿 (600~999px)**
   - 프로필 이미지 드롭다운에서 설정 항목이 잘리는지 확인. 양조장 상세 예약 카드 폭 확인.
3. **데스크톱 (>=1000px)**
   - 상단 **고객센터**와 프로필 메뉴에서 `/account` 등 5페이지 이동. 마이페이지 좌측 노란 활성 메뉴, 우측 주문 표·NFT 3장.
4. **로그인**
   - 비로그인 `/mypage` → 로그인 안내. 로그인 후 프로필 저장, 배송지/결제 추가, 1:1 문의 등록.
5. **커뮤니티**
   - `/community/new` 임시저장·사진 10MB, `/community/:id` 좋아요·댓글. 본인 글만 보이는지 확인.
6. **양조장**
   - `/breweries/samhae` 날짜 스트립·11:00/13:30/15:30/17:30·인원·금액 CTA.
7. **카카오**
   - 로컬과 배포 각각에서 콜백이 해당 origin의 `/login/kakao/callback`인지 확인.

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저 E2E·lint는 이 환경에서 미실시)

---

## 📸 Screenshots / Videos
- 없음 (시안 `pc-my-page` / `pc-account-settings` 기준으로 구현)

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [ ] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- GitHub에서 이 PR을 머지하면 됩니다. base는 `feat/brewery-on-main`입니다.
- Vercel에서 `VITE_KAKAO_REDIRECT_URI`가 있으면 지우고 Redeploy 하세요.
- 브라우저에서 마이페이지·설정·커뮤니티·예약 카드 클릭 플로우를 한 번 봐 주세요.
- `npm run lint`와 상품 PDP는 이후 작업입니다.

---

## 📝 Additional Notes
- 커밋 89개. 마이페이지/설정 → 카카오 origin → 양조장 예약 → 커뮤니티 글쓰기/상세 → README 순입니다.
- 주문·쿠폰·NFT는 mock입니다. 배송지·결제·문의·프로필·알림은 브라우저 localStorage입니다.
- `.env`와 카카오 실키는 커밋하지 않았습니다.
- 이 브랜치: `feat/mypage-account-settings`
