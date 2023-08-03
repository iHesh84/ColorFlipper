// Have an array of colors;
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get the button
var btn = document.getElementById("btn");

// Get the color text
var color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  let pickedColor = colors[randomNumber];
  color.textContent = pickedColor;
  document.body.style.backgroundColor = pickedColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
