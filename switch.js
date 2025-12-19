let playerone= "scissors";
let computer= "rock";

switch (playerone) {
    case computer:
        console.log("Tie game!");
        break;
    
    case "rock":
    if (computer === "paper") {
        console.log("computer wins!"); 
    } else {
        console.log("playerOne wins!");
    }
    break;
    case "paper":
    if (computer === "scissors") {
        console.log("computer wins!"); 
    } else {
        console.log("playerOne wins!");
    }
    break;
    default:
    if (computer === "rock") {
        console.log("computer wins!"); 
    } else {
        console.log("playerOne wins!");
    }
    
    }
