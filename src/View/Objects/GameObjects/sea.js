import GameObject from "/src/View/Objects/gameObject";

export default class Sea extends GameObject {
  constructor(view) {
    super(view);
    var image = new Image();
    image.src = "/src/resources/sea.png";
    document.body.appendChild(image);
    this.image = image;
    this.height = this.gameHeight * 0.15;
    this.position = {
      x: 0,
      y: this.gameHeight - this.height
    };
  }
}
