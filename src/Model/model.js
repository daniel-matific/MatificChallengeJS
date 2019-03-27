export const GAMESTATE = {
  GAMEOVER: 0,
  RUNNING: 1
};

export default class Model {
  constructor(score, lives) {
    this.score = score;
    this.lives = lives;
    this.gameState = GAMESTATE.RUNNING;
  }

  /**
   * Function that increases the score according to the given parameter.
   * @param {int} increaseAmount the amount to increase by
   */
  increaseScore(increaseAmount) {
    this.score += increaseAmount;
  }

  /**
   * Function that reduces the lives in increments of one.
   */
  reduceLives() {
    this.lives--;
  }
}
