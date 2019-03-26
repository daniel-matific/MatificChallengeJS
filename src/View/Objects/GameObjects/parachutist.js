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
    this.touchedBoat = false;
    this.touchedBottomOfScreen = false;
  }

  /**
   * Function updates the position of the Parachutist and dispatches events according to Parachutist status in game.
   */
  update() {
    this.position.y += this.speed;
    if (this.position.y >= this.gameHeight - this.height) {
      // Parachutist touching bottom of screen
      this.touchedBottomOfScreen = true;
      this.view.sendEvent("parachutistDrowned");
    } else if (this.parachutistTouchingBoat()) {
      // Parachutist touching the boat at parts which are logical
      this.touchedBoat = true;
      this.view.sendEvent("parachutistSaved");
    }
  }

  /**
   * Function returns if the parachutist game object is touching the boat game object in logical places for a catch.
   */
  parachutistTouchingBoat() {
    return (
      this.position.y + this.height >= this.view.boat.position.y &&
      this.position.y <= this.view.boat.position.y &&
      this.position.x + this.width >= this.view.boat.position.x &&
      this.position.x <= this.view.boat.position.x + this.view.boat.width
    );
  }
}
