## 불변성
- 메모리에 있는 값을 직접 변경하지 않는 것
- 새로운 값을 만들어서 기존 값을 대체하는 방식
- 불변성이 있는 데이터 (값을 참조): 숫자, 문자열, 불리언, null, undefined 
- 불변성이 없는 데이터 (주소값을 참조): 객체, 배열, 함수 
```javascript
// 불변성이 있는 데이터
let a = 10;
a = 20;

// 불변성이 없는 데이터
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); //[1, 2, 3, 4]
```
- **state는 변화를 메모리 주소로 판단**
  - 주소가 같다면, 새로 랜더링을 안함 ( ← 불변성이 없는 데이터의 변화)
  - 주소가 다르면 새로 랜더링! ( ← 불변성이 있는 데이터의 변화)
```javascript
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([1, 2, 3]);

  // 새로운 배열을 만들어 주소를 변화시킴 
  const addItem = () => {
    setItems([...items, items.length + 1])
  }

  const deleteItem = () => {
    setItems(items.filter((_, idx, arr) => idx !== arr.length-1))
  }

  const removeItem = (index) => {
    setItems(items.filter((_, idx) => idx !== index))
  }

  return(
    <div>
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}<button onClick={() => {removeItem(idx)}}>삭제</button></li>)}
      </ul>
      <button onClick={addItem}>add item</button>
      <button onClick={deleteItem}>delete item</button>
    </div>
  )
}

```

## `map()`
`arr.map( callbackFunciton, [thisArg] )`
- callbackFunction
  - 새로운 배열의 요소를 생성하는 함수
  - `(currentValue, index, array)` 3개의 인수
- this.Arg
  - 생략 가능
  - callbackFunciton에서 사용할 `this` 객체
### 배열 데이터에 사용
```javascript
todos = ["리액트 공부", "청소하기"]

{todos.map((todo, idx) => {
  return <div key={idx}>{todo}</div>;
})}
```
- key
  - `map()` 함수를 이용해 컴포넌트를 사용할 때 key 사용 권장
  - 기존 요소와 업데이트 요소를 비교하는데 사용되는 속성
  - 다른 요소와 겹치지 않는 고유한 값이어야 함
  - key로 인덱스를 사용해도 되지만 이는 최후의 수단, 가능하면 배열의 요소 중 고유한 값 (e.g. id값)을 사용
    - key를 인덱스 값으로 설정할 시, 리스트 순서가 변경되면 모든 key가 변경되므로 key는 인덱스가 아닌 고유한 값으로 설정
```javascript
todos = ["리액트 공부", "청소하기"]

{todos.map((todo, idx) => {
  return <FunctionProps name={todo} key={idx}>
})}
```
<br/>

## `filter()`
- 인자로 넘겨지는 callback 함수의 조건을 통과하는 요소를 모아 새로운 배열을 생성
- 배열에서 원하는 값을 삭제하는 코드 구현 가능
```javascript
const animals = ['dog', 'cat', 'rabbit'];

const newAnimals = animals.filter((animal) => animal.length>3)
console.log(newAnimals); //['rabbit']
```