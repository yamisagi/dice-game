var randomNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDiceImage = "dice" + randomNumber + ".png"; // dice1.png - dice6.png

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

// document.querySelectorAll ile dönen array üzerinden de yapabiliriz aşağıdaki gibi;

// document.querySelectorAll("img")[0].setAttribute("src", "images/" + randomDiceImage);
// document.querySelectorAll("img")[1].setAttribute("src", "images/" + randomDiceImage2);

// Aşağıdaki gibi de yapabiliriz

document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImage);
document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImage2);


// Daha sonra kazananı belirlemek için basit bir ternary kullanabiliriz

if (randomNumber === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw ! 🫱🏻‍🫲🏻";
}

randomNumber > randomNumber2
    ? document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    : document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

// Veya uzun bir if else kullanabiliriz

// if (randomNumber > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
// }
// else if (randomNumber < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw ! 🫱🏻‍🫲🏻";
// }
