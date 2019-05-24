//global variables

var userIdCount = 0;
var users = [{}]; //index 0 of filler
var currentUser = 0; //0 = no user

//methods

//create new user with incremented id
function createNewUser(userName, password, email, age, firstName, lastName) {
    userIdCount++;
    users[userIdCount] = {};
    users[userIdCount].id = userIdCount;
    users[userIdCount].userName = userName;
    users[userIdCount].password = password;
    users[userIdCount].email = email;
    users[userIdCount].age = age;
    users[userIdCount].firstName = firstName;
    users[userIdCount].lastName = lastName;
    users[userIdCount].exp = 0;
    users[userIdCount].badgeId = "default";
    users[userIdCount].themeId = "default";
    users[userIdCount].projects = ["get_started"];
}

//returns user object from id
function getUserData(id) {
    return users['user_' + id];
}

//finds corresponding user and set as logged in
function login(username, password) {
    console.log(users.length);
    for (let i = 1; i < users.length; i++) {
        if (users[i].userName.localeCompare(username) === 0 && users[i].password.localeCompare(password) === 0) {
            currentUser = 1;
            return 1;
        }
    }
    return 0;
}

//DOM-methods
function updateUserDiv(user) {

}


//TESTING

createNewUser("Ola123", "passord123",
    "ola123@gmail.com", 22, "Ola",
    "Normann");
createNewUser("Arne420", "bengt123",
    "arne420@gmail.com", 17, "Arne",
    "420");

console.log(getUserData(2));
console.log(login("Ola123", "passord123"));
