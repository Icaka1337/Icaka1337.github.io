const login_button = document.querySelector('#login-button');
const close_login_button = document.querySelector('#close-login-button');
const sign_up_link = document.querySelector('#sign-up');

const sign_up_button = document.querySelector('#sign-up-button');
const close_sign_up_button = document.querySelector('#close-sign-up-button');

login_button.addEventListener('click', openLoginForm);
close_login_button.addEventListener('click', closeLoginForm);

sign_up_button.addEventListener('click', openSignUpForm);
close_sign_up_button.addEventListener('click', closeSignUpForm);

sign_up_link.addEventListener('click', closeLoginForm);
sign_up_link.addEventListener('click', openSignUpForm);


function openLoginForm() {
    let a = document.getElementById('login-container');
    a.classList.remove('display-none');
    a.classList.add('display-flex');
}

function closeLoginForm() {
    let a = document.getElementById('login-container');
    a.classList.remove('display-flex');
    a.classList.add('display-none');
}

function openSignUpForm() {
    let a = document.getElementById('sign-up-container');
    a.classList.remove('display-none');
    a.classList.add('display-flex');
}

function closeSignUpForm() {
    let a = document.getElementById('sign-up-container');
    a.classList.remove('display-flex');
    a.classList.add('display-none');
}

//search function
document.getElementById("search-button").onclick = function () {
    var x = document.getElementById("search").value;

    if (x == "56mm") {
        document.getElementById("cube2").style.display = "none";
        document.getElementById("cube3").style.display = "none";
        document.getElementById("cube4").style.display = "none";
        document.getElementById("cube5").style.display = "none";
        document.getElementById("cube6").style.display = "none";
        document.getElementById("cube7").style.display = "none";
        document.getElementById("cube8").style.display = "none";
    }
    else if (x == "60mm") {
        document.getElementById("cube1").style.display = "none";
        document.getElementById("cube3").style.display = "none";
        document.getElementById("cube4").style.display = "none";
        document.getElementById("cube5").style.display = "none";
        document.getElementById("cube7").style.display = "none";
        document.getElementById("cube8").style.display = "none";
    }
    else if (x == "65mm") {
        document.getElementById("cube1").style.display = "none";
        document.getElementById("cube2").style.display = "none";
        document.getElementById("cube4").style.display = "none";
        document.getElementById("cube5").style.display = "none";
        document.getElementById("cube6").style.display = "none";
        document.getElementById("cube7").style.display = "none";
        document.getElementById("cube8").style.display = "none";
    }
    else if (x == "70mm") {
        document.getElementById("cube1").style.display = "none";
        document.getElementById("cube2").style.display = "none";
        document.getElementById("cube3").style.display = "none";
        document.getElementById("cube5").style.display = "none";
        document.getElementById("cube6").style.display = "none";
        document.getElementById("cube7").style.display = "none";
        document.getElementById("cube8").style.display = "none";
    }
    else if (x == "102mm") {
        document.getElementById("cube1").style.display = "none";
        document.getElementById("cube2").style.display = "none";
        document.getElementById("cube4").style.display = "none";
        document.getElementById("cube6").style.display = "none";
        document.getElementById("cube7").style.display = "none";
        document.getElementById("cube8").style.display = "none";
    }
    else if (x == "45mm") {
        document.getElementById("cube1").style.display = "none";
        document.getElementById("cube2").style.display = "none";
        document.getElementById("cube4").style.display = "none";
        document.getElementById("cube5").style.display = "none";
        document.getElementById("cube6").style.display = "none";
        document.getElementById("cube8").style.display = "none";
    }
    else if (x == "38mm") {
        document.getElementById("cube1").style.display = "none";
        document.getElementById("cube2").style.display = "none";
        document.getElementById("cube4").style.display = "none";
        document.getElementById("cube5").style.display = "none";
        document.getElementById("cube6").style.display = "none";
        document.getElementById("cube7").style.display = "none";
    }
    else {
        alert("No results found");
        document.getElementById("cube1").style.display = "unset";
        document.getElementById("cube2").style.display = "unset";
        document.getElementById("cube3").style.display = "unset";
        document.getElementById("cube4").style.display = "unset";
        document.getElementById("cube5").style.display = "unset";
        document.getElementById("cube6").style.display = "unset";
        document.getElementById("cube7").style.display = "unset";
        document.getElementById("cube8").style.display = "unset";
    }
};