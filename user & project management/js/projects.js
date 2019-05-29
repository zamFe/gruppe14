//global variables

var projectIdCount = 0;
var projects = [{}]; //index 0 is filler

//methods

//create new project with incremented id
function createNewProject(projectName, description, tag, members, toDo, ongoing, stuck, finished) {
    projectIdCount++;
    projects[projectIdCount].id = projectIdCount;
    projects[projectIdCount].projectName = projectName;
    projects[projectIdCount].description = description;
    projects[projectIdCount].tag = tag;
    projects[projectIdCount].members = members;
    projects[projectIdCount].toDo = toDo;
    projects[projectIdCount].ongoing = ongoing;
    projects[projectIdCount].stuck = stuck;
    projects[projectIdCount].finished = finished;
}

function getProjectData(id) {
    return projects[id];
}

function loadProject(projectName) {

}

//code