import View from "/src/View/view";
import Model from "/src/Model/model";
import { GAMESTATE } from "/src/Model/model";
import InputHandler from "/src/Controller/inputHandler";
import { CONTROLLER_CFG } from "/src/Controller/controllerCfgEnum";

export default class Controller {
  constructor(canvas, gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.model = new Model(
      CONTROLLER_CFG.STARTING_SCORE,
      CONTROLLER_CFG.STARTING_LIVES
    );
    this.view = new View(
      canvas,
      this.gameWidth,
      this.gameHeight,
      CONTROLLER_CFG.STARTING_SCORE,
      CONTROLLER_CFG.STARTING_LIVES
    );
    this.init();
  }

  /**
   * Initiates the functions that need to run when the game starts.
   */
  init() {
    this.view.createGameObjects();
    this.addListeners();
    this.dropParachutists();
  }

  /**
   * Add listeners to parachutist drowned or saved events.
   * Once the events are triggered te controller invokes changes in the model
   * and updates the view accordingly.
   */
  addListeners() {
    new InputHandler(this.view);
    document.addEventListener(
      CONTROLLER_CFG.PARACHUTIST_EVENT_DROWNED,
      event => {
        this.model.reduceLives();
        this.view.updateLives(this.model.lives);
      }
    );

    document.addEventListener(CONTROLLER_CFG.PARACHUTIST_EVENT_SAVED, event => {
      this.model.increaseScore(CONTROLLER_CFG.SCORE_INCREASE_AMOUNT);
      this.view.updateScore(this.model.score);
    });
  }

  /**
   * Triggers the createParachutist() function of the view in random intervals.
   */
  dropParachutists() {
    this.view.createParachutist();
    setTimeout(
      this.dropParachutists.bind(this),
      this.randomNumber(
        CONTROLLER_CFG.MIN_DROP_INTERVAL,
        CONTROLLER_CFG.MAX_DROP_INTERVAL
      ) * CONTROLLER_CFG.MILLISECONDS_IN_SECOND
    );
  }

  /**
   * Function that runs in every available animation frame which updates all game objects and draws them.
   * If game is over it calls the view to draw the "Game Over" screen.
   */
  run() {
    if (this.view.lives <= 0) {
      if (this.model.gameState !== GAMESTATE.GAMEOVER) {
        this.view.dashboard.update();
      }
      this.model.gameState = GAMESTATE.GAMEOVER;
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
