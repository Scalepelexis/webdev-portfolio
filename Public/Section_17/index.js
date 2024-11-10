function getRand(num){
    return Math.floor(Math.random()*num)+1;
}

var rand1 = getRand(6);
var srcText1 = "./images/dice"+rand1+".png";
document.querySelector(".img1").src= srcText1;

var rand2 = getRand(6);
var srcText2 = "./images/dice"+rand2+".png";
document.querySelector(".img2").src= srcText2;

var title = document.querySelector("h1");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

if(rand1 > rand2){
    title.textContent = "Player 1 Wins!";
    player1.textContent = "🚩Player 1";
}else if(rand2 > rand1){
    title.textContent = "Player 2 Wins!";
    player2.textContent = "Player 2🚩";
}else{
    title.textContent = "Draw!";
    player1.textContent ="Player 1🤜";
    player2.textContent ="🤛Player 2";
}

addEventListener("click", function(){
    this.location.reload();
});