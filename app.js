const randomNumber = Math.floor(Math.random() * 100) + 1; //to generate random number from 1 -100 => 0.314*100=31.4 → 31 → 32

let attempts = 0;
const maxAttempts = 7;

alert("Welcome to Number Guessing Game!\nTry to guess the number between 1-100 in 7 attempts!");

while(attempts < maxAttempts){
  const guess = parseInt(prompt(`Attempt ${attempts + 1}/${maxAttempts}\nEnter your guess:`));

  if(guess === randomNumber){
    alert(`Congratulations! You guessed the number in ${attempts + 1} attempts!`)
    break;
 
  }
   
   if(guess < randomNumber) {
    alert("Too low! Try a higher number.");
} else {
    alert("Too high! Try a lower number.");
}

attempts++;
}

if(attempts === maxAttempts) {
  alert(`Game Over! The correct number was ${randomNumber}`);
}
