/**
 *  @file      renderer.js
 *  @brief     Ussed to create three.js renderer.
 *  @author    Created by Miakel Juillet
 *  @version   25.05.2023
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Moon } from './Moon';

/**
* Ussed to manage an renderer
*/
export class Renderer {

    #renderer;
    #bodiesList;
    #scene;
    #camera;
    #sun;

    /** 
    * Construct the Renderer 
    * @param canvas - Canvas that used to define where's the rendere will be created
    * @param bodiesList - A list of bodiess that need to integrete them inside the sceen
    */
    constructor(canvas, bodiesList){
        
        // Construct parms
        this.canvas = canvas;
        this.#bodiesList = bodiesList; 

        // Create sceen
        this.#scene = new THREE.Scene();
    
        // Adding camera
        this.#camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
        this.#camera.position.z = 50;
    
        // Adding light
        const light = new THREE.PointLight(0xFFFFFF, 3, 300);
        this.#scene.add(light);
        
        // Create renderer 
        this.#renderer =  new THREE.WebGLRenderer({ canvas:  this.canvas });
        this.#renderer.setSize(window.innerWidth, window.innerHeight);
        this.#renderer.render( this.#scene, this.#camera);

        // Resize render when listen to resize
        window.addEventListener('resize', () => {
            this.#camera.aspect = window.innerWidth / window.innerHeight;
            this.#camera.updateProjectionMatrix();
            this.#renderer.setSize(window.innerWidth, window.innerHeight);
            this.animate();
        });

        // Add users controls
        new OrbitControls( this.#camera, this.#renderer.domElement );
        
        // Sun creation
        var sunGeometry = new THREE.SphereGeometry(8, 64, 16);
        const sunTexture = new THREE.TextureLoader().load("./src/assets/images/Sun.jpg");
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        this.#sun = new THREE.Mesh( sunGeometry, sunMaterial );
        this.#sun.position.set(0,0,0);
        this.#sun.rotation.x = 360;
        this.#scene.add(this.#sun);

        // Create bodies
        this.#bodiesList.forEach(bodies => {
            const bodiesSystem = bodies.planetarySystem;
            this.#scene.add(bodiesSystem); 
            bodies.createOrbit();
        });
    }

    /** 
     * Used to animate planetary celestial body
     * @summary It specicly create rotation and orbitation.
     */
    animate() {
        this.#bodiesList.forEach(bodies => {
            bodies.animation();
        });

        this.#sun.rotation.y += 0.00007292115;

        this.#renderer.render( this.#scene, this.#camera );
    }
}
