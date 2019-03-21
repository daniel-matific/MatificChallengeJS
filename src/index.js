import Game from "/src/View/game";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const MAX_DROP_INTERVAL = 3.5; // In seconds
const MIN_DROP_INTERVAL = 1; // In seconds

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function randomInteger(low, high) {
  return Math.random() * (high - low) + low;
}

(function dropParachutist() {
  game.createParachutist();
  setTimeout(
    dropParachutist,
    randomInteger(MIN_DROP_INTERVAL, MAX_DROP_INTERVAL) * 1000
  );
})();

function runClock() {
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update();
  game.draw(context);
  requestAnimationFrame(runClock);
}
requestAnimationFrame(runClock);
