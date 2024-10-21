let CreateQuiz = document.getElementById("create-btn");
let cellCreate = document.getElementById("available-quiz-data");
let createTemplate = document.getElementById("create-template");
let CreateQuizBtn = document.getElementById("create-quizbtn");
let backBtn = document.getElementById("backbtn");
let startQuizBtn = document.getElementById("start-quiz-btn");
let themechange = document.getElementById("theme");
let color = 0;


themechange.addEventListener("click",()=>{
    if(color==0){
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        themechange.innerHTML="&#127769; Dark";
        color=1;
    }else{
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
        themechange.innerHTML="&#127774; Light";
        color=0;
    }
});

function createquizCell(){
    const cellblock = document.createElement("div");
    cellblock.classList.add("quiz-cell");
    cellblock.innerHTML = `
    <img src="assets/images/quiz image 2.jpg" alt="img">
    <p><span>Maths Quiz</span></p>
    <a href="start-quiz.html" id="start-quiz-btn"><button>Start Quiz</button></a>
    `;
    return cellblock;
};

CreateQuiz.addEventListener("click",()=>{
    createTemplate.style = "display:flex;"
    document.querySelector("main").style = "display:none;"
});

backBtn.addEventListener("click",()=>{
    createTemplate.style = "display:none;"
    // document/..querySelector("main").style = "display:block;"
});

CreateQuizBtn.addEventListener("click",()=>{
    const quizCell = createquizCell();
    cellCreate.appendChild(quizCell);
    createTemplate.style = "display:none;"
    document.querySelector("main").style = "display:block;"
}); 