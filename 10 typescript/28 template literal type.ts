// 템플릿 리터럴 타입
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
type ColoredAnimal = `${Color}-${Animal}`;
// type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"

const coloredAnimal: ColoredAnimal = "black-cat";
