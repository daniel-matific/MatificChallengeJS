import { GAMESTATE } from "/src/View/view";

export default class Boat {
  constructor(view) {
    var imageLeft = new Image();
    var imageRight = new Image();
    imageLeft.src = "/src/resources/boatLeft.png";
    imageRight.src = "/src/resources/boatRight.png";
    document.body.appendChild(imageLeft);
    document.body.appendChild(imageRight);
    this.imageLeft = imageLeft;
    this.imageRight = imageRight;
    this.image = imageLeft;
    this.view = view;
    this.gameWidth = view.gameWidth;
    this.width = view.gameWidth * 0.15;
    this.height = view.gameHeight * 0.12;
    this.position = {
      x: view.gameWidth / 2 - this.width / 2,
      y: view.gameHeight - this.height * 1.7
    };
    this.maxSpeed = view.gameWidth * 0.006;
    this.speed = 0;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
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
