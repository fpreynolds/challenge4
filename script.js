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

// timer function
var timer = function() {

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
    // run timer function
    question1();
});

// question 1
var question1 = function() {
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