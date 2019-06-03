
//variables

var activeTab = 0; //0 = main tab
var sectionCounter = 0; //counts created sections (projects and profile pages)
var colorArr = ["White" + "Blue" + "Burgunder"];

//methods

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
    var title = document.createElement("h1");
    title.innerHTML = "THIS IS A PLACEHOLDER!";

    section.appendChild(title);
    main.appendChild(section);

    //finally: switch page and update z-index
    setActiveTab(tab);
}

function setActiveTab(target) {
    let previousTab = activeTab;
    document.getElementById(activeTab.toString()).style.zIndex = "0";
    activeTab = parseInt(target.id, 10);
    target.style.zIndex = "1";

    if (activeTab == 0) {
        document.getElementById("home").style.display = "block";
        document.getElementById("section" + previousTab).style.display = "none";
    }
    else if (previousTab == 0) {
        document.getElementById("home").style.display = "none";
        document.getElementById("section" + activeTab).style.display = "block";
    } else {
        document.getElementById("section" + previousTab).style.display = "none";
        document.getElementById("section" + activeTab).style.display = "block";
    }
}

//script
