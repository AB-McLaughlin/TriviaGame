//Set variables

//timer count: 6 seconds per question
var count=6;

//set variable for setInterval method to stop at 0
var timer;

//current question
var currentQuestion = 0;

//question list
var triviaList = [
    {question: "What type of animal is a seahorse?",
     choice: ["crustacean", "arachnid", "fish", "shell"],
     correct: 2,
     correctChoice: "fish"
    },
    {question: "Which of the following dogs is the smallest?",
     choice: ["daschund", "poodle", "pomeranian", "chiuahua"],
     correct: 3,
     correctChoice: "chiuahua"
    },
    {question: "What color are zebras?",
     choice: ["white with black stripes", "black with white stripes", "both of the above", "none of the above"],
     correct: 1,
     correctChoice: "black with white stripes"
    },
    {question: "What existing bird has the largest wingspan?",
     choice: ["stork", "swan", "condor", "albatross"],
     correct: 3,
     correctChoice: "albatross"
    },
    {question: "What is the biggest animal that has ever lived?",
     choice: ["blue whale", "African elephant", "brontosaurus", "spinosaurus"],
     correct: 0,
     correctChoice: "blue whale"
    },
    {question: "What pets do more families own?",
     choice: ["birds", "cats", "dogs", "horses"],
     correct: 2,
     correctChoice: "dogs"
    },
    {question: "What animal lives the longest?",
     choice: ["clam", "red sea urchin", "Galapagos tortoise", "rougheye rockfish"],
     correct: 0,
     correctChoice: "clam"
    },
    {question: "What are female elephants called?",
     choice: ["mares", "sows", "cows", "dams"],
     correct: 2,
     correctChoice: "cows"
    },
    {question: "Which of the following animals sleep standing up?",
     choice: ["gorillas", "flamingos", "camels", "ravens"],
     correct: 1,
     correctChoice: "flamingos"
    },
    {question: "What is the fastest water animal?",
     choice: ["porpoise", "sailfish", "flying fish", "tuna"],
     correct: 1,
     correctChoice: "sailfish"
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

//correct answer message
//var correctMessage = "The correct answer was " +  (triviaList[currentQuestion].correct) + ".";


//Set functions

$(document).ready(function(){
    $("#questionScreen").hide(); 
    $("#tally").hide(); 

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
        alert("The correct answer was " +  (triviaList[currentQuestion].correctChoice) + ".");
        currentQuestion++;
        count = 5;
        start();
                           
    }else if(userChoice == triviaList[currentQuestion].correct){
        correctAnswer++;
        alert(winMessage);
        currentQuestion++;
        count = 5;
        start();  

    }})

//populating html with the text of the triviaList array, get 1st object & the key: question   
function start(){
 
    $("#question").text(triviaList[currentQuestion].question); 


//loop through question list
    for (var i = 0; i <= triviaList[currentQuestion].choice.length; i++){
       var temp = "#button" + i;
       $(temp).text(triviaList[currentQuestion].choice[i]);
      
      }

//set timer to countdown in 1 second intervals    
    timer = setInterval(countdown, 1000);
}

//start timer 
function countdown(){
    count--;

// displays timer    
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
        alert("The correct answer was " +  (triviaList[currentQuestion].correctChoice) + ".");
        currentQuestion ++;
        count = 6;
        setTimeout(start,(2000));
        
}

//end game, switch to tally screen
function endGame(){
        alert("Game Over!  Show results");
        $("#questionScreen").hide(); 
        $("#tally").show(); 
     
}

//reset game
function reset(){
    correctAnswer = 0;
    incorrectAnswer = 0;
    noAnswer = 0;
    currentQuestion = 0;
    $("#tally").hide();
    $("#questionScreen").show();
}

// update correct answers, incorrect, no answers
        $("#correct").html("Correct answers: " + correctAnswer);
        $("#incorrect").html("Incorrect answers: " + incorrectAnswer);
        $("#noAnswer").html("No response: " + noAnswer);

// option to restart w/o reloading page(reset the game) 
        $("#reload").click;
         reset(); 

})