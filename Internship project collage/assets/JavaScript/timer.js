let timer = document.getElementById("timer");
let startTimer = document.getElementById("startbtn");
let finishBtn = document.getElementById("finishBtn");
let questionArea = document.getElementsByClassName("container-quiz");
let count = 600;
let clock = null;
let noTime = false;

function time() {
  clock = setInterval(() => {
    if (count >= 0) {
      timer.innerText = count; 
      count--;
      console.log();
    } else {
      clearInterval(clock);
      alert("times up");
      noTime = true;
      if(noTime==true){
        questionArea.style.display = "none";
      }
    }
  }, 1000);
}

startTimer.addEventListener("click", () => {
  time();
});