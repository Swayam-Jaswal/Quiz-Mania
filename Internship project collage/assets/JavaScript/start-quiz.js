let quizTemplate = document.getElementById("instruction-template");
let quizContainer = document.getElementById("container");
let startBtn = document.getElementById("startbtn");
let themechange = document.getElementById("theme");
let finishdiv = document.getElementById("finishBtnDiv");
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

startBtn.addEventListener("click",()=>{
    quizTemplate.style = "display:none;"
    quizContainer.style = "display:flex;"
    // finishdiv.style = "display:flex;"
});