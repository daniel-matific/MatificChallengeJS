export default class InputHandler {
  constructor(boat) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37: // Left Key
          boat.moveLeft();
          break;
        case 39: // Right Key
          boat.moveRight();
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37: // Left Key
          if (boat.speed < 0) {
            boat.stop();
          }
          break;
        case 39: // Right Key
          if (boat.speed > 0) {
            boat.stop();
          }
          break;
      }
    });
  }
}
