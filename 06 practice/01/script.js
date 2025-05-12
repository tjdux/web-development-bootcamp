const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  const msg = document.querySelector("p");
  msg.textContent = "버튼이 클릭되었습니다!";
})