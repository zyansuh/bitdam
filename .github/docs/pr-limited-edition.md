> 🚀 Feature: 크리에이터 한정판 펀딩 (`/limited`)

## 📌 PR Summary
- `/limited`는 조옥화 가문 × 민서 콜라보입니다. **테이스팅 레포트(레이다)** 가 본문 핵심입니다.
- **한정판 펀딩 선예약하기**는 로컬 접수입니다. 수익 15% 상생 펀딩 문구가 있습니다.
- **소문내기**는 `useShareUrl`로 이 페이지 URL을 공유합니다.
- 헤더에 「한정판」을 넣고, 데스크톱은 명절·한정·선물 줄로 슬림합니다.
- **이 PR은 `feat/holiday-tours` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 한정판은 BM이라 맛 프로필과 선예약·바이럴 공유가 같은 화면에 있어야 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/limited/` — 타입·카피·예약 훅·히어로·TasteRadar·스토리·구매 카드·페이지
- `/limited` 라우트, 헤더 슬림

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [ ] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `/limited`에서 레이다·선예약·URL 공유가 동작합니다.
- 실제 PG·펀딩 정산은 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/limited/**`
- `src/data/navLinks.ts`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 데스크톱 헤더에서 타임특가·구독·기업·기념주 링크가 빠집니다. 햄버거에 남아 있습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 구매 카드가 테이스팅 아래
2. **데스크톱 (>=1000px)** — 좌측 레이다 + 우측 스티키형 카드
3. 선예약 → 접수 문구
4. 소문내기 → 공유 시트 또는 주소 복사
5. 헤더 「한정판」

### 확인 결과
- [x] 정상 동작 확인
- [ ] 추가 확인 필요

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [ ] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- 위 스택: `docs/campaign-readme`

---

## 📝 Additional Notes
- 머지 순서: #51 → share-url → holiday-gift → daily → tours → **이 PR** → readme
