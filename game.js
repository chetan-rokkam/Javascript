let playGame = confirm("shall we play rock, paper, scissors?");

if (playGame) {
  let playerChoice = prompt("Enter rock, paper, or scissors:");
  if (playerChoice) {
    let playerOne = playerChoicw.trim().toLowerCase();
    if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
    ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer =
        computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissors";
        let result =
        playerOne === computer
            ? "It's a tie!"
            :playerONe === "rock" && computer === "paper" 
            ?`player: ${playerOne}\nComputer: ${computer}\nComputer wins!`

            :playerONe === "paper" && computer === "scissors" 
            ?`player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            
            :playerONe === "scissors" && computer === "rock" 
            ?`player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
       
            :`player: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
        alert(result);
        let playAgain = confirm("play again?");
        playAgain ? location.reload() : alert("thanks for playing!");
    } else {
        alert("you did't enter rock, paper, or scissors");
  } 
} else {
    alert("i guess you changed your mind. maybe next time!");
}
} else {
    alert("ok may be next time!");
}
