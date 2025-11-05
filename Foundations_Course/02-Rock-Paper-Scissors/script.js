console.log("Hello World !");





function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;


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
        return result;
    }

    function updateScores(resultText) {
        document.getElementById("human-score").textContent = `Human Score: ${humanScore}`;
        document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;
        document.getElementById("result").textContent = resultText;

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


