import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import GameScene from './scenes/GameScene.js';
import ScoreScene from './scenes/ScoreScene.js';

class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 600,
      height: 600,
      parent: 'game',
      scene: [BootScene, PreloadScene, GameScene, ScoreScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          //higher gravity val -> faster fall
          gravity: {y: 100}
        }}
    };
    super(config);

    console.log(`Constructor Game class`);
  }
}
export default Game;
