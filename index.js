// Variable to select player 1 dice
var playerOne = document.getElementsByClassName("img1");
// variable to select player 2 dice
var playerTwo = document.getElementsByClassName("img2");



//randomNumber1 = Math.floor(Math.random()*6)+1;
// loop for player 1 dice to switch the img src
randomNumber1 = 1;
console.log(randomNumber1);

if(randomNumber1 === 1){
  playerOne[0].setAttribute("src", "images/dice1.png");
}
