import {getScoresAsync} from '../../functions/scores';
import {saveScore} from '../../functions/scores.js';

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'scores'
    });
  }
  preload() {}
  init(data) {
    this.score = data.score;
    console.log('score', this.score);
  }

  create() {
    const $overlay = document.querySelector(`.overlay`);
    $overlay.classList.remove(`hidden`);

    const $name = document.querySelector(`input`);
    $name.querySelector(`.name`);
    $name.focus();

    const submitButton = this.add.text(220, 100, 'Submit', {fill: '#ffffff'});
    submitButton.setInteractive();

    submitButton.on('pointerdown', () => {
      const name = $name.value;
      saveScore(name, this.score).then(data => {
        if (data.result === `ok`) {
          console.log('Score is goed doorgestuurd');
          getScoresAsync().then(data => {
            this.displayScores(data);
          });
        } else {
          console.log('Score is NIET goed doorgestuurd');
        }
      });
    });
  }
  displayScores(data) {
    const $playerScores = document.querySelector(`.playerScores`);

    data.forEach(player => {
      //console.log(player);
      const $p = document.createElement(`p`);
      $p.classList.add(`scores`);
      $p.textContent = `${player.name} - ${player.score}`;
      $playerScores.appendChild($p);
    });
  }
  update() {}
}
