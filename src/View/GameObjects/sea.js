export default class Sea {
  constructor(game) {
    var image = new Image();
    image.src = "/src/resources/sea.png";
    document.body.appendChild(image);
    this.image = image;

    this.width = game.gameWidth;
    this.height = game.gameHeight * 0.15;
    this.position = {
      x: 0,
      y: game.gameHeight - this.height
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
