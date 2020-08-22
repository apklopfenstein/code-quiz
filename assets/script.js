var startBtn = document.getElementById("start-btn");
var startPageEl = document.getElementById("start-page");
var gameScreenEl = document.getElementById("game-screen");

var hideStart = function() {
    startPageEl.style.display = "none";
};

var showStart = function() {
    startPageEl.style.display = "block";
};

var hideGame = function() {
    gameScreenEl.style.display = "none";
};

var showGame = function() {
    gameScreenEl.style.display = "block";
};

var startQuiz = function() {
    hideStart();
    showGame();
};

startBtn.addEventListener("click", startQuiz);