import GameObject from "/src/View/Objects/gameObject";

export default class Background extends GameObject {
  constructor(view) {
    super(view);
    var image = new Image();
    image.src = "/src/resources/background.png";
    document.body.appendChild(image);
    this.image = image;
    this.height = this.width * 0.66;
    this.position = {
      x: 0,
      y: 0
    };
  }
}
