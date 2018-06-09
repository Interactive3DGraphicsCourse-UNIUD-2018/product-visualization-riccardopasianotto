import * as THREE from 'three';
import Granite from '../materials/Granite.js';
import Environment from './Environment.js';

export default class VisualizationPlane extends THREE.Group {
  constructor(){
    super();
    const TEXTURE_PATH = "images/";
    const textureLoader = new THREE.TextureLoader().setPath(TEXTURE_PATH);
    var geometry = new THREE.PlaneBufferGeometry(60,60,8,8);
    var material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const envMap = new Environment().getEnvironmentMap();
    material.envMap = envMap;
    material.envMapIntensity = 1;
    material.roughness = 1;
    material.map = textureLoader.load("aoplane.png");

    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(-Math.PI/2);

    var geometry1 = new THREE.PlaneBufferGeometry(200,200,8,8);
    var material1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
    var mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.rotateX(-Math.PI/2);
    mesh1.position.setY(-0.1);

    this.add(mesh, mesh1);
  }
}