//variables



//functions

//adds a columnBlock to desired column
function addColumnBlock(column) {
    var target;
    var section = column.target.parentElement.parentElement;
    var project = projects[section.id.split("section")[1]];
    var columnArray;
    var columnName;
    if (column.target.classList.contains("pluss1")) {
        target = column.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        columnArray = project.toDo;
        columnName = "toDo";
    } else if (column.target.classList.contains("pluss2")) {
        target = column.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        columnArray = project.ongoing;
        columnName = "Ongoing";
    } else if (column.target.classList.contains("pluss3")) {
        target = column.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        columnArray = project.stuck;
        columnName = "Stuck";
    } else if (column.target.classList.contains("pluss4")) {
        target = column.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        columnArray = project.finished;
        columnName = "Finished";
    }

    var columnBlock = document.createElement("div");

    //add values
    columnBlock.classList.add("item");
    columnBlock.draggable = true;
    columnBlock.ondragstart = function handleDragover(e) {
        drag(e);
    };

    //create children elements

    var title = document.createElement("input");
    title.type="text";
    title.placeholder = "Title...";
    title.classList.add("itemTitle");
    columnBlock.appendChild(title);

    var textArea = document.createElement("textarea");
    textArea.placeholder = "details...";
    textArea.classList.add("itemText");
    textArea.rows = "1";
    textArea.cols = "10";
    columnBlock.appendChild(textArea);

    var search = document.createElement("input");
    search.type = "search";
    search.placeholder = "add members here";
    search.classList.add("itemSearch");
    search.onfocus = function handleSearchFocus(e) {
        renderMemberSearch(e);
    };
    search.onblur = function handleSearchBlur(e) {
        removeMemberSearch(e);
    };
    search.onkeyup = function handleSearchHiding(e) {
        hideMemberSearch(e);
    };
    columnBlock.appendChild(search);

    var searchList = document.createElement("ul");
    searchList.classList.add("searchList");
    columnBlock.appendChild(searchList);

    //identificate and add to correct project array

    columnBlock.id = project.id + "-" + columnName + "-" + columnArray.length;
    let columnObject = {
        id: project.id + "-" + columnName + "-" + columnArray.length,
        title: "",
        description: "",
        members: []
    };
    columnArray.push(columnObject);


    //finally append block
    target.appendChild(columnBlock);
}

//renders dropdown of members for search bar
function renderMemberSearch(event) {
    event.target.parentElement.style.zIndex = "100";
    var searchList = event.target.nextElementSibling;
    searchList.style.visibility = "visible";
    var testArr = ["Arne", "Arild", "Ariel", "Bente", "Bjarne", "Bodil", "Charlie", "Cora", "Christine"];
    for (var i = 0; i < testArr.length; i++) {
        var listElement = document.createElement("li");
        listElement.classList.add("memberSearchElement");
        listElement.innerHTML = testArr[i];
        searchList.appendChild(listElement);
    }
}

//hide search elements on member search
function hideMemberSearch(event) {
    //variables
    var input, filter, ul, li, a, txtValue;
    input = event.target;
    filter = input.value.toUpperCase();
    ul = input.nextElementSibling;
    li = ul.children;

    //loop through all li-items in ul, hide these who don't match the search query
    for (var i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}

//remove entire search
function removeMemberSearch(event) {
    event.target.parentElement.style.zIndex = "0";
    event.target.value = "";
    var searchList = event.target.nextElementSibling;
    while (searchList.hasChildNodes()) {
        searchList.removeChild(searchList.lastChild);
    }
    searchList.style.visibility = "hidden";
}

//linear code