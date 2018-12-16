


//import game objects
import Something from '../../gameobjects/Something';

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
    //setup scorefield
    this.scoreTextField = this.add.text(16, 16, `Score: 0`, {fontSize: `32px`, fill: `#FFFFFF`});
  }
  update(){

  }
}
