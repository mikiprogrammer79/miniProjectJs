//First page: contenteditable.html
//Create the startEdit function and assing the contentEditable property to true
function startEdit() {
    let element = document.getElementById("editableElement");
    element.contentEditable = true;  //Make element editable
    element.focus();
};

//Create the stopEdit function and assing the contentEditable property to false
function stopEdit() {
    let element = document.getElementById("editableElement");
    element.contentEditable = false; //Stop element to be editable
    alert(element.innerHTML); //Show the markup in a message box
}

/*We will put this code inline in the contenteditable.html page to avoid errors when other pages are load:
//Call the function when the button is oncliked
function editablePage() {
    document.getElementById("edit").onclick = function() {
        startEdit();
    };
document.getElementById("stop").onclick = function() {
    stopEdit();
    };
}
*/

//Second page: drawing.html
//Drawing after the event onclick over the canvas element

document.getElementById("whiteBoard").onclick = function() {
    let canvas = document.getElementById("whiteBoard");
    let context = canvas.getContext("2d");
//Set the first line width and colour
    context.lineWidth = 30;
    context.strokeStyle = "rgb(205, 40, 40)";
//Draw the first line with the standard butt ending
    context.moveTo(25,50); //(horizontal/vertical)
    context.lineTo(400,120);
    context.lineCap = "butt";
    context.stroke(); //stroke method draws the line within the canvas tag 

//Draw the second line with different colour and line width
    context.lineWidth = 25;
    context.strokeStyle = "#95CA91";
    context.beginPath(); //Start a new line
    context.moveTo(25,120);
    context.lineTo(400,120);
    context.lineCap = "butt";
    context.stroke();
};