import { Loader, Sprite } from 'pixi.js'

export default class CloudManager
{
  /**
   * Init the clouds array rendered on the stage
   */
  constructor(stage) {
    // This array will store our clouds
    this.clouds = Array(8).fill().map(() => {
      // Create cloud instance
      const cloud = new Sprite();
      this.reset(cloud);

      stage.addChild(cloud);
      
      return cloud;
    });
  }

  /**
   * Move clouds and reset position when needed
   */
  update() {
    this.clouds.forEach(element => {
      element.position.x -= 4;

      if (element.position.x < -element.width) {
        this.reset(element);
      }
    });
  }

  /**
   * Randomly compute cloud entity position, scale and texture
   */
  reset(element) {
    const { innerWidth, innerHeight } = window
    
    // Select texture randomly
    const texture = Math.random() > 0.5 ? "cloud_1" : "cloud_2";

    // Set texture, anchor and position
    element.texture = Loader.shared.resources["assets/" + texture + ".png"].texture;
    element.anchor.set(0.5, 0.5);
    element.position.set(innerWidth + (innerWidth * Math.random()), innerHeight * Math.random());

    // Diversify clouds size
    const scale = Math.random() * 1 + 0.1;
    element.scale.set(scale, scale);
  }
}