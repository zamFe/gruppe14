//global variables

var user_id_count = 0;
var users = {};

//user system

/*
var user = {
    //essential
    id: null,
    userName: "",
    password: "",
    email: "";
    //general
    firstName: "",
    lastName: "",
    age: null,
    //personalization
    exp: 0,
    badgeId: "",
    themeId: "",
    //storage
    projects: []
};
'*/

//create new user with incremented id
function createNewUser(userName, password, email, age, firstName, lastName) {
    user_id_count++;
    users['user_' + user_id_count] = {};
    users['user_' + user_id_count].id = user_id_count;
    users['user_' + user_id_count].userName = userName;
    users['user_' + user_id_count].password = password;
    users['user_' + user_id_count].password = email;
    users['user_' + user_id_count].password = age;
    users['user_' + user_id_count].firstName = firstName;
    users['user_' + user_id_count].lastName = lastName;
    users['user_' + user_id_count].exp = 0;
    users['user_' + user_id_count].badgeId = "default";
    users['user_' + user_id_count].themeId = "default";
    users['user_' + user_id_count].projects = ["get_started"];
}

function getUserData(id) {
    return users['user_' + id];
}

//TESTING
createNewUser("Ola123", "passord123",
    "ola123@gmail.com", 22, "Ola",
    "Normann");
createNewUser("Arne420", "bengt123",
    "arne420@gmail.com", 17, "Arne",
    "420");

function getUserData(userName, passWord) {
    users.indexOf()
}

console.log(getUserData(2));