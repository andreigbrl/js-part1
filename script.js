let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let score = document.querySelector('#score');
let result = document.querySelector('#result');
let playerWins = 0;
let computerWins = 0;
let playerSelection;
score.textContent = `Score: ${playerWins} - ${computerWins}`;
function computerPlay() {
    randomValue = Math.floor(Math.random() * 3);
    if ( randomValue == 0) {
        return "rock";
    } else if (randomValue == 1) {
        return "paper";
    } else { return "scissors"; };
};

rock.addEventListener('click', () => {
    playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    game();
});
paper.addEventListener('click',  () => {
    playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    game();
    
});
scissors.addEventListener('click',  () => {
    playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    game();
    
});

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
        result.textContent = "Tie";
        return "Tie";
    };
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                result.textContent = "You Lost! Paper beats rock";
                return "You Lost! Paper beats rock";
            };
            if (computerSelection === "scissors") {
                result.textContent = "You Won! Rock beats scissors";
                return "You Won! Rock beats scissors";
            };
            break;
        case "paper":
            if (computerSelection === "rock") {
                result.textContent = "You Won! Paper beats rock";
                return "You Won! Paper beats rock";
            };
            if (computerSelection === "scissors") {
                result.textContent = "You Lost! Scissors beats paper";
                return "You Lost! Scissors beats paper";
            };
            break;
        case "scissors":
            if (computerSelection === "rock") {
                result.textContent = "You Lost! Rock beats scissors";
                return "You Lost! Rock beats scissors";
            };
            if (computerSelection === "paper") {
                result.textContent = "You Won! Scissors beats paper";
                return "You Won! Scissors beats paper";
            };
    };
};
function game() {        
    let roundResult = result.textContent;
    resultSlice = roundResult.slice(0, 8);
    if (resultSlice === "You Won!") {
        playerWins++;
        score.textContent = `Score: ${playerWins} - ${computerWins}`;
    };
    if (resultSlice === "You Lost") {
        computerWins++;
        score.textContent = `Score: ${playerWins} - ${computerWins}`;
    };
    if (playerWins == 5) {
        result.textContent = "You Won the game";
        resetScore();
    };
    if (computerWins == 5) {
        result.textContent = "The computer won the game";
        resetScore();
    };
};
function resetScore() {
    playerWins = 0;
    computerWins = 0;
}