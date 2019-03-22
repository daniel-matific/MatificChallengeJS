export default class Dashboard {
  constructor(game) {
    this.game = game;
    this.score = game.score;
    this.lives = game.lives;
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.position = {
      x: game.gameWidth * 0.03,
      y: game.gameHeight * 0.08
    };
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
    this.score = this.game.score;
    this.lives = this.game.lives;
  }
}
