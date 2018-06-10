/**
 * entry.js
 * 
 * This is the first file loaded. It sets up the Renderer, 
 * Scene and Camera. It also starts the render loop and 
 * handles window resizes.
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Configurator from './components/Configurator.js';
import * as THREE from 'three';
// Here I need to use a the pacage imports-loader and exports-loader to include in the file included an instance of THREE.js
// For more info https://threejs.org/docs/#manual/introduction/Import-via-modules
THREE.OrbitControls = require('imports-loader?THREE=three!exports-loader?THREE.OrbitControls!../node_modules/three/examples/js/controls/OrbitControls.js');
import ConfiguratorScene from './objects/ConfiguratorScene.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 2000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
const mainScene = new ConfiguratorScene();

// scene
scene.add(mainScene);

// camera
camera.position.set( 0, 10, 20 );

var controls = new THREE.OrbitControls( camera );
controls.target.set( 0, 20, 0 );
controls.update();

// renderer        
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(new THREE.Color(0xffffff));

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  mainScene.update && mainScene.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
var rootDiv = document.createElement("div");
rootDiv.setAttribute("id","root");
document.body.appendChild(rootDiv);

ReactDOM.render(
  <Configurator scene={mainScene}></Configurator>,
  document.getElementById('root')
);