
let playerSelection = "rock" //window.prompt("Type rock, paper, or scissors")



      function playRound() {
        const selection = ["rock", "paper", "scissors"];
        let computerSelection = selection[Math.floor(Math.random() * 3)];
        console.log("comp" + computerSelection)
        if (playerSelection == computerSelection) {
          return ("Draw!");
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
          return ("You win!")
        } else if (playerSelection == "paper" && computerSelection == "rock") {
          return ("You win!")
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
          return ("You win!")
        } else return ("You lose!");
      }
      //Loop works perfect befor if statements
      function game(){
        let computerScore = 0;
        let playerScore = 0;

        for (let i = 0; i < 5; i++){
        
        if (playRound() == "You win!") {
          console.log("You win!")
          playerScore +=1;
          
        }
        
        }
        console.log(playerScore)
      }

      


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
      
    
