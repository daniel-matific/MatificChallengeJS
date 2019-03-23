export default class Plane {
  constructor(game) {
    var image = new Image();
    image.src = "/src/resources/plane.png";
    document.body.appendChild(image);
    this.image = image;

    this.gameWidth = game.gameWidth;
    this.width = game.gameWidth * 0.15;
    this.height = this.width * 0.78;
    this.position = {
      x: this.gameWidth + this.width,
      y: game.gameHeight * 0.04
    };
    this.speed = game.gameWidth * 0.003;
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
    this.position.x -= this.speed;
    if (this.position.x <= -this.width) {
      this.position.x = this.gameWidth + this.width;
    }
  }
}
