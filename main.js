const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const correctAnswer = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

questionEl.innerText = `What is ${num1} x ${num2}?`;

if(!score){
  score=0;
}

 scoreEl.innerText = `Score: ${score}`;


formEl.addEventListener("submit", ()=>{

  const userAns = +inputEl.value;
  if(userAns == correctAnswer){
score++;
updateLocalStorage();
  }else{
    score--;
    updateLocalStorage();
  }

 
  
})

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}

