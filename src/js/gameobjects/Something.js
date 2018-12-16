
//EXPORT CLASS
export default class Something extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    // scene.sys.arcadePhysics.world.enableBody(this, 0) optional ?
    scene.sys.arcadePhysics.world.enableBody(this, 0);

    this.setCollideWorldBounds(true);
    this.onWorldBounds = true; //bounds
    this.setBounce(0.3);
    //enable clicks
    this.setInteractive();
    // this.body.onWorldBounds = true;
    //event handling
    this.on(`pointerdown`, this.onDown);
    this.on(`pointerup`, this.onUp);

    this.scene = scene;

  }

  update() {

  }
}
