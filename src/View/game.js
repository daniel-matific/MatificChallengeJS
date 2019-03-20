import Boat from "/src/View/boat";
import Parachutist from "/src/View/parachutist";
import InputHandler from "/src/View/inputHandler";
import LinkedList from "/src/View/linkedList";
import Background from "/src/View/background";
import Sea from "/src/View/sea";
import Plane from "/src/View/plane";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.parachutists = new LinkedList();
    this.backgroundGameObjects = [];
    this.foregroundGameObjects = [];
  }

  start() {
    this.background = new Background(this);
    this.sea = new Sea(this);
    this.plane = new Plane(this);
    this.boat = new Boat(this);
    this.backgroundGameObjects = [this.background, this.plane];
    this.foregroundGameObjects = [this.sea, this.boat];
    new InputHandler(this.boat);
  }

  update(deltaTime) {
    this.backgroundGameObjects.forEach(object => object.update(deltaTime));
    this.parachutists.updateAllNodes(deltaTime);
    this.foregroundGameObjects.forEach(object => object.update(deltaTime));
  }

  draw(context) {
    this.backgroundGameObjects.forEach(object => object.draw(context));
    this.parachutists.drawAllNodes(context);
    this.foregroundGameObjects.forEach(object => object.draw(context));
  }

  createParachutist() {
    if (
      this.plane.position.x > 0 &&
      this.plane.position.x < this.gameWidth - this.plane.width
    ) {
      this.parachutists.insert(
        new Parachutist(this, {
          x: this.plane.position.x,
          y: this.plane.position.y
        })
      );
    }
  }
}
