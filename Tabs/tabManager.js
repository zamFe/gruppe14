
//variables

var activeTab = 0; //0 = main tab

var colorArr = ["White" + "Blue" + "Burgunder"];

//methods

function createNewTab(image) {

    //get main container
    var tabContainer = document.getElementById("tabContainer");

    //create necessary elements
    var tab = document.createElement("div");
    var tabImg = document.createElement("img");

    //add content
    tabImg.src = image;

    //add id and class
    tab.classList.add("tab");
    tabImg.classList.add("tabImg");

    //put it on the website
    tab.appendChild(tabImg);
    tabContainer.appendChild(tab);

    //update flex-grid order
    var add = document.getElementById("add");
    tab.style.order = add.style.order;
    add.style.order++;
}

function setActiveTab(event) {
    console.log(event.target);
    event.target.style.zIndex = "1";
}

//script


