//Set variables

//timer count: 30 seconds per question
var count=10;

//set variable for setInterval method to stop at 0
var timer;

//current question
var currentQuestion = 0;

//question list
var triviaList = [
    {question: "What type of animal is a seahorse?",
     choice: ["crustacean", "arachnid", "fish", "shell"],
     image: src = "/assets/images/seahorse.jpg",
     correct: 2
    },
    {question: "Which of the following dogs is the smallest?",
     choice: ["daschund", "poodle", "pomeranian", "chiuahua"],
     image:"chiuahua.jpg",
     correct: 3
    },
    {question: "What color are zebras?",
     choice: ["white with black stripes", "black with white stripes", "both of the above", "none of the above"],
     image: "zebra.jpg",
     correct: 1
    },
    {question: "What existing bird has the largest wingspan",
     choice: ["stork", "swan", "condor", "albatross"],
     image: "albatross.jpg",
     correct: 3
    },
    {question: "What is the biggest animal that has ever lived",
     choice: ["blue whale", "African elephant", "Brontosaurus", "Spinosaurus"],
     image: "blue whale.jpg",
     correct: 0
    },
    {question: "What pets do more families own?",
     choice: ["birds", "cats", "dogs", "horses"],
     image: "dogs.jpg",
     correct: 2
    },
    {question: "What animal lives the longest?",
     choice: ["clam", "red sea urchin", "Galapagos tortoise", "rougheye rockfish"],
     image: "clam.jpg",
     correct: 0
    },
    {question: "What are female elephants called?",
     choice: ["mares", "sows", "cows", "dams"],
     image: "elephant.jpg",
     correct: 2
    },
    {question: "Which of the following animals sleep standing up?",
     choice: ["gorillas", "flamingos", "camels", "ravens"],
     image: "flamingo.jpg",
     correct: 1
    },
    {question: "What is the fastest water animal?",
     choice: ["porpoise", "sailfish", "flying fish", "tuna"],
     image: "sailfish.jpg",
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
var lossMessage = "No, that's not correct.  The correct answer is pictured below."

//no answer counter
var noAnswer = 0;


//Set functions

$(document).ready(function(){
    
//Hide start screen
$("#start").click(function(){
    $("#topScreen").hide();

//Show game screen, start timer
    $("#questionScreen").show();
    setTimeout(start, 1000);
    start();

});


//identify which button holds the correct answer; start messages; assign correct answer in value attribute in each button, grab value add 1 to wins
//.attr(attribute name) to set value, attributename, value) 

    $(".btn").click(function(){
        userChoice = $(this).attr("#button");             
        if (userChoice == triviaList.correct){
            clearInterval(timer);
            correctAnswer++;
            congrats();
            
        } else {
            incorrectAnswer++;
            clearInterval(timer);
            loser();
            
        }
    });
 
function start(){
 //populating html with the text of the triviaList array, grabbing the first object and the key question   
    $("#question").text(triviaList[currentQuestion].question)
//loop through question list
    for (var i = 0; i <= triviaList[currentQuestion].choice.length; i++){
       var temp = "#button" + i;
       $(temp).text(triviaList[currentQuestion].choice[i]); 
       
    }
//set timer to countdown in 1 second intervals    
    timer = setInterval(countdown, 1000);
}
//timer 
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
        alert("Oops! Time's up.  Next question coming up");
        currentQuestion++;
}

// update correct counter
// show congrats screen for correct
function congrats(){
        alert(winMessage);
        displayImage();
        currentQuestion++;
}

// update incorrect counter
// you are wrong screen for incorrect
function loser(){
        alert(lossMessage);
        $("#imageholder").html("<img src = " + triviaList.image + "width='400px'>");
        currentQuestion++;
}

function reset(){
    correctAnswer = 0;
    incorrectAnswer = 0;
    noAnswer = 0;
    currentQuestion = 0;

}

})

// tally correct answers, incorrect, option to restart w/o reloading page(reset the game)
$("#correct").html("Correct answers: " + correctAnswer);
$("#incorrect").html("Incorrect answers: " + incorrectAnswer);
$("#noAnswer").html("No response: " + noAnswer);
$("#again").html("Do you want to play again?");
$("#reload").click(function(reset){
    "#questionScreen".show();
})

