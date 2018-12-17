export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.sys.arcadePhysics.world.enableBody(this, 0);

    this.setCollideWorldBounds(true);
    this.onWorldBounds = true; //bounds

    //enable clicks
    this.setInteractive();
    // this.body.onWorldBounds = true;
    //event handling
    // this.on(`pointerup`, this.update);

    this.scene = scene;
    this.setPlayerFrame();
  }
  setPlayerFrame() {
    this.frameName = 'paddle.png';
    this.setFrame(this.frameName);
  }

  update() {}
}
