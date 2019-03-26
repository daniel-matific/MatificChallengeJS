import Controller from "/src/Controller/controller";

let canvas = document.getElementById("gameScreen");

const GAME_WIDTH = 800;
const GAME_HEIGHT = GAME_WIDTH * 0.75;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let controller = new Controller(canvas, GAME_WIDTH, GAME_HEIGHT);
controller.run();
