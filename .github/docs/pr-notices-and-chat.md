> 🚀 Feature: 공지사항 게시판과 빚담 추천 AI 채팅

## 📌 PR Summary
- 시안형 공지사항(`/notices`)을 분류 탭·5페이지 페이징·작성·상세·모아보기로 추가했습니다.
- 빚담 추천 AI(`/chat`)를 왼쪽 대화 목록 + OpenAI `gpt-4o-mini`로 붙였습니다. 키가 없으면 로컬 규칙 답변으로 동작합니다.
- 시스템 프롬프트(`chatPrompt.ts`)에 19세 제한, 카탈로그 전용 상품명, 페어링·선물·양조장(`/breweries`)·클래스(`/classes`) 규칙을 넣었습니다.
- 고객센터 챗봇 카드와 `/help/chat`은 `/chat`으로 보냅니다. 햄버거·푸터에 공지·AI 링크를 넣었습니다.
- **이 PR은 `feat/site-header-unify` 위에 쌓입니다.** 머지 순서: **#30 → #31 → #32 → 이 PR**.

---

## 🔍 Background / Why
- 고객센터에는 FAQ·알림만 있고 공지 게시판과 실제 추천 챗이 없었습니다.
- `/help/chat`은 고정 말풍선 스텁이라 전통주 추천을 할 수 없었습니다.
- 파인튜닝 없이 카탈로그·페어링 규칙을 시스템 프롬프트로 고정해야 했습니다.
- `VITE_OPENAI_API_KEY`는 로컬 `.env`에만 두고 레포에는 커밋하지 않습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- **공지** `/notices` · `/notices/new` · `/notices/:id` · `/notices/digest` — 전체/서비스/이벤트/배송안내 탭, 5건×5페이지, 중요 토글, localStorage 작성분
- **채팅** `/chat` — 스레드 목록, 빠른 질문, 상품 카드(답변에 카탈로그 상품명이 있을 때), OpenAI 또는 로컬 폴백
- **`src/features/chat/data/chatPrompt.ts`** — `BITDAM_SYSTEM_PROMPT` + `CHAT_QUICK_REPLIES` + `OPENAI_MODEL`
- **환경** `.env.example`에 주석 `# VITE_OPENAI_API_KEY=`만 추가. `.env`는 gitignore
- **연결** `siteMenu` 고객센터 분기, 푸터 고객지원, Help 챗봇 카드 → `/chat`

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

> `features/notice`, `features/chat`에 types / data / hooks / utils / styles / components / pages를 분리했습니다.

---

## 🎯 Expected Impact
- 공지를 분류·페이지·상세·모아보기로 볼 수 있고, 작성한 글은 브라우저에 남습니다.
- `/chat`에서 전통주를 물어보면 프롬프트 규칙 + 카탈로그 안에서 답합니다.
- 키가 없어도 화면은 열리고 로컬 추천이 나갑니다. Vercel에 `VITE_OPENAI_API_KEY`를 넣으면 Preview/Production도 모델을 씁니다.
- `/help/chat` 북마크는 `/chat`으로 바뀝니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/notice/` — 공지 게시판
- `src/features/chat/` — 추천 AI
- `src/features/help/pages/HelpChatPage.tsx` — `/chat` 리다이렉트
- `src/features/help/components/HelpActionCards.tsx` — 챗봇 카드
- `src/data/siteMenu.ts` · `src/data/footerLinks.ts`
- `src/routing/routes.tsx` · `src/index.css`
- `.env.example` · `src/vite-env.d.ts` · `README.md`

---

## 🔥 Breaking Changes
- `/help/chat`은 더 이상 고객센터 레이아웃의 스텁 챗이 아닙니다. `Navigate`로 `/chat`에 붙습니다.
- 시크릿이 레포에 없습니다. 배포에서 모델 답변을 쓰려면 Vercel Environment Variables에 `VITE_OPENAI_API_KEY`를 넣고 **재배포**해야 합니다.
- `VITE_` 키는 번들에 들어갑니다. 장기적으로는 서버 프록시가 필요합니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공 (이 PR 푸시 전 로컬에서 확인)
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - `/notices` 탭·페이지·행 탭. `/chat` 스레드 목록과 입력창이 세로로 쌓이는지.
2. **태블릿 (600~999px)**
   - `/notices/new`에서 중요 토글 후 저장 → 목록·상세에 보이는지.
   - `/notices/digest` 중요·최근 묶음.
3. **데스크톱 (>=1000px)**
   - 햄버거 고객센터 → 공지사항 / 공지 모아보기 / AI 추천.
   - 푸터 고객지원 같은 링크.
   - `/help` 챗봇 카드 → `/chat`.
4. **OpenAI**
   - `.env`에 `VITE_OPENAI_API_KEY`가 있으면 헤더가 “OpenAI로 추천 중입니다.”
   - 없으면 로컬 폴백 문구. 키를 커밋하지 않았는지 확인.
   - “매운 음식이랑 먹을 술” 빠른 질문 → 카탈로그 상품명이 답에 나오는지, 카드가 붙는지.
   - “양조장 투어” / “시음 클래스” → `/breweries`, `/classes`가 답에 있는지.

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저 E2E · 실제 키 호출은 로컬 `.env`)

---

## 📸 Screenshots / Videos
- 없음 (공지 테이블 시안 + `/chat` 좌측 목록 레이아웃)

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료 (`npm run build`)
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료
- [x] `.env` / 실제 API 키를 커밋하지 않았다

---

## 🚀 Next Steps
- **#30 → #31 → #32를 먼저 머지**한 뒤 이 PR을 머지합니다.
- Vercel에 `VITE_OPENAI_API_KEY`를 Production/Preview에 넣고 Redeploy (원하면).
- 운영 전에는 OpenAI 호출을 서버 또는 serverless로 옮기세요.

---

## 📝 Additional Notes
- **base:** `feat/site-header-unify` (`#32`)
- **head:** `feat/notices-and-chat`
- 로컬 `.env`의 키는 작성자 머신에만 있습니다. `.env.example`은 주석 한 줄입니다.
- 프롬프트 교육은 Fine-tuning이 아니라 `BITDAM_SYSTEM_PROMPT`입니다. 말투·규칙을 바꾸려면 그 파일만 고치면 됩니다.
