import MovingObject from "/src/View/Objects/movingObject";
import { VIEW_CFG } from "/src/View/viewCfgEnum";

export default class Plane extends MovingObject {
  constructor(view) {
    super(view);
    var image = new Image();
    image.src = VIEW_CFG.PLANE_IMAGE;
    document.body.appendChild(image);
    this.image = image;
    this.width *= VIEW_CFG.PLANE_WIDTH_RATIO;
    this.height = this.width * VIEW_CFG.PLANE_HEIGHT_RATIO;
    this.position = {
      x: this.gameWidth + this.width,
      y: this.gameHeight * VIEW_CFG.PLANE_YPOSITION_RATIO
    };
    this.speed = this.gameWidth * VIEW_CFG.PLANE_SPEED_RATIO;
  }

  /**
   * Function updates the position of the plane.
   */
  update() {
    this.position.x -= this.speed;
    if (this.position.x <= -this.width) {
      // If plane left the screen to the left, return it to the right
      this.position.x = this.gameWidth + this.width;
    }
  }
}
