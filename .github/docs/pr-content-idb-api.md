> 🚀 Feature: 공지·커뮤니티를 IndexedDB API로 옮겨 localStorage를 졸업한다

## 📌 PR Summary
- `bitdamIdb` 키-값 헬퍼로 `notices.*` / `community.posts`를 비동기 저장합니다.
- `noticeApi` · `communityApi`가 list/get/save/delete를 담당하고, 기존 localStorage는 최초 한 번만 마이그레이션합니다.
- 공지·커뮤니티 훅과 페이지는 `ready` 뒤에 렌더해 빈 화면으로 리다이렉트하지 않습니다.
- **이 PR은 `feat/community-public-feed` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 공지·커뮤니티가 localStorage에 묶여 있으면 이후 서버 API로 바꾸기 어렵고, 용량·동기 가정도 남습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `src/shared/utils/bitdamIdb.ts`
- `src/features/notice/api/noticeApi.ts`
- `src/features/community/api/communityApi.ts`
- 보드·상세·작성·피드 훅의 async load

### 2. 세부 변경 사항
- [x] 디렉토리 / 파일 구조 변경
- [x] hooks 분리/추가
- [x] import / path 수정

---

## 🎯 Expected Impact
- 공지 작성·커뮤니티 글이 DevTools Application → IndexedDB `bitdam` / `kv`에 보입니다.
- 한 번 마이그레이션되면 `bitdam.notices.*` · `bitdam.community.posts` 키는 지워집니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리

### 영향 받는 주요 영역
- `src/shared/utils/bitdamIdb.ts`
- `src/features/notice/`
- `src/features/community/`

---

## 🔥 Breaking Changes
- 없음. 기존 localStorage 글은 첫 로드에서 IndexedDB로 옮깁니다. 서버 DB는 아직 없습니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)**
   - 공지 목록 로딩 문구 후 시드 공지
2. **태블릿 (600~999px)**
   - 커뮤니티 글 작성 후 새로고침해도 유지
3. **데스크톱 (>=1000px)**
   - Application IndexedDB `bitdam`
4. 공지 수정 화면이 빈 폼으로 깜빡이지 않는지

### 확인 결과
- [x] 빌드 확인

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] hook/api/util을 섞지 않았다
- [x] 커밋 메시지가 Conventional Commits를 따른다
- [ ] README는 `docs/second-five-readme`에서 갱신
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- `docs/second-five-readme`

---

## 📝 Additional Notes
- 머지 순서: `feat/community-public-feed` → **이 PR** → `docs/second-five-readme`
