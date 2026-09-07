> 🚀 Feature: 커뮤니티를 회원 공개 피드로 열고 ADMIN만 숨긴다

## 📌 PR Summary
- 글에 `visibility: public | hidden`을 둡니다.
- 목록은 로그인 여부와 관계없이 **공개 글**입니다. ADMIN은 숨김 글까지 보고 숨김/공개를 바꿉니다.
- 글쓰기는 로그인 회원만 가능하고, 힌트에 검수를 안내합니다.
- 햄버거 메뉴 라벨을 「공개 피드」로 바꿉니다.
- **이 PR은 `feat/mypage-reservations` 위에 쌓입니다. 그 PR을 먼저 머지한 뒤** 이 PR을 머지하면 됩니다.

---

## 🔍 Background / Why
- 「내 글 목록」만 보이면 커뮤니티가 개인 메모장이 됩니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `CommunityPost.visibility`
- `useCommunityPosts` 공개 피드 + `setVisibility`
- 목록/상세/작성 카피 · ADMIN 숨김 버튼
- `headerAccountLinks` 라벨

### 2. 세부 변경 사항
- [x] hooks 분리/추가
- [x] 컴포넌트 분리/추가

---

## 🎯 Expected Impact
- 게스트도 `/community`에서 공개 글을 읽습니다.
- `admin@bitdam.kr`로 상세에서 숨기면 일반 목록에서 사라집니다.

---

## ⚠️ Impact Scope
- [x] 특정 페이지
- [x] 상태관리

### 영향 받는 주요 영역
- `src/features/community/`
- `src/data/headerAccountLinks.ts`

---

## 🔥 Breaking Changes
- 일반 회원 목록이 본인 글만이 아니라 공개 전체 피드입니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm run build` 성공

### 기능 확인 절차
1. **모바일 (<600px)**
   - 비로그인 피드 + 글쓰기 없음
2. **태블릿 (600~999px)**
   - 로그인 후 글쓰기 → 다른 계정(또는 시크릿)에서 보이는지
3. **데스크톱 (>=1000px)**
   - ADMIN 숨김/공개
4. 숨긴 글 URL은 일반 회원에게 빈 상태인지

### 확인 결과
- [x] 빌드 확인

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 폴더 분류 규칙을 지켰다
- [x] 커밋 메시지가 Conventional Commits를 따른다
- [ ] README는 `docs/second-five-readme`에서 갱신
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- `feat/content-idb-api`

---

## 📝 Additional Notes
- 머지 순서: `feat/mypage-reservations` → **이 PR** → `feat/content-idb-api` → `docs/second-five-readme`
