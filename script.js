let computerChoice = ['Rock', 'Paper', 'Scissors'];
let computerMove = computerChoice[Math.floor(Math.random() * computerChoice.length)];

let playerChoice = prompt("Make your choice: Rock, Paper, or Scissors?");
let playerMove = playerChoice;

if (playerMove === "Rock") {
    alert(computerMove);
    if (computerMove === "Rock") {
        alert("It's a tie!");
    } else if (computerMove === "Paper") {
        alert("You lose!");
    } else if (computerMove === "Scissors") {
        alert("You win!");
    }
} else if (playerMove === "Paper") {
    alert(computerMove);
    if (computerMove === "Paper") {
        alert("It's a tie!");
    } else if (computerMove === "Scissors") {
        alert("You lose!");
    } else if (computerMove === "Rock") {
        alert("You win!");
    }
} else if (playerMove === "Scissors") {
    alert(computerMove);
    if (computerMove === "Scissors") {
        alert("It's a tie!");
    } else if (computerMove === "Rock") {
        alert("You lose!");
    } else if (computerMove === "Paper") {
        alert("You win!");
    }
} else {
    alert("That is not a valid choice!");
}
