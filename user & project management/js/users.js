//global variables

//var userIdCount = 0;
/*var users = [{}]; //index 0 is filler
var currentUser = loadCurrentUser(); //0 = no user*/

//methods

//create new user with incremented id
function createNewUser(name, userName, email, dateOfBirth, password, repeatPassword, gender) {
    let userIdCount = users.length;
    users[userIdCount] = {};
    users[userIdCount].id = userIdCount;
    users[userIdCount].name = name;
    users[userIdCount].userName = userName;
    users[userIdCount].email = email;
    users[userIdCount].dateOfBirth = dateOfBirth;
    users[userIdCount].password = password;
    users[userIdCount].repeatPassword = repeatPassword;
    users[userIdCount].gender = gender;
    //to give a simulation of how levels would work we add a little exp between 0 and 1000
    users[userIdCount].exp = Math.floor((Math.random() * 1000) + 1);
    //due to lack of time the following aren't completely implemented
    users[userIdCount].badgeId = "default";
    users[userIdCount].themeId = "default";
    users[userIdCount].projects = ["get_started"];
}

//returns user object from id
function getUserData(id) {
    return users[id];
}

//finds corresponding user and set as logged in
function login(username, password) {
    for (let i = 1; i < users.length; i++) {
        if (users[i].userName.localeCompare(username) === 0
            && users[i].password.localeCompare(password) === 0) {
            console.log("successfull login, saving: " + i);
            saveCurrentUser(i);
            //updateUserDiv(getUserData(currentUser));
            return 1;
        }
    }
    return 0;
}

//DOM-methods

//updates user div in HTML (as well as progress bar))
function updateUserDiv(user) {
    var profileUsername = document.getElementById("profileBoxUsername");
    var profileDescription = document.getElementById("profileBoxDescription");
    var profileProgressBar = document.getElementById("profileProgressBar");
    profileUsername.innerHTML = user.firstName + " " + user.lastName;
    profileDescription.innerHTML = "username: " + user.userName + " | age: " + user.age
        + "yrs. <br> email: " + user.email;
    profileProgressBar.innerHTML = user.exp - Math.floor(user.exp/1000) * 1000 + "/" + 1000 + " - level " + Math.floor(user.exp/1000);
    profileProgressBar.style.width = (user.exp - Math.floor(user.exp/1000) * 1000 ) / 10 + "%";
    saveUsers(users);
}

//events

function buildUser() {
    var name = document.getElementById("name").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var gender;
    if(document.getElementById("female").checked) {
        gender = "female";
    } else if (document.getElementById("male").checked) {
        gender = "male";
    } else if (document.getElementById("other").checked) {
        gender = "other";
    } else {
        gender = "not given";
    }
    if (repeatPassword != password){
        alert("Passwords are not identical.");
        return"";
    } else {
        createNewUser(name, userName, email, dateOfBirth, password, repeatPassword, gender);
        saveUsers(users);
    }
}

//code
