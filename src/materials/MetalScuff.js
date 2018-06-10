import * as THREE from 'three';
import Environment from '../objects/Environment.js';

export default class MetalScuff extends THREE.MeshStandardMaterial {

  constructor() {
    super();

    const TEXTURE_PATH = "src/materials/metalscuff/";
    const TEXTURE_SUFFIX = "MetalScuffs002_";
    const textureLoader = new THREE.TextureLoader().setPath(TEXTURE_PATH);
    const envMap = new Environment().getEnvironmentMap();
    
    this.roughness = 0.4;
    this.metalness = 1;

    this.color = new THREE.Color(0xb24400);
    this.normalMap = textureLoader.load(TEXTURE_SUFFIX + "normal.jpg");
    this.metalnessMap = textureLoader.load(TEXTURE_SUFFIX + "metalness.jpg");
    this.roughnessMap = textureLoader.load(TEXTURE_SUFFIX + "roughness.jpg");

    this.envMap = envMap;
    this.envMapIntensity = 1;
    this.side = THREE.DoubleSide;
  }

  static getName(){
    return this.name;
  }

  static getPreviewSrc(){
    return "src/materials/metalscuff/scuff-preview.png";
  }
}
