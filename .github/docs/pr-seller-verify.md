> 🚀 Feature: 셀러 사업자 인증 후 본인 양조장만 연다

## 📌 PR Summary
- 셀러는 사업자등록번호·대표자 인증을 통과하기 전에 라운지 데이터를 보지 못합니다.
- 인증에 성공하면 빚담 지도의 해당 양조장·공방만 `sellerId`로 고정됩니다.
- 데모: `seolah@hansan.kr` / `bitdam1234` 로그인 뒤 `314-81-67890` · 대표 김설아.
- **이 PR은 `docs/lounge-readme` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 이메일만으로 한산/안동을 미리 넣으면 다른 공방 데이터가 새어 나갑니다.
- 입점 명단은 카탈로그 양조장과 같아야 합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `AuthUser` / 이메일 계정에 `sellerBizNo` · `sellerVerified`
- `SELLER_LICENSES` · `SELLER_SHOPS`를 `BREWERIES`에서 생성
- `LoungeVerifyModal` · `/mypage/lounge/verify`
- 미인증 셀러는 라운지 레이아웃에서 인증 모달만 표시

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] 컴포넌트(components) 분리/추가
- [x] hooks 분리/추가
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- 한산 번호로 인증하면 한산 소곡주 양조장만 보입니다.
- 안동 `512-81-23456` / 박안동도 동일합니다.
- 일반 회원은 마이페이지 카드에서 인증하면 셀러로 전환됩니다.
- 국세청 실시간 조회는 없고 로컬 입점 명단 매칭입니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/lounge/`
- `src/features/auth/`
- `src/shared/types/auth.ts`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 데모 셀러 이메일이 더 이상 공방을 자동 지정하지 않습니다. 로그인 후 인증이 필요합니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **셀러** `seolah@hansan.kr` / `bitdam1234` → 라운지에 인증 모달
2. `314-81-67890` · 김설아 → 한산 공방 카드 → 입점 → 한산 주문만
3. 안동 계정은 `512-81-23456` · 박안동
4. **회원** 마이페이지 → 내 공방 사전 지정
5. **ADMIN**은 인증 없이 전체 공방 조회

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
- README는 `docs/seller-verify-readme`에서 갱신합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/lounge-readme` → **이 PR** → `docs/seller-verify-readme`
