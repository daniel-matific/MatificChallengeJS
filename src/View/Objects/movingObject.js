import GameObject from "/src/View/Objects/gameObject";

export default class MovingObject extends GameObject {
  constructor(view) {
    super(view);
    this.maxSpeed = this.gameWidth;
    this.speed = 0;
  }
}
