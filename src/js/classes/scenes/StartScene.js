import Button from '../../gameobjects/Button';
export default class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'start'
    });
  }
  preload() {}
  create() {
    console.log('start menu');

    this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      `intro`
    );

    const buttonStart = new Button(this, 250, 200, `spritesheet`);
    const buttonHighscores = new Button(this, 450, 200, `spritesheet`);
    console.log(this.scene);
    buttonStart.on(`pointerdown`, this.playGame);
    buttonHighscores.on(`pointerdown`, this.showHighscores);

    const timedEvent = this.time.addEvent({
      delay: 500,
      callback: this.playGame,
      callbackScope: this
    });
  }
  initButtons() {}
  playGame() {
    this.scene.start(`game`);
  }
  showHighscores() {
    //this.scene.start(`highscore`);
  }
}
