import GameObject from "/src/View/Objects/gameObject";

export default class Dashboard extends GameObject {
  constructor(view) {
    super(view);
    this.position = {
      x: this.gameWidth * 0.03,
      y: this.gameHeight * 0.08
    };
    this.score = view.score;
    this.lives = view.lives;
  }

  draw(context) {
    context.font = this.gameHeight * 0.05 + "px Comic Sans MS";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(
      "Score: " + this.score,
      this.position.x + this.gameWidth * 0.08,
      this.position.y
    );
    context.fillText(
      "Lives: " + this.lives,
      this.position.x + this.gameWidth * 0.08,
      this.position.y + this.gameHeight * 0.08
    );
    context.strokeText(
      "Score: " + this.score,
      this.position.x + this.gameWidth * 0.08,
      this.position.y
    );
    context.strokeText(
      "Lives: " + this.lives,
      this.position.x + this.gameWidth * 0.08,
      this.position.y + this.gameHeight * 0.08
    );
  }

  update() {
    this.score = this.view.score;
    this.lives = this.view.lives;
  }
}
