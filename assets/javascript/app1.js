$(document).ready(function(){
        
    //Hide start screen
    $("#start").click(function(){
        $("#topScreen").hide();

    //Show game screen, start timer
        $("#questionScreen").show();
        setTimeout(start, 1000);
    });


    //attach answers to buttons; identify which button holds the correct answer; start messages; assign correct answer in value attribute in each button, grab value add 1 to wins
    //.attr(attribute name) to set value, attributename, value) 

    // class="button"
    // #### added some stuff here!
    $(".btn").click(function(){
        var selectedAnswerIndex = $(this).attr(triviaList.correct);
        if (selectedAnswerIndex == triviaList.correct){
            correctAnswer++;
            clearInterval(timer);
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
        // #### this is fake code and might not work!
        $(".button").each(function(btn) {
            $(btn).attr("answerIndex", 5);
        });
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
            alert("Correct answer is" + (triviaList.correct));
            $("#imageholder").html("<img src = "+ images[count] + "width='400px'>");
            currentQuestion++;
    }
});

// tally correct answers, incorrect, option to restart w/o reloading page(reset the game)
$("#correct").html("Correct answers: " + correctAnswer);
$("#incorrect").html("Incorrect answers: " + incorrectAnswer);
$("#noAnswer").html("No response: " + noAnswer);
$("#again").html("Do you want to play again?");
$("#reload").click(function(){
    "#questionScreen".show();
});
window.onload = function() {
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };