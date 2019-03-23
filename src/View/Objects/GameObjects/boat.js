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

  update() {
    this.position.x += this.speed;
    if (this.position.x <= 0) {
      this.position.x = 0;
    } else if (this.position.x + this.width >= this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

  moveLeft() {
    if (this.view.gameState !== GAMESTATE.GAMEOVER) {
      this.image = this.imageLeft;
      this.speed = -this.maxSpeed;
    }
  }

  moveRight() {
    if (this.view.gameState !== GAMESTATE.GAMEOVER) {
      this.image = this.imageRight;
      this.speed = this.maxSpeed;
    }
  }

  stop() {
    this.speed = 0;
  }
}
