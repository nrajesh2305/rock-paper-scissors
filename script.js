// Will randomly return either "Rock", "Paper", or "Scissors".
// Use console to make sure your functions are behaving in the right manner! :)
// Psuedocode:
/*
    1. Generate a random number between 1 and 3.
    2. Use the random number to choose the value of the choice the computer chose.
    3. We can do this in 2 lines if we wanted to.
*/
// This works now.
function getComputerChoice()
{
    // These are our choices.
    let choices = ["Rock", "Paper", "Scissors"];
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
        return "You Win! Paper beats Rock";
    }
    else if(playerChoice == "Paper" && computerChoice == "Scissors")
    {
        return "You Lose! Scissors beats Paper";
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper")
    {
        return "You Win! Scissors beats Paper";
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock")
    {
        return "You Lose! Rock beats Scissors";
    }
    return "None";
}