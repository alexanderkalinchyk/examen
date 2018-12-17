export default class HighscoreScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'highscore'
    });
  }
  preload() {}
  create() {
    console.log(`highscore scene`);
  }
}
