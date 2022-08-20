function getComputerChoice() {
    
    // generate a random number between 0 and 2 (three possibile values)
    let randomInt = Math.floor(Math.random()*3); 
    
    if (randomInt == 0) {
        console.log("Computer chooses Rock");
        return "rock";
    } else if (randomInt == 1) {
        console.log("Computer chooses Paper");
        return "paper"; 
    } else {
        console.log("Computer chooses Scissors");
        return "scissors";
    }
} 

function playRound(playerSelection, computerSelection) {

    currentRound++;

    /* Returns an integer between 0 and 3. 
    This codes are to be interpreted as follows:
    0 : tie
    1 : player wins
    2 : computer wins
    3 : unexpected error 
    */

    // 
    // cpuScore.textContent = 'Computer score: ' + scoreComputer;
    // humanScore.textContent = 'Player score ' + scorePlayer;

    console.log('Player chooses ' + playerSelection);
    round.textContent = 'Current round: ' + currentRound;
    computerChoice.textContent = 'Computer choice: ' + computerSelection;
    playerChoice.textContent = 'Player choice: ' + playerSelection;

    


    if (playerSelection == computerSelection){
        winner.textContent = 'Winner: ' + 'Tie';
        return 0;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        winner.textContent = 'Winner: ' + 'Player';
        scorePlayer++;
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner.textContent = 'Winner: ' + 'Computer';
        scoreComputer++;
        return 2;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner.textContent = 'Winner: ' + 'Player';
        scorePlayer++;
        return 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner.textContent = 'Winner: ' + 'Computer';
        scoreComputer++;
        return 2;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner.textContent = 'Winner: ' + 'Computer';
        scoreComputer++;

        return 2;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner.textContent = 'Winner: ' + 'Player';
        scorePlayer++;
        return 1;
    } else {
        winner.textContent = 'Winner: ' + 'No one because there is some unexpected error.';
        return 3;
    }
}


/*
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    
    for(let i = 0; i < 5; i++) {
        // DEP] const playerSelection = prompt('Please make your choice (default is Paper): ', 'Paper').toLowerCase();
        // DEP] console.log('Player chooses '+ playerSelection);
        const computerSelection = getComputerChoice();
        let partial = playRound(playerSelection, computerSelection);
        if (partial == 1) {
            console.log('!!! Player wins this round');
            scorePlayer++;
        } else if (partial == 2) {
            console.log('!!! Computer wins this round');
            scoreComputer++;
        } else if (partial == 0) {
            console.log('!!! This round is a tie');
        } else {
            console.log('There is some unexpected error');
        }
        
    }
    console.log('Computer score: ' + scoreComputer);
    console.log('Player score: ' + scorePlayer);
    
    if ( scoreComputer > scorePlayer) {
        console.log('Computer wins the final game');
    } else if (scoreComputer < scorePlayer) {
        console.log('Player wins the final game');
    } else { 
        console.log('This is a tie!');
    }
}

game();
*/
// ----

// Set up the DOM manipulation part
let currentRound = 0;

const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('#computer-choice');
const playerChoice = document.querySelector('#player-choice');
const winner = document.querySelector('#winner');
const round = document.querySelector('#round');
const cpuScore = document.querySelector('#computer-score');
const humanScore = document.querySelector('#player-score');

// Global variables to keep the score. They are manipulated in playRound();
let scorePlayer = 0;
let scoreComputer = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentRound < 5) {
        playRound(button.id, getComputerChoice());
        cpuScore.textContent = 'Computer score: ' + scoreComputer;
        humanScore.textContent = 'Player score: ' + scorePlayer;
        console.log('minchia ' + currentRound + ' giocatore ' + scorePlayer + ' computer ' + scoreComputer);
        } else {
            let finalWinner = '';
            if (scoreComputer > scorePlayer) {
                finalWinner = 'Computer';
            } else if (scorePlayer > scoreComputer) {
                finalWinner = 'Player';
            } else {
                finalWinner = 'it is a tie';
            }
            const final = document.createElement('p');
            final.textContent = 'Final Winner : ' + finalWinner + '. Reload the page to play again.';
            final.style.color = 'red';
            results.appendChild(final);
        }
    })
});

// Create a div to replace all of the console.log with DOM stuff




