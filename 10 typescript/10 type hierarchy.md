## 타입 계층

![alt text](타입계층도.png)
<br/>

### `unknown`

- 모든 타입의 슈퍼타입

```ts
let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = null;
let e: unknown = undefined;

let unknownVar: unknown;
// 🙅‍♀️ 다운캐스팅
// let num: number = unknownVar;
// let str: string = unknownVar;
// let bool: boolean = unknownVar;
```

### `never`

- 모든 타입의 서브타입
- 어떤 값도 저장되어서는 안되는 변수의 타입으로 사용하면 좋음

```ts
function neverFunc(): never {
  while (true) {}
}

let num: number = neverFunc();
let str: string = neverFunc();
let bool: boolean = neverFunc();

// 🙅‍♀️ 다운캐스팅
// let never1: never = 10;
// let never2: never = "hello";
// let never3: never = true;
```

### `void`

```ts
function voidFunc(): void {
  console.log("hi");
  return undefined;
}

// void는 undefined의 슈퍼타입
let voidVar: void = undefined;
```

### `any`

- 모든 타입의 슈퍼 타입이자 서브 타입 (never 제외)

```ts
let unknownVar: unknown;
let anyVar: any;
let undefinedVar: undefined;
let neverVar: never;

// 다운캐스팅 가능: 타입 계층도를 무시하기 때문에 위험한 타입! 사용 지양
anyVar = unknownVar;
undefinedVar = anyVar;

// 🙅‍♀️ never는 순수한 공집합이기 때문에 어느 타입도 다운캐스팅 불가능
// neverVar = anyVar;
```
