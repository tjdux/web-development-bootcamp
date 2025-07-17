interface User {
  id: number;
  name: string;
  age: number;
}

// 💡 mapped type: 인터페이스에서는 사용 불가, 무조건 타입 별칭에서 사용
type PartialUser = {
  [key in keyof User]?: User[key];
};
// type PartialUser = {
//     id?: number | undefined;
//     name?: string | undefined;
//     age?: number | undefined;
// }

type BooleanUser = {
  [key in keyof User]: boolean;
};
// type BooleanUser = {
//     id: boolean;
//     name: boolean;
//     age: boolean;
// }

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
// type ReadonlyUser = {
//     readonly id: number;
//     readonly name: string;
//     readonly age: number;
// }

// 🖥️ 예시
function updateUser(user: PartialUser) {
  //... 수정하는 기능
}

updateUser({
  age: 27,
});
