let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    // let add in array
    const options = ["rock", "paper", "scissors"];
    // random number generate use class for math.random(); and math.flooe used for remove decimal

    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
    // rock,paper,scissors'

};
const drawGame = () => {

    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};
const shoWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `You lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "Red";
    }

};
const PlayGame = (userchoice) => {
    
    // Generate computer choice
    const compChoice = gencompChoice();
    
    if (userchoice === compChoice) {
        // give draw msg
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        shoWinner(userWin, userchoice, compChoice);
    }
};
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        
        
        choice.classList.add("shake");

    setTimeout(() => {
      choice.classList.remove("shake");
      PlayGame(userchoice);
    }, 500);

    });
});