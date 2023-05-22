/**
 *  @file      renderer.js
 *  @brief     Ussed to create three.js renderer.
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class Renderer {

    #renderer;
    #planetList;
    #scene;
    #camera;
    #sun;

    constructor(canvas, planetList){
        
        this.canvas = canvas;
        this.#planetList = planetList; 

        this.#scene = new THREE.Scene();
    
        this.#camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
        this.#camera.position.z = 50;
    
        const light = new THREE.PointLight(0xFFFFFF, 3, 300);
        this.#scene.add(light);
        
        this.#renderer =  new THREE.WebGLRenderer({ canvas:  this.canvas });
        this.#renderer.setSize(window.innerWidth, window.innerHeight);
        this.#renderer.render( this.#scene, this.#camera);

        window.addEventListener('resize', () => {
            this.#camera.aspect = window.innerWidth / window.innerHeight;
            this.#camera.updateProjectionMatrix();
            this.#renderer.setSize(window.innerWidth, window.innerHeight);
            this.animate();
        });

        const controls = new OrbitControls( this.#camera, this.#renderer.domElement );
        
        // Sun creation
        var sunGeometry = new THREE.SphereGeometry(8, 64, 16);
        const sunTexture = new THREE.TextureLoader().load("./src/assets/images/Sun.jpg");
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        this.#sun = new THREE.Mesh( sunGeometry, sunMaterial );
        this.#sun.position.set(0,0,0);
        this.#sun.rotation.x = 360;
        this.#scene.add(this.#sun);

        this.#planetList.forEach(planet => {
            const planetSystem = planet.planetarySystem(); // Appel de la méthode planetarySystem pour obtenir le point de pivot de la planète
            this.#scene.add(planetSystem); // Ajout du point de pivot de la planète à la scène
            const orbit = planet.createOrbit(); // Appel de la méthode createOrbit pour obtenir l'objet orbite de la planète
            this.#scene.add(orbit); // Ajout de l'objet orbite à la scène
        });
    }

    animate() {
        this.#planetList.forEach(planet => {
            planet.animation();
        });

        this.#sun.rotation.y += 0.00007292115;

        this.#renderer.render( this.#scene, this.#camera );
    }

}
