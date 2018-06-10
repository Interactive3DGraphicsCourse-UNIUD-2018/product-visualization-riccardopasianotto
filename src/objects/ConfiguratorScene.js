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
    const basicObj = new BottleObject();
    const plane = new VisualizationPlane();

    basicObj.position.setY(-0.5);

    this.materials = [Granite, MetalScuff, RustedIron, BaseMetalMaterial];


    this.add(lights, basicObj, plane);
  }

  update(timeStamp) {
    //sthis.rotation.y = timeStamp / 10000;
  }

  getMaterials(){
    return this.materials
  }
}