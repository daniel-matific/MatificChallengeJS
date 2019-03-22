import Controller from "/src/Controller/controller";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let controller = new Controller(GAME_WIDTH, GAME_HEIGHT);
controller.addListeners();
controller.triggerParachutists();
controller.run(context);
