export default class Parachutist {
  constructor(game, position) {
    var image = new Image();
    image.src = "/src/resources/parachutist.png";
    document.body.appendChild(image);
    this.image = image;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = game.gameWidth * 0.08;
    this.height = game.gameHeight * 0.115;
    this.position = position;
    this.speed = game.gameWidth * 0.0025;
    this.finished = false;
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
    this.position.y += this.speed;
    if (this.position.y >= this.gameHeight - this.height) {
      this.finished = true;
    }
    /*else if(intersection with boat) {

    }*/
  }
}
