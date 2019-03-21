export default class InputHandler {
  constructor(game) {
    this.game = game;
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37: // Left Key
          this.game.boat.moveLeft();
          break;
        case 39: // Right Key
          this.game.boat.moveRight();
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37: // Left Key
          if (this.game.boat.speed < 0) {
            this.game.boat.stop();
          }
          break;
        case 39: // Right Key
          if (this.game.boat.speed > 0) {
            this.game.boat.stop();
          }
          break;
        default:
          break;
      }
    });
  }
}
