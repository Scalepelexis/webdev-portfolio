var crash = new Audio("sounds/crash.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

var allButtons = document.querySelectorAll(".drum");
for(var i=0; i<allButtons.length; i++)
    {
        allButtons[i].addEventListener("click", function (){
            var button = this.innerHTML;
            makeSound(button);
            buttonAnimation(button);
            }
        );
    }

addEventListener("keydown", function (event){
        makeSound(event.key);
        buttonAnimation(event.key);
    }
)

function makeSound(key){
    switch(key){
        case "w":
            crash.play();
            break;
        case "a":                    
            tom1.play();
            break;
        case "s": 
            tom2.play();
            break;
        case "d":                    
            snare.play();
            break;
        case "j":                    
            tom3.play();
            break;
        case "k":                    
            tom4.play();
            break;
        case "l":                    
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 500);
}