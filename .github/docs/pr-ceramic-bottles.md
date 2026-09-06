> 🚀 Feature: 기념주 미리보기를 주종별 도자기 병으로

## 📌 PR Summary
- 맥주 사진 배경을 빼고 **소주·약주·과실주 도자기 실루엣**으로 바꿨습니다.
- **막걸리는 제외**했습니다. 탄산 내압이라 PET가 맞아서 도자기 기념주에서 뺐습니다.
- README에 `/tours`와 도자기 병 규칙을 적었습니다.
- **이 PR은 `feat/tours-desk` 위입니다.**

---

## 🔍 Background / Why
- 실시간 미리보기가 와인/맥주 병 사진이라 기념주 톤과 안 맞았습니다.
- 막걸리는 내압 PET가 필수입니다.

---

## 🛠 Changes

### 1. 주요 변경 사항
- `CUSTOM_SPIRITS`에서 막걸리 삭제 · 안내 문구
- `CustomBottle` · `CustomPreview` · 점토톤 스테이지 CSS

### 2. 세부 변경 사항
- [ ] 디렉토리 / 파일 구조 변경
- [ ] import / path 수정
- [x] 컴포넌트(components) 분리/추가
- [ ] hooks 분리/추가
- [x] styles / 디자인 토큰 수정
- [ ] providers / 상태관리 수정
- [x] 스타일 / UI 수정
- [ ] 라우팅 수정

---

## 🎯 Expected Impact
- 주종을 바꾸면 병 모양과 라벨 위치가 바뀝니다. 막걸리 칩은 없습니다.

---

## ⚠️ Impact Scope
- [ ] 전체 프로젝트
- [x] 특정 페이지
- [x] 특정 컴포넌트
- [ ] 공통 UI
- [ ] 상태관리
- [ ] 라우팅

### 영향 받는 주요 영역
- `src/features/custom/`
- `README.md`

---

## 🔥 Breaking Changes
- 기념주 주종에서 막걸리가 빠집니다.

---

## 🧪 How to Test

### 기본 확인
- [x] `npm install`
- [ ] `npm run lint` 통과
- [x] `npm run build` 성공
- [ ] `npm run dev` 실행 후 콘솔 에러 없음

### 기능 확인 절차
1. **모바일 (<600px)** — `/custom` 미리보기가 맥주 사진이 아닌지
2. **태블릿 (600~999px)** — 소주/약주/과실주 병 모양이 다른지
3. **데스크톱 (>=1000px)** — 막걸리 칩이 없는지, 안내 문구
4. 3단계에서 주종을 바꿔 견적·미리보기

### 확인 결과
- [x] 정상 동작 확인 (`npm run build`)
- [x] 추가 확인 필요 (브라우저)

---

## 📸 Screenshots / Videos
- 없음

---

## ✅ Self Review Checklist
- [x] 구조 변경 이유를 설명할 수 있다
- [x] 폴더 분류 규칙(hooks/components/styles 등)을 지켰다
- [x] 커밋 메시지가 영어 + Conventional Commits 형식을 따른다
- [x] 이번 변경에 맞춰 README를 갱신했다
- [x] 기존 기능 영향 검증 완료
- [x] 불필요한 코드 제거
- [x] Next Steps 정의 완료

---

## 🚀 Next Steps
- 투어 PR 머지 후 이 PR을 머지합니다.

---

## 📝 Additional Notes
- **base:** `feat/tours-desk`
- **head:** `feat/custom-ceramic-bottles`
