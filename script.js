
let result;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const buttonBox = document.querySelector(".selections");
const buttons = document.querySelectorAll('button');
const roundsBox = document.querySelector(".rounds");
const selection = ["ROCK", "PAPER", "SCISSORS"];


buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playerSelection = button.textContent;
    playRound();
    game();
  });
});


function playRound() {

  const computerSelection = selection[Math.floor(Math.random() * 3)];
  const oneRound = document.createElement("div");
  const pScore = document.querySelector("#playerScore");
  const cScore = document.querySelector("#compScore");
  oneRound.classList.add("rounds");
  ("computer =  " + computerSelection)
  if (playerSelection == computerSelection) {
    oneRound.setAttribute('style', 'white-space: pre;');
    oneRound.textContent = "DRAW \r\n"
    oneRound.textContent += `${playerSelection} <--------------------------> ${computerSelection}`
    roundsBox.prepend(oneRound);
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    oneRound.textContent = `${playerSelection} ----- YOU WIN! ----- ${computerSelection}`;
    roundsBox.prepend(oneRound);
    playerScore += 1;
    pScore.textContent = playerScore;
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    oneRound.textContent = `${playerSelection} ----- YOU WIN! ----- ${computerSelection}`;
    roundsBox.prepend(oneRound);
    playerScore += 1;
    pScore.textContent = playerScore;
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    oneRound.textContent = `${playerSelection} ----- YOU WIN! ----- ${computerSelection}`;
    roundsBox.prepend(oneRound);
    playerScore += 1;
    pScore.textContent = playerScore;
  } else {
    oneRound.textContent = `${playerSelection} ----- YOU LOSE! ----- ${computerSelection}`;
    roundsBox.prepend(oneRound);
    computerScore += 1;
    cScore.textContent = computerScore;
  }


}

function game() {
  const finalResult = document.createElement("div");
  finalResult.classList.add("rounds");
  if (playerScore != 5 && computerScore != 5) {
    return
  } else if (playerScore == 5) {
    finalResult.textContent = "YOU WON! :)";
    finalResult.style.backgroundColor = "green";
    roundsBox.prepend(finalResult);
    buttonBox.replaceWith(finalResult);

  } else if (computerScore == 5) {
    finalResult.textContent = "YOU LOST! :(";
    finalResult.style.backgroundColor = "red";
    roundsBox.prepend(finalResult);
    buttonBox.replaceWith(finalResult);

  }
}
















