let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "#081b31";
    msg.style.borderColor = "#ffffff";
   
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        msg.style.borderColor = "darkgreen";
    } else {
       compScore++;
       compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
        msg.style.borderColor = "darkred";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") { // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") { // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
