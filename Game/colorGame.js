var numCircles = 6;
var colors = generateRandomColor(numCircles);
var circles = document.querySelectorAll(".circle");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardyBtn = document.getElementById("hardBtn")


//User clicked on "Easy" button : 3
colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardyBtn.classList.remove("selected");
    numCircles = 3
    colors = generateRandomColor(numCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //Change the circles colors
    for (var i = 0; i < circles.length; i++) {
        if (colors[i]) {
            //every circle accept a color from the array
            circles[i].style.backgroundColor = colors[i];
            console.log(circles[i]);
        } else {
            circles[i].style.display = "none";
        }
    }
});
//User clicked on "Hard" button :6
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardyBtn.classList.add("selected");
    colors = generateRandomColor(numCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //Change the circles colors

    for (var i = 0; i < circles.length; i++) {
        //every circle accept a color from the array
        circles[i].style.backgroundColor = colors[i];
        circles[i].style.display = "block";
    }
});

// When user click on circles change the text to "correct" or "Try again"
for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            correct.innerHTML = "Correct!";
            changedColorsToOthers(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play again";
        } else {
            this.style.backgroundColor = "#232323";
            correct.innerHTML = "Try again";
        }
    });
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
resetButton.addEventListener("click", function () {
    //Create array of 6 colors
    colors = generateRandomColor(numCircles);
    console.log("colors" + colors);
    // Pick 1 color from the 6 to be the pickedColor
    pickedColor = pickColor();
    console.log("pickedColor" + pickedColor);
    //Display the numbers RGB of the chosen color
    colorDisplay.textContent = pickedColor; 

    for (var i = 0; i < circles.length; i++) { 
        circles[i].style.backgroundColor = colors[i];
        console.log(circles[i]);
    }
    h1.style.backgroundColor = "#6186c3";

});
