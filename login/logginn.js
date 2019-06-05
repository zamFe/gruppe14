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



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function inputname1(){
  document.getElementById("speechBubble1").style.visibility="visible";

 }

  function inputname2(){
    document.getElementById("speechBubble1").style.visibility ="hidden";
    }

    function inputpasword1(){
      document.getElementById("speechBubble2").style.visibility="visible";

     }

      function inputpasword2(){
        document.getElementById("speechBubble2").style.visibility ="hidden";
        }
