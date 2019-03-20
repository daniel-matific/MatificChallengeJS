import Boat from "/src/View/boat";
import Parachutist from "/src/View/parachutist";
import InputHandler from "/src/View/inputHandler";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.boat = new Boat(this);
    let parachutists = [];
    parachutists[0] = new Parachutist(this, { x: 50, y: 50 });
    parachutists[1] = new Parachutist(this, { x: 90, y: 90 });
    this.gameObjects = [this.boat, ...parachutists];
    new InputHandler(this.boat);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(context) {
    this.gameObjects.forEach(object => object.draw(context));
  }
}
