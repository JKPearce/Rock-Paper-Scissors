const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

let playerScore = 0;
let cpuScore = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', playRound));

const roundResult = document.querySelector('.result');
const gameWinner = document.querySelector('.winner');
const playerBoard = document.querySelector('.player-score');
const computerBoard = document.querySelector('.computer-score');



function game(){
    //display current scores
    playerBoard.textContent = "Player score: " + playerScore;
    computerBoard.textContent = "Computer score : " + cpuScore;

    //check to see if the score limit has been reached by either player.
    if(playerScore >= 5 || cpuScore >= 5){
        //Check to display who actually won
        if(playerScore >= 5){
            gameWinner.textContent = "Player Wins";
        }else{
            gameWinner.textContent = "Computer Wins";
        }
        //write code to stop game and ask to restart
    }
}

function playRound(e){
    const cpuChoice = getComputerChoice();
    const playerChoice = this.classList[1].toUpperCase();

    if(playerChoice === cpuChoice){
        roundResult.textContent = "Tie";
    }else if (playerChoice === rock && cpuChoice === scissors ||
        playerChoice === paper && cpuChoice === rock || 
        playerChoice === scissors && cpuChoice === paper){
            roundResult.textContent = "You win!";
            playerScore++;
    }else {
        roundResult.textContent = "You Lose!";
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