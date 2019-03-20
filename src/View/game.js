import Boat from "/src/View/boat";
import Parachutist from "/src/View/parachutist";
import InputHandler from "/src/View/inputHandler";
import LinkedList from "/src/View/linkedList";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.parachutists = new LinkedList();
    this.gameObjects = [];
  }

  start() {
    this.boat = new Boat(this);
    this.parachutists.insert(new Parachutist(this, { x: 50, y: 50 }));
    this.parachutists.insert(new Parachutist(this, { x: 90, y: 90 }));
    this.gameObjects = [this.boat];
    new InputHandler(this.boat);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
    this.parachutists.updateAllNodes(deltaTime);
  }

  draw(context) {
    this.gameObjects.forEach(object => object.draw(context));
    this.parachutists.drawAllNodes(context);
  }
}
