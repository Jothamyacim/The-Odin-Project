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
        //humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return `Its a Tie ! You both chose ${humanChoice}`;
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            return `You Win ! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            return `You Lose ! ${computerChoice} beats ${humanChoice}`;
        }

    }
    
    
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
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
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
            console.log(playRound(humanChoice, computerChoice));
        })}
    );
        

}

playGame();


