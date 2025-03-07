// Intro test comment 
console.log("Hello World");

// global score counter for computer and player
let humanScore = 0;
let computerScore = 0;

// gets a random choice (rock, paper, or scissiors) and returns string choice
function getComputerChoice(){
    // generates a random number in the range between 0-2
    let compChoice = Math.floor(Math.random() * 3 );
    // returns computer's choice based on the random number given
    if (compChoice == 0){
        return "Rock";
    }
    else if(compChoice == 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

// Asks user's choice for rock, paper, or scissors
function getHumanChoice(){
    let humanChoice = prompt("Please enter your move(rock, paper, or scissor):  ");
    return humanChoice;
}

// test function that makes sure we are getting string value from getHumanChoice() and getComputerChoice()
function gameTester(humanChoice, computerChoice){
    console.log("this is human choice: ", humanChoice);
    console.log("this is computer choice: ", computerChoice);
}

function playRound(humanChoice, computerChoice){
    // make string all the same case 
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();
    // game logic (paper > rock, scissor > paper, etc)
    if(lowerHumanChoice == lowerComputerChoice){
        console.log( "It's a tie, both players chose: ", lowerComputerChoice);
    } else if(lowerHumanChoice == "rock" && lowerComputerChoice == "scissor"){
        console.log("Player wins! ", humanChoice, " beats ", computerChoice);
        return humanScore += 1;
    } else if(lowerHumanChoice == "paper" && lowerComputerChoice == "rock"){
        console.log("Player wins! ", humanChoice, " beats ", computerChoice);
        return humanScore += 1;
    } else if(lowerHumanChoice == "scissor" && lowerComputerChoice == "paper"){
        console.log("Player wins! ", humanChoice, " beats ", computerChoice);
        return humanScore += 1;
    } 
    else{
        console.log("Computer wins! ", computerChoice,  " beats " , humanChoice);
        return computerScore += 1;
    }

}

function playGame(){
    // prompt for number of rounds
    let numOfRounds = prompt("Welcome to rock,paper,scissor. How many rounds do you wish to play?: ");
    // loops the game tallies the score
    for(let i = 0; i < numOfRounds; i++){
        console.log("Round:", i + 1);
        playRound(getHumanChoice(),getComputerChoice());
    }

    // displays the final score of player and computer after "numOfRounds" play
    console.log("Game over!!!!");
    console.log("Player: ", humanScore);
    console.log("Computer: ", computerScore);

}

playGame();