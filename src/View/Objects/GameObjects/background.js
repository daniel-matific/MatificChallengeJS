import GameObject from "/src/View/Objects/gameObject";
import { VIEW_CFG } from "/src/View/viewCfgEnum";

export default class Background extends GameObject {
  constructor(view) {
    super(view);
    var image = new Image();
    image.src = VIEW_CFG.BACKGROUND_IMAGE;
    document.body.appendChild(image);
    this.image = image;
    this.height = this.width * VIEW_CFG.BACKGROUND_HEIGHT_RATIO;
    this.position = {
      x: 0,
      y: 0
    };
  }
}
