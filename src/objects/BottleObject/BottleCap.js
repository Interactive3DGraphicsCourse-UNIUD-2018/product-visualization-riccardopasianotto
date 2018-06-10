import * as THREE from 'three';
THREE.OBJLoader = require('imports-loader?THREE=three!exports-loader?THREE.OBJLoader!../../../node_modules/three/examples/js/loaders/OBJLoader.js');
import BaseMaterial from '../../materials/MetalScuff.js';
const MODEL = "src/objects/BottleObject/model/bottlecap.obj"
export default class BottleCap extends THREE.Group {
  constructor() {
    super();
    const material = new BaseMaterial();
    
    this.objModel = null;
    new THREE.OBJLoader()
      .load(MODEL, (mesh) => {

        mesh.traverse(((child) => {
          if ( child instanceof THREE.Mesh ) {
            child.material = material;
          }
        }));

        this.add(mesh);
        this.objModel = mesh;
      });
  }

  setMaterial(m){
    this.objModel.traverse(((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = m;
      }
    }));
  }
}
