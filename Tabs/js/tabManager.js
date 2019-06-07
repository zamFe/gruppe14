
//variables

var activeTab = 0; //0 = main tab
var sectionCounter = 0; //counts created sections (projects)

//methods

//create new tab for a project
function createNewTab(projectId) {
    //make sure project isn't already open
    var main = document.getElementById("main");
    for (let i = 0; i < main.children.length; i++) {
        if (main.children[i].id == "section" + projectId) {
            setActiveTab(document.getElementById(projectId));
            return "project already open";
        }
    }

    sectionCounter++;

    //first: make tab

    //get main container
    var tabContainer = document.getElementById("tabContainer");

    //create necessary elements
    var tab = document.createElement("div");
    var tabImg = document.createElement("img");
    var tabTitle = document.createElement("h3");
    var tabClose = document.createElement("h3");

    //add onclick to make sure tabs switch correctly
    tab.onclick = function handleMouseEvent(e) {
        setActiveTab(e.target.parentNode);


    };
    //add content
    tabImg.src = "../Tabs/Images/TabWhite.png";
    tabTitle.innerHTML = projects[projectId].projectName;
    tabClose.innerHTML = "X";
    tabClose.onclick = function handleOnclick(event) {
        activeTab = 0;
        closeTab(event.target.parentElement.id);
    };

    //add id and class
    tab.id = projectId;
    tab.classList.add("tab");
    tabImg.classList.add("tabImg");
    tabTitle.classList.add("tabTitle");
    tabClose.classList.add("closeTabButton");

    //put it on the website
    tab.appendChild(tabImg);
    tab.appendChild(tabTitle);
    tab.appendChild(tabClose);
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
    var section = document.createElement("section");
    section.id = "section" + projectId;
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
        '<button class="popup" onclick="toggleInfoButton(event);">info!\n' +
        '        <span class="popuptext" style="transition: all 0.5s ease-in-out;">\n' +
        '            This is some tips for the new users of this application:\n' +
        '            <br>\n' +
        '            When you are developing tasks to do, always bear in mind which tasks are critical to finish.\n' +
        '            <br>\n' +
        '            Also, you should be mindful of those tasks that requires a previous task to finish before they can start.\n' +
        '            <br>\n' +
        '            This is an example of the development method called critical path.\n' +
        '            <br>\n' +
        '            When you use critical path, your main focus is to get a product with functionality.\n' +
        '            <br>\n' +
        '            Everything else increase the value of the product,\n' +
        '            <br>\n' +
        '            but should be focused upon when the critical tasks have enough manpower.\n' +
        '            <br>\n' +
        '            Another tip is to create tasks of appropriate size.\n' +
        '            <br>\n' +
        '            Try to divide the tasks to as small as possible,\n' +
        '            <br>\n' +
        '            but not to make them so small that they are impractical.\n' +
        '            <br>\n' +
        '            pro tip: check out the menu tab on the right. Here you can add post-it notes and log out!\n' +
        '            <br>\n' +
        '            When you create new projects and post-it notes, you gain some experience-points!\n ' +
        '        </span>\n' +
        '      </button>\n' +
        '<button class="button" id="button1" type="button" onClick = "openTimeLine(event.target);">Open Timetable!</button>\n' +
        '\n' +
        '<button class="button" id="button2" type="button" onClick = "closeTimeLine(event.target)">Close Timetable!</button>\n' +
        '\n' +
        '<div id="timeTable" class="timeTable">\n' +
        '    <div id="title" class="deltakere">Members</div>\n' +
        '    <div id="dag1" class="dag">Day 1</div>\n' +
        '    <div id="dag2" class="dag">Day 2</div>\n' +
        '    <div id="dag3" class="dag">Day 3</div>\n' +
        '    <div id="dag4" class="dag">Day 4</div>\n' +
        '    <div id="dag5" class="dag">Day 5</div>\n' +
        '    <div id="dag6" class="dag">Day 6</div>\n' +
        '    <div id="dag7" class="dag">Day 7</div>\n' +
        '\n' +
        '    <div id="name1" class="names">Maya</div>\n' +
        '    <div id="timeBuble1" class="timebuble">Start on MainPage</div>\n' +
        '    <div id="timeBuble6" class="timebubleBurgundy">Write Report</div>\n' +
        '    <div id="timeBuble11" class="timebuble">Continue on Mainpage</div>\n' +
        '    <div id="name2" class="names">Felix</div>\n' +
        '    <div id="timeBuble2" class="timebuble">Start on Add Function</div>\n' +
        '    <div id="timeBuble7" class="timebubleBurgundy">Write Report</div>\n' +
        '    <div id="timeBuble12" class="timebuble">Continue on Add Function</div>\n' +
        '    <div id="name3" class="names">Kristian</div>\n' +
        '    <div id="timeBuble3" class="timebuble">Start on Chatbox</div>\n' +
        '    <div id="timeBuble8" class="timebubleBurgundy">Write Report</div>\n' +
        '    <div id="timeBuble13" class="timebubleBurgundy">Continue on Chatbox</div>\n' +
        '    <div id="timeBuble14" class="timebubleBurgundy">Start on Frontpage</div>\n' +
        '    <div id="name4" class="names">Sindre</div>\n' +
        '    <div id="timeBuble4" class="timebuble">Start on Login Page</div>\n' +
        '    <div id="timeBuble9" class="timebubleBurgundy">Write Report</div>\n' +
        '    <div id="timeBuble15" class="timebuble">Continue on Login Page</div>\n' +
        '    <div id="name5" class="names">Eskild</div>\n' +
        '    <div id="timeBuble5" class="timebuble">Write Main Report</div>\n' +
        '    <div id="timeBuble10" class="timebubleBurgundy">Write Report</div>\n' +
        '    <div id="timeBuble16" class="timebubleBurgundy">Start on Logo</div>\n' +
        '    <div id="timeBuble17" class="timebubleBurgundy">Continue on Logo</div>\n' +
        '\n' +
        '\n' +
        '</div>\n' +
        '\n' +
        '\n' +
        '<div id="container">\n' +
        '\n' +
        '<div class="wrapperuper">\n' +
        '    <div class="uper">To-Do</div>\n' +
        '    <div class="uper">Ongoing</div>\n' +
        '    <div class="uper">Stuck</div>\n' +
        '    <div class="uper">Finished</div>\n' +
        '</div>\n' +
        '\n' +
        '<img class="pluss pluss1" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '<img class="pluss pluss2" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '<img class="pluss pluss3" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '<img class="pluss pluss4" src="../MainPage/bilder-slu/pluss.png" onclick="addColumnBlock(event)">\n' +
        '\n' +
        '\n' +
        '<div class="wrapper toDoColumn" ondrop="drop(event, this)" ondragover="allowDrop(event)">\n' +
        '</div>\n' +
        '\n' +
        '<div class="wrapper OngoingColumn" ondrop="drop(event, this)" ondragover="allowDrop(event)">\n' +
        '</div>\n' +
        '\n' +
        '<div class="wrapper StuckColumn" ondrop="drop(event, this)" ondragover="allowDrop(event)">\n' +
        '</div>\n' +
        '\n' +
        '<div class="wrapper FinishedColumn" ondrop="drop(event, this)" ondragover="allowDrop(event)">\n' +
        '   </div>\n' +
        '</div>\n';

    //add section to main
    main.appendChild(section);

    //finally: switch page and update z-index
    setActiveTab(tab);
}

