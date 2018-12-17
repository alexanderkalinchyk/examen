import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import GameScene from './scenes/GameScene.js';
import ScoreScene from './scenes/ScoreScene.js';
import StartScene from './scenes/StartScene.js';
import HighscoreScene from './scenes/HighscoreScene.js';

class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 700,
      height: 600,
      parent: 'game',
      scene: [
        BootScene,
        PreloadScene,
        StartScene,
        GameScene,
        ScoreScene,
        HighscoreScene
      ],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          //higher gravity val -> faster fall
          gravity: {y: 0}
        }
      }
    };
    super(config);

    console.log(`Constructor Game class`);
  }
}
export default Game;
