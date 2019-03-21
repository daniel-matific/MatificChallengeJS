import Game from "/src/View/game";
import Model from "/src/Model/model";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const MAX_DROP_INTERVAL = 2.2; // In seconds
const MIN_DROP_INTERVAL = 0.5; // In seconds
const STARTING_SCORE = 0;
const SCORE_INCREASE_AMOUNT = 10;
const STARTING_LIVES = 3;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let model = new Model(STARTING_SCORE, STARTING_LIVES);
let game = new Game(GAME_WIDTH, GAME_HEIGHT, STARTING_SCORE, STARTING_LIVES);
game.start();

function randomNumber(low, high) {
  return Math.random() * (high - low) + low;
}

(function dropParachutist() {
  game.createParachutist();
  setTimeout(
    dropParachutist,
    randomNumber(MIN_DROP_INTERVAL, MAX_DROP_INTERVAL) * 1000
  );
})();

document.addEventListener("parachutistDrowned", event => {
  model.reduceLives();
  game.updateLives(model.getLives());
});

document.addEventListener("parachutistSaved", event => {
  model.increaseScore(SCORE_INCREASE_AMOUNT);
  game.updateScore(model.getScore());
});

function runClock() {
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update();
  game.draw(context);
  requestAnimationFrame(runClock);
}
requestAnimationFrame(runClock);
