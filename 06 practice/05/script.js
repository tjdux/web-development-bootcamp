const registerBtn = document.querySelector(".register-btn");
const userList = document.querySelector(".user-list");
const nameInput = document.querySelector("#name");
const activeInput = document.querySelector("#active");

const stats = {
  totalUsers: 0,
  activeUsers: 0,
  messages: 0,
}

registerBtn.addEventListener("click", function(){
  const name = nameInput.value.trim();
  const isActive = activeInput.value === "active";

  if (name){
    addUser(name, isActive);
    updateStats(isActive, false);
    updateDashboard();
    clearInput();
  }
})

userList.addEventListener("click", function(e){
  if (e.target.classList.contains("msg-btn")){
    updateStats(false, true);
    updateDashboard();
  }
})

function addUser(name, isActive){
  const li = document.createElement("li");
  li.classList.add("d-flex", "justify-content-between", "list-group-item")
  li.innerHTML = `
    ${name} - ${isActive ? "활성화" : "비활성화"}
    <button class="msg-btn border border-primary">📨 메시지</button>
  `
  userList.appendChild(li);
}

function updateStats(isActive, isMessage){
  if (isMessage){
    stats.messages++;
    return;
  }
  stats.totalUsers++;
  if (isActive) stats.activeUsers++;
}

function updateDashboard(){
  document.querySelector(".total-users").textContent = stats.totalUsers;
  document.querySelector(".active-users").textContent = stats.activeUsers;
  document.querySelector(".messages").textContent = stats.messages;
}

function clearInput(){
  nameInput.value = "";
}