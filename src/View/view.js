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
   * Functions that creates all the game objects and input handler.
   */
  start() {
    this.background = new Background(this);
    this.plane = new Plane(this);
    this.parachutists = new LinkedList();
    this.sea = new Sea(this);
    this.dashboard = new Dashboard(this);
    this.boat = new Boat(this);
    this.gameObjects = [
      this.background,
      this.plane,
      this.parachutists,
      this.sea,
      this.dashboard,
      this.boat
    ];
  }

  /**
   * Functions checks if the game is over, otherwise it updates all the game objects.
   */
  update() {
    this.gameObjects.forEach(GameObject => GameObject.update());
  }

  /**
   * Function draws all game objects on the canvas.
   * If game is over it draws the "Game Over" screen.
   */
  draw() {
    this.context.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.gameObjects.forEach(GameObject => GameObject.draw(this.context));
  }

  /**
   * Function creates Parachutists in the position of the plane as long as
   * the game is still running.
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
   * Function draws the game over screen.
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
