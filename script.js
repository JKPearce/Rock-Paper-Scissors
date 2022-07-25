const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

game()

function game(){
    let rounds = 0;
    let score = 0;
    let pChoice = '';
    let cChoice = '';

    for(let i = 0; i < 5; i++){
        pChoice = getPlayerChoice();
        cChoice = getComputerChoice();
        score += playRound(pChoice, cChoice);
    }
    console.log("your score = " + score);
}

function getPlayerChoice(){
    //check if the player input is valid
    let keepGoing = true;
    let choice = prompt("Enter your selection: (Rock, Paper, Scissors");

    while(keepGoing){
        while(choice === null || choice === ''){
            //make sure the user has input a value
            choice = prompt("DO NOT LEAVE BLANK: (Rock, Paper, Scissors");
        }
        //convert input to uppercase to use in rest of code
        choice = choice.toUpperCase();

        //check if the choice is ROCK, PAPER, SCISSORS
        if(choice === rock || choice === paper || choice === scissors){
            keepGoing = false;
        }else{
            choice = prompt("PLEASE ENTER ONLY: (Rock, Paper, Scissors");
        }
        //this loop will only break if the user input is valid
    }

    return choice;
}

function playRound(player, computer){
    if(player === computer){
        console.log("Tie!");
        return 0;
    }else if (player === rock && computer === scissors ||
            player === paper && computer === rock || 
            player === scissors && computer === paper){
        console.log("You win!");
        return 1;
    }else {
        console.log("You lose!");
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