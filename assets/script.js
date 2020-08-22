var startBtn = document.getElementById("start-btn");
var startPageEl = document.getElementById("start-page");
var gameScreenEl = document.getElementById("game-screen");
var currentQuestion;
var allDoneEl = document.getElementById("all-done");
var highScorePage = document.getElementById("high-score-page");
var initalsForm = document.getElementById("initals-form");
var goBackBtn = document.getElementById("go-back-btn");
var highScoreLink = document.getElementById("high-score");

var hideStart = function () {

    startPageEl.style.display = "none";
};

var showStart = function () {
    highScoreLink.style.display = "block";
    startPageEl.style.display = "block";
    hideGame();
    hideGameOver();
    hideHighScore();
};

var hideGame = function () {

    gameScreenEl.style.display = "none";
};

var showGame = function () {
    highScoreLink.style.display = "none";

    gameScreenEl.style.display = "block";
};

var startQuiz = function () {

    hideStart();
    showGame();

    currentQuestion = 0;

    showQuestion();
};

var showQuestion = function () {
    var question = questions[currentQuestion];
    var questionText = question.questionText;
    var answers = question.answers;
    var correctAnswer = question.correctAnswerIndex;

    var questionTextEl = document.createElement("h1");
    questionTextEl.className = "question";
    questionTextEl.textContent = questionText;

    var answersEl = document.createElement("ul");
    answersEl.className = "answers";

    for (var i = 0; i < answers.length; i++) {
        var answerEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn";
        buttonEl.setAttribute("data-answer-index", i);
        buttonEl.textContent = answers[i];
        
        buttonEl.addEventListener("click", function(event) {
            var answerIndex = event.target.getAttribute("data-answer-index");
            answerIndex = parseInt(answerIndex);
            var answerIsCorrect = correctAnswer === answerIndex;
            answerQuestion(answerIsCorrect);
        })

        answerEl.appendChild(buttonEl);
        answersEl.appendChild(answerEl);
    }

    gameScreenEl.innerHTML = "";
    gameScreenEl.appendChild(questionTextEl);
    gameScreenEl.appendChild(answersEl);
};

var answerQuestion = function (isCorrect) {
// TODO show correct or incorrect after answer
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        //TODO show All Done screen
        showGameOver();
    }

    var correctOrWrong = document.createElement("div");
    correctOrWrong.className = "correct-wrong";
    if (isCorrect) {
        correctOrWrong.textContent = "Correct!";
    } else {
        correctOrWrong.textContent = "Wrong!";
    }
    gameScreenEl.appendChild(correctOrWrong);
    
};

var showGameOver = function () {
    highScoreLink.style.display = "none";
    allDoneEl.style.display = "block";

    gameScreenEl.innerHTML = "";
    
};

var hideGameOver = function () {
    allDoneEl.style.display = "none";
};

var showHighScore = function () {
    highScoreLink.style.display = "none";
    highScorePage.style.display = "block";
    hideStart();
    hideGame();
    hideGameOver();
};

var hideHighScore = function () {
    highScorePage.style.display = "none";
};

var saveHighScore = function (event) {
    event.preventDefault();
    hideGame();
    hideGameOver();
    showHighScore();

};

var goBack = function (event) {
    event.preventDefault();
    showStart();
};

questions = [{
        questionText: "Commonly used data types DO NOT include:",
        correctAnswerIndex: 2,
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ]
    },
    {
        questionText: "The condiditon in an if/else statement is enclosed with _________.",
        correctAnswerIndex: 2,
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ]
    },
    {
        questionText: "Arrays in JavaScript can be used to store ________.",
        correctAnswerIndex: 3,
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ]
    },
    {
        questionText: "String values must be enclosed within _______ when being assigned to variables.",
        correctAnswerIndex: 2,
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ]
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correctAnswerIndex: 3,
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ]
    }
]

startBtn.addEventListener("click", startQuiz);

initalsForm.addEventListener("submit", saveHighScore);

goBackBtn.addEventListener("click", goBack);

highScoreLink.addEventListener("click", showHighScore);