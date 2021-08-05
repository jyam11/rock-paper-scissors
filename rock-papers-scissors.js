
let computerScore = 0
let playerScore = 0

function computerPlay() {
    let computerPick = ["rock", "paper", "scissors"];
    let randomComputerPick = computerPick[Math.floor(Math.random() * computerPick.length)]
    return randomComputerPick
}

function playOneRound(playerSelection, computerSelection) {
    //If player chooses rock
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You lose! Paper beats rock.")
            computerScore++
        }
        else if (computerSelection === 'scissors') {
            console.log("You win! Rock beats scissors.")
            playerScore++
        }
        else {
            console.log("It's a tie!")
        }
    }
    //If player picks paper
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("You lose! scissors beats paper.")
            computerScore++
        }
        else if (computerSelection === 'rock') {
            console.log("You win! Paper beats rock.")
            playerScore++
        }
        else {
            console.log("It's a tie!")
        }
    }
    //if player picks scissors
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You lose! Rock beats scissors.")
            computerScore++
        }
        else if (computerSelection === 'paper') {
            console.log("You win! Scissors beats rock.")
            playerScore++
        }
        else {
            console.log("It's a tie!")
        }
    }
    else {
        prompt("Please choose rock, paper, or scissors")
    }
}
function game() {
    computerScore = 0
    playerScore = 0

    //Game should be 5 rounds
    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Please choose rock, paper, or scissors");
        const computerSelection = computerPlay();
        playOneRound(playerSelection, computerSelection)

    }
    
    if (playerScore > computerScore) {
        console.log("You won the game!")
    }
    else if (playerScore < computerScore) {
        console.log("You lose the game!")
    }
    else if (playerScore === computerScore) {
        console.log("It's a draw!")
    }
}

game()