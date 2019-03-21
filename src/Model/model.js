export default class Model {
  constructor(score, lives) {
    this.score = score;
    this.lives = lives;
  }

  getScore() {
    return this.score;
  }

  increaseScore(increaseAmount) {
    this.score += increaseAmount;
  }

  getLives() {
    return this.lives;
  }

  reduceLives() {
    this.lives--;
  }
}
