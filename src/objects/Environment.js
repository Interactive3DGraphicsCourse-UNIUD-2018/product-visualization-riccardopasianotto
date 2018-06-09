import * as THREE from 'three';

export default class Environment {
  constructor(){
    const path = '/images/studioenv/';	
    var format = '.png';
    var urls = [
      path + 'px' + format, path + 'nx' + format,
      path + 'py' + format, path + 'ny' + format,
      path + 'pz' + format, path + 'nz' + format
    ];
    this.environment = new THREE.CubeTextureLoader().load(urls);
  }

  getEnvironmentMap(){
    return this.environment;
  }
}