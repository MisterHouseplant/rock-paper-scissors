//assignment notes:
// game will be played against computer, so start with 
// function called getComputerChoice that will randomly 
//generate either "Rock", "Paper", or "Scissors". This function
// will make the computer's play. 
//(check in console to make sure this is working  before 
//continuing to the next step.

//Write a function that plays a single round of RPS.
//The function should take 2 parameters:
//playerSelection and
//computerSelection-and then return a string that declares 
// the winner of the round like so "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter 
//case-insensitive (so users can input rock, ROCK, 
 //   RocK or any other variation).
//---------------------------------------------------------------
//Solution plan:
//Rock beats scissors, scissors beat paper, and paper beats 
//rock.
//Rock beats scissors and loses to paper
//Paper beats rock, but loses to scissors
//Scissors beat paper but loses to rock

//1. Make a prompt, telling user to input rock, paper, or 
//scissors.
//2.user enters rock, paper, or scissors.
//     -code so it is case insensitive
//3.Computer/script answers randomly, rock, paper, scissors.
//4. Return a string declaring the winner. 
//---If 




// Write getComputerChoice function //

var options = ["Rock"," Paper", "Scissors"];
var getComputerChoice =options [Math.floor(Math.random() *options.length)];

// Write a function that plays a single round of RPS. Two parameters:
// playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
// // return a string that declares the winner of the round
    // code return choices
//  IF "It's a tie!" return (playerSelection===computerSelection)"

//IF"You Win!"returns:
//IFplayer selects rock RETURN

// ELSE IF player selects paper RETURN
// ELSE IF player selects scissors RETURN

//ELSE"You lose!" RETURN:


}
// make sure selections aren't case sensative (userSelection.toLowerCase)
 



console.log(getComputerChoice);
alert (" Computer picks " + getComputerChoice);