var numCircles = 6;
var colors = [];
var pickedColor;
var circles = document.querySelectorAll(".circle");
var donut = document.querySelectorAll(".donut");
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var elements = document.getElementsByClassName('active hideDonut');
var levels = document.querySelectorAll(".level");

init();

function init() {
    pickLevel();
    setUpDonuts();
    reset();
}
//when user click on buttons Hard/Easy pick the numCircles(3 or 6) and reset the colors
function pickLevel() {
    for (var i = 0; i < levels.length; i++) {
        levels[i].addEventListener("click", function () {
            levels[0].classList.remove("selected");
            levels[1].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "Easy" ? numCircles = 3 : numCircles = 6;
            if (this.textContent == "Easy") {
                numCircles = 3
            } else if (this.textContent == "Hard") {
                numCircles = 6
            } else numCircles = 9

            reset();
        });

    }
}
//when user click on "play again" -> reset the game 
resetButton.addEventListener("click", function () {
    reset();
});

// When user click on circles-> change the text to "correct" or "Try again"
//and hide the donuts that not correct
function setUpDonuts() {
    for (var i = 0; i < circles.length; i++) {
        // circles[i].style.backgroundColor = colors[i];
        circles[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                correct.innerHTML = "Correct!";
                changedColorsToOthers(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play again";

                // show all the donuts 
                while (elements.length > 0) {
                    elements[0].classList.remove('active');
                }
                if (numCircles <= 3) {
                    circles[3].previousElementSibling.classList.add('active');
                    circles[4].previousElementSibling.classList.add('active');
                    circles[5].previousElementSibling.classList.add('active');
                }
                //hide the current donut
            } else {
                console.log('Try again');
                correct.innerHTML = "Try again";
                this.previousElementSibling.classList.add("active");

            }
        });
    }
}
//When user click on the correct color ' change all the circles to this color
function changedColorsToOthers(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}
//pick Random color between 1 to 6 and return the color of this index in the colors array/
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
// Create new array the push RGB colors to his array
function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
        console.log(arr[i]);
    }
    return arr;
}
//RGB colors
function randomColor() {
    var r = Math.floor(Math.random() * 256); //Red
    var g = Math.floor(Math.random() * 256); //Blue
    var b = Math.floor(Math.random() * 256); //Green
    return "rgb(" + r + ", " + g + ", " + b + ")";
};


//Reset button
function reset() {
    //Create array of 6 colors
    colors = generateRandomColor(numCircles);
    console.log("colors" + colors);
    // Pick 1 color from the 6 to be the pickedColor
    pickedColor = pickColor();
    console.log("pickedColor" + pickedColor);
    //Display the numbers RGB of the chosen color
    colorDisplay.textContent = pickedColor;
    this.innerHTML = "New Colors";
    correct.innerHTML = "";
    //display all the hided donuts
    while (elements.length > 0) {
        elements[0].classList.remove('active');
    }

    for (var i = 0; i < circles.length; i++) {

        if (colors[i]) {
            //every circle accept a color from the array
            circles[i].style.backgroundColor = colors[i];
            console.log(circles[i]);
        } else {
            // circles[i].parentElement.style.display = "none";
            // circles[i].style.display = "none";
            circles[i].previousElementSibling.classList.add("active");

        }
    }
    h1.style.backgroundColor = "#6186c3";

};
