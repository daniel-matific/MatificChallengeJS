export default class InputHandler {
  constructor(view) {
    this.view = view;
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37: // Left Key
          this.view.boat.moveLeft();
          break;
        case 39: // Right Key
          this.view.boat.moveRight();
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37: // Left Key
          if (this.view.boat.speed < 0) {
            this.view.boat.stop();
          }
          break;
        case 39: // Right Key
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
