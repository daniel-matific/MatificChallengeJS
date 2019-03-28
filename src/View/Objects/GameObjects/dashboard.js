import GameObject from "/src/View/Objects/gameObject";
import { VIEW_CFG } from "/src/View/viewCfgEnum";

export default class Dashboard extends GameObject {
  constructor(view) {
    super(view);
    this.position = {
      x: this.gameWidth * VIEW_CFG.DASHBOARD_XPOSITION_RATIO,
      y: this.gameHeight * VIEW_CFG.DASHBOARD_YPOSITION_RATIO
    };
    this.score = view.score;
    this.lives = view.lives;
  }

  /**
   * Functions draws the dashboard on canvas.
   * @param {context} context context of the canvas
   */
  draw(context) {
    context.font = this.gameHeight * VIEW_CFG.FONT_RATIO + "px Comic Sans MS";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(
      "Score: " + this.score,
      this.position.x + this.gameWidth * VIEW_CFG.DASHBOARD_POSITION_RATIO,
      this.position.y
    );
    context.fillText(
      "Lives: " + this.lives,
      this.position.x + this.gameWidth * VIEW_CFG.DASHBOARD_POSITION_RATIO,
      this.position.y + this.gameHeight * VIEW_CFG.DASHBOARD_POSITION_RATIO
    );
    context.strokeText(
      "Score: " + this.score,
      this.position.x + this.gameWidth * VIEW_CFG.DASHBOARD_POSITION_RATIO,
      this.position.y
    );
    context.strokeText(
      "Lives: " + this.lives,
      this.position.x + this.gameWidth * VIEW_CFG.DASHBOARD_POSITION_RATIO,
      this.position.y + this.gameHeight * VIEW_CFG.DASHBOARD_POSITION_RATIO
    );
  }

  /**
   * Function updates the score and lives.
   */
  update() {
    this.score = this.view.score;
    this.lives = this.view.lives;
  }
}
