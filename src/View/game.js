import Boat from "/src/View/boat";
import InputHandler from "/src/View/inputHandler";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.boat = new Boat(this);
    this.gameObjects = [this.boat];
    new InputHandler(this.boat);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(context) {
    this.gameObjects.forEach(object => object.draw(context));
  }
}
