var timer = 60;
var hitRN = 0;
var score = 0;
var gameStarted = false;
var interval;

function makeBubble() {
    var clutter = "";

    for (let i = 0; i < 162; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#bottom").innerHTML = clutter;
}

function runTimer() {
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').innerHTML = timer;
        } else {
            clearInterval(interval);
            document.querySelector('#bottom').innerHTML = `<h1>GAME OVER</h1>`;
            gameStarted = false;
            document.querySelector('#start').disabled = false;
        }
    }, 1000);
}

function newHit() {
    hitRN = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerHTML = hitRN;
}

function incScore() {
    score += 10;
    document.querySelector('#score').innerHTML = score;
}

document.querySelector("#bottom").addEventListener("click", function (e) {
    var clickedNum = Number(e.target.textContent);
    if (clickedNum === hitRN) {
        incScore();
        makeBubble();
        newHit();
    }
});

function resetGame() {
    clearInterval(interval);
    timer = 60;
    score = 0;
    hitRN = Math.floor(Math.random() * 10);
    document.querySelector('#timer').innerHTML = timer;
    document.querySelector('#score').innerHTML = score;
    document.querySelector('#hit').innerHTML = hitRN;
    document.querySelector("#bottom").innerHTML = "";
}

document.querySelector('#start').addEventListener('click', function () {
    if (!gameStarted) {
        gameStarted = true;
        document.querySelector('#start').disabled = true;
        resetGame();
        makeBubble();
        runTimer();
        newHit();
    }
});