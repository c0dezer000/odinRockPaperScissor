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
const divButtons = document.getElementById("buttons")
const divRestart = document.getElementById("restart")
const yesBtn = document.getElementById("yesResetBtn")
const noBtn = document.getElementById("noResetBtn")


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
    if(isgameOver()){
       retry()
    }
}
function isgameOver(){
    return yourScoreCount === 5 || opponentScoreCount === 5
}
function reset(){
    yourScoreCount = 0
    opponentScoreCount = 0
    yourScore.textContent = yourScoreCount
    opponentScore.textContent = opponentScoreCount
}
function retry(){
    divButtons.classList.add("hide")
    divRestart.classList.remove("hide")

    yesBtn.addEventListener('click', ()=>{
        divButtons.classList.remove("hide")
        divRestart.classList.add("hide")
        reset()
    })
    noBtn.addEventListener('click', ()=>{
        document.body.classList.add("hide")
    })

}
playRound()