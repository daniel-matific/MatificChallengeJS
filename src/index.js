import Boat from "/src/View/boat";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
let boat = new Boat(GAME_WIDTH, GAME_HEIGHT);
boat.draw(context);
