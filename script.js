function computerPlay() {
    randomValue = Math.floor(Math.random() * 3);
    if ( randomValue == 0) {
        return "rock";
    } else if (randomValue == 1) {
        return "paper";
    } else { return "scissors"; }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    do {
    playerInput = prompt("Rock, paper or scissors?");
    playerSelection = playerInput.toLowerCase();
    } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

    if (playerSelection === computerSelection) {
        return "Tie";
    };
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                return "You Lost! Paper beats rock";
            };
            if (computerSelection === "scissors") {
                return "You Won! Rock beats scissors";
            };
            break;
        case "paper":
            if (computerSelection === "rock") {
                return "You Won! Paper beats rock";
            };
            if (computerSelection === "scissors") {
                return "You Lost! Scissors beats paper";
            };
            break;
        case "scissors":
            if (computerSelection === "rock") {
                return "You Lost! Rock beats scissors";
            };
            if (computerSelection === "paper") {
                return "You Won! Scissors beats paper";
            };
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        console.log(`Round ${i+1}: ${roundResult}`);
        resultSlice = roundResult.slice(0, 8);
        if (resultSlice === "You Won!") {
            playerScore++;
        }
        if (resultSlice === "You Lost") {
                computerScore++;
        }
    }
    console.log(`Score: ${playerScore} - ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game");
    } else { console.log("Tie"); };
}
game();