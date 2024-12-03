let userName = document.querySelector(".user");
var currentUser = localStorage.getItem("newUser");
userName.innerHTML = currentUser;
