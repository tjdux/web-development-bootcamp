## 일반 CSS
- 소규모 프로젝트에 적합
- 컴포넌트별 클래스가 중복되지 않도록 클래스명 지정
- 1️⃣ 이름 규칙 정하기
  - `컴포넌트 이름 - 클래스` 형태 (e.g. `App-logo`)
  - BEM 네이밍 (e.g. `app_title--primary`)
- 2️⃣ CSS Selector
- 3️⃣ CSS Module 형식을 사용하면 자동으로 클래스명 생성
  - css 파일명을 `컴포넌트명.module.css`로 생성
  - js파일에서 import해서 객체형태로 사용 
<br/>

## Sass
- CSS 전처리기 종류 중 하나 
  - CSS 전처리기: 자신만의 특별한 문법(변수, 함수)을 가지고 CSS를 생성하는 프로그램
  - 표준 CSS로 컴파일 (브라우저가 이해하는 CSS 문법으로 전환하는 작업 필요)
- 복잡한 작업을 쉽게 할 수 있도록 도와주고, 스타일 코드의 재활용성과 코드 가독성을 높여 유지보수를 더욱 쉽게 해줌
- 확장자: `.scss`, `.sass`
  - 변수를 선언할 때는 `$`를 앞에 붙여야 함
  - `.scss`: `.css` 파일과 비슷한 문법 (더 넓은 범용성 + css와의 호환성)
  - `.sass`: 세미콜론과 중괄호를 사용하지 않고 탭 이용
```scss
// .scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body{
  font: 100% $font-stack;
  color: $primary-color;
}
```
```sass
// .sass
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body
  font: 100% $font-stack;
  color: $primary-color;
```
- Sass 활용
```scss
// 변수 
$primary-color: #ff6347;
body{
  background-color: $primary-color;
}

// 연산
.container{
  width: 100% - 20px;
}

// 믹스인 (Mixin): 미리 정의한 CSS 코드 블록
@mixin border-radius($radius){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}

.button{
  @include border-radius(10px);
}

// 중첩
div{
  ul{
    margin: 0;
    li{
      display: inline-block;
    }
  }
  &:hover{
    background-color: brown;
  }
}

// 확장: 기존의 선택자 스타일을 다른 선택자에게 상속
.btn{
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
}
.btn-primary{
  @extend .btn;
  background-color: blue;
}
```
<br/>

## styled-components
```javascript
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`

export default funciton App(){
  return (
    <div>
      <StyledButton>Click!</StyledButton>
    </div>
  )
}
```