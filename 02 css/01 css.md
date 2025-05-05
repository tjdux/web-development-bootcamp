## 목적과 작성법
### 목적
- HTML로 작성된 내용(구조)에 스타일을 입혀 디자인과 사용자 경험 향상을 위해 사용
### 기본 작성법
```css
h1 {
  color: blue;
  font-size: 24px;
}
```
<br/>

## CSS 선언 방식
### Inline
```html
<p style="color: red; font-size: 20px;">
  인라인 스타일로 꾸민 문장입니다.
</p>
```
- 특정 요소에만 스타일을 적용할 때
- 유지보수 어려움 → 간단 테스트용으로 사용
### Internal
```html
<head>
  <style>
    h1 {
      color: blue;
      font-size: 32px;
    }
    p {
      color: gray;
    }
  </style>
</head>
<body>
  <h1>내 자기소개</h1>
  <p>Internal 방식으로 스타일 적용</p>
</body>
```
### External
```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>외부 스타일 사용 예시</h1>
</body>
```
```css
h1 {
  color: green;
  font-family: Arial, sans-serif;
}
```
- 여러 HTML 파일에 스타일 재사용 가능
### @import
```css
@import url("reset.css");

body {
  font-family: Arial, sans-serif;
}
```
- CSS 파일 안에서 다른 CSS 파일을 불러오는 방식
- 외부 스타일을 재사용하거나, CSS 모듈을 나눌 때 사용
- external 방식보다 느림 
<br/>

## 선택자
### 기본 선택자
```css
/* 전체 선택자 */
* {margin: 0;}

/* 태그 선택자 */
p {}

/* 클래스 선택자 */
.title {}

/* ID 선택자 */
#header {}
```
### 복합 선택자
```css
/* 일치 선택자: 여러 조건을 동시에 만족 */
div.highlight {}

/* 하위 선택자: 특정 요소의 모든 하위 요소 */
ul li {}

/* 자식 선택자: 특정 요소의 직계 자식만 선택 */
ul > li {}

/* 인접 형제: 특정 요소 다음에 나오는 형제 하나만 선택 */
h1 + p {}

/* 일반 형제: 특정 요소 뒤의 모든 형제 요소 선택 */
h1 ~ p {}
```
### 가상 클래스 선택자
```css
/* 요소에 마우스를 올렸을 때 */
a:hover {}

/* 요소를 클릭하는 순간 */
button:active {}

/* 입력 요소에 포커스가 갔을 때 */
input:focus {}

/* 부모 안에서 첫 번째 자식 요소 */
ul:first-child {}

/* 마지막 자식 요소 */
ul:last-child {}

/* n번째 자식 요소 */
ul:nth-child(2) {}

/* 특정 조건을 제외한 요소 */
p:not(.intro) {}
```
### 가상 요소 선택자
```css
/* 요소 앞에 콘텐츠 삽입 */
p::before{
  content: "💡";
}

/* 요소 뒤에 콘텐츠 삽입 */
p::after{
  content: "💡";
}

/* 요소의 첫 글자만 스타일 적용 */
p::first-letter {}

/* 요소의 첫 줄만 스타일 적용 */
p::first-line {}
```
### 속성 선택자
```css
/* 해당 속성을 가진 요소 */
[disabled] {}

/* 정확히 일치하는 속성 값 */
[type="text"] {}

/* 단어 목록 중 하나가 일치할 때 */
[title~="html"] {}

/* 값이 특정 문자열로 시작할 때 */
[href^="https"] {}

/* 값이 특정 문자열로 끝날 때 */
[src$=".png"] {}

/* 값에 특정 문자열이 포함될 때 */
[class*="title"] {}
```
<br/>

## 스타일 상속
### 스타일 상속
- 상위 요소에 적용한 CSS 속성이 하위(자식) 요소에 자동으로 적용되는 것
- 주로 글자 / 문자 관련 속성들만 상속됨
- 박스 레이아웃 관련 속성들은 상속되지 않음 
### 강제 상속
- 기본적으로 상속되지 않는 속성을 자식 요소에게도 명시적으로 상속되도록 강제하는 방법
```html
<div style="border: 2px solid black;">
  <p style="border: inherit;">
    이 문장은 부모의 border 스타일을 상속받음
  </p>
</div>
```
- `inherit`
  - 부모 스타일을 그대로 자식에게도 유지하고 싶을 때 사용
  - 컴포넌트 스타일 일관성을 유지할 때 유용 
<br/>

## 선택자 우선순위
### 선택자 우선순위 기본 개념 
- 구체적인 선택자가 항상 우선순위 높음
### 우선순위 비교 예시
|선택자|계산 방식|점수|
|---|---|---|
|`div`|태그|1|
|`.menu`|클래스|10|
|`#header`|id|100|
|`#header .menu p`|태그 + 클래스 + id|1 + 10 + 100 =  111|
### 우선순위 충돌 해결
- 기본적으로 나중에 나온 스타일이 우선 적용됨
- 인라인 스타일이 external보다 높은 우선 순위
- `!important`는 모든 우선순위를 무시하고 최우선
  - 과도한 사용은 지양 
```css
p {
  color: red !important;
}
```
<br/>

## BOX 모델과 레이아웃
<img src="https://codingeverybody.kr/wp-content/uploads/box-sizing.jpg">
<br/>

## 글꼴 / 문자
### font-size 주요 단위
- `px`
  - 고정 크기
  - 화면 해상도와 무관하게 항상 일정한 크기
  - 단순하고 예측 가능하지만, 반응형에서는 지양
- `%`
  - 부모 요소 기준 비율
  - 부모에 따라 유동적으로 변함
- `em`
  - 부모 요소 기준 배수
  - 특정 요소만 상대적 크기로 조정하고 싶을 때
  - 중첩 시 계산 복잡해질 수 있음
- `rem`
  - html(root) 기준 배수
  - 1rem === html에서 지정한 크기의 1배
  - 전체 사이트 일괄 반응형, 접근성 고려
  - 가장 안정적이고 추천되는 단위
- `vw`
  - 화면 너비의 %
  - Viewport = 현재 보이는 화면기준으로 잡는 방법
  - 화면 크기가 바뀌면 vw/vh 값도 자동 조정
  - 1vw === 전체 화면 너비의 1%
  - 반응형 웹에서 종종 사용
- `vh`
  - 화면 높이의 %
  - Viewport = 현재 보이는 화면기준으로 잡는 방법
  - 화면 크기가 바뀌면 vw/vh 값도 자동 조정
  - 1vh === 전체 화면 높이의 1% 
- `ch`
  - 0의 너비 기준
  - 고정폭 폰트에서 유용
  - 10ch는 숫자 10자리 정도 공간 
<br/>

## 그리드 시스템 
### Flexbox
- 한 방향 정렬 문제 해결
- 요소들을 수평 / 수직으로 쉽게 정렬 가능
- 2차원 레이아웃 (행 + 열)에서는 여전히 한계
### Grid
- 2차원(행+열) 레이아웃을 동시에 설계할 수 있는 구조를 제공
- 12칼럼
  - 레이아웃을 더 체계적으로 만들기 위해 12칸으로 나누는 관습
