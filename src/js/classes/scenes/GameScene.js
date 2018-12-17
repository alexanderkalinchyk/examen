//import game objects
import Player from '../../gameobjects/Player';
import Bal from '../../gameobjects/Bal';
import Pak from '../../gameobjects/Pak';
let playerLocation = 0;
let balShot = 'xpos';
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
    this.paks = this.physics.add.group();
    this.balls = this.physics.add.group();

    this.physics.add.overlap(this.balls, this.paks, this.hitPak, null, this);

    this.scoreTextField = this.add.text(600, 250, `0`, {
      fontSize: `20px`,
      fill: `#000000`
    });

    this.createPlayer();
    this.createBal();
    this.createPak();

    this.input.on(`pointerdown`, this.onDown);
  }
  hitPak() {
    console.log('pak hit');
    this.score += 1;
    const timedEvent = this.time.addEvent({
      delay: 500,
      callback: this.gameOverScreen,
      callbackScope: this
    });
  }
  gameOverScreen() {
    this.scene.start(`scores`, {score: this.score});
  }
  onDown() {
    balShot = 'launch';
    console.log('ballshot');
  }
  createPak() {
    for (let i = 200;i <= 600;i += 200) {
      this.pak = new Pak(this, i, 100, `spritesheet`);
      this.paks.add(this.pak);
    }
  }
  createBal() {
    this.bal = new Bal(this, 100, 440, `spritesheet`);
    this.balls.add(this.bal);
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
    if (balShot === 'xpos') {
      this.bal.x = playerLocation - 35;
    } else if (balShot === 'launch') {
      this.bal.setBounce(1);
      this.bal.setCollideWorldBounds(true);
      this.bal.allowGravity = false;
      this.bal.setVelocity(- 300, - 300);
      balShot = 'bounce';
    }
  }
}
