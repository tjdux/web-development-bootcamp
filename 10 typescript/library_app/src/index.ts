enum Role {
  Admin = "admin",
  Regular = "regular",
}

interface User {
  id: string;
  name: string;
  role: Role;
}

interface Book {
  isbn: string;
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

interface RentalRecord {
  rentalId: number;
  bookIsbn: string;
  userId: string;
  rentalDate: Date;
  dueDate: Date;
  returnDate?: Date;
}

let libraryBooks: Book[] = [];
let libraryUsers: User[] = [];
let libraryRentalRecords: RentalRecord[] = [];

function isAdmin(user: User): boolean {
  return user.role === Role.Admin;
}

// 1️⃣ 도서 등록 기능
function addBook(user: User, newBook: Book): void {
  if (!isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  if (libraryBooks.some((book) => book.isbn === newBook.isbn)) {
    console.log("이미 존재하는 도서");
    return;
  }

  libraryBooks.push(newBook);
}

// 2️⃣ 도서 삭제 기능
function removeBook(user: User, isbn: string): void {
  if (!isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  const bookToRemove = libraryBooks.find((book) => book.isbn === isbn);

  if (!bookToRemove) {
    console.log("없는 도서");
    return;
  }

  if (!bookToRemove.isAvailable) {
    console.log("대출중");
    return;
  }

  libraryBooks = libraryBooks.filter((book) => book.isbn !== isbn);
  console.log(
    `도서 ${bookToRemove.title} (isbn: ${bookToRemove.isbn})이(가) 삭제되었습니다.`
  );
}

// 3️⃣ 도서 대출 기능
function rentBook(user: User, isbn: string): void {
  if (isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  const bookToRent = libraryBooks.find((book) => book.isbn === isbn);

  if (!bookToRent) {
    console.log("없는 도서");
    return;
  }

  if (!bookToRent.isAvailable) {
    console.log("대출중");
    return;
  }

  bookToRent.isAvailable = !bookToRent.isAvailable;
}

// 4️⃣ 도서 반납 기능
function returnBook(user: User, isbn: string) {
  if (isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  const bookToRemove = libraryBooks.find((book) => book.isbn === isbn);

  if (bookToRemove) {
    bookToRemove.isAvailable = !bookToRemove?.isAvailable;
  }
}

// 유저 생성
function registerUser({ id, name, role }: User, user: User): void {
  if (!isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  if (libraryUsers.some((user) => user.id === id)) {
    console.log("이미 존재하는 유저");
    return;
  }

  const newUser: User = { id, name, role };
  libraryUsers.push(newUser);
}
