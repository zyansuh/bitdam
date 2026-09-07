> 🚀 Feature: 직원·팀장 등급과 ADMIN 구성원 콘솔

## 📌 PR Summary
- 등급을 `member` / `seller` / `staff`(직원) / `lead`(팀장) / `admin`으로 나눕니다.
- **직원·팀장**은 라운지에서 전체 공방을 고를 수 있습니다. 셀러는 인증된 본인 공방만 봅니다.
- **ADMIN**은 가입 계정에 등급을 주고, 직원·팀장 성과 보드를 봅니다.
- 팀장은 공지 중요 표시와 스토리 히어로 카피를 바꿀 수 있습니다. 직원은 일반 공지 작성만 가능합니다.
- **이 PR은 `docs/seller-verify-readme` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 회사 직원과 입점 셀러의 권한이 같아지면 다른 공방 데이터와 CMS가 섞입니다.
- 회원가입 계정에 ADMIN이 등급을 줘야 입사 플로우가 됩니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `WorkspaceRole` + 권한 헬퍼
- `/mypage/admin/people` · `/mypage/admin/performance`
- 라운지 `canPickAllShops`
- 공지 작성 ACL, 스토리 히어로 오버라이드

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] hooks 분리/추가
- [x] 컴포넌트 분리/추가
- [x] 라우팅 수정

---

## 🎯 Expected Impact
- `staff@bitdam.kr`은 전체 공방 조회 + 일반 공지 작성
- `lead@bitdam.kr`은 스토리 수정 + 중요 공지
- `admin@bitdam.kr`은 구성원 등급 부여와 성과 테이블
- 성과 숫자는 로컬 데모입니다. 실제 HR/정산 API는 없습니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/features/staff/`
- `src/shared/utils/workspaceRole.ts`
- `src/features/notice/`
- `src/features/brand/pages/BrandStoryPage.tsx`

---

## 🔥 Breaking Changes
- 공지 글쓰기 버튼은 직원 이상만 보입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. ADMIN `admin@bitdam.kr` / `bitdam1234` → 구성원 권한에서 회원가입 계정을 직원으로
2. 직원 `staff@bitdam.kr` → 라운지 전체 공방 셀렉트, 공지 작성, 중요 체크 없음
3. 팀장 `lead@bitdam.kr` → `/story` 히어로 저장, 공지 중요
4. 셀러는 여전히 사업자 인증 후 본인 공방만

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
- README는 `docs/staff-grades-readme`에서 갱신합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/seller-verify-readme` → **이 PR** → `docs/staff-grades-readme`
