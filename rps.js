
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
//---
//Write a new function called game()
//Use the previous function inside game() to make a 5 round
//game that keeps score and reports the winner and loser
//at the end. (I'm going to attempt to use a loop even though
//I haven't really learned how to use them yet. 
// game (){
//      make loop for round 1-5
//                 use  playRound function
//                   write a keepScore function based on RETURN  round winner
//                (boolean maybe? If player wins gets 1, if player
//                 looses, get 0, if player gets 3 or more 1 or trues, player wins
//                  make if  and if/else statements. Make one for a tie as well
//                   both player and comp get a point? or get 0? 

//            After round 5 , announce winner and loser. 

// }

//------------------------------------------------------------------------------------
function game(){
//make roundLoop


let 


// Write getComputerChoice function //

function  getComputerChoice (){
// make an array
    const pick=["ROCK", "PAPER", "SCISSORS"];
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
    } else if (playerSelection==="ROCK" && computerSelection==="SCISSORS") {
        return "You win! ROCK beats SCISSORS!";
// ELSE IF player selects paper RETURN
} else if (playerSelection==="PAPER" && computerSelection==="ROCK") {
    return "You win! PAPER beats ROCK!";
// ELSE IF player selects scissors RETURN
} else if (playerSelection==="SCISSORS" && computerSelection==="PAPER"){
    return "You win! SCISSORS beats PAPER";


//ELSE"You lose!" RETURN: 
} else {
    return "You lose! "+computerSelection+" beats "+playerSelection+".";
}


}
// make sure selections aren't case sensative (userSelection.toLowerCase)
 
// make selection constants:

const playerSelection = prompt ("Start the game: pick 'Rock', 'Paper', or 'Scissors' ").toUpperCase();
const computerSelection= getComputerChoice( );

console.log(playRound(playerSelection, computerSelection));
alert (playRound(playerSelection, computerSelection));


}