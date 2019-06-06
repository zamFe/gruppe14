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

//linear code