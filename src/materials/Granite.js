import * as THREE from 'three';
import Environment from '../objects/Environment.js';

export default class Granite extends THREE.MeshStandardMaterial {
  
  constructor() {
    super();

    const TEXTURE_PATH = "src/materials/granite/";
    const TEXTURE_SUFFIX = "granite_grey_blue_";
    const textureLoader = new THREE.TextureLoader().setPath(TEXTURE_PATH);
    const envMap = new Environment().getEnvironmentMap();
    
    this.metalness = 1;
    this.roughness = 0;
    this.color = new THREE.Color(0x333333);
    this.map = textureLoader.load(TEXTURE_SUFFIX + "Base_Color.jpg")
    this.normalMap = textureLoader.load(TEXTURE_SUFFIX + "Normal.jpg");
    this.metalnessMap = textureLoader.load(TEXTURE_SUFFIX + "Metallic.jpg");
    this.roughnessMap = textureLoader.load(TEXTURE_SUFFIX + "Roughness.jpg");

    this.map.minFilter = THREE.LinearMipMapLinearFilter
    this.map.wrapT = THREE.RepeatWrapping;
    this.normalMap.wrapT = THREE.RepeatWrapping;
    this.metalnessMap.wrapT = THREE.RepeatWrapping;
    this.roughnessMap.wrapT = THREE.RepeatWrapping;

    this.envMap = envMap;
    this.envMapIntensity = 1;
    this.side = THREE.DoubleSide;
  }

  static getName(){
    return this.name;
  }

  static getPreviewSrc(){
    return "src/materials/granite/granite-preview.jpg";
  }
}
