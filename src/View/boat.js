export default class Boat {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = gameWidth * 0.15;
    this.height = gameHeight * 0.12;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height * 1.1
    };
    this.maxSpeed = 7;
    this.speed = 0;
  }

  draw(context, img) {
    context.drawImage(
      img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    if (!deltaTime) {
      return;
    }
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
