import Boat from "/src/View/boat";
import InputHandler from "/src/View/inputHandler";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
let boat = new Boat(GAME_WIDTH, GAME_HEIGHT);
var img = new Image();
img.src = "/src/resources/boatLeft.png";
boat.draw(context, img);
new InputHandler(boat);
let lastTime = 0;
function runClock(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  boat.update(deltaTime);
  boat.draw(context, img);
  requestAnimationFrame(runClock);
}

runClock();
