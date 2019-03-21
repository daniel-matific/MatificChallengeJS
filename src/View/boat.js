export default class Boat {
  constructor(game) {
    var imageLeft = new Image();
    var imageRight = new Image();
    imageLeft.src = "/src/resources/boatLeft.png";
    imageRight.src = "/src/resources/boatRight.png";
    document.body.appendChild(imageLeft);
    document.body.appendChild(imageRight);
    this.imageLeft = imageLeft;
    this.imageRight = imageRight;
    this.image = imageLeft;

    this.gameWidth = game.gameWidth;
    this.width = game.gameWidth * 0.15;
    this.height = game.gameHeight * 0.12;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height * 1.7
    };
    this.maxSpeed = game.gameWidth * 0.006;
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
    this.image = this.imageLeft;
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.image = this.imageRight;
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
