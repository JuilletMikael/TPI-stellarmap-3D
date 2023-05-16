/**
 *  @file      renderer.js
 *  @brief     Ussed to create three.js renderer.
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import * as THREE from 'three';

export class Renderer {

    #renderer;
    #planetList;
    #scene;
    #camera;

    constructor(canvas, planetList){
        
        this.canvas = canvas;
        this.#planetList = planetList; 

        this.#scene = new THREE.Scene();
    
        this.#camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.#camera.position.z = 25;
    
        const light = new THREE.PointLight(0xFFFFFF, 3, 300);
        this.#scene.add(light);
    
        this.#renderer =  new THREE.WebGLRenderer({ canvas:  this.canvas });
        this.#renderer.setSize(window.innerWidth, window.innerHeight);
        this.#renderer.render( this.#scene, this.#camera);
    
        // Sun creation
        var sunGeometry = new THREE.SphereGeometry( 6, 64, 16);
        const sunTexture = new THREE.TextureLoader().load("./src/assets/images/Sun.jpg");
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        var sun = new THREE.Mesh( sunGeometry, sunMaterial );
        sun.position.set(0,0,0);
        this.#scene.add(sun);

        this.#planetList.forEach(planet => {
            this.#scene.add(planet.mesh);
        });
    }

    animate() {
        this.#planetList.forEach(planet => {
            planet.animation;
        });
        this.#renderer.render( this.#scene, this.#camera );
    }

}
