var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var expertBtn = document.querySelector("#expertBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    reset();
}


function setUpModeButtons() {
    //mode buttons event listener
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
            // Ternary operator -> shorthand for if/else
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

            // if (this.textContent === "Easy") {
            //     numSquares = 3;
            // } else if (this.textContent === "Hard") {
            //     numSquares = 6;
            // }
            reset();

        }) 
    }; 
}
   
function setUpSquares() {
    // square listeners
    for (var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function () {
            // Grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);

                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";

            }

        });
    }
}
    

   



function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
};

// easyBtn.addEventListener("click", function () {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     // expertBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// })
// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     // expertBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
       
//             squares[i].style.backgroundColor = colors[i];        
//             squares[i].style.display = "block";
        
//     }
// });
// expertBtn.addEventListener("click", function () {
//     expertBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(12);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
        
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
        
//     }
// })


resetButton.addEventListener("click", function () {
    reset();
});



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