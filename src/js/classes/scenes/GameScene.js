//import game objects
import Player from '../../gameobjects/Player';
let playerLocation = 0;
export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'game'
    });
  }
  init() {
    this.score = 0;
  }
  create() {
    this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      `sky`
    );
    this.createPlayer();
    this.createBal();
  }
  createBal() {
    this.ball = new ball(this, 100, 600, `spritesheet`);
  }
  createPlayer() {
    this.player = new Player(this, 100, 600, `spritesheet`);
    this.input.on(`pointermove`, this.movePointer);
    playerLocation = this.player.x;
  }
  movePointer(pointer) {
    //console.log(playerLocation);
    playerLocation = pointer.x;
  }
  update() {
    this.player.x = playerLocation;
  }
}
