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

//Call the function when the button is oncliked
document.getElementById("edit").onclick = function() {
    startEdit();
};
document.getElementById("stop").onclick = function() {
    stopEdit();
};