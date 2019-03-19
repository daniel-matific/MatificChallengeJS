export default class Boat {
  constructor(game) {
    var image = new Image();
    image.src = "/src/resources/boatLeft.png";
    document.body.appendChild(image);
    this.image = image;

    this.gameWidth = game.gameWidth;
    this.width = game.gameWidth * 0.15;
    this.height = game.gameHeight * 0.12;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height * 1.1
    };
    this.maxSpeed = game.gameWidth * 0.007;
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

  update(deltaTime) {
    this.position.x += this.speed;
    if (this.position.x <= 0) {
      this.position.x = 0;
    } else if (this.position.x + this.width >= this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
