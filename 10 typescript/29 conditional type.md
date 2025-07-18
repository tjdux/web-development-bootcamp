## 조건부 타입

```ts
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// type B = number;
```

### 조건부 타입 + 제네릭

```ts
type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>; // let varA: string
let varB: StringNumberSwitch<string>; // let varB: number;

function removeSpace<T>(text: T): T extends string ? string : undefined;

function removeSpace(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }
  return undefined;
}

let result = removeSpaces("hi im molar"); //let result: string
result.toUpperCase();

let result2 = removeSpaces(undefined); //let result2: undefined
```

<br/>

## 분산적인 조건부 타입

```ts
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number | string>; // let c: string | number;
// StringNumberSwitch<number> | StringNumberSwitch<string>

let b: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>
// number | string | number
// let d: string | number
```

```ts
// 분산적 조건부 타입 막기
type StringNumberSwitch1<T> = [T] extends [number] ? string : number;
let f: StringNumberSwitch1<boolean | number | string>; //let f: number
```

```ts
// 실용 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1️⃣
// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>

// 2️⃣
// number | never | boolean

// 3️⃣
// type A = number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1️⃣
// Extract<number, string> | Extract<string, string> | Extract<boolean, string>
// 2️⃣ never | string | never
// 3️⃣ type B = string
```

<br/>

## infer

```ts
// 조건부 타입 내에서 타입 추론하기
type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;
type A = ReturnType<FuncA>; //type A = string
type B = ReturnType<FuncB>; // type B = number
// type B = never;

// infer R => 조건식을 참으로 만드는 타입을 추론하여 타입 변수 R에 할당

type C = ReturnType<number>; //type C = never
// R 추론 불가

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 무조건 프로미스타입
// 2. 프로미스 타입의 결과값 타입을 반환해야 함

type PromiseA = PromiseUnpack<Promise<number>>;
// type PromiseA = number
type PromiseB = PromiseUnpack<Promise<string>>;
//type PromiseB = string
```
