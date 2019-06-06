//global variables

//var projectIdCount = 0;
//var projects = [{}]; //index 0 is filler

//methods

//create new project with incremented id
function createNewProject(projectName, description, tag, members) {
    let projectIdCount = projects.length;
    projects[projectIdCount] = {};
    projects[projectIdCount].id = projectIdCount;
    projects[projectIdCount].projectName = projectName;
    projects[projectIdCount].description = description;
    projects[projectIdCount].tag = tag;
    projects[projectIdCount].members = members.split(',');
    projects[projectIdCount].toDo = [];
    projects[projectIdCount].ongoing = [];
    projects[projectIdCount].stuck = [];
    projects[projectIdCount].finished = [];

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page == "tabs.html") {
        updateActiveProjectList(projects[projectIdCount]);
    }
    saveProjects(projects);
}

function getProjectData(id) {
    return projects[id];
}

function updateActiveProjectList(project) {
    var list = document.getElementById("activeList");
    var listElement = document.createElement("li");
    listElement.classList.add("activeListObject");
    listElement.innerHTML = project.projectName + " | members: " + project.members.length;
    listElement.onclick = function handleProjectPopupClick(e) {
        createNewTab(project.id);
    };
    list.appendChild(listElement);
}

//code
