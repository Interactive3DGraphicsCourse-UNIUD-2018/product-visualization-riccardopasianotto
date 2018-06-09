import * as THREE from 'three';
import Bottle from './Bottle.js';
import BottleCap from './BottleCap.js';

export default class ConfiguratorScene extends THREE.Group {
  constructor() {
    super();

    const bottle = new Bottle();
    const bottleCap = new BottleCap();

    // UNcap

    bottleCap.position.setY(2);
  
    this.add(bottle, bottleCap);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}