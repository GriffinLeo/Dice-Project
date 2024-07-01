//Player 1

let randomNumber1 = Math.floor(Math.random()*6)+1; // use random number then multiply 6 so that it get 0.1 to 1.6 and then multiply floor for making non decimal

let randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);







//Player 2

let randomNumber2 = Math.floor(Math.random()*6)+1; // use random number then multiply 6 so that it get 0.1 to 1.6 and then multiply floor for making non decimal


let randomImageSource2 = "images/dice" + randomNumber2 + ".png";//images/dice1.png - images/dice6.png


document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
