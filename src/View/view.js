import Boat from "/src/View/Objects/GameObjects/boat";
import Parachutist from "/src/View/Objects/GameObjects/parachutist";
import InputHandler from "/src/View/inputHandler";
import LinkedList from "/src/View/DataStructures/linkedList";
import Background from "/src/View/Objects/GameObjects/background";
import Sea from "/src/View/Objects/GameObjects/sea";
import Plane from "/src/View/Objects/GameObjects/plane";
import Dashboard from "/src/View/Objects/GameObjects/dashboard";

export const GAMESTATE = {
  GAMEOVER: 0,
  RUNNING: 1
};

export default class View {
  constructor(gameWidth, gameHeight, startingScore, startingLives) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.score = startingScore;
    this.lives = startingLives;
    this.gameState = GAMESTATE.RUNNING;
  }

  start() {
    this.background = new Background(this);
    this.plane = new Plane(this);
    this.parachutists = new LinkedList();
    this.sea = new Sea(this);
    this.dashboard = new Dashboard(this);
    this.boat = new Boat(this);
    this.gameObjects = [
      this.background,
      this.plane,
      this.parachutists,
      this.sea,
      this.dashboard,
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
      this.gameObjects.forEach(GameObject => GameObject.update());
    }
  }

  draw(context) {
    this.gameObjects.forEach(GameObject => GameObject.draw(context));
    if (this.gameState === GAMESTATE.GAMEOVER) {
      this.gameOver(context);
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

  gameOver(context) {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(0, 0, this.gameWidth, this.gameHeight);
    context.font = this.gameHeight * 0.05 + "px Comic Sans MS";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    context.strokeText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
  }
}
