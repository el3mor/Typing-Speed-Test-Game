let nameGame = "Typing Speed Test Game";
document.title = nameGame;
document.querySelector(".name").innerText = nameGame;

const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Playing",
];

let lvls = {
  "easy": 5,
  "normal": 3,
  "hard": 2,
};
let defaultLvl = "Normal";
let defaultSeconds = lvls[defaultLvl];

let currantLvl = document.querySelector(".lvl");
let currantSeconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".start");
let word = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWord = document.querySelector(".upcoming-words");
let timeLeft = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMassage = document.querySelector(".finish");
let start;

currantLvl.innerText = defaultLvl;
currantSeconds.innerText = defaultSeconds;
timeLeft.innerHTML = defaultSeconds;
scoreTotal.innerText = words.length;

window.onload = function () {
  let lvl = prompt("Enter the level you want to play on: Easy, Normal, Hard");
  if (lvls[lvl.toLowerCase()] !== undefined && lvl !== null && lvl !== "" && lvl !== " ") {
    currantLvl.innerText = lvl.toUpperCase();
    currantSeconds.innerText = lvls[lvl.toLowerCase()];
    timeLeft.innerText = lvls[lvl.toLowerCase()];
    defaultSeconds = lvls[lvl.toLowerCase()];
  } else {
    alert("Wrong level, please try again");
    window.location.reload();
  }
}

currantLvl.onclick = function () {
  let lvl = prompt("Enter the level you want to play on: Easy, Normal, Hard");
  if (lvls[lvl.toLowerCase()]) {
    currantLvl.innerText = lvl.toUpperCase();
    currantSeconds.innerText = lvls[lvl.toLowerCase()];
    timeLeft.innerText = lvls[lvl.toLowerCase()];
    defaultSeconds = lvls[lvl.toLowerCase()];
  } else {
    alert("Wrong level, please try again");

  }}

startBtn.onclick = function  ()  {
  this.remove()

  input.focus();
  genWord() 
  start = setInterval(() => {
    if (timeLeft.innerText > 0) {
      timeLeft.innerText--;
    } else {
      finishMassage.innerText = "Time's up!";
      finishMassage.classList.add("bad")
      input.disabled = true;
    }
  }, 1000); 
};

input.onpaste = function () {
  return false;
}

function genWord() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  upcomingWord.innerHTML = "";
  for(let i = 0; i < words.length; i++) {
    upcomingWord.innerHTML += `<div>${words[i]}</div>`;
  }
  word.innerText = randomWord;
}

function checkWord(value) {
  if (value === word.innerText.toLowerCase()) {
    input.value = "";
    genWord();
    scoreGot.innerText++;
    timeLeft.innerText = defaultSeconds;
  }
  WinGame()
}

function WinGame() {
  if (scoreGot.innerText === scoreTotal.innerText) {
    finishMassage.innerText = "You Won!";
    finishMassage.classList.add("good");
    input.disabled = true;
    word.remove()
    clearInterval(start);
  }
}