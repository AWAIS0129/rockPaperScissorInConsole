
//fresh script for GUI will be written 


const gameStartButton = document.querySelector('.startBtn');
const namePlate = document.querySelector('#userName');
const userChoices = document.querySelector('.userChoices');
const userSelectionBox = document.querySelector('#userChoiceField');
const computerSelectionBox = document.querySelector('#computerChoiceField');
const userScorePanel = document.querySelector('#userScorePanel');
const computerScorePanel = document.querySelector('#computerScorePanel');
let userName = document.querySelector('#playerName').value;




function getUserName(){
    return document.querySelector('#playerName').value;
}

function getComputerchoice(){
    let randomChoice = Math.ceil(Math.random()*3);

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

function playGame(userChoice, computerChoice,userScore, computerScore){
    
    if(userChoice === computerChoice)
    {
        return {userScore,computerScore}
    }

    if (userChoice === 'rock')
        {
        if(computerChoice === 'paper')
        {

        computerScore+=1;

        }
        else
        {

           userScore+=1;
            
        }
    }
    
    else if (userChoice ==='paper')
    {
        if(computerChoice === 'scissors')
        {
    
            computerScore+=1;
            
        }
        else
        {

           userScore+=1;
            
        }
    }
    else if (userChoice === 'scissors')
    {
        if(computerChoice === 'rock')
        {

            computerScore+=1;
            
        }
        else{
          
           userScore+=1;
            
        }
    }

    return {
        userScore,computerScore
    };

}










gameStartButton.addEventListener('click',()=>{
    let title = getUserName();
    
    if(title == '')
        {
            alert('Please enter your name to start the game');
        }
        
        else
            {
                namePlate.innerText = title;
                userName = title;
            }      
            
        })



userChoices.addEventListener('click',(e)=>{
    if (userName === "")
    {
        alert('you cannot start game without entering your name');
    }
    else
    {
        if (e.target.classList.contains('choiceBtn'))
    {
        let userChoice = e.target.innerText.toLowerCase();
        let computerChoice = getComputerchoice();
        let userScore = parseInt(userScorePanel.innerText);
        let computerScore = parseInt(computerScorePanel.innerText);
    
        userSelectionBox.innerText = userChoice.toUpperCase();

        computerSelectionBox.innerText = computerChoice.toUpperCase();

        let scores = playGame(userChoice, computerChoice, userScore, computerScore);
        
        userScorePanel.innerText = scores.userScore;
        computerScorePanel.innerText = scores.computerScore;

        // i am using setTimeout here just to show the user that their score has reached the winning 
        //score threshold and giving time to browser to update the UI.

        setTimeout(()=>{
        if((scores.userScore == 5) || (scores.computerScore == 5))
            
        {
            if (scores.userScore == 5)
            {
                alert(`${userName} has won the game!`)
            }
            else
            {
                alert("Computer has won the game")
            }
        location.reload()
        }
        },100);

        
    }
    }
})
        
        
