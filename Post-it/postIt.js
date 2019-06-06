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
function closeit() {

    var postItClose = document.getElementById("mainContainer");

    postItClose.style.display = "none";
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
function newElement() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

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

    document.onmousemove = handleMouseMove;
    document.onclick = handleMouseClick;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event;

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }

    //happens when mouse is clicked
    function handleMouseClick(event) {
        //checks if target id corresponds to what we want to drag
        if ((event.target.id == "headerMover" || event.target.id == "postItText") && objectClicked == 0) {
            objectClicked = 1;
        }
        else {
            objectClicked = 0;
        }
    }

    function getMousePosition() {
        //element that will be dragged
        note = document.getElementById("mainContainer");
        var pos = mousePos;
        console.log(mousePos);
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            // Use pos.x and pos.y
            //drags object when objectClicked is true;
            if (objectClicked == 1) {
                note.style.left = (mousePos.x) + 'px';
                note.style.top = (mousePos.y) + 'px';
            }
        }
    }
})();

