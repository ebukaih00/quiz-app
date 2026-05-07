let questions = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "What is 10 x 10?",
        answers: ["10", "100", "1000", "10000"],
        correct: "100"
    },
    {
        question: "What language runs in a browser?",
        answers: ["Python", "Java", "JavaScript", "C++"],
        correct: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colourful Style Sheets"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What tag makes a paragraph in HTML?",
        answers: ["<div>", "<span>", "<p>", "<h1>"],
        correct: "<p>"
    }
]

let questionEl = document.getElementById("current-question")
let answersEl = document.getElementById("answers")
let scoreEl = document.getElementById("score") 


let questioncount = 0
let scorecount = 0

function renderQuestion(){
    // show the question
    questionEl.innerText = questions[questioncount].question

        answersEl.innerHTML = ""

    // loop through THIS question's answers
    for(let i = 0; i < questions[questioncount].answers.length; i++){
         answersEl.innerHTML += `
            <div onclick="checkAnswer('${questions[questioncount].answers[i]}')">
                <p class="answer-item">${questions[questioncount].answers[i]}</p>
            </div>`
        // build one answer card per answer
    }
}


function checkAnswer(answer){
    if(answer === questions[questioncount].correct){
        scorecount += 1
        scoreEl.innerText = "Score: " + scorecount
    }
    questioncount += 1
    renderQuestion()
}


renderQuestion()
