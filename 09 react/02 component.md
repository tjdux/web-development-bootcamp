## Component
- 리액트의 핵심 빌딩 블록
- UI 요소를 표현하는 최소한의 단위 
- 화면의 특정 부분이 어떻게 생겼는지 정하는 선언체 
- 내부의 데이터만 변경해서 UI를 재사용 가능
- UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 분리 가능 
- 컴포넌트 사용 이유
  - 재사용성: 한 번 만들어놓은 컴포넌트는 여러 곳에서 재사용 가능
  - 조합 가능: 여러 컴포넌트를 조합하여 복잡한 UI를 구성할 수 있음
  - 독립적: 각 컴포넌트는 독립적으로 동작하고 관리할 수 있음
<br/>

## Component 트리 구조
![img](https://hyunseob.github.io/images/react-component-the-right-way/the-render-tree.jpg)
<br/>

## Component 종류
- 컴포넌트 이름은 PascalCase 사용
### 클래스형 컴포넌트
- `render()` 함수 반드시 사용
- lifecycle 기능
- 컴포넌트를 만들 때 기존 `Components` 클래스에서 상속받아서 사용
```javascript
import React, {Component} from 'react';

class ClassComponent extends Component {
  render(){
    return (
      <h1>Class Component</h1>
    )
  }
}

export default ClassComponent
```
### 함수형 컴포넌트
- 짧고 직관적이며, 더 간단한 사용방법
- 메모리 사용에 이점 
- 과거에는 클래스형 컴포넌트를 사용했지만, 현재는 함수형 컴포넌트 사용 비율이 압도적으로 높음
```javascript
export default const FunctionComponent = () => {
  return (
    <div>
      Functional Component
    </div>
  )
}
```