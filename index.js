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

// field for reset button
const divButtons = document.getElementById("buttons")
const divRestart = document.getElementById("restart")
const yesBtn = document.getElementById("yesResetBtn")
const noBtn = document.getElementById("noResetBtn")
// field for result display
const resultTextWinner = document.getElementById("resultText")
const totalRounds = document.getElementById("totalRounds")
const yourStats = document.getElementById("yourStats")
const opponentStats = document.getElementById("opponentsStats")
const drawStats = document.getElementById("drawStats")
const resultsDisplay = document.getElementById("resultsDisplay")
const display = document.getElementById("display")

let yourScoreCount = 0
let opponentScoreCount = 0
let yourPick = 0
let opponentPick = 0
let totalRoundsCount = 0
let drawCount = 0
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
        drawCount++
        drawStats.textContent = drawCount
        totalRoundsCount++
        totalRounds.textContent = totalRoundsCount
    }
    else if(yourPick === "rock" && opponentPick === "scissor"){
        yourScoreCount++
        yourScore.textContent = yourScoreCount
        yourStats.textContent = yourScoreCount
        totalRoundsCount++
        totalRounds.textContent = totalRoundsCount
    }
    else if(yourPick === "paper" && opponentPick === "rock"){
        yourScoreCount++
        yourScore.textContent = yourScoreCount
        yourStats.textContent = yourScoreCount
        totalRoundsCount++
        totalRounds.textContent = totalRoundsCount

    }
    else if(yourPick === "scissor" && opponentPick === "paper"){
        yourScoreCount++
        yourScore.textContent = yourScoreCount
        yourStats.textContent = yourScoreCount
        totalRoundsCount++
        totalRounds.textContent = totalRoundsCount

    }
    else{
        opponentScoreCount++
        opponentScore.textContent = opponentScoreCount
        opponentStats.textContent = opponentScoreCount
        totalRoundsCount++
        totalRounds.textContent = totalRoundsCount
    }

    if(yourScoreCount === 5 && opponentScoreCount < 5){
        resultTextWinner.textContent = "You Win"
        totalRounds.textContent = totalRoundsCount
        
        
    }
    else if(opponentScoreCount === 5 && yourScoreCount < 5){
        resultTextWinner.textContent = "Computer Wins"
        totalRounds.textContent = totalRoundsCount
        
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
    totalRoundsCount = 0
    drawCount = 0
    yourScore.textContent = yourScoreCount
    yourStats.textContent = yourScoreCount
    opponentStats.textContent = opponentScoreCount
    opponentScore.textContent = opponentScoreCount
    totalRounds.textContent = totalRoundsCount
    drawStats.textContent = drawCount
}
function retry(){
    divButtons.classList.add("hide")
    divRestart.classList.remove("hide")
    resultsDisplay.classList.remove("hide")
    display.classList.add("hide")

    yesBtn.addEventListener('click', ()=>{
        divButtons.classList.remove("hide")
        divRestart.classList.add("hide")
        resultsDisplay.classList.add("hide")
        display.classList.remove("hide")
        reset()
    })
    noBtn.addEventListener('click', ()=>{
        document.body.classList.add("hide")
    })

}
playRound()