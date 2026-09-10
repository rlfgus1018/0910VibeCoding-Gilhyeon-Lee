# CLAUDE.md

## 프로젝트

이길현(고려대학교 인공지능학과)의 개인 소개 페이지. **한 페이지짜리 정적 사이트** 하나가 전부다.

섹션 4개:
- 소개 (이름, 소속, 소개 글)
- 프로젝트 (동문, NYPC, LG Aimers 9th)
- 관심사
- 링크

## 스택

- Next.js 16 (App Router, Turbopack)
- React 19 / TypeScript
- Tailwind CSS v4

Tailwind v4라 설정이 `tailwind.config` 가 아니라 `app/globals.css` 의 `@theme inline` 블록에 있다.

`AGENTS.md` 는 `next dev` 가 자동으로 생성·갱신한다. 직접 편집하지 않는다.
Next 16은 학습 데이터와 다를 수 있으니, API가 헷갈리면 `node_modules/next/dist/docs/` 의 번들 문서를 먼저 본다.

## 데이터

모든 콘텐츠는 **로컬 JSON 파일**에서 읽는다. 컴포넌트에 텍스트를 하드코딩하지 않는다.

- `data/profile.json` — 이름, 소속, 태그라인, 소개 문단(`about`은 문단 배열)
- `data/projects.json` — 프로젝트 목록 (`period`, `url` 은 선택)
- `data/interests.json` — 관심사 목록 (`note` 는 선택)
- `data/links.json` — 링크 목록 (label, url)

JSON은 서버 컴포넌트에서 직접 import 해서 쓴다. fetch나 API 라우트는 만들지 않는다.
JSON 구조가 바뀌면 `types/content.ts` 의 타입도 같이 맞춘다.

## 구조

```
app/
  layout.tsx      # 폰트, metadata, <html lang="ko">
  page.tsx        # 유일한 페이지. JSON import 후 섹션 조립
  globals.css     # 색 토큰 + @theme inline
components/
  Intro.tsx
  Projects.tsx
  Interests.tsx
  Links.tsx
  SectionLabel.tsx  # 섹션 공용 대문자 라벨
data/             # JSON 콘텐츠
types/content.ts  # JSON에 대응하는 타입 정의
```

## 스타일

사이버펑크 톤의 다크 고정. 라이트 모드는 대응하지 않는다.

색은 `globals.css` 의 CSS 변수로만 정의하고 Tailwind 유틸리티로 소비한다:
`bg-background` `bg-surface` `text-foreground` `text-muted` `text-faint`
`text-neon`(시안) `text-neon-alt`(마젠타) `border-rule`.
새 색을 하드코딩하지 말고 토큰을 추가해서 쓴다. 네온은 강조에만 쓰고 본문에는 쓰지 않는다.

폰트는 두 갈래로 쓴다. 본문은 `font-sans`(Noto Sans KR), 라벨·메타·링크처럼
기계적으로 보여야 하는 곳은 `font-mono`(Geist Mono).

`globals.css` 하단의 연출용 클래스:

- `.cyber-grid` `.cyber-glow` `.cyber-scanlines` — `layout.tsx` 의 고정 배경 레이어. 셋 다 `aria-hidden`
- `.glitch` — 글리치 타이틀. 의사 요소가 `attr(data-text)` 를 읽으므로 **같은 텍스트를 `data-text` 로도 넘겨야** 한다
- `.cursor` — 뒤에 깜빡이는 커서를 붙인다
- `.neon-glow` — 네온 텍스트 글로우

애니메이션을 추가하면 `prefers-reduced-motion: reduce` 블록에도 반드시 같이 넣는다.

레이아웃은 `max-w-2xl` 한 칼럼 중앙 정렬.

## 컨벤션

- 기본은 서버 컴포넌트. 상호작용이 실제로 필요한 곳에만 `"use client"`.
- 스타일은 Tailwind 유틸리티 클래스로. 별도 CSS 파일은 `globals.css` 외에 만들지 않는다.
- `any` 쓰지 않는다. JSON 데이터에는 명시적 타입을 붙인다.
- 컴포넌트는 한 파일에 하나, 이름은 PascalCase.
- 외부 링크는 `target="_blank" rel="noreferrer"`.

## 사실 관계

프로필에 없는 내용을 지어내지 않는다. 프로젝트의 역할·사용 기술·기간·수상 여부는 아직 확인되지 않았다.
`data/links.json` 의 `USERNAME` 처럼 자리표시자가 남아 있으면 임의로 채우지 말고 사용자에게 묻는다.

## 하지 말 것

지금 범위 밖이다. 요청받기 전까지 손대지 않는다.

- 배포 설정 (Vercel, Docker, CI/CD, 도메인)
- 데이터베이스, ORM, 백엔드 API
- 인증, 폼 제출, 방문자 분석
- 페이지 추가 (블로그, 프로젝트 상세 등) — 계속 한 페이지다
- 상태관리 라이브러리, UI 컴포넌트 라이브러리

범위를 넘는 게 필요해 보이면 먼저 물어본다.

## 명령어

```
npm run dev     # 개발 서버 (localhost:3000)
npm run build   # 프로덕션 빌드 (타입 체크 겸용)
npm run lint
```

작업을 마치면 `npm run build`로 타입 에러가 없는지 확인한다.
