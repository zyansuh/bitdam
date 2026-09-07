> 🚀 Feature: ADMIN이 공지·커뮤니티 전 글을 수정하고 모든 워크스페이스 권한을 갖는다

## 📌 PR Summary
- `isAdminRole`이 모든 `can*` 게이트를 통과합니다. 사업자 인증도 ADMIN에게는 요구하지 않습니다.
- ADMIN은 시드 공지를 포함해 공지를 수정·삭제할 수 있습니다 (`/notices/:id/edit`).
- ADMIN은 커뮤니티에서 전체 글을 보고 수정·삭제할 수 있습니다 (`/community/:id/edit`).
- 일반 회원은 본인 커뮤니티 글만 수정합니다. 직원·팀장의 공지 **신규 작성** 범위는 그대로입니다.
- **이 PR은 `docs/staff-grades-readme` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 운영자가 시드 공지와 다른 회원 글을 고치지 못하면 데모 CMS가 성립하지 않습니다.
- 권한 헬퍼마다 `admin`을 빠뜨리면 새 기능에서 ADMIN이 막힐 수 있어 공통 short-circuit이 필요합니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `isAdminRole` + `canModerateContent`
- 공지 upsert/숨김 삭제, 상세 수정·삭제
- 커뮤니티 moderate 목록·수정 페이지

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] hooks 분리/추가
- [x] 컴포넌트 분리/추가
- [x] 스타일 / UI 수정
- [x] 라우팅 수정

> 폴더 분류 규칙(`components/`, `pages/`, `hooks/`, `data/` 등)을 지켰는지 반드시 확인하세요.

---

## 🎯 Expected Impact
- `admin@bitdam.kr` / `bitdam1234`로 공지 상세에서 수정·삭제, 커뮤니티 「전체 글 목록」
- 라운지·구성원·성과·스토리·중요 공지는 기존처럼 ADMIN 포함
- 로컬 `localStorage`만 바뀝니다. 서버 ACL은 없습니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리
- [x] 라우팅

### 영향 받는 주요 영역
- `src/shared/utils/workspaceRole.ts`
- `src/features/notice/`
- `src/features/community/`
- `src/routing/routes.tsx`

---

## 🔥 Breaking Changes
- 없음. 회원 커뮤니티는 계속 본인 글만 목록에 보입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)**
   - 공지 상세 수정·삭제 버튼이 줄바꿈되어 보이는지
2. **태블릿 (600~999px)**
   - 커뮤니티 전체 목록 카드
3. **데스크톱 (>=1000px)**
   - `/notices/:id/edit`, `/community/:id/edit`
4. 직원 계정은 기존 공지 수정 버튼이 없고, ADMIN만 있는지

### 확인 결과
- [x] 정상 동작 확인

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
- README는 `docs/admin-moderate-readme`에서 갱신합니다.

---

## 📝 Additional Notes
- 머지 순서: `docs/staff-grades-readme` → **이 PR** → `docs/admin-moderate-readme`
