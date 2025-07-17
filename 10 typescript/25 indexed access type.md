## 객체

```ts
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// 🌠 인덱스 (["author"])는 값이 아닌 타입
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

function printAuthorId(authorId: Post["author"]["id"]) {
  console.log(`id: ${id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "박서연",
    age: 27,
  },
};

printAuthorInfo(post.author);
printAuthorId(post.author.id);
```

<br/>

## 배열

```ts
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 배열 타입으로부터 하나의 요소 타입만 가져옴
// 인덱스 [number]는 값이 아닌 타입!
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "박서연",
    age: 27,
  },
};
// const post1: PostList[0] = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "박서연",
//     age: 27,
//   },
// };

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

printAuthorInfo(post.author);
```

<br/>

## 튜플

```ts
type Tup = [number, string, boolean];
type Tup0 = Tup[0]; //type Tup0 = number
type Tup1 = Tup[1]; //type Tup1 = string
type Tup2 = Tup[2]; //type Tup2 = boolean
// tuple에 있는 모든 타입의 최적의 공통 타입
type TupNum = Tup[number]; //type TupNum = string | number | boolean
```
