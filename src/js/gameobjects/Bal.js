export default class Bal extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.setBallFrame();
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.sys.arcadePhysics.world.enableBody(this, 0);
    this.setCollideWorldBounds(true);
    this.onWorldBounds = true;
    this.setBounce(1);
    this.setInteractive();
    this.scene = scene;
  }
  setBallFrame() {
    this.frameName = 'ball3.png';
    this.setFrame(this.frameName);
  }
}
