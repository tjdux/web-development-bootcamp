## React의 Event 주의점
- 소문자가 아닌 camelCase 사용: `🙅‍♀️: onclick 🙆‍♀️: onClick`
- JSX 사용하여 이벤트 핸들러 전달
```javascript
// 🙅‍♀️ 
<button onClick={activeEvent()}>
  Event Button
</button>

// 🙆‍♀️
<button onClick={activeEvent}>
  Event Button
</button>
```
- 기본 DOM 요소에서만 이벤트 설정 가능
</br>

## 클래스형 컴포넌트에서의 이벤트
```javascript
<button onClick={this.activeEvent}>Event Button</button>
```
<br/>

## 함수에 인자 보내기
- 화살표 함수 이용하기
```javascript
<button onClick={() => onClickEvent("인자1")}>Event Button</button>
<button onClick={(e) => onClickEvent(e, "인자1")}>Event Button</button>
```
- `bind` 사용
```javascript
<button onClick={onClickEvent.bind(null, "인자1")}>Event Button</button>
```
<br/>

## 함수형 컴포넌트에서의 이벤트
- 함수 인자가 없는 경우
```javascript
<button onClick={increase}>더하기</button>
```
- 함수 인자가 있는 경우
```javascript
<button onClick={() => alertMsg("hello")}>alert</button>
<button onClick={(e) => alertMsg(e, "hello")}>alert</button>
```