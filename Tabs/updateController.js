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

//linear code
var currentUser = 0;
var users = [{}];
var projects = [{}];
if(users.length < loadUsers().length) {
    users = loadUsers();
}
if(projects.length < loadProjects().length) {
    projects = loadProjects();
}
if(currentUser < loadCurrentUser()) {
    currentUser = loadCurrentUser();
}