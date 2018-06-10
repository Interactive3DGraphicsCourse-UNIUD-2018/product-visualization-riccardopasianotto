import * as THREE from 'three';
import BasicLights from './Lights.js';
import VisualizationPlane from './VisualizationPlane.js';
import BottleObject from './BottleObject/BottleObject.js';
import Granite            from '../materials/Granite';
import MetalScuff         from '../materials/MetalScuff';
import RustedIron         from '../materials/RustedIron';
import BaseMetalMaterial  from '../materials/BaseMetalMaterial';

export default class ConfiguratorScene extends THREE.Group {
  constructor() {
    super();

    const lights = new BasicLights();
    this.basicObj = new BottleObject();
    const plane = new VisualizationPlane();

    this.basicObj.position.setY(-0.5);

    this.materials = [Granite, MetalScuff, RustedIron, BaseMetalMaterial];


    this.add(lights, this.basicObj, plane);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }

  getMaterials(){
    return this.materials
  }

  updateMaterial(i){
    this.basicObj.updateMaterial(new this.materials[i]);
  }
}