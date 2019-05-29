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