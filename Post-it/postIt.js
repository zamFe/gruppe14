// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


// Close post-it note
function closeit(event) {
    var note = event.target.parentElement.parentElement;
    while(note.hasChildNodes()) {
        note.removeChild(note.lastChild);
    }
    note.parentElement.removeChild(note);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(event) {

    var li = document.createElement("li");
    var inputValue = event.target.previousElementSibling.value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        event.target.parentElement.parentElement.lastElementChild.appendChild(li);
    }
    event.target.previousElementSibling.value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Drag-&-drop functionality
(function() {
    var mousePos;
    var objectClicked = 0;
    var targetNote;

    document.onmousemove = handleMouseMove;
    document.onclick = handleMouseClick;
    setInterval(getMousePosition, 10); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }

    //close dummy container
    var dummy = document.getElementById("dummyNote");
    while(dummy.hasChildNodes()) {
        dummy.removeChild(dummy.lastChild);
    }
    dummy.parentElement.removeChild(dummy);

    //happens when mouse is clicked
    function handleMouseClick(event) {
        //checks if target id corresponds to what we want to drag
        if ((event.target.classList.contains("headerMover") || event.target.classList.contains("postItText")) && objectClicked == 0) {
            objectClicked = 1;
            targetNote = event.target.parentElement;
        }
        else {
            objectClicked = 0;
        }
    }

    function getMousePosition() {
        //element that will be dragged
        //note = document.getElementById("postItMainContainer");
        var note = targetNote;
        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            // Use pos.x and pos.y
            //drags object when objectClicked is true;
            if (objectClicked == 1) {
                note.style.left = (mousePos.x) + 'px';
                note.style.top = (mousePos.y-0) + 'px';
            }
        }
    }
})();

function createNewPostIt() {
    let target = document.getElementById("masterNoteContainer");
    target.innerHTML +=
        '<div class="postItMainContainer">\n' +
        '\n' +
        '        <div class="header headerMover">\n' +
        '            <span  onclick="closeit(event)" class="closePostItButton">X</span>\n' +
        '            <h2 class="postItText">Post-it</h2>\n' +
        '            <input type="text" id="myInput" placeholder="Note..">\n' +
        '            <span onclick="newElement(event)" class="addBtn">Add</span>\n' +
        '        </div>\n' +
        '\n' +
        '        <ul id="myUL" style="list-style-type: none">\n' +
        '        </ul>\n' +
        '\n' +
        '    </div>';
}
