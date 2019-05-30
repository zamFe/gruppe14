//variables

var popup = document.getElementById("popupContainer");

//functions

function displayPopup(type) {
    popup.style.width = "500px";
    popup.style.height = "500px";
    popup.style.boxShadow = "3px 6px 300px 78px rgba(100,100,100,1)";
    popup.style.borderRadius = "5%";

    switch(type) {
        case "newProject":
            popupProject();
            break;
    }
}

function popupProject() {
    var title = document.createElement("h2");
    title.innerHTML= "Create New Project";
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

    var createProjectButton = document.createElement("button");
    createProjectButton.id = "createProjectButton";
    createProjectButton.innerHTML = "Create project";
    popup.appendChild(createProjectButton);

    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "X";
    cancelButton.id = "cancelButton";
    cancelButton.onclick = function handleChild(e) {
        e.stopPropagation();
        closePopup();
    };
    cancelButton.placeholder = "cancel";
    popup.appendChild(cancelButton);

}

function closePopup() {
    console.log("closing..");
    while (popup.hasChildNodes()) {
        popup.removeChild(popup.lastChild);
    }

    popup.style.width = "0";
    popup.style.height = "0";
    popup.style.boxShadow = "0 0 0 0 rgba(100,100,100,1)";
    popup.style.borderRadius = "0";
}

//code