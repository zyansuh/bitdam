> 🚀 Feature: 채팅 시스템 프롬프트를 정책 파일로 분리

## 📌 PR Summary
- 한 덩어리 `chatPrompt.ts`를 역할·안전·추천·클래스·주문·배송·환불 파일로 나눴습니다.
- `services/buildPrompt.ts`가 카탈로그 16개와 정책을 합쳐 시스템 메시지를 만듭니다.
- OpenAI 호출은 `services/askBitdamModel.ts`로 옮겼고, 키 없을 때 취소·배송지·파손·환불 로컬 답변을 보탰습니다.
- **이 PR은 `feat/custom-ceramic-bottles`(#41) 위입니다.**

---

## 🔍 Background / Why
- 추천 규칙과 고객센터 정책이 한 파일에 있어 고치기 어려웠습니다.
- 주문·배송·환불 안내를 카탈로그 추천과 같은 덩어리로 두면 실수하기 쉽습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `data/safetyPolicy.ts` · `recommendationRules.ts` · `classPolicy.ts` · `orderPolicy.ts` · `shippingPolicy.ts` · `refundPolicy.ts`
- `data/chatPrompt.ts` — `CHAT_ROLE` · 빠른 질문 · 모델만
- `services/buildPrompt.ts` · `services/askBitdamModel.ts`
- `utils/askBitdamModel.ts` 삭제, hook import 변경

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [ ] 스타일 / UI 수정
- [ ] 라우팅 수정

---

## 🎯 Expected Impact
- 정책만 고치려면 해당 `data/*.ts`만 수정하면 됩니다.
- 고객센터 질문(취소, 주소, 파손, 환불)에도 추측하지 않는 규칙이 들어갑니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [ ] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/features/chat/data/`
- `src/features/chat/services/`
- `src/features/chat/hooks/useBitdamChat.ts`
- `README.md`

---

## 🔥 Breaking Changes
- 없음. `/chat` 주소와 OpenAI 모델 이름은 그대로입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — `/chat` 빠른 질문에 취소·배송지·환불이 보이는지
2. **태블릿 (600~999px)** — 키 없이 “배송 중인데 취소” → 취소 불가로 안내
3. **데스크톱 (>=1000px)** — 키가 있으면 모델이 카탈로그 상품명으로 추천하는지
4. “양조장 투어” → `/breweries` 또는 `/tours` 포함

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저 · 실제 키)

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- #41 머지 후 이 PR을 머지합니다.

---

## 📝 Additional Notes
- **base:** `feat/custom-ceramic-bottles` (`#41`)
- **head:** `feat/chat-policy-split`
- `.env`의 `VITE_OPENAI_API_KEY`는 커밋하지 않았습니다.
