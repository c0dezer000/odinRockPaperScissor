//  0 = rock 1 = paper 2 = scissor?


function playRound(){
    const computerSelection = getComputerChoice()
    const humanSelection = getHumanChoice()    

    if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissor") {
        return "Enter valid option";
    }

    if(humanSelection === computerSelection){
        console.log("You choose "+ humanSelection + " your opponent choose" + computerSelection)
        console.log(`draw`)
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
        console.log("You win")
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
        console.log("You win")
    }
    else if(humanSelection === "rock" && computerSelection === "scissor"){
        console.log("You choose "+ humanSelection + " your opponent choose " + computerSelection)
        console.log("You win")
    }
    else{
        console.log("You choose "+ humanSelection + " your oppenent choose " + computerSelection)
        console.log("Computer Wins")
    }
    

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
