import GameObject from "/src/View/Objects/gameObject";
import { VIEW_CFG } from "/src/View/viewCfgEnum";

export default class Sea extends GameObject {
  constructor(view) {
    super(view);
    var image = new Image();
    image.src = VIEW_CFG.SEA_IMAGE;
    document.body.appendChild(image);
    this.image = image;
    this.height *= VIEW_CFG.SEA_HEIGHT_RATIO;
    this.position = {
      x: 0,
      y: this.gameHeight - this.height
    };
  }
}
