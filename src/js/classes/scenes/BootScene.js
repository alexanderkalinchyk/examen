export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'boot'
    });
  }
  preload() {
    //load preloader image
    //this.load.spritesheet(`preloader`, `assets/images/preloader.png`, {frameWidth: 222, frameHeight: 21});
  }
  create() {
    console.log(`boot scene`);
    this.scene.start(`preload`);
  }
}
