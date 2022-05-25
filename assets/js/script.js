// Timer
var timerEl = document.querySelector(".timer-count");
var timer;
var timerCount;
var timerInterval;

// start button
var start= document.querySelector(".start-button");

// Starter Instructions
var starterIns= document.querySelector("#starter-box");

// Questions
var questionsEl= document.querySelector("#questions-container");
var question= document.querySelector("#question");
var questionCount = 0;

// Answers
var answerButton = document.querySelectorAll("button.answer-button");
var answer1btn = document.querySelector("#answer-1");
var answer2btn = document.querySelector("#answer-2");
var answer3btn = document.querySelector("#answer-3");
var answer4btn = document.querySelector("#answer-4");

// Final Score Screen + Submitting Score
var finalscore = document.querySelector("#final-score");
var initialsinput = document.querySelector(".initials-text");
var submitScoreButton = document.querySelector("#submit-score");


// High Scores
var highScoresEl = document.querySelector("#high-scores-container");
var scoreListEl = document.querySelector("#high-score-list");
var scoreList = [];
var clearScoreButton = document.querySelector("#clear-scores");
var goBackButton = document.querySelector("#back-to-game");

// Questions + Answers List

var questions = [
    {question: "What keyword is used to define a variable?",
    answers: ["A) var", "B) whoKnows", "C) call ", "D) All of the Above"],
    correct: 1 
    },
    {question: "Javascript is a(n) ______ language?",
    answers: ["A) Object-Oriented", "B) Foreign", "C) Procedural", "D) All of the Above"],
    correct: 1
    },
    {question: "What tag is used to write the Javascript code?",
    answers: ["A) <javascript>", "B) <script>", "C) <java>", "D) <action>"],
    correct: 2
    },
    {question: "____ is used to write on a browser's console?",
    answers: ["A) console.record()", "B) console.write()", "C) console.log()", "D) console.output()"],
    correct: 3
    }

]

// Begin quiz 
function startQuiz(){
timerCount = 45;
starterIns.style.display = "none";
questionsEl.style.display = "block";
questionCount = 0;

startTimer();
setQuestion(questionCount);
}

// Timer Function
function startTimer(){
    timerInterval = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount + "s remaining";
        if (timerCount === 0){
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalscore.style.display = "block";
            score.textContent = timerCount;
        }

    }, 1000);
}

// Keeptrack of questions length and count
function setQuestion(id) {
    if (id < questions.length){
        questionsEl.textContent = questions[id].question;
        answer1btn.textContent = questions[id].answers[0];
        answer2btn.textContent = questions[id].answers[1];
        answer3btn.textContent = questions[id].answers[2];
        answer4btn.textContent = questions[id].answers[3];
    }
}



// Event listeners

start.addEventListener("click", startQuiz);

answerButton.forEach(item => {})
