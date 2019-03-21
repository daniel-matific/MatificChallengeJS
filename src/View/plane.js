export default class Plane {
  constructor(game) {
    var image = new Image();
    image.src = "/src/resources/plane.png";
    document.body.appendChild(image);
    this.image = image;

    this.gameWidth = game.gameWidth;
    this.width = game.gameWidth * 0.25;
    this.height = game.gameHeight * 0.15;
    this.position = {
      x: this.gameWidth + this.width,
      y: this.height - game.gameHeight * 0.1
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
