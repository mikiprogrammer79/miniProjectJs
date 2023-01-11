 //Third page: animation.html
 //Return random hexadecimal colour
 let notRunning = true; //prevent double-run bug
 function getRandomColour() {
    let letters = "0123456789ABCDEF".split(""); //Convert the string characters into an array
    let colour = "#";
    for (let i=0; i<6; i++) {
        colour += letters [Math.floor(Math.random() * 16)]; //The loop will randomly give 6 characters from letters
    };
    return colour;
    };
 //Define the function which will draw the canvas
    function discoSquare() {
        const canvas = document.getElementById("whiteBoard2");
        let context = canvas.getContext("2d");
        let verPos = Math.floor((Math.random() * 399) + 1); //Random vertical position from 1 to 400 pixels
        let theColour = getRandomColour();
        //Set the line width and colour
        context.lineWidth = 10;
        context.strokeStyle = theColour;
        context.moveTo(10, verPos);
        console.log("The vertical positio is: " + verPos);
        context.lineTo(400, verPos);
        context.lineCap = "butt";
        context.stroke();
        document.getElementById("displayColour").innerHTML = theColour;
 };

 //Set the animation with setInterval
 let animation;
 document.getElementById("discoStart").onclick = function() {
    if (notRunning) {
        animation = setInterval(discoSquare, 100) //call discoSquare for 100ms
        notRunning = false; 
    } else {
        alert("Sorry, already running");
    };
 }

 //Stop the animation with clearInterval
 document.getElementById("discoStop").onclick = function() {
    clearInterval(animation);
    notRunning = true;
 };
