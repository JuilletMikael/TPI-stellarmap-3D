/**
 *  @file      renderer.js
 *  @brief     Ussed to create three.js renderer.
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import * as THREE from 'three';

export function render(){
    const canvas = document.getElementById('canvas');

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const light = new THREE.PointLight(0xFFFFFF, 300);
    scene.add(light);

    const resize = () => {
        const { width, height } = container.value.getBoundingClientRect();
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    // Sun creation
    var sunGeometry = new THREE.SphereGeometry( 4, 64, 16);
    const sunTexture = new THREE.TextureLoader().load("./src/assets/images/Sun.jpg");
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    var sun = new THREE.Mesh( sunGeometry, sunMaterial );
    sun.position.set(0,0,0); // définit la position initiale de Mars
    scene.add(sun);

    function animate() {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    }
    
    
    // Lancement de l'animation
    animate();

    return scene;
}





