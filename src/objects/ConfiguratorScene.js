import * as THREE from 'three';
import BasicLights from './Lights.js';
import VisualizationPlane from './VisualizationPlane.js';
import BottleObject from './BottleObject/BottleObject.js';

export default class ConfiguratorScene extends THREE.Group {
  constructor() {
    super();

    const lights = new BasicLights();
    const basicObj = new BottleObject();
    const plane = new VisualizationPlane();

    basicObj.position.setY(-0.5);

    this.add(lights, basicObj, plane);
  }

  update(timeStamp) {
    //sthis.rotation.y = timeStamp / 10000;
  }
}