//import preloader
//import Preloader from '../../gameobjects/Preloader';
import './../../../assets/images/intro.png';
import './../../../assets/images/gameover.png';
import './../../../assets/images/scores.png';
import './../../../assets/images/sky.png';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'preload'
    });
  }
  preload() {
    this.preloader = this.add.graphics();
    this.load.on(`progress`, this.onProgress, this);
    this.load.on(`complete`, this.onComplete, this);
    //load images + json cordinates (sprite atlas)
    this.load.atlas(
      `spritesheet`,
      `assets/images/spritesheet.png`,
      `assets/images/spritesheet.json`
    );
    this.load.image(`intro`, `./assets/images/intro.png`);
    this.load.image(`sky`, `./assets/images/sky.png`);
    this.load.image(`scores`, `./assets/images/scores.png`);
    this.load.image(`gameover`, `./assets/images/gameover.png`);
  }
  onProgress(value) {
    console.log(`Loading: ${Math.round(value * 100)}%`);
    this.preloader.clear();
    this.preloader.fillStyle(0xff0000, 1);
    this.preloader.fillRect(
      0,
      this.game.config.height / 2,
      this.game.config.width * value,
      5
    );
  }
  onComplete() {
    this.preloader.destroy();
    this.scene.start(`start`);
  }

  create() {}

  update() {}
}
