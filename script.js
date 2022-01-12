let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.round(Math.random() * 9)
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (Math.abs(userGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)) {
    return true
  } else {
    return false
  }
}

const updateScore = (score) => {
  if (score === 'human') {
    humanScore +=1;
  } else if (score === 'computer'){
    computerScore +=1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
