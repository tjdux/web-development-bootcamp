const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const msg = document.querySelector(".msg");

function greetUser(){
  const name = nameInput.value.trim();
  
  if (name === ""){
    msg.textContent = "이름을 입력해주세요!";
    return;
  }

  msg.textContent = `안녕하세요, ${name}님!`
}

function clearInput(){
  nameInput.value = "";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  greetUser();
  clearInput();
})