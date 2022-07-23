const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

let playerSelection = '';
let computerSelection = getComputerChoice();

playerSelection = prompt("Enter your selection: (Rock, Paper, Scissors");

function playRound(player, computer){
    if(player === computer){
        return "Tie";
    }else if (player === rock && computer === scissors){
        return "Player Win!";
    }else if (player === paper && computer === rock){
        return "Player Win!";
    }else if (player === scissors && computer === paper){
        return "Player Win!";
    }else {
        return "Player Lose!";
    }
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