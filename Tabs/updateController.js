/*
this script makes sure that everything is up to date
 */

//variables



//functions

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function saveProjects(projects) {
    localStorage.setItem("projects",JSON.stringify(projects));
}

function saveCurrentUser(currentUser) {
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
}

function saveUsersAndProjects(users, projects) {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("projects",JSON.stringify(projects));
}

function loadUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

function loadCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

//update user data in Tabs.html
function updateTabsUser() {
    let user = users[loadCurrentUser()];
    document.getElementById("profileTitle").innerHTML = user.name + " (" + user.userName + ")";
    document.getElementById("welcomeMessage").innerHTML = "Welcome back, " + user.name;
    document.getElementById("profileName").innerHTML = user.name;
    document.getElementById("profileBirth").innerHTML = user.dateOfBirth;
    document.getElementById("profileGender").innerHTML = user.gender;
    document.getElementById("profileMail").innerHTML = user.email;
    document.getElementById("profileNickname").innerHTML = user.userName;

    //user level-box on profile page
    document.getElementById("profileBoxUsername").innerHTML = user.userName;
    document.getElementById("profileBoxDescription").innerHTML = "Gender: " + user.gender + "<br> email: " + user.email
    let profileProgressBar = document.getElementById("profileProgressBar");
    profileProgressBar.innerHTML = user.exp + "/" + 1000 + " - level " + 1;
    profileProgressBar.style.width = (user.exp * 100) / 1000 + "%";
}

//linear code
var currentUser = 0;
var users = [{}];
var projects = [{}];

createNewProject("Get Started", "intro project", "tutorial", "TaskBinder");
saveProjects(projects);

if(users.length < loadUsers().length) {
    users = loadUsers();
}
if(currentUser < loadCurrentUser()) {
    currentUser = loadCurrentUser();
}
if(projects.length < loadProjects().length) {
    projects = loadProjects();
}