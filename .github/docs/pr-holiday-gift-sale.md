> 🚀 Feature: 명절 선물세트 할인전 (`/holiday/gifts`)

## 📌 PR Summary
- `/holiday/gifts`는 추석(명절) 세트 최대 30% 할인전입니다. 남은 시간, 효도/비즈니스/연인/친구 탭, 가격·구성·받는 분 필터가 있습니다.
- 카드의 선물하기는 기존 `/gift`로 갑니다. 마켓 `/products`는 그대로입니다.
- 헤더·햄버거·푸터에 「추석 특별관」을 넣고, 기존 응모 페이지는 「추석 응모」로 남깁니다.
- **이 PR은 `feat/share-url` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 명절마다 세트 할인전을 열고, 응모 이벤트와는 다른 쇼핑 허브가 필요했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/holidayGift/` — 타입·세트·필터 훅·히어로·필터·그리드·페이지
- `/holiday/gifts` 라우트와 네비

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
- `/holiday/gifts`에서 필터 후 `/gift`로 넘어갈 수 있습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [ ] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/holidayGift/**`
- `src/routing/routes.tsx`
- `src/data/navLinks.ts` · `siteMenu.ts` · `footerLinks.ts`

---

## 🔥 Breaking Changes
- 없음. `/events/chuseok` 응모는 유지합니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — 필터가 그리드 위
2. **태블릿 (600~999px)** — 카드 2열
3. **데스크톱 (>=1000px)** — 좌측 필터 + 그리드, 히어로 카운트다운
4. 효도선물·15만원 이상 체크 시 목록이 줄어드는지
5. 선물하기 → `/gift`

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
- 위 스택: `feat/daily-lucky-bag`

---

## 📝 Additional Notes
- 머지 순서: #51 → share-url → **이 PR** → daily → tours → limited → readme
