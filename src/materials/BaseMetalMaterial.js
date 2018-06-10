import * as THREE from 'three';
import Environment from '../objects/Environment.js';

export default class BaseMetalMaterial extends THREE.MeshStandardMaterial {

  constructor() {
    super();

    const TEXTURE_PATH = "src/materials/base-material/";
    const TEXTURE_SUFFIX = "se2abbvc_2K_";
    const textureLoader = new THREE.TextureLoader().setPath(TEXTURE_PATH);
    const envMap = new Environment().getEnvironmentMap();
    
    this.roughness = 1;
    this.metalness = 1;

    this.normalMap = textureLoader.load(TEXTURE_SUFFIX + "Normal.jpg");
    this.metalnessMap = textureLoader.load(TEXTURE_SUFFIX + "Metalness.jpg");
    this.roughnessMap = textureLoader.load(TEXTURE_SUFFIX + "Roughness.jpg");

    this.roughnessMap.wrapT = THREE.RepeatWrapping;
    this.envMap = envMap;
    this.envMapIntensity = 1;
    this.side = THREE.DoubleSide;
  }

  static getName(){
    return this.name;
  }

  static getPreviewSrc(){
    return "src/materials/base-material/base-metal-preview.png";
  }
}
