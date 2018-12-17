export default class Pak extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.setPakFrames(x);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.sys.arcadePhysics.world.enableBody(this, 0);
    this.setInteractive();
    this.scene = scene;
  }
  setPakFrames(x) {
    switch (x) {
    case 200:
      this.frameName = 'kado1.png';
      this.setFrame(this.frameName);
      break;
    case 400:
      this.frameName = 'kado2.png';
      this.setFrame(this.frameName);
      break;
    case 600:
      this.frameName = 'kado3.png';
      this.setFrame(this.frameName);
      break;
    }
  }
}
