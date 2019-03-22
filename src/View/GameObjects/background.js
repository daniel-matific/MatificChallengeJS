export default class Background {
  constructor(game) {
    var image = new Image();
    image.src = "/src/resources/background.png";
    document.body.appendChild(image);
    this.image = image;

    this.width = game.gameWidth;
    this.height = game.gameHeight;
    this.position = {
      x: 0,
      y: 0
    };
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

  update() {}
}
