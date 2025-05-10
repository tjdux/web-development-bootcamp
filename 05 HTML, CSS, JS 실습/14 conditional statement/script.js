const age = 22; //prompt("나이")

if (age >= 20){
  console.log("성인");
} else if (age >= 17){
  console.log("고등학생");
} else if (age >= 14){
  console.log("중학생");
} else if (age >= 8){
  console.log("초등학생");
} else if (age >= 0){
  console.log("유아")
} else {
  console.log("음수")
}

let now = new Date().getHours();

if (now < 12){
  console.log("오전")
} else {
  console.log("오후");
}