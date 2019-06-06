//global variables

//var userIdCount = 0;
var users = [{}]; //index 0 is filler
var currentUser = loadCurrentUser(); //0 = no user

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
    users[userIdCount].exp = 0;
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
            currentUser = i;
            //updateUserDiv(getUserData(currentUser));
            return 1;
        }
    }
    return 0;
}

//DOM-methods

//updates user div in HTML (as well as progress bar i users.css))
function updateUserDiv(user) {
    var profileUsername = document.getElementById("profileUsername");
    var profileDescription = document.getElementById("profileDescription");
    var profileProgressBar = document.getElementById("profileProgressBar");
    profileUsername.innerHTML = user.firstName + " " + user.lastName;
    profileDescription.innerHTML = "username: " + user.userName + " | age: " + user.age
        + "yrs. <br> email: " + user.email;
    profileProgressBar.innerHTML = user.exp + "/" + 1000 + " - level " + 1;
    profileProgressBar.style.width = (user.exp * 100) / 1000 + "%";
}

//events

function buildUser() {
    var name = document.getElementById("name").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var gender = document.getElementById("female").checked = "female";
    var gender = document.getElementById("male").checked = "male";
    var gender = document.getElementById("other").checked = "other";
    if (repeatPassword != password){
        alert("Passwords are not identical.");
        return"";
    } else {
        createNewUser(name, userName, email, dateOfBirth, password, repeatPassword, gender);
        saveUsers(users);
    }
}

//code
