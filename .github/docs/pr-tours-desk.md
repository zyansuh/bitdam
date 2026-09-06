> 🚀 Feature: 권역별 양조장 투어 예약 창 (`/tours`)

## 📌 PR Summary
- **투어 예약**이 삼해 상세만 열지 않고 `/tours`에서 권역 → 양조장 → 정보 → 예약 창으로 갑니다.
- 선택한 도가의 이야기·프로그램·운영·요금이 보이고, 기존 `BreweryReserveCard`로 날짜·인원을 신청합니다.
- 햄버거·양조장 헤더·푸터·홈 배너·FAQ를 `/tours`에 맞췄습니다.
- **이 PR은 `feat/story-ugly-fruit`(#38) 위입니다.**

---

## 🔍 Background / Why
- 투어 예약이 `/breweries/samhae` 한 곳만 열어서 지역별로 고를 수 없었습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `listBreweriesByRegion` · `useTourDesk`
- `TourBreweryPicker` · `TourBreweryInfo` · `TourReservePage` · `brewery-tour.css`
- `/tours` 라우트 · 네비 · 홈 CTA · FAQ

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- 권역을 고르면 그 지역 양조장 정보와 예약 창이 같이 열립니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/brewery/`
- `src/data/siteMenu.ts` · `footerLinks.ts`
- `src/routing/routes.tsx`
- `src/features/home/components/PromoBanner.tsx`

---

## 🔥 Breaking Changes
- 헤더·햄버거의 **투어 예약** 주소가 `/breweries/samhae`에서 `/tours`로 바뀝니다. 상세 예약 카드는 `/breweries/:id`에 그대로 있습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — `/tours` 권역·목록·정보·예약이 세로로 쌓이는지
2. **태블릿 (600~999px)** — 권역을 바꿔 목록이 바뀌는지
3. **데스크톱 (>=1000px)** — 3열, 헤더 투어 예약이 `/tours`인지
4. 양조장 선택 후 날짜·인원 신청 · 상세 보기 링크

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저)

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

> README `/tours` 행은 다음 병 미리보기 PR의 changelog와 한 커밋에 있습니다.

---

## 🚀 Next Steps
- #38 머지 후 이 PR. 이어서 도자기 병 PR.

---

## 📝 Additional Notes
- **base:** `feat/story-ugly-fruit` (`#38`)
- **head:** `feat/tours-desk`
