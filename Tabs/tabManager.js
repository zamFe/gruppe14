
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

    //add content
    tab.onclick = function handleMouseEvent(e) {
        setActiveTab(e.parentNode);
    };
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

    //update z-index
    setActiveTab(tab);

    //second: build section

    //build project section
    var section = document.createElement("section");
    section.id = "section" + sectionCounter;
    var title = document.createElement("h1");
    title.innerHTML = "THIS IS A PLACEHOLDER!";



}

function setActiveTab(target) {
    console.log(target);
    document.getElementById(activeTab).zIndex = 0;
    activeTab = parseInt(target.id, 10);
    target.style.zIndex = "1";
}

//script
