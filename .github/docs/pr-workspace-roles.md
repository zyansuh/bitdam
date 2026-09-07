> 🚀 Feature: 로그인에 ADMIN / SELLER 워크스페이스 역할

## 📌 PR Summary
- 세션 유저에 `workspaceRole`(`member` | `seller` | `admin`)과 `sellerId`를 붙입니다.
- 데모 계정: 직원 `admin@bitdam.kr`, 한산 셀러 `seolah@hansan.kr`, 안동 셀러 `seller@andong.kr` / 비밀번호 `bitdam1234`.
- 일반 회원가입은 항상 `member`입니다. 카카오 로그인도 명단에 없으면 회원입니다.
- **이 PR은 `docs/ir-readme` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 회사 직원과 입점 셀러는 마이페이지 뒤에 다른 화면이 필요합니다.
- 역할은 UI보다 먼저 세션에 있어야 가드가 동작합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `AuthUser` · `EmailAccount` 역할 필드
- `src/data/staffRoster.ts` · `demoStaff.ts` · account/auth storage hydrate
- 로그인 폼 데모 안내

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] hooks 분리/추가
- [x] 스타일 / UI 수정

> 라운지 페이지는 다음 PR입니다.

---

## 🎯 Expected Impact
- 데모 이메일로 로그인하면 역할이 세션에 남습니다.
- `/mypage/lounge`는 아직 없습니다.

---

## ⚠️ Impact Scope
- [x] 상태관리
- [x] 특정 페이지

### 영향 받는 주요 영역
- `src/shared/types/auth.ts`
- `src/features/auth/**`
- `src/data/staffRoster.ts`

---

## 🔥 Breaking Changes
- 없음. 기존 세션은 hydrate 후 명단에 없으면 `member`.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. `/login`에서 데모 이메일이 보이는지 확인
2. `admin@bitdam.kr` / `bitdam1234` 로그인 후 프로필이 유지되는지 확인
3. 새 회원가입 계정은 라운지 카드가 없는지(다음 PR 후) 확인

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
- `feat/lounge-shell`에서 마이페이지 라운지를 붙입니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/ir-readme` → **이 PR** → `feat/lounge-shell` → `docs/lounge-readme`
