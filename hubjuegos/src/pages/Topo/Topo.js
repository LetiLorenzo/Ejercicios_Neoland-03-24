// import "./Topo.css";

// const template =() =>`
// <div id="containerTopo">
//     <div id="status"></div>
//     <div id="game"></div>
// </div>
// `;
// const size = 100;
// const board = document.querySelector("#game");
// const mole = document.createElement("div");
// let hits = 0;
// let strikes = 0;
// let canHit = true;
// let moleTimer;

// mole.classList.add("mole");
// mole.addEventListener("click", hit);
// board.appendChild(mole);

// const getRandomWithLimit = (limit) =>{
//     let random = Math.random();
//     if (limit * random + size > limit) {
//         random = getRandomWithLimit(limit);
//     }
//     return random;
// }

// const actualizaPosition = () => {
//     let randX = getRandomWithLimit(board.clientWidth);
//     let randY = getRandomWithLimit(board.clientHeight);
//     mole.style = "top: " + randY * 100 + "%; left: " + randX * 100 + "%; ";
    

// moleTimer = setTimeout(() => {
//     canHit = false;
//     strikes++;
//     mole.classList.add("desaparecer");

//     setTimeout(() => {
//         mole.classList.remove("desaparecer");
//         actualiza();
//     }, 300);

// }, 1000);
// }

// const hit = () => {
//     mole.addEventListener("click", hit);
//    if (canHit) {
//     canHit = false;
//     hits++;
//     mole.classList.add("hit");
//     clearTimeout(moleTimer);
//     setTimeout(() => {
//         mole.classList.remove("hit");
//         actualiza();
//     }, 400);
//    } 
// }


// const actualiza = () => {
//     canHit = true;
//     actualizaPosition();
//     document.querySelector("#status").innerHTML = "Hits: " + hits + "Strikes: " + strikes;

// }

// actualiza();







// export const PrintTopoPage = () => {
//     document.querySelector("main").innerHTML = template();
//     starGame();
//   };
import "./Topo.css";
const template =() =>`
<h2>Your score:</h2>
  <h2 id="score">0</h2>

  <h2>Time Left:</h2>
  <h2 id="time-left">60</h2>

  <div class="grid">
    <div class="square" id="1"></div>
    <div class="square" id="2"></div>
    <div class="square" id="3"></div>
    <div class="square" id="4"></div>
    <div class="square" id="5"></div>
    <div class="square" id="6"></div>
    <div class="square" id="7"></div>
    <div class="square" id="8"></div>
    <div class="square" id="9"></div>
  </div>
  `;

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
//   randomSquare.classList.add('mole')

//   hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
//  timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

export const PrintTopoPage = () => {
    document.querySelector("main").innerHTML = template();
    starGame();
};