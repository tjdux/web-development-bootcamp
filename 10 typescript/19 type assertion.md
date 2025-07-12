## 타입 단언

```ts
// 1️⃣
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "park";
person.age = 27;

// 2️⃣
type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;
```

### 타입 단언 규칙

- `값 as 단언 (A as B)`
- A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함

```ts
let num1 = 10 as never;
let num2 = 10 as unknown;
// 🙅‍♀️
//let num3 = 10 as string;
let num3 = 10 as unknown as string; //도 가능하나 최대한 지양!
```

### `const` 단언

```ts
let num4 = 10 as const;
// let num4: 10

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// let cat: {
//     readonly name: "야옹이";
//     readonly color: "yellow";
// }

// 🙅‍♀️
// cat.name = "냥이";
```

### non null 단언

```ts
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "박서연",
};

const len: number = post.author!.length;
```
