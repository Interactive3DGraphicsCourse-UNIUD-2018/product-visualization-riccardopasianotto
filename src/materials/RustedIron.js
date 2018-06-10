import * as THREE from 'three';
import Environment from '../objects/Environment.js';

export default class RustedIron extends THREE.MeshStandardMaterial {

  constructor() {
    super();

    const TEXTURE_PATH = "src/materials/rustediron/";
    const TEXTURE_SUFFIX = "rustediron-streaks_";
    const textureLoader = new THREE.TextureLoader().setPath(TEXTURE_PATH);
    const envMap = new Environment().getEnvironmentMap();
    
    this.roughness = 0;
    this.metalness = 1;

    //this.color = new THREE.Color(0xff0000);
    this.map = textureLoader.load(TEXTURE_SUFFIX + "basecolor.png");
    this.metalnessMap = textureLoader.load(TEXTURE_SUFFIX + "metallic.png");
    this.roughnessMap = textureLoader.load(TEXTURE_SUFFIX + "roughness.png");

    this.roughnessMap.wrapS = THREE.RepeatWrapping;
    this.envMap = envMap;
    this.envMapIntensity = 0.1;
  }

  static getName(){
    return this.name;
  }

  static getPreviewSrc(){
    return "src/materials/rustediron/rusted-preview.png";
  }
}
