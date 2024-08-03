let computerChoice = ['Rock', 'Paper', 'Scissors'];
let computerMove = computerChoice[Math.floor(Math.random() * computerChoice.length)];

let playerMove = prompt("Make your choice: Rock, Paper, or Scissors?");

const moveLog = {
    rock: 0,
    paper: 0,
    scissors: 0,
    invalid: 0
};

const gameScore = {
    wins: 0,
    losses: 0,
    ties: 0
};

if (playerMove === "Rock") {
    moveLog.rock + 1;
    alert(computerMove);
    if (computerMove === "Rock") {
        alert("It's a tie!");
        (gameScore.ties + 1);
    } else if (computerMove === "Paper") {
        alert("You lose!");
        (gameScore.losses + 1);
    } else if (computerMove === "Scissors") {
        alert("You win!");
        (gameScore.wins + 1);
    }
} else if (playerMove === "Paper") {
    moveLog.paper + 1
    alert(computerMove);
    if (computerMove === "Paper") {
        alert("It's a tie!");
        gameScore.ties + 1;
    } else if (computerMove === "Scissors") {
        alert("You lose!");
        gameScore.losses + 1;
    } else if (computerMove === "Rock") {
        alert("You win!");
        gameScore.wins + 1;
    }
} else if (playerMove === "Scissors") {
    moveLog.scissors + 1;
    alert(computerMove);
    if (computerMove === "Scissors") {
        alert("It's a tie!");
        gameScore.ties + 1;
    } else if (computerMove === "Rock") {
        alert("You lose!");
        gameScore.losses + 1;
    } else if (computerMove === "Paper") {
        alert("You win!");
        gameScore.wins + 1;
    }
} else {
    moveLog.invalid + 1;
    alert("That is not a valid choice!");
}

console.log(moveLog);

confirm("Do you want to play again?");
    location.reload();