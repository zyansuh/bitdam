> 🚀 Refactor: 공용 SiteHeader와 src/data 네비 정리

## 📌 PR Summary
- 카탈로그·양조장·기본 헤더가 아이콘과 고객센터 드롭다운을 복제하던 구조를 `SiteHeader`로 합쳤습니다.
- **고객센터**는 `/help` 링크입니다. 설정은 프로필 메뉴와 햄버거에만 둡니다. `CustomerCenterMenu`는 삭제했습니다.
- `shared`가 `features/account`를 import하지 않도록 `settingsNav`·계정 링크를 `src/data`로 옮겼습니다.
- README에 고객센터·알림·SiteHeader를 반영했습니다.
- **머지 순서:** #30 → help/notify PR → **이 PR**.

---

## 🔍 Background / Why
- feature 헤더가 서로·shared가 feature data를 참조하면 폴더 규칙이 깨집니다.
- 고객센터 버튼이 설정 드롭다운이면 FAQ 페이지(`/help`)와 헷갈립니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `Navbar` · `CatalogHeader` · `BrewerySiteHeader` → `SiteHeader` + 링크/톤만 전달
- `src/data/settingsNav.ts`, `headerAccountLinks.ts`
- `CustomerCenterMenu` 삭제
- 카탈로그·양조장 링크에 `고객센터` 추가
- `isTourNavActive` 유틸 분리

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

> 공용 헤더·링크 데이터는 `shared/` + `src/data/`. 페이지별 링크만 feature `data/`에 둡니다.

---

## 🎯 Expected Impact
- 헤더 아이콘 순서가 전 페이지에서 같습니다.
- 고객센터는 FAQ로, 설정은 프로필로 나뉩니다.

---

## ⚠️ Impact Scope
- [x] 전체 프로젝트
- [ ] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/shared/components/navigation/SiteHeader.tsx` · `Navbar.tsx` · `AccountMenu.tsx`
- `src/features/catalog/components/CatalogHeader.tsx`
- `src/features/brewery/components/BrewerySiteHeader.tsx`
- `src/data/settingsNav.ts` · `headerAccountLinks.ts`
- `README.md`

---

## 🔥 Breaking Changes
- 헤더 **고객센터** 클릭이 설정 드롭다운이 아니라 `/help`로 이동합니다. 설정은 프로필 이미지를 누르면 됩니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 햄버거 고객센터 분기·내 계정 설정 항목.
2. **태블릿 (600~999px)**
   - 프로필 드롭다운에 마이페이지·알림·설정.
3. **데스크톱 (>=1000px)**
   - 홈/상품/양조장/고객센터 헤더에서 고객센터 → FAQ. 드롭다운 없음.
4. 검색·테마·장바구니·프로필 아이콘 순서 비교.

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
- [x] 이번 변경에 맞춰 README를 갱신했다
- [ ] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- help/notify PR 머지 후 이 PR 머지.
- 브라우저에서 헤더 네 종류(기본·카탈로그 light/navy·양조장)를 확인하세요.

---

## 📝 Additional Notes
- base: `feat/help-and-notify`
- 고객센터 FAQ 페이지 자체는 이전 PR에 있습니다.
