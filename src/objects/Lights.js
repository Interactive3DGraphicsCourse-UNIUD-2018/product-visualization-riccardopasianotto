import { Group, AmbientLight, DirectionalLight, LightShadow, PerspectiveCamera } from 'three';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const ambi = new AmbientLight( 0xffffff, 2 );

    //var ambient = new THREE.AmbientLight( 0x444444 );

    const light = new DirectionalLight( 0xffffff, 0.5, 100);
    light.position.set( 0, 1, 10 );
    light.castShadow = true;

    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    //light.shadow = new LightShadow( new PerspectiveCamera( 200, 1, 0, 2500 ) );
    //light.shadow.bias = 0.0001;

    this.add(ambi, light);

  }
}
