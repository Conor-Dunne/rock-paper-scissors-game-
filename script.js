
let result;
let playerScore = 0;
let computerScore = 0; 
let playerSelection;
const buttons = Array.from(document.querySelectorAll('button'));
const roundsBox = document.querySelector(".rounds");
const selection = ["ROCK", "PAPER", "SCISSORS"];


buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playerSelection = button.textContent;
    playRound();
  });
});


    function playRound() { 
 
        const computerSelection = selection[Math.floor(Math.random() * 3)];
        const oneRound = document.createElement("div");
        const pScore = document.querySelector("#playerScore");
        const cScore = document.querySelector("#compScore");
        oneRound.classList.add("rounds");
        console.log("player =  " + playerSelection)
        console.log("computer =  " + computerSelection)
        if (playerSelection == computerSelection) {
          oneRound.setAttribute('style', 'white-space: pre;');
          oneRound.textContent = "DRAW \r\n"
          oneRound.textContent += `${playerSelection} <-------------------------------> ${computerSelection}`
          roundsBox.appendChild(oneRound);
          return (result = "Draw!");
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
          oneRound.textContent = `${playerSelection} ----- YOU WIN! ----- ${computerSelection}`;
          roundsBox.appendChild(oneRound);
          playerScore +=1;
          pScore.textContent = playerScore;
          return (result = "You win!")
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
          oneRound.textContent = `${playerSelection} ----- YOU WIN! ----- ${computerSelection}`;
          roundsBox.appendChild(oneRound);
          playerScore +=1;
          pScore.textContent = playerScore;
          return (result = "You win!")
        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
          oneRound.textContent = `${playerSelection} ----- YOU WIN! ----- ${computerSelection}`;
          roundsBox.appendChild(oneRound);
          playerScore +=1;
          pScore.textContent = playerScore;
          return (result = "You win!")
        } else {
            oneRound.textContent = `${playerSelection} ----- YOU LOSE! ----- ${computerSelection}`;
            roundsBox.appendChild(oneRound);
            computerScore +=1;
            cScore.textContent = computerScore;
            return result = "You lose!";

        }
      }

      function game () {

      }



function test () {
  console.log(roundsBox);
}

test ();








      //Loop works perfect befor if statements
      /*function game(){
        let computerScore = 0;
        let playerScore = 0;

        for (let i = 0; i < 5; i++){
        
        if (playRound() == "You win!") {
          console.log("You win!")
          playerScore +=1;
          
        } else if (result == "You lose!") { //The issue is with this if else statement! It seems to skip some of the conditions sometimes (We're almost there!) ! (Solved: It was running the round again if it passed the first condition. Chnaged it o 'result' instead of 'playRound())
          console.log("You lose!")
          computerScore +=1;
        } else {
          console.log("Draw")
        }
        
        }
        console.log(playerScore + " - " + computerScore);
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
      
    