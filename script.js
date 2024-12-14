let x = Math.floor(Math.random() * 10) + 1;
let y = Math.floor(Math.random() * 10) + 1;

let result = x * y;

let correctCount = 0;
let incorrectCount = 0;
let streakCount = 0;

document.getElementById("task").textContent = x + " * " + y + " = ?";

function checkResult() {
    let userInput = document.getElementById("userInput").value;
    if (userInput == result) {
        correctCount++;
        streakCount++;
        newTask();
        document.getElementById("correctCount").textContent = "Correct: " + correctCount;
        document.getElementById("streakCount").textContent = "Streak: " + streakCount;
    } else {
        incorrectCount++;
        streakCount = 0;
        document.getElementById("wrongCount").textContent = "Incorrect: " + incorrectCount;
        document.getElementById("streakCount").textContent = "Streak: " + streakCount;
    }
}

function newTask() {
    x = Math.floor(Math.random() * 10) + 1;
    y = Math.floor(Math.random() * 10) + 1; 
    result = x * y;

    document.getElementById("task").textContent = x + " * " + y + " = ?";
}
