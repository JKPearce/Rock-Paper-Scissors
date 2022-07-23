const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';



function game(){
    let rounds = 0;
    let score = 0;
    let pChoice = '';
    let cChoice = '';

    for(let i = 0; i < 5; i++){
        pChoice = getPlayerChoice();
        cChoice = getComputerChoice();
        score += playRound(pChoice, cChoice);
        console.log(score);
    }
}

function getPlayerChoice(){
    let playerSelection = '';

    playerSelection = prompt("Enter your selection: (Rock, Paper, Scissors");

    //write code here to validate input is a rock or paper or scissor

    return playerSelection;
}
function playRound(player, computer){
    if(player === computer){
        return 0;
    }else if (player === rock && computer === scissors){
        return 1;
    }else if (player === paper && computer === rock){
        return 1;
    }else if (player === scissors && computer === paper){
        return 1;
    }else {
        return 0;
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