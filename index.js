// //  0 = rock 1 = paper 2 = scissor?


// function playRound(){
//    let humanScore = 0
//    let computerScore = 0
//    let draw = 0

//     for(let i = 0; i < 5; i++){
//         const computerSelection = getComputerChoice()
//         const humanSelection = getHumanChoice()    
//         if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissor") {
//             prompt("Enter Valid option")
//         }
    
//         if(humanSelection === computerSelection){
//             console.log(`You chosse ${humanSelection} and your opponent choose ${computerSelection}`)
//             draw++
            
//         }
//         else if(humanSelection === "scissor" && computerSelection === "paper"){
//             console.log(`You choose ${humanSelection} and your opponent choose ${computerSelection}`)
//             console.log("You win")
//             humanScore ++
//         }
//         else if(humanSelection === "paper" && computerSelection === "rock"){
//             console.log(`You choose ${humanSelection} and your opponent choose ${computerSelection}`)
//             console.log("You win")
//             humanScore ++
//         }
//         else if(humanSelection === "rock" && computerSelection === "scissor"){
//             console.log(`You choose ${humanSelection} and your opponent choose ${computerSelection}`)
//             console.log("You win")
//             humanScore ++
//         }
//         else{
//             console.log(`You choose ${humanSelection} and your opponent choose ${computerSelection}`)
//             console.log("Computer Wins")
//             computerScore++
//         }
        
//     }
//         console.log("Your total score is " + humanScore)
//         console.log("Your opponents score is " + computerScore)
//         console.log("total draw is " + draw)
    

// }

// function getComputerChoice(){
//     const computerChoice = Math.floor(Math.random() * 3)
//     if(computerChoice === 0){
//         return "rock"
//     }
//     else if(computerChoice === 1){
//         return "paper"
//     }
//     else if(computerChoice === 2){
//         return "scissor"
//     }
// }
// function getHumanChoice(){
//     const humanChoice = prompt("Enter your Choice")
//     return humanChoice

// }
let yourScore = document.getElementById("yourScoreValue")
let opponentScore = document.getElementById("opponentScoreValue")
const yourPickImg = document.getElementById("playerPick")
const opponentPickImg = document.getElementById("opponentsPickPick")
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorBtn")
const rockImg = "assets/pngaaa.com-3313783.png"
const paperImg = "assets/pngaaa.com-3313779.png"
const scissorImg = "assets/clipart4288836.png"


let yourScoreCount = 0
let opponentScoreCount = 0
let yourPick = 0
let opponentPick = 0
const opponents = getOpponentChoice()

function playRound(){
    if(yourScoreCount === 5 && opponentScoreCount !==5 || yourScoreCount !==5 && opponentScoreCount === 5){
        playRound()
        yourScore.textContent = 0
        opponentScore.textContent = 0
        yourScoreCount = 0
        opponentScoreCount = 0
    }
    rockBtn.addEventListener('click', function(){
        yourPickImg.src = rockImg
            yourPick = "rock"
            const opponents = getOpponentChoice()
            gameLogic(yourPick,opponentPick)
            
            
        
    })
    paperBtn.addEventListener('click', function(){
        yourPickImg.src = paperImg
        yourPick = "paper"
        const opponents = getOpponentChoice()
        gameLogic(yourPick,opponentPick)
        
        
    })
    scissorBtn.addEventListener('click', function(){
        yourPickImg.src = scissorImg
        yourPick =  "scissor"
        const opponents = getOpponentChoice()
        gameLogic(yourPick,opponentPick)
        
    })
    
}
function getOpponentChoice(){
    const random = Math.floor(Math.random() *3)
    if(random === 0){
        opponentPickImg.src = rockImg
        opponentPick =  "rock"
    }
    else if(random ===  1){
        opponentPickImg.src = paperImg
        opponentPick =  "paper"
    }
    else if(random ===2){
        opponentPickImg.src = scissorImg
        opponentPick =  "scissor"
    }
}
function gameLogic(yourPick,opponentPick){
    if(yourPick ===  opponentPick){
        console.log("Draw")
    }
    else if(yourPick === "rock" && opponentPick === "scissor"){
        yourScoreCount++
        yourScore.textContent = yourScoreCount
    }
    else if(yourPick === "paper" && opponentPick === "rock"){
        yourScoreCount++
        yourScore.textContent = yourScoreCount
    }
    else if(yourPick === "scissor" && opponentPick === "paper"){
        yourScoreCount++
        yourScore.textContent = yourScoreCount
    }
    else{
        opponentScoreCount++
        opponentScore.textContent = opponentScoreCount
    }

    if(yourScoreCount === 5 && opponentScoreCount < 5){
        console.log("You are the winner")
        
        
    }
    else if(opponentScoreCount === 5 && yourScoreCount < 5){
        console.log("Computer Wins")
        
        
    }
}
playRound()