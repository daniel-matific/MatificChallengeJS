export default class GameObject {
  constructor(view) {
    this.image = "";
    this.view = view;
    this.gameWidth = view.gameWidth;
    this.gameHeight = view.gameHeight;
    this.width = view.gameWidth;
    this.height = view.gameHeight;
    this.position = {
      x: view.gameWidth,
      y: view.gameHeight
    };
  }

  /**
   * Function draws game object on canvas according to given parameters.
   * @param {context} context context of the canvas
   */
  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {}
}
