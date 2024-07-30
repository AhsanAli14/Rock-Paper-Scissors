let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawGame = () => {
    msg.innerText = "Draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compPoints.innerText = compScore;
        msg.innerText= `You loss! ${compChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    userPoints.innerText = userScore;
    compScore = 0;
    compPoints.innerText = compScore;
})