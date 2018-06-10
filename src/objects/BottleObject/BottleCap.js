import * as THREE from 'three';
THREE.OBJLoader = require('imports-loader?THREE=three!exports-loader?THREE.OBJLoader!../../../node_modules/three/examples/js/loaders/OBJLoader.js');
import BaseMetalMaterial from '../../materials/MetalScuff.js';
const MODEL = "src/objects/BottleObject/model/bottlecap.obj"
export default class BottleCap extends THREE.Group {
  constructor() {
    super();
    const material = new BaseMetalMaterial();
    material.side = THREE.DoubleSide;
    this.object = null;
    new THREE.OBJLoader()
      .load(MODEL, (mesh) => {

        mesh.traverse(((child) => {
          if ( child instanceof THREE.Mesh ) {
            child.material = material;
          }
        }));

        this.add(mesh);
        this.object = mesh;
      });
  }

  setMaterial(m){
    this.object.traverse(((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = m;
      }
    }));
  }
}