function openProfileTab() {
    //make sure profile isn't already open
    if(document.getElementById("profileTab")) {
        setActiveTab(document.getElementById("profileTab"));
        return "profile already open";
    }
    //sectionCounter++;
    //first: make tab

    //get main container
    var tabContainer = document.getElementById("tabContainer");

    //create necessary elements
    var tab = document.createElement("div");
    var tabImg = document.createElement("img");
    var tabTitle = document.createElement("h3");
    var tabClose = document.createElement("h3");

    //add onclick to make sure tabs switch correctly
    tab.onclick = function handleMouseEvent(e) {
        setActiveTab(e.target.parentNode);


    };
    //add content
    tabImg.src = "../Tabs/Images/TabRed.png";
    tabTitle.innerHTML = "Profile";
    tabClose.innerHTML = "X";
    tabClose.onclick = function handleOnclick(event) {
        closeTab(event.target.parentElement.id);
    };

    //add id and class
    tab.id = "profileTab";
    tab.classList.add("tab");
    tabImg.classList.add("tabImg");
    tabTitle.classList.add("tabTitle");
    tabClose.classList.add("closeTabButton");

    //put it on the website
    tab.appendChild(tabImg);
    tab.appendChild(tabTitle);
    tab.appendChild(tabClose);
    tabContainer.appendChild(tab);

    //update flex-grid order
    var add = document.getElementById("add");
    tab.style.order = add.style.order;
    add.style.order++;

    //update z-index and active tab

    setActiveTab(tab);

    //exp reward for opening profile tab
    users[currentUser].exp += 50;
    updateUserDiv(users[currentUser]);
}

