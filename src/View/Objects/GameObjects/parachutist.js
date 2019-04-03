import MovingObject from "/src/View/Objects/movingObject";
import { VIEW_CFG } from "/src/View/viewCfgEnum";

export default class Parachutist extends MovingObject {
  constructor(view, position) {
    super(view);
    var image = new Image();
    image.src = VIEW_CFG.PARACHUTIST_IMAGE;
    document.body.appendChild(image);
    this.image = image;
    this.width *= VIEW_CFG.PARACHUTIST_WIDTH_RATIO;
    this.height = this.width * VIEW_CFG.PARACHUTIST_HEIGHT_RATIO;
    this.position = position;
    this.speed = this.gameWidth * VIEW_CFG.PARACHUTIST_SPEED;
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
      this.view.sendEvent(VIEW_CFG.PARACHUTIST_EVENT_DROWNED);
    } else if (this.isParachutistTouchingBoat()) {
      // Parachutist touching the boat at parts which are logical
      this.touchedBoat = true;
      this.view.sendEvent(VIEW_CFG.PARACHUTIST_EVENT_SAVED);
    }
  }

  /**
   * Function returns if the parachutist game object is touching the boat game object in logical places for a catch.
   */
  isParachutistTouchingBoat() {
    return (
      this.position.y + this.height >= this.view.boat.position.y &&
      this.position.y <= this.view.boat.position.y &&
      this.position.x + this.width >= this.view.boat.position.x &&
      this.position.x <= this.view.boat.position.x + this.view.boat.width
    );
  }
}
