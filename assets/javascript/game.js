var targetScore = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

var kirby1Value;
var kirby2Value;
var kirby3Value;
var kirby4Value;

function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min)+min)
};

function startGame(){
    currentScore=0    
    targetScore = randomNumber(19, 120)
    kirby1Value = randomNumber(1, 12)
    kirby2Value = randomNumber(1, 12)
    kirby3Value = randomNumber(1, 12)
    kirby4Value = randomNumber(1, 12)
    console.log(kirby1Value, kirby2Value, kirby3Value, kirby4Value)
    $("#current-score").html(currentScore)
    $("#target-score").html(targetScore)
};

startGame();

function checkWin(){
    if(currentScore>targetScore){
        alert("Bummer! You Lost!")
        losses++
        $("#losses").html(losses)
        startGame()
    } else if(currentScore===targetScore){
        alert("Congrats! You Got it!")
        wins++
        $("#wins").html(wins)
        startGame()
    }
}
$("#kirby1").on("click", function(){
    currentScore+=kirby1Value
    $("#current-score").html(currentScore)
    checkWin()
})

$("#kirby2").on("click", function(){
    currentScore+=kirby2Value
    $("#current-score").html(currentScore)
    checkWin()
})

$("#kirby3").on("click", function(){
    currentScore+=kirby3Value
    $("#current-score").html(currentScore)
    checkWin()
})
$("#kirby4").on("click", function(){
    currentScore+=kirby4Value
    $("#current-score").html(currentScore)
    checkWin()
})