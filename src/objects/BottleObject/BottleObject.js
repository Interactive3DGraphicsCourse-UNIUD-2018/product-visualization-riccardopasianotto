import * as THREE from 'three';
import Bottle from './Bottle.js';
import BottleCap from './BottleCap.js';

export default class ConfiguratorScene extends THREE.Group {
  constructor() {
    super();

    this.bottle = new Bottle();
    this.bottleCap = new BottleCap();

    // UNcap

    this.bottleCap.position.setY(2);
  
    this.add(this.bottle, this.bottleCap);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }

  updateMaterial(material){
    this.bottleCap.setMaterial(material);
  }
}