//set tab to active, works as an onclick event or from js
function setActiveTab(target) {
    //procedure if tab is closed
    if(target == null) {
        let previousTab = activeTab;
        activeTab = document.getElementById("main").lastElementChild.id;
        //control if profileTab is open
        var profileTabIsOpen = false;
        for(let i = 0; i < document.getElementById("tabContainer").childElementCount; i++) {
            if(document.getElementById("tabContainer").children[i].id == "profileTab") {
                profileTabIsOpen = true;
            }
        }
        //update activeTab, as it is currently related to main, not tabContainer.
        //this could be fixed but i don't want to change too much this close to deadline, also don't have time
        if(activeTab == "home" || (activeTab == "profilePage" && document.getElementById("main").childElementCount == 2)) {
            activeTab = "0";
        } else if(activeTab == "profilePage") {
            activeTab = "profileTab";
        } else if (activeTab.indexOf("section") == 0) {
            activeTab = activeTab.slice(activeTab.length-1);
            if (profileTabIsOpen && document.getElementById(activeTab).style.order < document.getElementById("profileTab").style.order) {
                activeTab = "profileTab";
            }
        }

        //display correct tab
        if(activeTab == 0) {
            document.getElementById("home").style.display = "";
        } else if (activeTab == "profileTab") {
            document.getElementById("profilePage").style.display = "block";

        } else {
            document.getElementById("section" + activeTab).style.display = "";
        }
        return "deleted tab";
    }
    let previousTab = activeTab;
    document.getElementById(activeTab.toString()).style.zIndex = "0";
    activeTab = target.id;
    target.style.zIndex = "1";

    //hide previous tab
    if(previousTab == 0) {
        document.getElementById("home").style.display = "none";
    } else if (previousTab == "profileTab") {
        document.getElementById("profilePage").style.display = "none";
    } else {
        document.getElementById("section" + previousTab).style.display = "none";
    }

    //display active tab
    if(activeTab == 0) {
        document.getElementById("home").style.display = "";
    } else if (activeTab == "profileTab") {
        document.getElementById("profilePage").style.display = "block";
    } else {
        document.getElementById("section" + activeTab).style.display = "";
    }
}

function closeTab(projectId) {
    var section;
    //make sure not do delete profilePage
    if(projectId == "profileTab") {
        section = document.getElementById("profilePage");
        section.style.display = "none";
    } else {
        section = document.getElementById("section" + projectId);
        while(section.hasChildNodes()) {
            section.removeChild(section.firstChild);
            section.remove();
        }
    }
    var tab;
    if(projectId == "profileTab") {
        tab = document.getElementById("profileTab")
    } else {
        tab = document.getElementById(projectId);
    }
    while(tab.hasChildNodes()) {
        tab.removeChild(tab.firstChild);
    }
    tab.remove();
}

function openTimeLine(target) {
    target = target.nextElementSibling.nextElementSibling;
    let container = target.nextElementSibling;
    target.style.height = '400px';
    target.style.width = '1200px';
    container.style.top = '650px';
    target.style.transition = '0.8s';
    container.style.transition = '0.8s';
}

function closeTimeLine(target) {
    target = target.nextElementSibling;
    let container = target.nextElementSibling;
    target.style.height = '0px';
    target.style.width = '0px';
    container.style.top = '100px';
    target.style.transition = '0.8s';
    container.style.transition = '0.8s';
}

//script