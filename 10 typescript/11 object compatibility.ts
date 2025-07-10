/** 객체 타입의 호환성
 * 어떤 객체타입을 다른 객체타입으로 취급해도 좋은가?
 * 🌠 프로퍼티를 기준으로 계층을 가짐
 */
// 1️⃣
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yello",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 업캐스팅: Animal이 Dog의 슈퍼 타입
animal = dog;
// 🙅‍♀️ 다운캐스팅
// dog = animal;

// 2️⃣
// 슈퍼타입
type Book = {
  name: string;
  price: number;
};

// 서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: "한입 리액트",
  price: 33000,
  skill: "reactjs",
};

// 업캐스팅
book = programmingBook;
// 🙅‍♀️ 다운캐스팅
// programmingBook = book;

// ⚠️ 초과 프로퍼티 검사
// 객체 리터럴 사용 시 객체 타입에 정의된 프로퍼티만 정의
// 🙅‍♀️
// let book2: Book = {
//   name: "한입 리액트",
//   price: 33000,
//   skill: "reactjs",
// };

function func(book: Book) {}

func({
  name: "book",
  price: 30000,
});

// 🙅‍♀️
// func({
//   name: "book",
//   price: 30000,
//   skill: 'ts'
// });
