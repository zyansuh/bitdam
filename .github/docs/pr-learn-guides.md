> 🚀 feat: add 100 brewing study cards and a daily AI desk

## 📌 PR Summary
- 홈 빚담 이야기를 브랜드 `/story`와 분리하고, `/learn` 허브와 `/learn/:slug` 카드 100장을 엽니다.
- 🍶 3분 양조상식 · 🔥 증류 · 🌾 우리 술 · 🪵 숙성 · 🌍 세계 술 태그와 원리/과정 안내를 붙입니다.
- 날짜가 바뀌면 오늘의 카드가 바뀌고, CMS에서 AI 초안을 날짜에 맞춰 예약할 수 있습니다.
- **이 PR은 `merge/stack-into-main` 위에 쌓입니다.**

---

## 🔍 Background / Why
- 소규모 양조장 상식을 공부용 짧은 콘텐츠로 모으고, 증류는 면허·안전을 지키며 설명해야 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/learn/**` 타입·데이터·카드·허브·상세·CMS 데스크
- 헤더·햄버거·홈 티저·라우트
- `README.md`

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- 방문객이 막걸리·증류·숙성·세계 술을 카드 단위로 읽을 수 있습니다.
- 직원은 OpenAI 키(선택)로 초안을 받아 공개일을 예약합니다. 서버 크론은 없습니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 공통 UI
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/learn/` — 술 상식
- `src/features/home/components/HomeStoryTeaser.tsx` — 오늘의 카드
- `src/routing/routes.tsx` — `/learn`, `/mypage/admin/content/learn`

---

## 🔥 Breaking Changes
- 없음. 홈 스토리 카드 링크가 `/story` 대신 `/learn/:slug`로 바뀝니다.

---

## 🧪 How to Test

### 기본 확인
- [ ] `npm install`
- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 헤더/햄버거에서 술 상식, `/learn` 카드 탭, 상세 본문·핵심 정리
2. **태블릿 (600~999px)**
   - 태그 칩과 분류 블록이 두 줄로 읽히는지
3. **데스크톱 (>=1000px)**
   - 홈 오늘의 카드 + 대표 글, `/learn/how-makgeolli-is-made`
4. `admin@bitdam.kr`로 `/mypage/admin/content/learn`에서 예약(키 없으면 로컬 뼈대)

### 확인 결과
- [ ] 추가 확인 필요 (브라우저 E2E는 이 세션에서 미실시)

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- 전문가 검수·사진·검색·상품 연결
- OpenAI 키를 서버로 옮기고, 미공개 초안 URL을 막기
- 롤업 PR `#121` 머지 후 이 브랜치를 `main`에 맞추기

---

## 📝 Additional Notes
- 머지 순서: `merge/stack-into-main` → **이 PR**
- 글은 사이트용 상식 카피이며 제조·판매 매뉴얼이 아닙니다.
