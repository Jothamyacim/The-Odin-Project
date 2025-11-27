console.log("Hello World !");





function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;
    let gameOver = false;


    function getComputerChoice() {
        const randomChoice = Math.floor(Math.random() * 3);//returns 0, 1 or 2

        if (randomChoice === 0) {
            return 'rock';
        } else if (randomChoice === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    } 

    //function to get human choice via prompt
    /*
    function getHumanChoice() {
        let userInput = prompt("Choose rock, paper or scissors: ");
        userInput = userInput.toLowerCase();

        // Validate user input

        
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
            return userInput;
        } else {
            console.log("Invalid input. Please try again.");
            return getHumanChoice();
        }
        
        return userInput;
    }
    */
    

    


    function playRound(humanChoice, computerChoice) {
        let result = ""

        if (humanChoice === computerChoice) {
            console.log(result = `Its a Tie ! You both chose ${humanChoice}`);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            console.log(result =  `You Win ! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(result =  `You Lose ! ${computerChoice} beats ${humanChoice}`);
        }

        updateScores(result);
        // update the UI, then check if someone reached the winning score
        checkWinner();
        return result;
       
    }
    


    function updateScores(resultText) {
        document.getElementById("human-score").textContent = `Human Score: ${humanScore}`;
        document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;
        document.getElementById("result").textContent = resultText;

    } 
    function checkWinner() {
        if (humanScore === 5 || computerScore === 5) {
            gameOver = true;
            const winner = humanScore === 5 ? "🎉 You win the game!" + " Click Reset to play again" 
            : "💀 Computer wins the game!" + " Click Reset to play again";
           
            const winnerP = document.querySelector(".winners #winner");
            winnerP.textContent = winner;

            document.querySelectorAll("button").forEach(button => {
                button.disabled = true;
            }); 

            // Adding  a reset button functionality 
            const resetDiv = document.querySelector(".reset-button");
            const resetButton = document.createElement("button");
            resetButton.textContent = "Reset Game";
            resetButton.onclick = () => { window.location.reload(); };
            resetDiv.appendChild(resetButton);



        }
    }


    
    // Example of how to call the functions
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();

   //call playRound() function with parameters
   //console.log(playRound(humanSelection, computerSelection));



    // Determine the overall winner
    function getScore(humanScore, computerScore) {
        if (humanScore === computerScore) {
            return 'Its a Tie !';
        } else if (humanScore > computerScore) {
            return 'Congrats, You Win';
        } else {
            return 'Sorry, You Lose !';
        }
    }


    /*
    function fiveRounds() {
        for (let i = 0; i < rounds; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(humanSelection, computerSelection));
            
        }
        console.log(getScore(humanScore, computerScore));
    }

    fiveRounds();
    */

   //selecting all three buttons
    const buttons = document.querySelectorAll("button");

    //adding event listeners to each button

    buttons.forEach(
        button => {button.addEventListener("click", () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        })}
    );



    
        

}

playGame();


