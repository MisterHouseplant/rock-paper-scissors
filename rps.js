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

function  getComputerChoice (){
// make an array
    const pick=["rock", "paper", "scissors"];
//return random 
    return pick [Math.floor(Math.random () *pick.length)];
}
// Write a function that plays a single round of RPS. Two parameters:
// playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {

    // // return a string that declares the winner of the round
    // code return choices
//  IF "It's a tie!" return (playerSelection===computerSelection)"
    if (playerSelection===computerSelection) {
        return "It's a tie! You both picked " +playerSelection+".";
    
//IF"You Win!"returns:
//IFplayer selects rock RETURN
    } else if (playerSelection==="rock" && computerSelection==="scissors") {
        return "You win! Rock beats Scissors!";
// ELSE IF player selects paper RETURN
} else if (playerSelection==="paper" && computerSelection==="rock") {
    return "You win! Paper beats Rock!";
// ELSE IF player selects scissors RETURN
} else if (playerSelection==="scissors" && computerSelection==="paper"){
    return "You win! Scissors beats Paper!";


//ELSE"You lose!" RETURN: 
} else {
    return "You lose! "+computerSelection +" beats "+playerSelection+".";
}


}
// make sure selections aren't case sensative (userSelection.toLowerCase)
 
// make selection constants:

const playerSelection = prompt ("Start the game: pick 'Rock', 'Paper', or 'Scissors' ").toLowerCase();
const computerSelection= getComputerChoice( );

console.log(playRound(playerSelection, computerSelection));
