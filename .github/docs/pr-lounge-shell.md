> 🚀 Feature: 마이페이지 셀러 라운지 · ADMIN 전체 공방 조회

## 📌 PR Summary
- `/mypage/lounge`에 파트너 대시보드·상품 등록 4단계·주문·정산(CSV)·리포트·고객·구독을 넣습니다.
- **SELLER**는 `sellerId` 공방(한산/안동) 데이터만 봅니다.
- **ADMIN**은 상단에서 전체 또는 공방을 고릅니다. 일반 회원은 라운지 URL이 막힙니다.
- 입구는 마이페이지 카드·사이드바·헤더 계정 메뉴입니다.
- **이 PR은 `feat/workspace-roles` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 시안의 셀러 라운지는 쇼핑 마이페이지와 메뉴가 다릅니다.
- 직원은 모든 공방을, 셀러는 본인 판매분만 봐야 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/features/lounge/**`
- `/mypage/lounge/*` 라우트
- 마이페이지 카드·사이드바, AccountMenu

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `seolah@hansan.kr`은 한산 주문만, `admin@bitdam.kr`은 전체/안동 전환이 됩니다.
- 정산·상품은 로컬 mock이며 실제 PG·재고 API는 없습니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 공통 UI
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/lounge/`
- `src/features/account/pages/MypagePage.tsx`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)** — 마이페이지 카드 → 라운지 사이드바가 접히는지 확인
2. **셀러** — `seolah@hansan.kr` / `bitdam1234` → 한산 KPI·상품만
3. **직원** — `admin@bitdam.kr` → 조회 범위 전체 / 안동 공방
4. **회원** — 일반 가입 후 `/mypage/lounge` 차단 문구
5. 상품 등록 4단계 · 정산 CSV 다운로드

### 확인 결과
- [x] 정상 동작 확인

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [ ] 이번 변경에 맞춰 README를 갱신했다
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- README는 `docs/lounge-readme`에서 갱신합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/ir-readme` → `feat/workspace-roles` → **이 PR** → `docs/lounge-readme`
