const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

let playerScore = 0;
let cpuScore = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', playRound));

const result = document.querySelector('.result');
const winner = document.querySelector('.winner');



function game(){
    if(playerScore > 5 || cpuScore > 5){
        if(playerScore > 5){
            winner.textContent = "Player Wins";
        }else{
            winner.textContent = "Computer Wins"
        }
    }
}

function playRound(e){
    const cpuChoice = getComputerChoice();
    const playerChoice = this.classList[1].toUpperCase();

    if(playerChoice === cpuChoice){
        result.textContent = "Tie";
    }else if (playerChoice === rock && cpuChoice === scissors ||
        playerChoice === paper && cpuChoice === rock || 
        playerChoice === scissors && cpuChoice === paper){
            result.textContent = "You win!";
            playerScore++;
    }else {
        result.textContent = "You Lose!";
        cpuScore++;
    }

    game(); //check status of game
}

function getComputerChoice(){
    // Chooses a random number between 1 - 3 then returns answer
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber){
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissors;
        default:
            return "Did not select properly";
    }
}

// function getPlayerChoice(){
//     //check if the player input is valid
//     let keepGoing = true;
//     let choice = prompt("Enter your selection: (Rock, Paper, Scissors");

//     while(keepGoing){
//         while(choice === null || choice === ''){
//             //make sure the user has input a value
//             choice = prompt("DO NOT LEAVE BLANK: (Rock, Paper, Scissors");
//         }
//         //convert input to uppercase to use in rest of code
//         choice = choice.toUpperCase();

//         //check if the choice is ROCK, PAPER, SCISSORS
//         if(choice === rock || choice === paper || choice === scissors){
//             keepGoing = false;
//         }else{
//             choice = prompt("PLEASE ENTER ONLY: (Rock, Paper, Scissors");
//         }
//         //this loop will only break if the user input is valid
//     }

//     return choice;
// }