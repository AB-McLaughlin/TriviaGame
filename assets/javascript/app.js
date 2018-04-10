//Set variables

//correct answer counter
var correctAnswer = 0;
//incorrect answer counter
var incorrectAnswer = 0;
//current question
var currentQuestion = 0;
//timer count: 30 seconds per question
var count=30;
//question list
var triviaList = [
    {question: "What type of animal is a seahorse?",
     choice: ["crustacean", "arachnid", "fish", "shell"],
     image: "seahorse.jpg",
     correct: [0]
    },
    {question: "Which of the following dogs is the smallest?",
     choice: ["daschund", "poodle", "pomeranian", "chiuahua"],
     image:"chiuahua",
     correct: [3]
    },
    {question: "What color are zebras?",
     choice: ["white with black stripes", "black with white stripes", "both of the above", "none of the above"],
     image: "zebra.jpg",
     correct: [1]
    },
    {question: "What existing bird has the largest wingspan",
     choice: ["stork", "swan", "condor", "albatross"],
     image: "albatross.jpg",
     correct:[3]
    },
    {question: "What is the biggest animal that has ever lived",
     choice: ["blue whale", "African elephant", "Brontosaurus", "Spinosaurus"],
     image: "blue whale.jpg",
     correct: [0]
    },
    {question: "What pets do more families own?",
     choice: ["birds", "cats", "dogs", "horses"],
     image: "dogs.jpg",
     correct: [2]
    },
    {question: "What animal lives the longest?",
     choice: ["clam", "red sea urchin", "Galapagos tortoise", "rougheye rockfish"],
     image: "clam.jpg",
     correct: [0],
    },
    {question: "What are female elephants called?",
     choice: ["mares", "sows", "cows", "dams"],
     image: "elephant.jpg",
     correct: [2]
    },
    {question: "Which of the following animals sleep standing up?",
     choice: ["gorillas", "flamingos", "camels", "ravens"],
     image: "flamingo.jpg",
     correct: [1]
    },
    {question: "What is the fastest water animal?",
     choice: ["porpoise", "sailfish", "flying fish", "tuna"],
     image: "sailfish",
     correct: [1]
    }]

//win messages
var winMessage = ["You got it!", "You're herding up the wins!", "Congratulations!", "Run with it!", "Wow! You're an animal!"]

//loss message
var lossMessage = ["Keep trying", "Hang in there", "You'll get it next time"]

//functions
$document.ready(function(){
//Hide start button, start timer, display question
$("#start_button").click(function(){
    $(this).hide();

//Show first question screen, start timer
$("#questionScreen").click(function(){
   $(this).show();
    });
    count = setInterval(timer, 1000); 

   displayTrivia();
    }); 
 
    
//timer counts from 30 down to 0 and stops   
   function timer(){
    count--;
    if (count <= 0) {
    clearInterval(count);
    return;
   }
// displays timer at "00:00" when time runs out
     $("#timer").html("Time remaining: " + "00:" + count + " secs");
    }})


// correct counter
// show congrats screen for correct/display 3-5 seconds
// incorrect counter
// you are wrong screen for incorrect/display 3-5 seconds
//     display correct answer
// new screen for each question
// tally correct answers, incorrect, option to restart w/o reloading page(reset the game)
// })})