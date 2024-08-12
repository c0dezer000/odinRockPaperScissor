//  0 = rock 1 = paper 2 = scissor?


function playRound(){
   let humanScore = 0
   let computerScore = 0
   let draw = 0

    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()    
        if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissor") {
            return "Enter valid option";
        }
    
        if(humanSelection === computerSelection){
            console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
            draw++
            console.log("draw current standing your score" + humanScore + " opponents score" + computerScore)
        }
        else if(humanSelection === "scissor" && computerSelection === "paper"){
            console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
            console.log("You win")
            humanScore ++
            console.log("Your Score " + humanScore)
        }
        else if(humanSelection === "paper" && computerSelection === "rock"){
            console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
            console.log("You win")
            humanScore ++
            console.log("Your Score " + humanScore)
        }
        else if(humanSelection === "rock" && computerSelection === "scissor"){
            console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
            console.log("You win")
            humanScore ++
            console.log("Your Score " + humanScore)
        }
        else{
            console.log("You choose "+ humanSelection + " your oppenent choose " + computerSelection)
            console.log("Computer Wins")
            computerScore++
            console.log("Your opponents " + computerScore)
        }
        
    }
        console.log("Your total score is " + humanScore)
        console.log("Your opponents score is " + computerScore)
        console.log("total draw is " + draw)
    

}

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3)
    if(computerChoice === 0){
        return "rock"
    }
    else if(computerChoice === 1){
        return "paper"
    }
    else if(computerChoice === 2){
        return "scissor"
    }
}
function getHumanChoice(){
    const humanChoice = prompt("Enter your Choice")
    return humanChoice

}
