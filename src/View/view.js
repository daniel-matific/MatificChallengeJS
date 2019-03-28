import Boat from "/src/View/Objects/GameObjects/boat";
import Parachutist from "/src/View/Objects/GameObjects/parachutist";
import LinkedList from "/src/View/DataStructures/linkedList";
import Background from "/src/View/Objects/GameObjects/background";
import Sea from "/src/View/Objects/GameObjects/sea";
import Plane from "/src/View/Objects/GameObjects/plane";
import Dashboard from "/src/View/Objects/GameObjects/dashboard";

export default class View {
  constructor(canvas, gameWidth, gameHeight, startingScore, startingLives) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.score = startingScore;
    this.lives = startingLives;
    this.context = canvas.getContext("2d");
  }

  /**
   * Functions that creates all the game objects.
   */
  start() {
    this.background = new Background(this);
    this.plane = new Plane(this);
    this.sea = new Sea(this);
    this.dashboard = new Dashboard(this);
    this.boat = new Boat(this);
    this.backgroundGameObjects = [this.background, this.plane];
    this.parachutists = new LinkedList();
    this.foregroundGameObjects = [this.sea, this.dashboard, this.boat];
  }

  /**
   * Functions updates all the game objects.
   */
  update() {
    this.backgroundGameObjects.forEach(GameObject => GameObject.update());
    this.updateParachutists();
    this.foregroundGameObjects.forEach(GameObject => GameObject.update());
  }

  /**
   * Function clears the canvas and then draws all game objects on it.
   */
  draw() {
    this.context.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.backgroundGameObjects.forEach(GameObject =>
      GameObject.draw(this.context)
    );
    this.drawParachutists();
    this.foregroundGameObjects.forEach(GameObject =>
      GameObject.draw(this.context)
    );
  }

  /**
   * Function creates Parachutists in the position of the plane.
   */
  createParachutist() {
    if (this.planeInBoundaries()) {
      // Only create parachutists if the plane is inside the boundaries of the canvas
      this.parachutists.insert(
        new Parachutist(this, {
          x: this.plane.position.x,
          y: this.plane.position.y
        })
      );
    }
  }

  /**
   * Function returns if the plane game object is entirely in the boundaries of the canvas.
   */
  planeInBoundaries() {
    return (
      this.plane.position.x > 0 &&
      this.plane.position.x < this.gameWidth - this.plane.width
    );
  }

  /**
   * Function activates the draw function of each node's data object(Patachutist) of the linked list.
   * If any node's data object(Parachutist) has touchedBoat/touchedBottomOfScreen set to true then it deletes the node.
   */
  drawParachutists() {
    let current = this.parachutists.head;
    let index = 0;
    while (current !== null) {
      if (current.data.touchedBoat || current.data.touchedBottomOfScreen) {
        current = current.next;
        this.parachutists.delete(index);
      } else {
        current.data.draw(this.context);
        current = current.next;
        index++;
      }
    }
  }

  /**
   * Function activates the update function of each node's data object(Patachutist) of the linked list.
   */
  updateParachutists() {
    let current = this.parachutists.head;
    while (current !== null) {
      current.data.update();
      current = current.next;
    }
  }

  /**
   * Updates the score according to a given parameter.
   * @param {int} score the score to update
   */
  updateScore(score) {
    this.score = score;
  }

  /**
   * Updates the lives according to a given parameter.
   * @param {int} lives the lives to update
   */
  updateLives(lives) {
    this.lives = lives;
  }

  /**
   * Function draws the "Game Over" screen.
   */
  gameOver() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.context.fillRect(0, 0, this.gameWidth, this.gameHeight);
    this.context.font = this.gameHeight * 0.05 + "px Comic Sans MS";
    this.context.textAlign = "center";
    this.context.fillStyle = "white";
    this.context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    this.context.strokeText(
      "GAME OVER",
      this.gameWidth / 2,
      this.gameHeight / 2
    );
  }

  /**
   * Function dispatches a new event with the given name.
   * @param {String} eventName the given event name
   */
  sendEvent(eventName) {
    let event = new Event(eventName);
    document.dispatchEvent(event);
  }
}
