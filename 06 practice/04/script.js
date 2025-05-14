const form = document.querySelector("form");
const msgList = document.querySelector("#messageList");

const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#message");


function appendMessage(){
  const li = document.createElement("li");

  const name = nameInput.value;
  const email = emailInput.value;
  const msg = msgInput.value;

  li.innerHTML = `<strong>${name}(${email})</strong><br/>${msg}`;
  li.classList.add("list-group-item");

  msgList.appendChild(li);
}

function clearInput(){
  nameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  appendMessage();
  clearInput();
})

function clearForm(){
  if(msgList.children.length > 0){
    msgList.lastElementChild.remove();
  }
}