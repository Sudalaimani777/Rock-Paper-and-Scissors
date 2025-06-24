const playerChoice = prompt(`Enter the rock, paper or scissors`).toLowerCase().trim();

const  randomNumber = Math.ceil(Math.random() * 3);
console.log(randomNumber);

let computer = "";

//SwitchCase
switch (randomNumber) {
    case 1:
        computer = "rock";
        break;
    case 2 :
        computer = "paper";
        break;
    case 3 :
        computer = "scissors";
        break;
    default:
        computer = `Choose any`;
        break;
}

//LOGIC
if (playerChoice === computer) {
    alert(`The game is draw because you choose ${playerChoice} and the computer choosed ${computer}`)
}

else if (playerChoice === "rock" && computer === "paper"){
   alert(`Computer won because the computer chooses ${computer}`);
}

else if (playerChoice === "rock" && computer === "scissors") {
    alert (`You won because the computer chooses ${computer}`);
}

else if (playerChoice === "paper" && computer === "rock"){
     alert (`You won because the computer choosed ${computer}`);
}

else if (playerChoice === "paper" && computer === "scissors"){
     alert (`Computer won because the computer choosed ${computer}`);
}

else if (playerChoice === "scissors" && computer === "paper"){
     alert (`You won because the computer choosed ${computer}`);
}

else if (playerChoice === "scissors" && computer === "rock"){
     alert (`Computer won because the computer choosed ${computer}`);
}

else {
    alert(`Please choose any objects like rock, paper or scissors`)
}




    
    
