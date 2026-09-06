> 🚀 Feature: 고객센터 FAQ 분류 페이지와 알림 센터

## 📌 PR Summary
- 시안 기준으로 고객센터 FAQ를 주문/결제·배송·교환/반품·회원·포인트·기타 **각각 페이지**로 만들었습니다.
- 각 페이지에 **자주 묻는 질문 > 분류명**과 예상 Q&A 아코디언, 검색, 1:1·챗봇 카드를 넣었습니다.
- 알림 센터(`/notifications`)에 전체·주문/배송·이벤트·커뮤니티·시스템 필터와 읽음 처리를 넣었습니다.
- 고객센터가 catalog 헤더를 끌어쓰지 않도록 공용 `SiteHeader`(navy 톤)를 추가했습니다.
- 이 PR은 `feat/mypage-account-settings` 위에 쌓입니다. **먼저 #30을 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 고객센터·알림 시안이 있었지만 FAQ 분류 페이지와 알림 허브가 없었습니다.
- 도움말 UI가 카탈로그 헤더에 의존하면 feature 폴더 규칙을 깨뜨립니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- **고객센터** `/help` → `/help/shipping`, `/help/:category`, `/help/chat`
- **알림 센터** `/notifications` — 탭, 모두 읽음, localStorage
- **`src/data/helpNav.ts`** — FAQ 분류 경로
- **`SiteHeader`** — help 레이아웃용 공용 헤더 + `navbar--navy`
- 푸터·햄버거 고객센터 분기, 기본 헤더 `고객센터` 링크

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

> `features/help`, `features/notify`에 types/data/hooks/components/pages/styles를 분리했습니다.

---

## 🎯 Expected Impact
- FAQ 분류마다 다른 주소로 들어가고 검색할 수 있습니다.
- 알림을 종류별로 보고 읽음 처리할 수 있습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [x] 공통 UI
- [ ] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/help/` — FAQ
- `src/features/notify/` — 알림 센터
- `src/data/helpNav.ts` · `siteMenu.ts` · `navLinks.ts` · `footerLinks.ts`
- `src/shared/components/navigation/SiteHeader.tsx`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음. 기존 `/mypage/support` 1:1 문의는 유지됩니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)**
   - 햄버거 고객센터 분기 → 각 FAQ. 사이드바·검색이 세로로 쌓이는지 확인.
2. **태블릿 (600~999px)**
   - FAQ 아코디언 열고 닫기, 검색어 `배송`/`반품`.
3. **데스크톱 (>=1000px)**
   - 헤더 고객센터 → `/help/shipping`. 왼쪽 분류 6개 페이지 이동.
4. `/notifications` 탭·모두 읽음. `/help/chat` 카드.

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저 E2E)

---

## 📸 Screenshots / Videos
- 없음 (시안 알림 센터 / 고객센터 기준)

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [ ] 이번 변경에 맞춰 README를 갱신했다
- [ ] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- #30 머지 후 이 PR 머지.
- 이어서 `feat/site-header-unify` PR에서 헤더 중복을 정리합니다.
- README 라우트 표는 헤더 정리 PR에서 같이 갱신합니다.

---

## 📝 Additional Notes
- base: `feat/mypage-account-settings`
- 헤더 통합(CatalogHeader/Brewery 공용화, CustomerCenterMenu 삭제)은 다음 PR입니다.
