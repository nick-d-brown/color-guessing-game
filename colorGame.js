var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;


for (var i =0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function () {
        // Grab color of picked square
        var clickedColor = this.style.backgroundColor;
        
            // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
            
        }

    });
}

function changeColors(color) {
    // loop through all squares

    for (var i =0 ; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }

    // change each color to match given color
}
function pickColor() {
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];

}

function generateRandomColors(num) {
    // make an array
    var arr = [];

    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color
        arr.push(randomColor());
    }
    // rturn that array
    return arr;
}

function randomColor() {
    // pick a red from 0 to 25
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 25
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 25
    var b = Math.floor(Math.random() * 256);
    // asssign random colors to the color variable
    return "rgb(" + r + ", " + g + ", " + b + ")";

}