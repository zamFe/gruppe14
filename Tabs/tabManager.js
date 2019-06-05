
//variables

var activeTab = 0; //0 = main tab
var sectionCounter = 0; //counts created sections (projects and profile pages)
var colorArr = ["White" + "Blue" + "Burgunder"];

//methods

//create new tab for a project
function createNewTab(projectId) {
    sectionCounter++;

    //first: make tab

    //get main container
    var tabContainer = document.getElementById("tabContainer");

    //create necessary elements
    var tab = document.createElement("div");
    var tabImg = document.createElement("img");
    var tabTitle = document.createElement("h3");

    //add onclick to make sure tabs switch correctly
    tab.onclick = function handleMouseEvent(e) {
        setActiveTab(e.target.parentNode);


    };
    //add content
    tabImg.src = "./Images/TabWhite.png";
    tabTitle.innerHTML = projects[projectId].projectName;

    //add id and class
    tab.id = sectionCounter;
    tab.classList.add("tab");
    tabImg.classList.add("tabImg");
    tabTitle.classList.add("tabTitle");

    //put it on the website
    tab.appendChild(tabImg);
    tab.appendChild(tabTitle);
    tabContainer.appendChild(tab);

    //update flex-grid order
    var add = document.getElementById("add");
    tab.style.order = add.style.order;
    add.style.order++;

    //update z-index and active tab
    /*let previousTab = activeTab;
    setActiveTab(tab);*/

    //second: build section

    //build project section and add to main
    var main = document.getElementById("main");
    var section = document.createElement("section");
    section.id = "section" + sectionCounter;
    //title
    var title = document.createElement("h1");
    title.id = "projectPageTitle";
    title.innerHTML = projects[projectId].projectName + "<br>";
    section.appendChild(title);
    //members
    var members = document.createElement("h3");
    members.style.color = "white";
    members.innerHTML = "Members in this project:";
    for(let i = 0; i < projects[projectId].members.length; i++) {
        members.innerHTML += " " + projects[projectId].members[i] + ",";
    }
    section.appendChild(members);
    //insert task columns and all additional content into section
    section.innerHTML +=
        '<div class="wrapperuper">\n' +
        '    <div class="uper">To-Do</div>\n' +
        '    <div class="uper">Ongoing</div>\n' +
        '    <div class="uper">Stuck</div>\n' +
        '    <div class="uper">Finished</div>\n' +
        '</div>\n' +
        '\n' +
        '<img class="pluss" id="pluss1" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '<img class="pluss" id="pluss2" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '<img class="pluss" id="pluss3" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '<img class="pluss" id="pluss4" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '\n' +
        '<div id="toDoColumn" class="wrapper">\n' +
        '    <!--div class="item">\n' +
        '        <input type="text" placeholder="Title..." class="itemTitle">\n' +
        '        <textarea placeholder="details..." class="itemText" rows="1" cols="10"></textarea>\n' +
        '        <input type="search" placeholder="Add members here" class="itemSearch" onfocus="renderMemberSearch(event);" onblur="removeMemberSearch(event);" onkeyup="hideMemberSearch(event);">\n' +
        '        <ul class="searchList">Members\n' +
        '        </ul>\n' +
        '    </div-->\n' +
        '</div>\n' +
        '\n' +
        '<div id="OngoingColumn" class="wrapper">\n' +
        '</div>\n' +
        '\n' +
        '<div id="StuckColumn" class="wrapper">\n' +
        '</div>\n' +
        '\n' +
        '<div id="FinishedColumn" class="wrapper">\n' +
        '</div>';
    document.body.style.backgroundSize = "cover";

    //add section to main
    main.appendChild(section);

    //finally: switch page and update z-index
    setActiveTab(tab);
}

function openProfileTab() {
    if(document.getElementById("profileTab")) {
        return "profile already open";
    }
    sectionCounter++;
    //first: make tab

    //get main container
    var tabContainer = document.getElementById("tabContainer");

    //create necessary elements
    var tab = document.createElement("div");
    var tabImg = document.createElement("img");
    var tabTitle = document.createElement("h3");

    //add onclick to make sure tabs switch correctly
    tab.onclick = function handleMouseEvent(e) {
        setActiveTab(e.target.parentNode);


    };
    //add content
    tabImg.src = "./Images/TabWhite.png";
    tabTitle.innerHTML = "Profile";

    //add id and class
    tab.id = "profileTab";
    tab.classList.add("tab");
    tabImg.classList.add("tabImg");
    tabTitle.classList.add("tabTitle");

    //put it on the website
    tab.appendChild(tabImg);
    tab.appendChild(tabTitle);
    tabContainer.appendChild(tab);

    //update flex-grid order
    var add = document.getElementById("add");
    tab.style.order = add.style.order;
    add.style.order++;

    //update z-index and active tab
    /*let previousTab = activeTab;
    setActiveTab(tab);*/

    setActiveTab(tab);
}

//set tab to active, works as an onclick event or from js
function setActiveTab(target) {
    let previousTab = activeTab;
    document.getElementById(activeTab.toString()).style.zIndex = "0";
    activeTab = target.id;
    target.style.zIndex = "1";

    if(previousTab == 0) {
        document.getElementById("home").style.display = "none";
    } else if (previousTab == "profileTab") {
        document.getElementById("profilePage").style.display = "none";
    } else {
        document.getElementById("section" + previousTab).style.display = "none";
    }

    if(activeTab == 0) {
        document.getElementById("home").style.display = "block";
    } else if (activeTab == "profileTab") {
        document.getElementById("profilePage").style.display = "block";
    } else {
        document.getElementById("section" + activeTab).style.display = "block";
    }
}

//script
