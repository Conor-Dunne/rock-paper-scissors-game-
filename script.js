
let computerScore = 0;
let playerScore = 0;


      function playRound() {
        const selection = ["rock", "paper", "scissors"];
        const computerSelection = selection[Math.floor(Math.random() * 3)];
        const playerSelection = window.prompt("Type rock, paper, or scissors");

        if (playerSelection == computerSelection) {
          return (playerSelection + "  " + computerSelection + " " + "It's a draw! Go again.");
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("Rock beats scissors");
          return ("You win!")
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("Paper beats rock");
          return ("You win!")
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("Scissors beats paper");
          return ("You win!")
        } else return ("You lose!");
      }



      function game() {
       
        for (let i = 0; i < 5; i++) {
         
          if (playRound() == "You win!"){
              playerScore +=1;
              console.log("Nice! + 1 point")
          } else {console.log("doh!")};
          
        
        console.log("Total points: " + playerScore);
        }
    
        console.log("Final score: " + playerScore);
    }


      console.log(game());





     /* function playRound() {
        const selection = ["rock", "paper", "scissors"];
        const computerSelection = selection[Math.floor(Math.random() * 3)];
        const playerSelection = window.prompt("Type rock, paper, or scissors");

        if (playerSelection == computerSelection) {
          return (playerSelection + "  " + computerSelection + " " + "It's a draw! Go again.");
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
          return (playerSelection + "  " + computerSelection + " " + "You win! Rock beats scissors")
        } else if (playerSelection == "paper" && computerSelection == "rock") {
          return (playerSelection + "  " + computerSelection + " " + "You win! Paper beats rock.")
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
          return (playerSelection + "  " + computerSelection + " " + "You win! scissors beats paper.")
        } else return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
      }



      function game() {
        for (let i = 0; i < 5; i++) {
          console.log(playRound());
        }
        return "finished";
        console.log("Finished");
      }


      console.log(game());  */
      
    
