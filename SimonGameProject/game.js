// console.log($("h1"));
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
   

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();


    var userChosenColour = $(".btn").on("click", function (e){
        alert("Handler for 'click'" + e);
        console.log(e.classList(randomChosenColour));
    })

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
}

$(document).keypress(nextSequence);
