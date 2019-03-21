export default class Model {
  constructor(score, lives) {
    this.score = score;
    this.lives = lives;
  }

  getScore() {
    return this.score;
  }

  setScore(score) {
    this.score = score;
  }

  getLives() {
    return this.lives;
  }

  setLives(lives) {
    this.lives = lives;
  }
}
