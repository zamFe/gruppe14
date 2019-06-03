function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function myFunction1() {
    var x = document.getElementById("myInput");
    if (x.type === "repeatPassword") {
      x.type = "text";
    } else {
      x.type = "repeatPassword";
    }
  }

  // When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

  