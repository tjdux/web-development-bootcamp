## state
- 앱의 유동적인 데이터를 다루기 위한 개체
- **컴포넌트 내부에서 변경 가능한 값**
- UI Element 변경을 위해 사용
- 상태에 따라 다른 동작을 함
- 사용 이유
  - **State가 변경될 시 자동으로 리랜더링**
  - 이 점이 변수와 다른 점 
<br/>

## props vs. state
- props
  - 부모 컴포넌트 ➡️ 자식 컴포넌트 데이터 전달 (읽기 모드)
  - 단방향 데이터 흐름
- state
  - 특정 컴포넌트가 갖는 값 
  - 컴포넌트 내부에서 선언되고 내부에서 값을 변경
<br/>

## 함수형 컴포넌트의 `useState()`
- `const [state 변수 명, 상태를 바꾸는 setter 함수] = useState(초기 상태)`
```javascript
import React, { useState } from 'react';

const SayFunction = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => { setMessage("안녕하세요") };
  const onClickLeave = () => { setMessage("안녕히가세요") };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  )
}
```
```javascript
import { useState } from 'react';

const App = () => {
  //const name = "홍길동"; // 변경 불가
  const [name, setName] = useState("홍길동");
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3", "todo4"]);

  const onClick = () => {
    setIsVisible(!isVisible)
  }

  const handlerChangeName = () => {
    setName(
      name === "홍길동" ? "가나디" : "홍길동"
    )
  }

  return (
    <>
      <div>
        {count} <button onClick={() => setCount(count+1)}>더하기</button>
        <br/>
        {isVisible && "보이는 텍스트"}<button onClick={onClick}>{isVisible?"텍스트 숨기기":"텍스트 보기"}</button>
        <br/>
        {name}<button onClick={handlerChangeName}>이름 변경</button>
        <ul>
          {todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
        </ul>
        <br/>
        <button onClick={() => {
          setTodos([...todos, "todo5"])
        }}>할일 추가</button>
      </div>
    </>
  )
}
```
```javascript
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("")

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <>
      <div>
        <input type="text" value={value} onChange={onChangeHandler}/>
        {/* 제어 컴포넌트: value, setValue 모두 -> input에 관한 모든 것을 react에서 관리 */}
      </div>
    </>
  )
}
```
<br/>

## 클래스형 컴포넌트의 state
```javascript
import React, { useState } from 'react';

class ClassState extends Component {
  state = {
    number: 0,
  };

  render(){
    const { number } = this.state;
    return(
      <div><h3>Number : {number}</h3></div>
    )
  }
}

export default ClassState;
```