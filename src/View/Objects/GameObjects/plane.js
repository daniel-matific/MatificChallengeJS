import MovingObject from "/src/View/Objects/movingObject";

export default class Plane extends MovingObject {
  constructor(view) {
    super(view);
    var image = new Image();
    image.src = "/src/resources/plane.png";
    document.body.appendChild(image);
    this.image = image;
    this.width *= 0.15;
    this.height = this.width * 0.78;
    this.position = {
      x: this.gameWidth + this.width,
      y: this.gameHeight * 0.04
    };
    this.speed = this.gameWidth * 0.003;
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
