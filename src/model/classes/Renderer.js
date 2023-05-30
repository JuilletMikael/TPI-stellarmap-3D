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
    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();

    /** 
    * Construct the Renderer 
    * @param canvas - Canvas that used to define where's the rendere will be created
    * @param bodiesList - A list of bodiess that need to integrete them inside the sceen
    */
    constructor(canvas, bodiesList){
        
        // Construct parametters
        this.canvas = canvas;
        this.#bodiesList = bodiesList; 

        // Create sceen
        this.#scene = new THREE.Scene();
    
        // Adding camera
        this.#camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30000);
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
        const controls = new OrbitControls( this.#camera, this.#renderer.domElement );
        controls.enablePan = false 
        controls.maxDistance = 10000
        controls.update();
        
        // Skybox creation 
        var skyboxGeometry = new THREE.SphereGeometry(-20000, 64, 16); // -20000 for facing interior
        const skyboxTexture = new THREE.TextureLoader().load("./src/assets/images/Skybox.jpg");
        const skyboxMaterial = new THREE.MeshBasicMaterial({ map: skyboxTexture });
        const skybox = new THREE.Mesh( skyboxGeometry, skyboxMaterial );
        this.#scene.add(skybox);

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

    onPointerMove( event ) {

        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
    
        this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        this.raycaster.setFromCamera( this.pointer, this.#camera );

        // calculate objects intersecting the picking ray
        const intersects = this.raycaster.intersectObjects( this.#scene.children );

        let object = null;

        for ( let i = 0; i < intersects.length; i ++ ) {

            if (intersects[i].object.name){
                
                if (object != null){
                    
                    if (intersects[i].distance < object.distance){

                        Object = intersects[i]
                    }

                }
                
                object = intersects[i];
            
            }

        }
        
        return object;
    }
}
