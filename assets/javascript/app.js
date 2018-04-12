//Set variables

//correct answer counter
var correctAnswer = 0;

//incorrect answer counter
var incorrectAnswer = 0;

//no answer counter
var noAnswer = 0;

//current question
var currentQuestion = 0;

//timer count: 30 seconds per question
var count=5;

//question list
var triviaList = [
    {question: "What type of animal is a seahorse?",
     choice: ["crustacean", "arachnid", "fish", "shell"],
     image: "seahorse.jpg",
     correct: 0
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

//win message
var winMessage = "Yes! Good job!"

//loss message
var lossMessage = "No, that's not correct"

//set variable for setInterval method to stop at 0
var timer;

//Set functions

$(document).ready(function(){
    
//Hide start screen
$("#start").click(function(){
    $("#topScreen").hide();

//Show game screen, start timer
    $("#questionScreen").show();
    start();
});
 
function start(){
 //populating html with the text of the triviaList array, grabbing the first object and the key question   
    $("#question").text(triviaList[currentQuestion].question)
//loop through question list
    for (var i = 0; i <= triviaList[currentQuestion].choice.length; i++){
       var temp = "#button" + i;
       $(temp).text(triviaList[currentQuestion].choice[i]); 
    }
   timer = setInterval(countdown, 1000);
}
//timer 
function countdown (){
    count--;
// displays timer at "00:00" when time runs out    
    $("#timer").html("Time remaining: " + "00:" + count     + " secs");
    if (count <= 0) {
        clearInterval(timer);
    }
}

//stop slideshow
function stop(){
    if (correctAnswer++){
        clearInterval(triviaList);
        congrats();
    }
    else (incorrectAnswer++);{
        clearInterval(triviaList);
        loser();
    }
    (noAnswer++);{
        clearInterval(triviaList);
        timesUp();
    }}
   
//timer counts from 30 down to 0 and stops   

///need settimeout on startSlideshow, add one to current question counter to go to next questions button click popultated; assign correct answer in value attribute in each button, grab value add 1 to wins
//.attr(attribute name) to set value, attributename, value)       

    
// update correct counter
// show congrats screen for correct/display 3-5 seconds
 function congrats(){
         alert(winMessage);
         displayImage();
    }

// update incorrect counter
// you are wrong screen for incorrect/display 3-5 seconds
function loser(){
        alert(lossMessage);
        alert("Correct answer is" + (triviaList.correct));
    }

// display correct answer
function displayImage(){
    $("#imageholder").html("<img src = "+ images[count] + "width='400px'>");
}

//time's up 
function timesUp(){
    alert("Oops! Time's up./n Next question coming up")
}
})


// tally correct answers, incorrect, option to restart w/o reloading page(reset the game)
