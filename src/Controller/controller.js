import View from "/src/View/view";
import Model from "/src/Model/model";
import InputHandler from "/src/Controller/inputHandler";

const MAX_DROP_INTERVAL = 2.2; // In seconds
const MIN_DROP_INTERVAL = 0.5; // In seconds
const STARTING_SCORE = 0;
const SCORE_INCREASE_AMOUNT = 10;
const STARTING_LIVES = 3;
const MILLISECONDS_IN_SECOND = 1000;
export const GAMESTATE = {
  GAMEOVER: 0,
  RUNNING: 1
};

export default class Controller {
  constructor(canvas, gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.model = new Model(STARTING_SCORE, STARTING_LIVES);
    this.view = new View(
      canvas,
      this.gameWidth,
      this.gameHeight,
      STARTING_SCORE,
      STARTING_LIVES
    );
    this.gameState = GAMESTATE.RUNNING;
    this.view.start();
    this.init();
  }

  /**
   * Initiates the functions that need to run when the game starts.
   */
  init() {
    this.addListeners();
    this.dropParachutists();
  }

  /**
   * Add listeners to parachutist drowned or saved events/
   * Once the events are triggered te controller invokes changes in the model
   * and updates the view accordingly.
   */
  addListeners() {
    new InputHandler(this.view);
    document.addEventListener("parachutistDrowned", event => {
      this.model.reduceLives();
      this.view.updateLives(this.model.getLives());
    });

    document.addEventListener("parachutistSaved", event => {
      this.model.increaseScore(SCORE_INCREASE_AMOUNT);
      this.view.updateScore(this.model.getScore());
    });
  }

  /**
   * Triggers the createParachutist() function of the view in random intervals.
   */
  dropParachutists() {
    this.view.createParachutist();
    setTimeout(
      this.dropParachutists.bind(this),
      this.randomNumber(MIN_DROP_INTERVAL, MAX_DROP_INTERVAL) *
        MILLISECONDS_IN_SECOND
    );
  }

  /**
   * Function that runs in every available animation frame which clears the screen,
   * updates all game objects and draws them.
   */
  run() {
    if (this.view.lives <= 0) {
      if (this.gameState !== GAMESTATE.GAMEOVER) {
        this.view.dashboard.update();
      }
      this.gameState = GAMESTATE.GAMEOVER;
      this.view.gameOver();
    } else {
      this.view.update();
      this.view.draw();
      requestAnimationFrame(this.run.bind(this));
    }
  }

  /**
   * Utility function to generate a random number within specified boundaries.
   * @param {number} low Low boundary(inclusive)
   * @param {number} high High boundary(exclusive)
   */
  randomNumber(low, high) {
    return Math.random() * (high - low) + low;
  }
}
