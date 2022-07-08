var startscreen = $("#startscrn");
var startbutton = $("#startbtn");
var qblock = $("#questionblock");
var qtext = $("#questiontext");
var q1 = $("#btn1");
var q2 = $("#btn2");
var q3 = $("#btn3");
var q4 = $("#btn4");
var scorescreen = $("#scorescrn")
var scorelist = $("#scoreslist")
var score = 0
var startover = $("#startover")
var scorebutton = $("#hsbtn")
var timertext = $("#timertext")


// timer function
// var timer = function() {
//     var secondsLeft = 60;
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//     //   timertext.text = secondsLeft;
//       $("<p>" + secondsLeft + "</p>").appendTo("#timertext");
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         highscore();
//       }
  
//     }, 1000);
//     console.log("here")
//   }

function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timertext` to show the remaining seconds
        timertext.textContent = timeLeft + " seconds left";
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timertext.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timertext.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
    console.log("here")
  }



var wrong = function() {
    var timeLeft = timeLeft -= 6;
}

scorebutton.on('click', function() {
    startscreen.addClass("invisible");
    qblock.addClass("invisible");
    scorescreen.removeClass("invisible");
})


// start button function
startbutton.on('click', function() {
    startscreen.addClass("invisible");
    qblock.removeClass("invisible");
    question1();
});

// question 1
var question1 = function() {
    countdown();
    qtext.text('this is question 1, the answer is A');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q1.on('click', function() {
        score++;
        console.log(score);
        question2();
    })
    q2.on("click", function() {
        wrong();
    })
    q3.on("click", function() {
        wrong();
    })
    q4.on("click", function() {
        wrong();
    })
}
var question2 = function() {
    qtext.text('this is question 2, the answer is B');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q2.on('click', function() {
        score++;
        console.log(score);
        question3();
    })
}
var question3 = function() {
    qtext.text('this is question 3, the answer is C');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q3.on('click', function() {
        score++;
        console.log(score);
        question4();
    })
}
var question4 = function() {
    qtext.text('this is question 4, the answer is D');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q4.on('click', function() {
        score++;
        console.log(score);
        question5();
    })
}
var question5 = function() {
    qtext.text('this is question 5, the answer is A');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q1.on('click', function() {
        score++;
        console.log(score);
        question6();
    })
}
var question6 = function() {
    qtext.text('this is question 6, the answer is B');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q2.on('click', function() {
        score++;
        console.log(score);
        question7();
    })
}
var question7 = function() {
    qtext.text('this is question 7, the answer is C');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q3.on('click', function() {
        score++;
        console.log(score);
        question8();
    })
}
var question8 = function() {
    qtext.text('this is question 8, the answer is D');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q4.on('click', function() {
        score++;
        console.log(score);
        question9();
    })
}
var question9 = function() {
    qtext.text('this is question 9, the answer is A');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q1.on('click', function() {
        score++;
        console.log(score);
        question10();
    })
}
var question10 = function() {
    qtext.text('this is question 10, the answer is B');
    q1.text('A: answer 1');
    q2.text('B: answer 2');
    q3.text('C: answer 3');
    q4.text('D: answer 4');
    q2.on('click', function() {
        score++;
        console.log(score);
        highscore();
    })
}
var highscore = function() {
    var initials = window.prompt('Your score was ' + score + ". Enter your initials.");
    var scorecard = (initials + " " + score);
    qblock.addClass("invisible");
    scorescreen.removeClass("invisible");
    $("<p>" + scorecard + "</p>").appendTo("#scoreslist");
}
   


startover.on('click', function() {
        scorescreen.addClass("invisible");
        qblock.removeClass("invisible");
        var score = 0;
        console.log(score);
        question1();
    })