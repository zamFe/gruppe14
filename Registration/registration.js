//password placeholder fixing
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //repeatPassword placeholder fixing
  function myFunction1() {
    var x = document.getElementById("myInput");
    if (x.type === "repeatPassword") {
      x.type = "text";
    } else {
      x.type = "repeatPassword";
    }
  }

  function register() {
      var password = document.getElementById("password");
      var passwordRepeat = document.getElementById("repeatPassword");
      var userName = document.getElementById("userName");
      var name = document.getElementById("name");
      if(userName.value == "" || password.value == "" ) {
          alert("please fill inn forms");
          return;
      } else if(password.value != passwordRepeat.value) {
          alert("passwords do not match");
          return;
      }   else {
          buildUser();
          window.location.href = '../login/logginn.html';
      }
  }

  // When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function fadein1(){
  document.getElementById("speechBubble1").style.visibility="visible";

 }

  function fadeout1(){
    document.getElementById("speechBubble1").style.visibility ="hidden";
    }

    function fadein2(){
      document.getElementById("speechBubble2").style.visibility="visible";
    
     }
    
      function fadeout2(){
        document.getElementById("speechBubble2").style.visibility ="hidden";
        }

        function fadein3(){
          document.getElementById("speechBubble3").style.visibility="visible";
        
         }
        
          function fadeout3(){
            document.getElementById("speechBubble3").style.visibility ="hidden";
            }
            function fadein4(){
              document.getElementById("speechBubble4").style.visibility="visible";
            
             }
            
              function fadeout4(){
                document.getElementById("speechBubble4").style.visibility ="hidden";
                }
                function fadein5(){
                  document.getElementById("speechBubble5").style.visibility="visible";
                
                 }
                
                  function fadeout5(){
                    document.getElementById("speechBubble5").style.visibility ="hidden";
                    }
                    function fadein6(){
                      document.getElementById("speechBubble6").style.visibility="visible";
                    
                     }
                    
                      function fadeout6(){
                        document.getElementById("speechBubble6").style.visibility ="hidden";
                        }
                    
                
        
    

  