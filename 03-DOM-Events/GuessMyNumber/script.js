'use strict';

/*
document.querySelector(".message");
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 12;
*/

////// EVENT HANDLERS 

// defining secret number
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;



document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    //when there's no input
    if(!guess){
        document.querySelector(".message").textContent = "No number";
    } 
    //when player wins
    else if(guess===secretNumber){
        document.querySelector(".message").textContent = "Correct Number!!!!";
        document.querySelector(".number").textContent=secretNumber

        document.querySelector("body").style.backgroundColor="#60b347";

        document.querySelector(".number").style.width="30rem";

        if(score>highscore){
            highscore = score;
            document.querySelector(".highscore").textContent=highscore;
        }


    }
    //when input is too high
    else if(guess> secretNumber){
        document.querySelector(".message").textContent = "Too high";
        // score--;
        // document.querySelector(".score").textContent =score;
    }
    //when input is too low
    else if(guess<secretNumber){
        document.querySelector(".message").textContent="Too low";
        // score--;
        // document.querySelector(".score").textContent =score;
    }

    if(guess!==secretNumber){
        if(score>0){
        score--;
        document.querySelector(".score").textContent =score;
        }
        else{
            document.querySelector(".message").textContent="You lost the game";
        }
        

    }

});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=" ";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";

    
})