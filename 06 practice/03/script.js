const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone-number");
const agreeCheckbox = document.querySelector("#agree");

function alertMsg(){
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  msg = `설문지 제출 완료!
이름: ${name}
이메일: ${email}`

  alert(msg);
}

function clearInput(){
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  agreeCheckbox.checked = false;
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  alertMsg();
  clearInput();
})