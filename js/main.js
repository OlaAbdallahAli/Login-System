//Start Global Variables

let nameInput = document.getElementById("InputName");
let emailInput = document.getElementById("InputEmail");
let passwordInput = document.getElementById("InputPassword");
let signUp = document.getElementById("signup");
let emailExists = document.getElementById("emailexists");
let emailSucess = document.getElementById("emailsucess");
let alertMsg = document.getElementById("alertMsg");

let userList = [];

// End Global Variables

//EVENTS
signUp.addEventListener("click", function () {
  addUser();
});

// load new users

function addUser() {
  let user = {
    name: nameInput.value.trim(),
    Email: emailInput.value.trim(),
    password: passwordInput.value,
  };
  // to test input empty and remove error msg
  if (
    emailInput.value === "" ||
    passwordInput.value === "" ||
    nameInput.value === ""
  ) {
    let hide = setTimeout(function () {
      alertMsg.classList.remove("d-none");
    });
    alertMsg.addEventListener("mouseenter", function () {
      clearTimeout(hide);
    });
  } else {
    //to load data from local storage if available
    if (localStorage.getItem("usersContainer") !== null) {
      userList = JSON.parse(localStorage.getItem("usersContainer"));
      // to test the mail if already exists before
      for (let i = 0; i < userList.length; i++) {
        if (user.Email.toLowerCase() === userList[i].Email.toLowerCase()) {
          emailExists.classList.remove("d-none");
          return (window.location.href = "../index.html");
        }
      }
    }
    //push new data in local storage
    emailSucess.classList.remove("d-none");
    userList.push(user);
    localStorage.setItem("usersContainer", JSON.stringify(userList));
    //store username in localstorage
    localStorage.setItem("newUser", nameInput.value);
    let userName = localStorage.getItem("newUser");
  }
}
