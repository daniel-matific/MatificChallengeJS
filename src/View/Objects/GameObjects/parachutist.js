import MovingObject from "/src/View/Objects/movingObject";

export default class Parachutist extends MovingObject {
  constructor(view, position) {
    super(view);
    var image = new Image();
    image.src = "/src/resources/parachutist.png";
    document.body.appendChild(image);
    this.image = image;
    this.width *= 0.05;
    this.height = this.width * 1.47;
    this.position = position;
    this.speed = this.gameWidth * 0.0025;
    this.saved = false;
    this.finished = false;
  }

  update() {
    this.position.y += this.speed;
    if (this.position.y >= this.gameHeight - this.height) {
      // Parachutist touching bottom of screen
      this.finished = true;
      let event = new Event("parachutistDrowned");
      document.dispatchEvent(event);
    } else if (
      this.position.y + this.height >= this.view.boat.position.y &&
      this.position.y <= this.view.boat.position.y &&
      this.position.x + this.width >= this.view.boat.position.x &&
      this.position.x <= this.view.boat.position.x + this.view.boat.width
    ) {
      // Parachutist touching the boat at parts which are logical
      this.saved = true;
      let event = new Event("parachutistSaved");
      document.dispatchEvent(event);
    }
  }
}
