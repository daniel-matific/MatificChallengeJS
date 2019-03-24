export default class Model {
  constructor(score, lives) {
    this.score = score;
    this.lives = lives;
  }

  /**
   * Getter of the score.
   */
  getScore() {
    return this.score;
  }

  /**
   * Function that increases the score according to the given parameter.
   * @param {int} increaseAmount the amount to increase by
   */
  increaseScore(increaseAmount) {
    this.score += increaseAmount;
  }

  /**
   * Getter of the lives.
   */
  getLives() {
    return this.lives;
  }

  /**
   * Function that reduces the lives in increments of one.
   */
  reduceLives() {
    this.lives--;
  }
}
