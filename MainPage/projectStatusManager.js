//variables



//functions

//adds a columnBlock to desired column
function addColumnBlock(column) {
    var target;
    switch (column) {
        case 1:
            target = document.getElementById("ToDoColumn");
            break;
        case 2:
            target = document.getElementById("OngoingColumn");
            break;
        case 3:
            target = document.getElementById("StuckColumn");
            break;
        case 4:
            target = document.getElementById("FinishedColumn");
            break;
    }

    var columnBlock = document.createElement("textarea");

}

function renderMemberSearch() {
    var testArr = ["Arne", "Arild", "Ariel", "Bente", "Bjarne", "Bodil", "Charlie", "Cora", "Christine"];
}

//linear code