function getComputerchoice(){
    let randomChoice = Math.ceil(Math.random()*3)
    if (randomChoice === 1){
        return "rock";
    }
    else if (randomChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}




function getHumanChoice(){
//    let userChoice =  prompt("Please Enter your choice in english:\nRock, Paper or Scissors");
  return userChoice.toLowerCase();
}



function playRound(computerScore, humanScore){
    let computerChoice = getComputerchoice();
    let humanChoice = getHumanChoice();


    if(humanChoice === computerChoice){
        console.log(`It's a tie!\n ${humanChoice} and ${computerChoice} are same.` );
        return [humanScore,computerScore]
    }

    if (humanChoice === 'rock'){
        if(computerChoice === 'paper'){
            console.log(`Computer Won!\n ${computerChoice} beats ${humanChoice}.`)
            computerScore+=1;
            
        }
        else{
           console.log(`Human Won!\n ${humanChoice} beats ${computerChoice}`);
           humanScore+=1;
           
            
        }
    }
    
    else if (humanChoice ==='paper'){
        if(computerChoice === 'scissors'){
            console.log(`Computer Won!\n ${computerChoice} beats ${humanChoice}.`)
            computerScore+=1;
            
        }
        else{
           console.log(`Human Won!\n ${humanChoice} beats ${computerChoice}`);
           humanScore+=1;
           
            
        }
    }
    else if (humanChoice === 'scissors'){
        if(computerChoice === 'rock'){
            console.log(`Computer Won!\n ${computerChoice} beats ${humanChoice}.`)
            computerScore+=1;
            
        }
        else{
           console.log(`Human Won!\n ${humanChoice} beats ${computerChoice}`);
           humanScore+=1;
           
            
        }
    }

    return [humanScore,computerScore]

}





function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    let returnScoreArray = [0,0]
    let roundNo = 0;

    while (roundNo < 5){
        returnScoreArray= playRound(computerScore, humanScore);
        humanScore = returnScoreArray[0];
        computerScore = returnScoreArray[1];
        roundNo+=1;
    }

    if(computerScore > humanScore){
        console.log("Computer has won the game!");
        
    }
    else if(humanScore> computerScore){
        console.log("Human has won the game!");
    }
    else{
        console.log("It's a tie");
        
    }
    console.log(`Computer Score is: ${computerScore}\nHuman Score is: ${humanScore}`);



}




function main(){
   
    const startGameButton = document.querySelector('.startBtn');
   
    startGameButton.addEventListener('click',()=>{
        let playerName = document.querySelector('#playerName').value;

        if (playerName != "")
        {
        let playerNameField = document.querySelector('#userName');
        playerNameField.innerText = playerName;
        }

        else{
            alert("Please enter user name.")
        }
        }
        
    )
    
    
    
    playGame();
}

main();