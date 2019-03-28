import MovingObject from "/src/View/Objects/movingObject";
import { VIEW_CFG } from "/src/View/viewCfgEnum";

export default class Boat extends MovingObject {
  constructor(view) {
    super(view);
    var imageLeft = new Image();
    var imageRight = new Image();
    imageLeft.src = VIEW_CFG.BOAT_IMAGE_LEFT;
    imageRight.src = VIEW_CFG.BOAT_IMAGE_RIGHT;
    document.body.appendChild(imageLeft);
    document.body.appendChild(imageRight);
    this.imageLeft = imageLeft;
    this.imageRight = imageRight;
    this.image = imageLeft;
    this.width *= VIEW_CFG.BOAT_WIDTH_RATIO;
    this.height = this.width * VIEW_CFG.BOAT_HEIGHT_RATIO;
    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight * VIEW_CFG.BOAT_YPOSITION_RATIO
    };
    this.maxSpeed *= VIEW_CFG.BOAT_MAXSPEED_RATIO;
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
    this.image = this.imageLeft;
    this.speed = -this.maxSpeed;
  }

  /**
   * Functions moves the boat to the right as long as game isn't over.
   */
  moveRight() {
    this.image = this.imageRight;
    this.speed = this.maxSpeed;
  }

  /**
   * Function stops the boat's movement.
   */
  stop() {
    this.speed = 0;
  }
}
