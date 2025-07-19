## 유틸리티 타입 (utility types)

- 기존 타입을 기반으로 새로운 타입을 쉽게 생성하고 변환할 수 있도록 돕는 강력한 기능
- 제너릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용하는 타입을 미리 만들어 놓은 것
- 이를 통해 코드의 재사용성을 높이고 타입 추론을 더욱 효과적으로 활용할 수 있음

<br/>

## mapped 기반 유틸리티 타입

### `Partial<T>`

- 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환
- 해당 타입의 객체를 생성할 때 일부 또는 모든 속성을 생략할 수 있게 해줌
- 보통은 객체의 일부 속성만 업데이트하거나, 특정 필드가 필수가 아닌 경우 사용

```ts
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

function updateProduct(
  product: Product,
  fieldsToUpdate: Partial<Product>
): Product {
  return { ...product, ...fieldsToUpdate };
}

// 1️⃣
const originalProduct: Product = {
  id: "A101",
  name: "Laptop",
  price: 1200,
  description: "Powerful laptop for professionals",
};

const updatedProduct1 = updateProduct(originalProduct, {
  name: "Gaming Laptop",
});

// 2️⃣
const updatedProduct2 = updateProduct(originalProduct, {
  price: 1300,
  description: "New model with enhanced performance",
});
```

```ts
type Partial<T> = { [key in keyof T]?: T[key] };
```

### `Required<T>`

- `Partial<T>`과는 반대로, 특정 객체 타입의 의 모든 속성을 필수 프로퍼티로 만듦

```ts
interface UserProfile {
  username: string;
  email: string;
  phone?: string;
  address?: string;
}

type CompleteUserProfile = Required<UserProfile>;

const newUser: CompleteUserProfile = {
  username: "john_doe",
  email: "john@exampl.com",
  phone: "010-1234-5678",
  address: "Seoul, South Korea",
};

// ⚠️ 선택 속성도 필수 속성으로 만듦
// Type '{ username: string; email: string; }' is missing the following properties from type 'Required<UserProfile>': phone, address
// 🙅‍♀️
// const incompleteUser: CompleteUserProfile = {
//   username: "jane_doe",
//   email: "jane@example.com",
// };
```

```ts
type Required<T> = { [key in keyof T]-?: T[key] };
```

### `Readonly<T>`

- 특정 객테 타입의 모든 속성을 읽기 전용 (readonly)로 만듦
- 한 번 할당된 속성 값은 이후에 변경 불가능

```ts
interface Point {
  x: number;
  y: number;
}

const mutablePoint: Point = { x: 10, y: 20 };
mutablePoint.x = 15;
console.log(mutablePoint); // { x: 15, y: 20 };

type ImmutablePoint = Readonly<Point>;

const immutablePoint: ImmutablePoint = { x: 30, y: 40 };
// 🙅‍♀️
//immutablePoint.x = 35;
```

```ts
type Readonly<T> = { readonly [key in keyof T]: T[key] };
```

### `Pick<T, K>`

- 객체 타입 T에서 K에 해당하는 속성들만 선택하여 새로운 타입
- 여기서 K는 T의 속성 이름들의 유니온 타입

```ts
interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

type CustomerName = Pick<Customer, "firstName" | "lastName">;

const customerInfo: CustomerName = {
  firstName: "Alice",
  lastName: "Smith",
};
console.log(customerInfo); //{ firstName: 'Alice', lastName: 'Smith' }

// 🙅‍♀️
// const invalidCustomerInfo: CustomerName = {
//   firstName: "Bob",
//   lastName: "Johnson",
//   email: "bob@example.com",
// };
```

```ts
type Pick<T, K extends keyof T> = { [key in keyof K]: T[key] };
```

### `Omit<T, K>`

- `Pick<T, K>`과는 반대로, 객체 타입 T에서 K에 해당하는 속성들만 제외하여 새로운 타입을 만듦
- 기존 타입에서 불필요한 속성들을 제거하여 새로운 타입을 정의할 때 사용

```ts
interface Employee {
  id: string;
  name: string;
  department: string;
  salary: number;
  hireDate: Date;
}

type PublicEmployeeInfo = Omit<Employee, "salary" | "hireDate">;

const publicInfo: PublicEmployeeInfo = {
  id: "EMP001",
  name: "Charlie Brown",
  department: "Marketing",
};
console.log(publicInfo);
// { id: 'EMP001', name: 'Charlie Brown', department: 'Marketing' }
```

```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Employee, K = "salary" | "hireDate"
// 1️⃣ Pick<Employee, Exclude<keyof Employee, "salary" | "hireDate">>
// 2️⃣ Pick<Employee, Exclude<"id" | "name" | "department"|"salary"|"hireDate", "salary" | "hireDate">>
// 3️⃣ Pick<Employee, "id" | "name" | "department">
```

### `Record<K, V>`

```ts
type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
// type Thumbnail = {
//     large: {
//         url: string;
//     };
//     medium: {
//         url: string;
//     };
//     small: {
//         url: string;
//     };
// }
```

```ts
type Record<K extends keyof any, V> = { [key in K]: V };
```

<br/>

## 조건부 타입 기반 유틸리티 타입

### `Exclude<T, U>`

- T에서 U를 제거하는 타입

```ts
type A = Exclude<string | boolean, boolean>;
// type A = string
```

```ts
type Exclude<T, U> = T extends U ? never : T;
// 1️⃣ Exclude <string, boolean> | Exclude<boolean , boolean>
// 2️⃣ string | never
// 3️⃣ string
```

### `Extract<T, U>`

- T에서 U를 추출하는 타입

```ts
type B = Extract<string | boolean, boolean>;
// type B = boolean;
```

```ts
type Extract<T, U> = T extends U ? T : never;
```

### `ReturnType<T>`

- 함수의 반환값 타입을 추출하는 타입

```TS
function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
//type ReturnA = string

type ReturnB = ReturnType<typeof funcB>;
// type ReturnB = number
```

```TS
type ReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : never
```
