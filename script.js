// Will randomly return either "Rock", "Paper", or "Scissors".
// Use console to make sure your functions are behaving in the right manner! :)
// Psuedocode:
/*
    1. Generate a random number between 1 and 3.
    2. Use the random number to choose the value of the choice the computer chose.
    3. We can do this in 3 lines if we wanted to.
*/
// This works now.
function getComputerChoice()
{
    // These are our choices.
    let choices = ["rock.png", "paper.png", "scissors.png"];
    // Generate a random number between 1 & 3. ints only
    let computer_choice = Math.floor(Math.random() * 3);
    return choices[computer_choice];
}

// Returns a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make sure it can work with any case. RoCk roCk ROCK
/*
    Psuedocode:
    1. Convert the player and computer selections to lowercase. Change the first letter of each to uppercase.
    2. 
        - Rock beats scissors
        - Scissors beats paper
        - Paper beats rock
        - If both are equal, tie, continue.
*/
// This works now.
function playRound(playerSelection, computerSelection)
{
    // Convert both player and computer selections to a case that works within our case sensitivities.
    let playerChoice = playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1, playerSelection.length).toLowerCase());
    let computerChoice = computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1, computerSelection.length).toLowerCase());
    if(playerChoice == computerChoice)
    {
        return "It's a tie!";
    }
    if(playerChoice == "Rock" && computerChoice == "Scissors")
    {
        return "You Win! Rock beats Scissors!";
    }
    else if(playerChoice == "Rock" && computerChoice == "Paper")
    {
        return "You Lose! Paper beats Rock";
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock")
    {
        return "You Win! Paper beats Rock!";
    }
    else if(playerChoice == "Paper" && computerChoice == "Scissors")
    {
        return "You Lose! Scissors beats Paper";
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper")
    {
        return "You Win! Scissors beats Paper!";
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock")
    {
        return "You Lose! Rock beats Scissors";
    }
    return "None";
}

// Uses the previous function inside of this one to play a 5 round game
// that keeps score and reports a winner and loser at the end.
/*
    1. Calls playRound 5 times in a row. May or may not need to use a loop.
    2. Use console.log() to display the results of each round and the winner at the end.
    3. Ask the user to choose what they want to play. Use prompt to get input from the user.
 */
function game()
{
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = prompt("What would you like to play (Rock, Paper, Scissors): ");
    let computerChoice = getComputerChoice();
    let message = playRound(playerChoice, computerChoice);
    if(message.includes("Win"))
    {
        playerScore++;
    }
    else if(message.includes("Lose"))
    {
        computerScore++;
    }
    if(playerScore == computerScore)
    {
        console.log("The game is a tie!");
    }
    else if(playerScore > computerScore)
    {
        console.log("You won!\nPlayer Score: " + playerScore + "\tComputer Score: " + computerScore + "\n____________________________");
    }
    else
    {
        console.log("You Lost!\nComputer Score: " + computerScore + "\tPlayer Score: " + playerScore + "\n____________________________");
    }
}

function updatePlayerScore()
{
    player_score++;
    scorePlayerElement.textContent = player_score;
}

function updateComputerScore()
{
    computer_score++;
    scoreComputerElement.textContent = computer_score;
}



// Now that we are in the UI_Rock_Paper_Scissors branch, we have to push to this branch using the command: git push origin UI_Rock_Paper_Scissors

// Tomorrow, start by fixing the zoom in and out, and fitting everything, we can do this after finishing scripting though! :)
// Then, we are done with HTML and CSS stuff, we can then move on to scripting the final product. Good luck Nithin! :)

let player_score = 0;
let computer_score = 0;

const scorePlayerElement = document.querySelector("#playerScore");
const scoreComputerElement = document.querySelector("#computerScore");

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function resetGame() 
{
    player_score = 0;
    computer_score = 0;
    scorePlayerElement.textContent = player_score;
    scoreComputerElement.textContent = computer_score;
    emptyChoice.src = "plate.png";
    emptyComputerChoice.src = "plate.png";
});


// Set the plates to the choice chosen by the user. Then after this we call on a function that will choose a random choice for computer. Then we decide winner.
// After that, the logic is done, put it all together. We are good then.

// After we do that, then we can work on the styles, to make sure everything is pixel perfect, and then submit. :)

const emptyChoice = document.querySelector("#empty");
const emptyComputerChoice = document.querySelector("#emptyComputer");

const rockChoice = document.querySelector("#rock");
const paperChoice = document.querySelector("#paper");
const scissorsChoice = document.querySelector("#scissors");

rockChoice.addEventListener("click", function setPlayerImage()
{
    emptyChoice.src = "rock.png";
    emptyComputerChoice.src = getComputerChoice();
});

paperChoice.addEventListener("click", function setPlayerImage()
{
    emptyChoice.src = "paper.png";
    emptyComputerChoice.src = getComputerChoice();
});

scissorsChoice.addEventListener("click", function setPlayerImage()
{
    emptyChoice.src = "scissors.png";
    emptyComputerChoice.src = getComputerChoice();
});