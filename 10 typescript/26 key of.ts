interface Person {
  name: string;
  age: number;
}

// keyof: 타입 또는 인터페이스의 모든 프로퍼티의 키를 유니온 타입으로 추출
// "name" | "age"
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "박서연",
  age: 27,
};

getPropertyKey(person, "name");

// 💡 typeof를 타입을 정의할 떄 사용
const person1 = {
  name: "박서연",
  age: 27,
};

type Person1 = typeof person1;
// type Person1 = {
//     name: string;
//     age: number;
// }

function getPropertyKey1(person: Person, key: keyof typeof person) {
  return person[key];
}
