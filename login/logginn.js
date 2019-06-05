var username;
var password;


function logInUser() {

    username = document.getElementById("userNameLogIn").value;
    password = document.getElementById("passwordLogIn").value;

    if (username == "user" && password == "psw123") {
        location.href = "../Tabs/tabs.html";
    } else {
        alert("Wrong username and/or password")
    }
}

function forgotpassword(){
    prompt("Enter your e-mail address:");
}