import * as THREE from 'three';
THREE.OBJLoader = require('imports-loader?THREE=three!exports-loader?THREE.OBJLoader!../../../node_modules/three/examples/js/loaders/OBJLoader.js');
import BaseMetalMaterial from '../../materials/BaseMetalMaterial.js';
const MODEL = "src/objects/BottleObject/model/bottle.obj"
export default class Bottle extends THREE.Group {
  constructor() {
    super();
    const material = new BaseMetalMaterial();
    material.side = THREE.DoubleSide;
    new THREE.OBJLoader()
      .load(MODEL, (mesh) => {

        mesh.traverse(((child) => {
          if ( child instanceof THREE.Mesh ) {
            child.material = material;
          }
        }));
        this.add(mesh);
      });
  }
}
