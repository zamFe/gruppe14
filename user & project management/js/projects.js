//global variables

var projectIdCount = 0;
var projects = [{}]; //index 0 is filler

//methods

//create new project with incremented id
function createNewProject(projectName, description, tag, members) {
    projectIdCount++;
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
}

function getProjectData(id) {
    return projects[id];
}

function loadProject(projectName) {

}

//code