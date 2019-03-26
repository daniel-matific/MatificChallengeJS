const KEYS = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

/**
 * Handling input events via listeners to key strokes.
 */
export default class InputHandler {
  constructor(view) {
    this.view = view;
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case KEYS.LEFT_ARROW:
          this.view.boat.moveLeft();
          break;
        case KEYS.RIGHT_ARROW:
          this.view.boat.moveRight();
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case KEYS.LEFT_ARROW:
          if (this.view.boat.speed < 0) {
            this.view.boat.stop();
          }
          break;
        case KEYS.RIGHT_ARROW:
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
