var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern= [];
var userClickedPattern = [];
var gAudio = new Audio("./sounds/green.mp3");
var rAudio = new Audio("./sounds/red.mp3");
var bAudio = new Audio("./sounds/blue.mp3");
var yAudio = new Audio("./sounds/yellow.mp3");
var wAudio = new Audio("./sounds/wrong.mp3");
var level = 0;

function nextSequence(){
    level++;
    var randNum = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randNum];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    updateTitle();
}

$(".btn").on("click", function (event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

});

function playSound(btnColor){
    switch(btnColor){
        case "blue":
            bAudio.play();
            break;
        case "red":
            rAudio.play();
            break;
        case "yellow":
            yAudio.play();
            break;
        case "green":
            gAudio.play();
            break;
    }
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed").delay(1000);
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    }, 200);

}

$(document).on("keydown", function(){
    if (level == 0){
        $("body").removeClass("game-over");
        setTimeout(function (){
            nextSequence();
        }, 500);
        
    }
})

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Well Done");
        if(gamePattern.length ==userClickedPattern.length){
            userClickedPattern = [];
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        gameOver();
    }
}
function updateTitle(){
    $("h1").text("Level "+ level);
}

function gameOver(){
    console.log("Wrong!");
    wAudio.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    userClickedPattern = [];
    gamePattern = [];
    level = 0;

}