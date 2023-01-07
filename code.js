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

//Global Variable for tracking
var computerScore = 0;
var playerScore = 0;
var round = 0;
var totalRounds = 5;

const buttons = document.querySelectorAll(".listen");
const displayComputerPlay = document.querySelector(".displayComputer");
const displayComputerScore = document.querySelector(".displayComputerScore");
const displayPlayerScore = document.querySelector(".displayPlayerScore");
const displayTournamentWinner = document.querySelector(".displayTournamentWinner");
const display2 = document.querySelector(".display2");

const rockImg = document.createElement("img");
const paperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

rockImg.src = "./image_svg/rock-svgrepo-com.svg";
paperImg.src = "./image_svg/paper-document-file-data-svgrepo-com.svg";
scissorsImg.src = "./image_svg/scissors-svgrepo-com.svg";

buttons.forEach(button => button.addEventListener("click",startRound));

function startRound(e){
    if(round > totalRounds){
        //nothing should happen
    }
    if(round == totalRounds){
        //results of the tournament should be given
        round = round + 1;
        if(playerScore > computerScore){
            displayTournamentWinner.textContent = "Tournament won by : Player";
        }
        if(playerScore < computerScore){
            displayTournamentWinner.textContent = "Tournament won by : Computer";
        }
        if(playerScore == computerScore){
            displayTournamentWinner.textContent = "Tournament is a draw";
        }
        const finalText = document.createElement("p");
        finalText.textContent = "Refresh the page to play again"
        finalText.style.color = "red";
        display2.appendChild(finalText);
    }
    if(round < totalRounds){
        round = round + 1;
        //rounds should be occuring
        let playerChoice = e.target.id;
        let computerChoice = getComputerChoice();
        let outcome = compareChoice(playerChoice,computerChoice);
        console.log(outcome);
        playerScore = playerScore + (outcome == 1);
        computerScore = computerScore + (outcome == 2);
        displayPlayerScore.textContent = "Player score : " + playerScore;
        displayComputerScore.textContent = "Computer score : " + computerScore;
        if(round != 0){
            displayComputerPlay.removeChild(displayComputerPlay.lastChild);
        }
        switch(computerChoice){
            case "rock":
                displayComputerPlay.appendChild(rockImg);
                console.log("added rock");
                break;
            case "paper":
                displayComputerPlay.appendChild(paperImg);
                console.log("added paper");
                break;
            case "scissors":
                displayComputerPlay.appendChild(scissorsImg);
                console.log("added scissors");
                break;
            default:
                console.log("some error in the code at line 56");
        }
    }
}

function clickInfo(e) {
    console.log(e.target.id)
}

// I feel the logic below is good but rewriting the logic to fit the idea in my mind will be good idea and scraping down the below
// Ok itseems some logic could be reused 😅 getComputerChoice, compareChoice is being reused

function getPlayerChoice(e) {
    //playerInput = prompt("what are you going to throw : choices rock paper scissors ").toLowerCase();
    playerInput = e.target.id;
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

function compareChoice(playerChoice, computerChoice){
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

//tournament();



/*
Pseudo code 
    HTML 
    * creating divs in the main page for rock paper and scissors, with respective images
    * 
    CSS part
    * Using flex box arrange the images in proper way
    JavaScript
    * There should be events to listen to where the mouse is being clicked. (this is similar to the practise of problem done before just instead of keyboard use mouse)
    * 
    Additional points
    * Download svg of rock, paper and scissors
    * should brush of the css and html part, javascript part should be try to think after creating the div
    
    I did not write above part properly

    step 1 : having the icons of rock paper scissors for selecting
    step 2 : Ask how many rounds to be present in the tournament
    step 3 : There should be an event listener in java script for learning about what is being clicked 
    step 4 : Show what computer has thrown
    step 5 : Show the result of the round
    step 6 : repeat step 3 to 5 until the require number of matches

    step1 
    * should download the required images for the div
    * create divs for the required for the images
    * create flex container so as to fix the layout
    
    step 2
    * should not be taking the input through prompt
        * for now I do not have any idea so lets fix the number of rounds to 5
    
    step 3 , 6 logic is already there
    step 4 and step 5 logic is to be done through javascript add tags for showing the details
    
*/ 

/*
    Completed the code for above but hard to say I have followed what I mentioned over there
    Last I have to add a button for replay where the player can press the button to replay, there are two options here
    option 1 : just add text saying the player to refresh
    option 2 : add button saying that if you refresh all the changes would be removed (I guess here I would be manually changing everything back or I would be refreshing the webpage by myself through)

    I think asking them to refresh the screen by ctrl + R is the best way through text
*/