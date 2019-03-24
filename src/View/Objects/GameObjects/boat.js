import { GAMESTATE } from "/src/View/view";
import MovingObject from "/src/View/Objects/movingObject";

export default class Boat extends MovingObject {
  constructor(view) {
    super(view);
    var imageLeft = new Image();
    var imageRight = new Image();
    imageLeft.src = "/src/resources/boatLeft.png";
    imageRight.src = "/src/resources/boatRight.png";
    document.body.appendChild(imageLeft);
    document.body.appendChild(imageRight);
    this.imageLeft = imageLeft;
    this.imageRight = imageRight;
    this.image = imageLeft;
    this.width *= 0.12;
    this.height = this.width * 0.63;
    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight * 0.8
    };
    this.maxSpeed *= 0.006;
  }

  /**
   * Function updates the boat's position according to it's speed.
   */
  update() {
    this.position.x += this.speed;
    if (this.position.x <= 0) {
      // Checks if boat's position exits the screen from the left
      this.position.x = 0;
    } else if (this.position.x + this.width >= this.gameWidth) {
      // Checks if boat's position exits the screen from the right
      this.position.x = this.gameWidth - this.width;
    }
  }

  /**
   * Functions moves the boat to the left as long as game isn't over.
   */
  moveLeft() {
    if (this.view.gameState !== GAMESTATE.GAMEOVER) {
      this.image = this.imageLeft;
      this.speed = -this.maxSpeed;
    }
  }

  /**
   * Functions moves the boat to the right as long as game isn't over.
   */
  moveRight() {
    if (this.view.gameState !== GAMESTATE.GAMEOVER) {
      this.image = this.imageRight;
      this.speed = this.maxSpeed;
    }
  }

  /**
   * Function stops the boat's movement.
   */
  stop() {
    this.speed = 0;
  }
}
