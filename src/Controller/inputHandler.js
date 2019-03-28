import { CONTROLLER_CFG } from "/src/Controller/controllerCfgEnum";

/**
 * Handling input events via listeners to key strokes.
 */
export default class InputHandler {
  constructor(view) {
    this.view = view;
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case CONTROLLER_CFG.LEFT_ARROW_KEY:
          this.view.boat.moveLeft();
          break;
        case CONTROLLER_CFG.RIGHT_ARROW_KEY:
          this.view.boat.moveRight();
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case CONTROLLER_CFG.LEFT_ARROW_KEY:
          if (this.view.boat.speed < 0) {
            this.view.boat.stop();
          }
          break;
        case CONTROLLER_CFG.RIGHT_ARROW_KEY:
          if (this.view.boat.speed > 0) {
            this.view.boat.stop();
          }
          break;
        default:
          break;
      }
    });
  }
}
