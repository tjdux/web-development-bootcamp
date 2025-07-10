## 타입 추론

- ts: 점진적 타입 추론
- 함수 매개변수에는 점진적 타입 추론 못 함

```ts
// let 변수 -> 타입 넓히기
let a = 10; //let a: number
let b = "hello"; //let b: string
let c = {
  id: 1,
  name: "park",
  profile: {
    nickname: "molar",
  },
};
// let c: {
//     id: number;
//     name: string;
//     profile: {
//         nickname: string;
//     };
// }

let { id, name, profile } = c;
// let id: number
// let name: string;
// let profile: {
//     nickname: string;
// }

let [one, two, three] = [1, "hello", true];
// let one: number;
// let two: string;
// let three: boolean;

function func(message = "hello") {
  return "hello";
}
// function func(message?: string): string
```

<br/>

## `any` 탕비의 진화

- 암묵적으로 any 타입을 갖는 경우 타입이 진화 (명시적으로 any 타입을 갖는 경우에는 제외)
- 암묵적으로 any 타입을 갖는 것은 추천하지 않음

```ts
let d; // let d: any
d = 10;
d; //let d: number

d = "hello";
d; //let d: string

const num = 10; //const num: 10;
const str = "hello"; // const str: "hello"

let arr = [1, "string"]; // let arr: (string | number)[]
```
