//variables

var isPopupOpen = false;
var popup = document.getElementById("popupContainer");

//functions

//display popup core function: switch handles type of popup
function displayPopup(type) {
    popup.style.width = "500px";
    popup.style.height = "500px";
    popup.style.boxShadow = "3px 6px 300px 78px rgba(100,100,100,1)";
    popup.style.borderRadius = "5%";

    if(!isPopupOpen) {
        switch (type) {
            case "newProject":
                popupNewProject();
                isPopupOpen = true;
                break;
            case "loadProject":
                popupLoadProject();
                isPopupOpen = true;
                break;
        }
    }
}

//fills popup with elements for creating new project
function popupNewProject() {
    var title = document.createElement("h2");
    title.innerHTML= "Create new project";
    popup.appendChild(title);

    var projectName = document.createElement("input");
    projectName.placeholder = "project name";
    projectName.classList.add("createProjectInput");
    popup.appendChild(projectName);

    var description = document.createElement("textarea");
    description.placeholder = "description";
    description.classList.add("createProjectInput");
    description.style.height = "100px";
    description.id = "createProjectDescription";
    popup.appendChild(description);

    var tag = document.createElement("input");
    tag.placeholder = "tag (technology, school, etc)";
    tag.classList.add("createProjectInput");
    popup.appendChild(tag);

    var members = document.createElement("input");
    members.placeholder = "members (userName, userName)";
    members.classList.add("createProjectInput");
    popup.appendChild(members);

    //button to actually create the project
    var createProjectButton = document.createElement("button");
    createProjectButton.id = "createProjectButton";
    createProjectButton.innerHTML = "Create project";
    createProjectButton.onclick = function handleEvent(e) {
      e.stopPropagation();
        createNewProject(projectName.value, description.value,
            tag.value, members.value,
            [], [],[],[]);
    };
    popup.appendChild(createProjectButton);

    //close popup button
    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "X";
    cancelButton.classList.add("cancelButton");
    cancelButton.onclick = function handleChild(e) {
        e.stopPropagation();
        closePopup();
    };
    cancelButton.placeholder = "cancel";
    popup.appendChild(cancelButton);

}

//fills popup with elements for loading existing project
function popupLoadProject() {
    var title = document.createElement("h2");
    title.innerHTML= "Load project";
    popup.appendChild(title);

    //list of projects
    var projectList = document.createElement("ul");
    //projectList.id = "loadProjectList";
    //fill list with projects
    for(let i = projects.length-1; i > 0; i--) {
        console.log(i);
        var project = document.createElement("li");
        project.classList.add("loadProjectList");
        project.innerHTML = projects[i].projectName;
        project.innerHTML += "<br><br>";
        project.innerHTML += "tag: " + projects[i].tag;
        project.innerText += " desc: " + projects[i].description;
        project.innerHTML += " members: " + projects[i].members.length;
        projectList.appendChild(project);
    }
    popup.appendChild(projectList);

    //close popup button
    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "X";
    cancelButton.classList.add("cancelButton");
    cancelButton.onclick = function handleChild(e) {
        e.stopPropagation();
        closePopup();
    };
    cancelButton.placeholder = "cancel";
    popup.appendChild(cancelButton);
}

//closes the popup regardless of content
function closePopup() {
    while (popup.hasChildNodes()) {
        popup.removeChild(popup.lastChild);
    }

    popup.style.width = "0";
    popup.style.height = "0";
    popup.style.boxShadow = "0 0 0 0 rgba(100,100,100,1)";
    popup.style.borderRadius = "0";

    isPopupOpen = false;
}

//code