import View from "/src/View/view";
import Model from "/src/Model/model";

const MAX_DROP_INTERVAL = 2.2; // In seconds
const MIN_DROP_INTERVAL = 0.5; // In seconds
const STARTING_SCORE = 0;
const SCORE_INCREASE_AMOUNT = 10;
const STARTING_LIVES = 3;

export default class Controller {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.model = new Model(STARTING_SCORE, STARTING_LIVES);
    this.view = new View(gameWidth, gameHeight, STARTING_SCORE, STARTING_LIVES);
    this.view.start();
  }

  addListeners() {
    document.addEventListener("parachutistDrowned", event => {
      this.model.reduceLives();
      this.view.updateLives(this.model.getLives());
    });

    document.addEventListener("parachutistSaved", event => {
      this.model.increaseScore(SCORE_INCREASE_AMOUNT);
      this.view.updateScore(this.model.getScore());
    });
  }

  dropParachutists() {
    this.view.createParachutist();
    setTimeout(
      this.dropParachutists.bind(this),
      this.randomNumber(MIN_DROP_INTERVAL, MAX_DROP_INTERVAL) * 1000
    );
  }

  randomNumber(low, high) {
    return Math.random() * (high - low) + low;
  }

  run(context) {
    context.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.view.update();
    this.view.draw(context);
    requestAnimationFrame(this.run.bind(this, context));
  }
}
