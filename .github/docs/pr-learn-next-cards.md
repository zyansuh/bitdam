> 🚀 feat: make learn next-read links look clickable

## 📌 PR Summary
- `/learn/:slug` 하단의 잔·도가 링크와 같은 분류 글을 텍스트 목록에서 카드로 바꿉니다.
- 카드에 종류 라벨, 한 줄 안내, 금색 `보러 가기` / `이어서 읽기`를 붙입니다.
- **이 PR은 `main` 위에 쌓입니다.**

---

## 🔍 Background / Why
- 미리보기에서 하단 링크가 눌러도 되나 싶을 만큼 약했습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `learnRelated`에 kind·hint
- `LearnRelatedLinks` 카드 그리드
- `LearnSiblingCards` + 기사 카드 CTA
- `learn.css` 다음 읽기 레이아웃

### 2. 세부 변경 사항
- [x] 컴포넌트 분리/추가
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

---

## 🎯 Expected Impact
- 글 하단에서 상점·도가·다음 상식으로 넘어가기 쉬워집니다.

## ⚠️ Impact Scope
- [x] 특정 페이지 (`/learn/:slug`)
- [x] 특정 컴포넌트 (`LearnRelatedLinks`, `LearnArticleCard`)

### 영향 받는 주요 영역
- `src/features/learn/components/`
- `src/features/learn/data/learnRelated.ts`
- `src/features/learn/styles/learn.css`

---

## 🔥 Breaking Changes
- 없음

## 🧪 How to Test
1. `/learn/takju-vs-cheongju` 하단 잔·도가 카드를 누른다
2. 같은 분류 카드 4장과 `이어서 읽기`가 보이는지 확인
3. 모바일에서 카드가 한 줄로 쌓이는지 확인

## 📸 Screenshots / Videos
- 없음

## 🚀 Next Steps
- 이 PR을 `main`에 머지하면 Vercel Production이 따라갑니다.

## 📝 Additional Notes
- 머지 대상: `main`
