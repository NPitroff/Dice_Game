// Variable to select player 1 dice
var playerOne = document.getElementsByClassName("img1");
// variable to select player 2 dice
var playerTwo = document.getElementsByClassName("img2");
// variable to hold the title
var winner = document.getElementById("winner");


// Random number selector for dice 1
randomNumber1 = Math.floor(Math.random()*6)+1;

console.log(randomNumber1 + " Player1");

if(randomNumber1 === 1){
  playerOne[0].setAttribute("src", "images/dice1.png");
} else if(randomNumber1 === 2){
  playerOne[0].setAttribute("src", "images/dice2.png");
}else if(randomNumber1 === 3){
  playerOne[0].setAttribute("src", "images/dice3.png");
}else if(randomNumber1 === 4){
  playerOne[0].setAttribute("src", "images/dice4.png");
}else if(randomNumber1 === 5){
  playerOne[0].setAttribute("src", "images/dice5.png");
}else if(randomNumber1 === 6){
  playerOne[0].setAttribute("src", "images/dice6.png");
}
// Random number selector for dice 2
randomNumber2 = Math.floor(Math.random()*6)+1;

console.log(randomNumber2 + " Player2");

if(randomNumber2 === 1){
  playerTwo[0].setAttribute("src", "images/dice1.png");
} else if(randomNumber2 === 2){
  playerTwo[0].setAttribute("src", "images/dice2.png");
}else if(randomNumber2 === 3){
  playerTwo[0].setAttribute("src", "images/dice3.png");
}else if(randomNumber2 === 4){
  playerTwo[0].setAttribute("src", "images/dice4.png");
}else if(randomNumber2 === 5){
  playerTwo[0].setAttribute("src", "images/dice5.png");
}else if(randomNumber2 === 6){
  playerTwo[0].setAttribute("src", "images/dice6.png");
}
// if statement to display winner
if(randomNumber1 > randomNumber2){
    winner.innerHTML = "Player 1 Wins!"
} else if(randomNumber1 < randomNumber2) {
  winner.innerHTML = "Player 2 Wins!"
} else {
  winner.innerHTML = "Draw, Roll Again!"
}
