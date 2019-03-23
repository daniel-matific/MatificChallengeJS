import Boat from "/src/View/GameObjects/boat";
import Parachutist from "/src/View/GameObjects/parachutist";
import InputHandler from "/src/View/inputHandler";
import LinkedList from "/src/View/DataStructures/linkedList";
import Background from "/src/View/GameObjects/background";
import Sea from "/src/View/GameObjects/sea";
import Plane from "/src/View/GameObjects/plane";
import Dashboard from "/src/View/GameObjects/dashboard";

export const GAMESTATE = {
  GAMEOVER: 0,
  RUNNING: 1
};

export default class View {
  constructor(gameWidth, gameHeight, startingScore, startingLives) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameObjects = [];
    this.score = startingScore;
    this.lives = startingLives;
    this.gameState = GAMESTATE.RUNNING;
  }

  start() {
    this.background = new Background(this);
    this.sea = new Sea(this);
    this.plane = new Plane(this);
    this.boat = new Boat(this);
    this.parachutists = new LinkedList(this);
    this.dashboard = new Dashboard(this);
    this.gameObjects = [
      this.background,
      this.plane,
      this.dashboard,
      this.parachutists,
      this.sea,
      this.boat
    ];
    new InputHandler(this);
  }

  update() {
    if (this.lives <= 0) {
      if (this.gameState !== GAMESTATE.GAMEOVER) {
        this.dashboard.update();
      }
      this.gameState = GAMESTATE.GAMEOVER;
    } else {
      this.gameObjects.forEach(object => object.update());
    }
  }

  draw(context) {
    this.gameObjects.forEach(object => object.draw(context));
    if (this.gameState === GAMESTATE.GAMEOVER) {
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.font = this.gameHeight * 0.05 + "px Comic Sans MS";
      context.textAlign = "center";
      context.fillStyle = "white";
      context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
      context.strokeText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  createParachutist() {
    if (this.gameState !== GAMESTATE.GAMEOVER) {
      if (
        this.plane.position.x > 0 &&
        this.plane.position.x < this.gameWidth - this.plane.width
      ) {
        this.parachutists.insert(
          new Parachutist(this, {
            x: this.plane.position.x,
            y: this.plane.position.y
          })
        );
      }
    }
  }

  updateScore(score) {
    this.score = score;
  }

  updateLives(lives) {
    this.lives = lives;
  }
}
