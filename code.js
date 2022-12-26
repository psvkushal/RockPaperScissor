/*
    * take player choice
    * take computer choice
    * compare the choices
    * repeat the required number of times
    * 
    * 
    * getPlayerChoice ---> take the input through prompt
    * getComputerChoice ---> take random input
    * compareChoice --->
*/

function getPlayerChoice() {
    playerInput = prompt("what are you going to throw : choices rock paper scissors ").toLowerCase();
    invalidInput = (playerInput != "rock") & (playerInput != "paper") & (playerInput != "scissors");
    if(invalidInput){
        alert("please give a valid input , valid input : rock paper scissors");
        return getPlayerChoice(); // this can lead to future issue if the call stack is too long
    }
    return playerInput;
}

function getComputerChoice() {
    num = Math.floor(Math.random()*3);
    if(num == 0){
        return "rock";
    }else if(num == 1) {
        return "paper";
    }else{
        return "scissors"
    }
}

function compareChoice(playerChoice, compareChoice){
    /*
        * 0 --> draw
        * 1 --> playerwon
        * 2 --> computerwon
    */
    if(playerChoice == compareChoice){
        return 0;
    }else if((playerChoice == "rock" & computerChoice == "scissors") | (playerChoice == "scissors" & computerChoice == "paper") | (playerChoice == "paper" & computerChoice == "rock")){
        return 1;
    }else{
        return 2;
    }
}

function playRound(){
    /*
        * 0 --> draw
        * 1 --> playerwon
        * 2 --> computerwon
    */
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log("computer = " + computerChoice + " player = " + playerChoice);
    return compareChoice(playerChoice,computerChoice);
}

function message(outcome){
    if(outcome == 0){
        alert("its a draw");
    }
    if(outcome == 1){
        alert("you won");
    }
    if(outcome == 2){
        alert("computer won");
    }
}

function tournament(){
    numRounds = prompt("how many rounds do you want to play");
    playerScore = 0;
    computerScore = 0;
    for(i = 0;i < numRounds;i++){
        outcome = playRound()
        message(outcome);
        playerScore = playerScore + (outcome == 1);
        computerScore = computerScore + (outcome == 2);
    }
    alert("total outcome player score = " + playerScore + " computer score = " + computerScore);
    if(playerScore > computerScore){
        alert("you won the tournament");
    }else if(playerScore == computerScore){
        alert("the tournament is a draw");
    }else{
        alert("computer won the tournament")
    }
}

tournament();