let computerScore = 0;
let playerScore = 0;
let results = document.querySelector('#results');
let computer = document.querySelector('#computerScore');
let player = document.querySelector('#playerScore');
let playerChoice = document.querySelector('#playerChooses');
let computerChoice = document.querySelector('#computerChooses');

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

//Function for computer to pick rock ,paper, scissors randomly.
function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let getRandomChoices = Math.floor(Math.random() * 3);
    return rps[getRandomChoices];
}

//Play one round of rock, paper, scissors.
function playOneRound(playerSelection, computerSelection) {
    playerChoice.textContent = "You selected: " + playerSelection;
    computerChoice.textContent = "Computer selected: " + computerSelection;

    //If it's a tie.
    if (playerSelection === computerSelection) {
        return "It's a tie! Play again!";
    }

    //If player chooses rock.
    if (playerSelection === rock && computerSelection === scissors) {
        playerScore++;
        return "You win! Rock breaks scissors!";
    } else if (playerSelection === rock && computerSelection === paper) {
        computerScore++;
        return "You lose! Paper covers rock!";
    }

    //If player chooses paper.
    if (playerSelection === paper && computerSelection === rock) {
        playerScore++;
        return "You win! Paper covers rock!";
    } else if (playerSelection === paper && computerSelection === scissors) {
        computerScore++;
        return "You lose! Scissors cut paper!";
    }

    //If player chooses scissors.
    if (playerSelection === scissors && computerSelection === paper) {
        playerScore++;
        return "You win! Scissors cuts paper!";
    } else if (playerSelection === scissors && computerSelection === rock) {
        computerScore++;
        return "You lose! Rock breaks scissors!";
    }
}

    function game() {
        
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const computerSelection = computerPlay();
                results.textContent = playOneRound(button.id, computerSelection);
                player.textContent = "Player Score: " + playerScore;
                computer.textContent = "Computer Score: " + computerScore; 

                //First to 5 wins.
                if (playerScore == 5) {
                    results.textContent = "Player wins!";
                    computerScore = 0;
                    playerScore = 0;
                }
                if (computerScore == 5) {
                    results.textContent = "Computer wins!";
                    computerScore = 0;
                    playerScore = 0;
                }
            })
        })
}

game();


