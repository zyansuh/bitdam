> 🚀 feat: paginate the brand story essay for readability

## 📌 PR Summary
- `/story` 긴 글 6장을 한 스크롤에 펼치지 않고, 목차로 한 장씩 읽게 합니다.
- 인용·줄간격을 줄여 한 화면에서 문장이 덜 밀립니다.
- **이 PR은 `main` 위에 쌓입니다.** (`feat/learn-guides`는 #123으로 머지됨)

---

## 🔍 Background / Why
- 브랜드 스토리 본문이 너무 길어 가독성이 떨어졌습니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `BrandStoryEssay` · 목차 · 이전/다음
- `brand-story.css` 타이포
- 장 제목·toc 라벨

### 2. 세부 변경 사항
- [x] 컴포넌트 분리/추가
- [x] hooks 분리/추가
- [x] 스타일 / UI 수정

---

## 🎯 Expected Impact
- 방문객이 여섯 장을 나눠 읽습니다.

## ⚠️ Impact Scope
- [x] 특정 페이지 (`/story`)

### 영향 받는 주요 영역
- `src/features/brand/`

---

## 🔥 Breaking Changes
- 없음. `#brand-story-body` 앵커는 `#brand-story-essay`로 바뀝니다.

## 🧪 How to Test
1. `/story`에서 목차 칩을 눌러 장이 바뀌는지
2. 이전/다음, 모바일에서 목차 가로 스크롤

## 📸 Screenshots / Videos
- 없음

## 🚀 Next Steps
- `main`에 바로 머지해도 됩니다. 술 상식 후속 PR과 파일 겹침 없음

## 📝 Additional Notes
- 프로덕션 `bitdam.vercel.app` 번들은 아직 #123 이전입니다. Vercel Production을 최신 `main`으로 Redeploy 해야 `/learn` 100장이 보입니다.
