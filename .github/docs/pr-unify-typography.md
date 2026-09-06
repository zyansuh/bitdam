> 🚀 Style: 제목 MaruBuri · 본문 Pretendard로 전역 타이포 정리

## 📌 PR Summary
- 제목은 MaruBuri, 본문·버튼·네비·표는 Pretendard로 전역 규칙을 맞췄습니다.
- 로고용 나눔명조를 실제로 로드합니다. 예전에는 `font-logo`만 있고 파일이 없어 Batang으로 떨어졌습니다.
- 상품 카드·추천 상품·채팅 상품 이름은 제목 폰트, 브랜드 스토리 마지막 문장은 본문 폰트입니다.
- 푸터 컬럼 제목은 UI라 Pretendard를 유지합니다 (`h4` 전역 세리프가 덮지 않게).
- **이 PR은 `feat/notices-and-chat`(#34) 위에 쌓입니다. #34를 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- README는 Nanum Myeongjo + Noto Sans KR인데, 토큰은 이미 MaruBuri + Pretendard였습니다.
- `typography.css`가 `h1`/`h2`만 제목 폰트라 페이지마다 본문·제목이 섞였습니다.
- 상품 이름은 본문 산세리프, 스토리 본문은 세리프로 역할이 뒤집힌 곳이 있었습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/shared/styles/typography.css` — `h1`–`h6` 세리프, `p`·표·폼·네비·푸터는 산세리프
- `src/shared/styles/fonts.css` — Google Fonts 나눔명조 400/700
- 상품·카탈로그·채팅 이름 `font-serif`, 스토리 클로징 문장 본문, 푸터 헤딩 `font-sans`
- README 타이포 표와 Changelog 갱신

### 2. 세부 변경 사항
- [ ] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [ ] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

> hook/component를 섞지 않았고 스타일·문서만 고쳤습니다.

---

## 🎯 Expected Impact
- 모든 페이지에서 제목과 본문 글꼴이 같은 규칙을 씁니다.
- 헤더 로고 「빚담」이 나눔명조로 보입니다.
- 토큰(`--font-serif` / `--font-sans`)만 바꾸면 전 사이트가 따라갑니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [ ] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/shared/styles/typography.css` · `fonts.css`
- `src/shared/styles/product/product-card.css`
- `src/shared/styles/layout/footer.css`
- `src/features/catalog/styles/catalog.css`
- `src/features/brand/styles/brand-story.css`
- `src/features/chat/styles/chat.css`
- `README.md`

---

## 🔥 Breaking Changes
- 없음. 폰트 패밀리 토큰 이름은 그대로입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 홈 Hero 제목(MaruBuri) vs 리드 문장(Pretendard), 네비는 Pretendard.
2. **태블릿 (600~999px)**
   - `/products` 카드 이름이 제목 폰트인지. 푸터 컬럼 제목은 본문 폰트인지.
3. **데스크톱 (>=1000px)**
   - `/story` 제목은 세리프, 마지막 클로징 문장은 산세리프.
   - `/chat` 추천 상품 카드 이름 세리프. 로고 「빚담」 나눔명조.
4. 공지·마이페이지 `h1`이 세리프인지, 표·FAQ 본문이 산세리프인지.

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저에서 글꼴 확인)

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료 (`npm run build`)
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- **#34를 먼저 머지**한 뒤 이 PR을 머지합니다.
- `feat/site-header-unify` → `main`이 아직이면, 그 스택을 `main`에 올린 뒤에 배포에 반영됩니다.

---

## 📝 Additional Notes
- **base:** `feat/notices-and-chat` (`#34`)
- **head:** `style/unify-typography`
- 제목 폰트를 나눔명조로 바꾸려면 `tokens.css`의 `--font-serif`만 바꾸면 됩니다.
