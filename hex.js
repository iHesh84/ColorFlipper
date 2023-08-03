const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get the button
var btn = document.getElementById("btn");

// Get the color text
var color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var colorToAdd = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    colorToAdd += hex[randomNumber];
  }
  color.textContent = colorToAdd;
  document.body.style.backgroundColor = colorToAdd;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
