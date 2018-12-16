



//import preloader
import Preloader from '../../gameobjects/Preloader';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'preload'
    });
  }
  preload() {
    //create preload object with coordinates
      //this.preloader = new Preloader(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2, `preloader`);
      //this.preloader.anims.play(`loading`);

    //load images + json cordinates (sprite atlas)
      //this.load.atlas(`emoticons`, `assets/images/emoticons.png`, `assets/images/emoticons.json`);
  }

  create() {
    this.scene.start(`game`);
  }

  update() {

  }
}
