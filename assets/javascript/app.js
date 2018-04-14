//Set variables

//timer count: 30 seconds per question
var count=6;

//set variable for setInterval method to stop at 0
var timer;

//current question
var currentQuestion = 0;

//question list
var triviaList = [
    {question: "What type of animal is a seahorse?",
     choice: ["crustacean", "arachnid", "fish", "shell"],
     correct: 2
    },
    {question: "Which of the following dogs is the smallest?",
     choice: ["daschund", "poodle", "pomeranian", "chiuahua"],
     correct: 3
    },
    {question: "What color are zebras?",
     choice: ["white with black stripes", "black with white stripes", "both of the above", "none of the above"],
     correct: 1
    },
    {question: "What existing bird has the largest wingspan?",
     choice: ["stork", "swan", "condor", "albatross"],
     correct: 3
    },
    {question: "What is the biggest animal that has ever lived?",
     choice: ["blue whale", "African elephant", "brontosaurus", "spinosaurus"],
     correct: 0
    },
    {question: "What pets do more families own?",
     choice: ["birds", "cats", "dogs", "horses"],
     correct: 2
    },
    {question: "What animal lives the longest?",
     choice: ["clam", "red sea urchin", "Galapagos tortoise", "rougheye rockfish"],
     correct: 0
    },
    {question: "What are female elephants called?",
     choice: ["mares", "sows", "cows", "dams"],
     correct: 2
    },
    {question: "Which of the following animals sleep standing up?",
     choice: ["gorillas", "flamingos", "camels", "ravens"],
     correct: 1
    },
    {question: "What is the fastest water animal?",
     choice: ["porpoise", "sailfish", "flying fish", "tuna"],
     correct: 1
    }]

//answer index
var userChoice;

//win message
var winMessage = "Yes! Good job!"

//correct answer counter
var correctAnswer = 0;

//incorrect answer counter
var incorrectAnswer = 0;

//loss message
var lossMessage = "No, that's not correct."

//no answer counter
var noAnswer = 0;

//no answer message
var noAnswerMessage = "Oops!  Time's up.";


//Set functions

$(document).ready(function(){
    
//Hide start screen
$("#start").click(function(){
    $("#topScreen").hide();

//Show game screen, start timer
    $("#questionScreen").show();
    start();

});


//identify which button holds the correct answer; start messages; assign correct answer
$(".btn button").click(function() {
    userChoice = ($(this).data("choice"));
    clearInterval(timer);
    
                         
    if (userChoice != triviaList[currentQuestion].correct){
        incorrectAnswer++;
        alert(lossMessage);
        currentQuestion++;
        count = 6;
        start();
                   
    } else {
        correctAnswer++;
        alert(winMessage);
        currentQuestion++;
        count = 6;
        start();           
    }
});
//populating html with the text of the triviaList array, get 1st object & the key: question   
function start(){
 
    $("#question").text(triviaList[currentQuestion].question);

//loop through question list
    for (var i = 0; i < triviaList[currentQuestion].choice.length; i++){
       var temp = "#button" + i;
       $(temp).text(triviaList[currentQuestion].choice[i]);
        
}

//set timer to countdown in 1 second intervals    
    timer = setInterval(countdown, 1000);
}

//start timer 
function countdown (){
    count--;

// displays timer at "0" when time runs out    
    $("#timer").html("Time remaining: " + count + " seconds");

//stops timer at 0    
    if (count <= 0) {
        stop();
    }
}

//stop without clicking
function stop(){
        noAnswer++;
        clearInterval(timer);
        alert(noAnswerMessage);
        currentQuestion++;
        count = 6;
        start();
}

// update incorrect counter, alert
function loser(){
        incorrectAnswer++;
        alert(lossMessage);
        displayImage;
        currentQuestion++;
}

//start the game again
function reset(){
    correctAnswer = 0;
    incorrectAnswer = 0;
    noAnswer = 0;
    currentQuestion = 0;

}
})
//not working function to stop game, show tally
function endGame(){
    if(currentQuestion = 10){
        "#tally".show();
    }
}
// tally correct answers, incorrect, option to restart w/o reloading page(reset the game)
$("#correct").html("Correct answers: " + correctAnswer);
$("#incorrect").html("Incorrect answers: " + incorrectAnswer);
$("#noAnswer").html("No response: " + noAnswer);
$("#again").html("Do you want to play again?");
$("#reload").click(function(reset){
    "#questionScreen".show();
})