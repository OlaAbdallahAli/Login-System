//Start Global Variables

let emailInput = document.getElementById("InputEmail");
let passwordInput = document.getElementById("InputPassword");
let signIn = document.getElementById("signin");

let errorMsg1 = document.getElementById("emailHelp");
let errorMsg2 = document.getElementById("incorrectmail");

let userList = JSON.parse(localStorage.getItem("usersContainer"));

signIn.addEventListener("click", function () {
  login();
});

//LogIN FUNCTION
function login() {
  for (let i = 0; i < userList.length; i++) {
    if (emailInput.value === "" || passwordInput.value === "") {
      errorMsg1.classList.remove("d-none");
    }
    if (
      emailInput.value === userList[i].Email &&
      passwordInput.value === userList[i].password
    ) {
      localStorage.setItem("newUser", userList[i].name);
      window.location = "./home.html";
    } else {
      errorMsg2.classList.remove("d-none");
    }
  }
}
