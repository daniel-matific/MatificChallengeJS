export default class Boat {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth * 0.15;
    this.height = gameHeight * 0.12;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height * 1.1
    };
  }

  draw(context) {
    context.fillStyle = "#0ff";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
