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
    /* Returns an integer between 0 and 3. 
    This codes are to be interpreted as follows:
    0 : tie
    1 : player wins
    2 : computer wins
    3 : unexpected error 
    */

    console.log('Player chooses ' + playerSelection);
    computerChoice.textContent = 'Computer choice: ' + computerSelection;
    playerChoice.textContent = 'Player choice: ' + playerSelection;

    if (playerSelection == computerSelection){
        winner.textContent = 'Winner: ' + 'Tie'
        return 0;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        winner.textContent = 'Winner: ' + 'Player'
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner.textContent = 'Winner: ' + 'Computer'
        return 2;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner.textContent = 'Winner: ' + 'Player'
        return 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner.textContent = 'Winner: ' + 'Computer'
        return 2;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner.textContent = 'Winner: ' + 'Computer'
        return 2;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner.textContent = 'Winner: ' + 'Player'
        return 1;
    } else {
        winner.textContent = 'Winner: ' + 'No one because there is some unexpected error.'
        return 3;
    }
}


/*
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please make your choice (default is Paper): ', 'Paper').toLowerCase();
        console.log('Player chooses '+ playerSelection);
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

// Set up the DOM manipulation part


const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('#computer-choice');
const playerChoice = document.querySelector('#player-choice');
const winner = document.querySelector('#winner');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, getComputerChoice()));
    })
});

// Create a div to replace all of the console.log with DOM stuff




