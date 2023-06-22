var username = document.getElementById("email");
var password = document.getElementById("password");

let error8 = document.querySelector(".error8");
let error9 = document.querySelector(".error9");

var button = document.getElementById("login1");

var array = JSON.parse(localStorage.getItem("facebook"));
console.log(array)

button.addEventListener("click", function (events) {
    events.preventDefault();

    if (username.value == "") {
        username.style.border = "1px solid red";
        error8.style.display = "flex";
    }
    else {
        username.style.border = "1px solid #dadde1";
        error8.style.display = "none";
    }

    if (password.value == "") {
        password.style.border = "1px solid red";
        error9.style.display = "flex";
    }
    else {
        password.style.border = "1px solid #dadde1";
        error9.style.display = "none";
    }

    array.forEach(e => {
        if (username.value == e.username && password.value == e.password) {
            console.log((username.value == e.username && password.value == e.password));
            window.location.href = "successful.html";
        }
    });

})


