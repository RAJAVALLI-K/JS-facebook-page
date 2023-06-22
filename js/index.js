let signupBtn = document.getElementById('signup');

let emailBtn = document.querySelector('#email');
let password = document.querySelector('#password');
let firstname = document.querySelector('#fname');
let surename = document.querySelector('#sname');

let female = document.querySelector(".female");
let male = document.querySelector(".male");
let custom = document.querySelector(".custom");

let gender1 = document.querySelector(".radio1")
let gender2 = document.querySelector(".radio2")
let gender3 = document.querySelector(".radio3")

let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");
let error5 = document.querySelector(".error5");
let error6 = document.querySelector(".error6");
let error7 = document.querySelector(".error7");

if (localStorage.getItem("facebook") == null) {
    localStorage.setItem("facebook", "[]");
}

data = {};

signupBtn.addEventListener('click', storingData);
function storingData(e) {
    e.preventDefault();

    if (firstname.value == "") {
        firstname.style.border = "1px solid red";
        error1.style.display = "flex";
    }
    else {
        firstname.style.border = "1px solid #dadde1";
        error1.style.display = "none";
    }

    if (surename.value == "") {
        surename.style.border = "1px solid red";
        error2.style.display = "flex";
    }
    else {
        surename.style.border = "1px solid #dadde1";
        error2.style.display = "none";
    }

    if (emailBtn.value == "") {
        emailBtn.style.border = "1px solid red";
        error3.style.display = "flex";
    }
    else {
        emailBtn.style.border = "1px solid #dadde1";
        error3.style.display = "none";
    }

    if (password.value == "") {
        password.style.border = "1px solid red";
        error4.style.display = "flex";
    }
    else {
        password.style.border = "1px solid #dadde1";
        error4.style.display = "none";
    }
    if (female.checked == false && male.checked == false && custom.checked == false) {
        gender1.style.border = "1px solid red";
        gender2.style.border = "1px solid red";
        gender3.style.border = "1px solid red";
        error6.style.display = "flex"
    }
    else {
        gender1.style.border = "1px solid #dadde1";
        gender2.style.border = "1px solid #dadde1";
        gender3.style.border = "1px solid #dadde1";
        error6.style.display = "none"
    }

    let array = JSON.parse(localStorage.getItem("facebook"));
    let length = array.length;
    console.log(length)

    user: if (firstname.value != "") {
        if (surename.value != "") {
            if (emailBtn.value != "") {
                for (i = 0; i < length; i++) {
                    if (array[i].username == emailBtn.value) {
                        emailBtn.style.border = "1px solid red";
                        error3.style.display = "flex";
                        error7.style.display = "flex";
                        break user;
                    }
                }
                if (password.value != "") {
                    if (female.checked != false || male.checked != false || custom.checked != false) {
                        data.firstname = firstname.value;
                        data.surename = surename.value;
                        data.username = emailBtn.value;
                        data.password = password.value;
                        data["DOB"] = "date of birth";
                        data.gender = "gender"
                        console.log(data)

                        array[length] = data;
                        console.log(array);

                        localStorage.setItem("facebook", JSON.stringify(array))

                        alert('register successfully');
                        location.href = 'login.html';
                    }
                }
            }
        }
    }

};


