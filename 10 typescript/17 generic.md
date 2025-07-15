## 제너릭 (Generic)

- 프로그래밍을 하면서 다양한 데이터를 다루게 되는데, 이 데이터들을 안정적으로 처리하기 위한 타입
- 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요
- any를 사용하면 모든 타입을 받을 수 있지만, 타입스크립트의 가장 큰 장점인 정적 타입 검사가 없어짐
- 제너릭은 타입을 매개변수처럼 사용하는 문법
- 마치 함수의 인자처럼, 나중에 타입을 넘길 수 있는 유연한 방식

```ts
// 제너릭 함수: 함수의 인수에 따라 반환값의 타입을 가변적으로 변경 가능
function identity<T>(value: T): T {
  return value;
}

let num = identity(10); // let num: number
let bool = identity(true); // let bool: boolean
let str = identity("string"); //let str: string
let arr = identity([1, 2, 3]); //let arr: number[]
let arr1 = identity<[number, number, number]>([1, 2, 3]); //let arr1: [number, number, number]
```

- `<T>`: 타입 변수 (type variable)
- `identity<number>(123)` -> `T`는 `number`
- `identity<string>("hello")` -> `T`는 `string`
- 제너릭은 유연성 (재사용성)과 타입 안정성을 모두 챙길 수 있는 도구
  <br/>

## 타입 변수 응용하기

```ts
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
```

```ts
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); //let num: number
let str = returnFirstValue(["hello", "myname"]); //let str: string
let val = returnFirstValue([1, "hello", "myname"]); //let val: number
```

```ts
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let val1 = getLength([1, 2, 3]); //3
let val2 = getLength("12345"); //5
let val3 = getLength({ length: 10 }); //10
// 🙅‍♀️
// let val4 = getLength(10);
```
