export default class Parachutist {
  constructor(game, position) {
    var image = new Image();
    image.src = "/src/resources/parachutist.png";
    document.body.appendChild(image);
    this.image = image;
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = game.gameWidth * 0.05;
    this.height = this.width * 1.47;
    this.position = position;
    this.speed = game.gameWidth * 0.0025;
    this.saved = false;
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
      // Parachutist touching bottom of screen
      this.finished = true;
      let event = new Event("parachutistDrowned");
      document.dispatchEvent(event);
    } else if (
      this.position.y + this.height >= this.game.boat.position.y &&
      this.position.y <= this.game.boat.position.y &&
      this.position.x + this.width >= this.game.boat.position.x &&
      this.position.x <= this.game.boat.position.x + this.game.boat.width
    ) {
      // Parachutist touching the boat at parts which are logical
      this.saved = true;
      let event = new Event("parachutistSaved");
      document.dispatchEvent(event);
    }
  }
}
