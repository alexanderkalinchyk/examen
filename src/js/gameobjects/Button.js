export default class Button extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);

    //enable clicks
    this.setInteractive();

    this.scene = scene;
    if (this.x === 250) {
      this.setStartButtonFrame();
    } else {
      this.setHighscoreButtonFrame();
    }
  }
  setStartButtonFrame() {
    this.frameName = 'btn-play.png';
    this.setFrame(this.frameName);
  }
  setHighscoreButtonFrame() {
    this.frameName = 'btn-highscore.png';
    this.setFrame(this.frameName);
  }

  update() {}
}
