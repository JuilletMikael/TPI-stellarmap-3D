/**
 *  @file      PlanetaryCelestialBody.js
 *  @brief     Class of Planetary Celestial Body
 *  @author    Created by Miakel Juillet
 *  @version   02.06.2023
 */

import * as THREE from 'three';

/**
* Used to manage planetary celestial body
*/
export class PlanetaryCelestialBody {

  #clock = new THREE.Clock();
  speedChanger = 0.01;

  /** 
  * Used to construct the planetary celestial body
  * @param id - ID of planetary celestial body
  * @param name - Name of planetary celestial body
  * @param sizeRadius - SizeRadius of planetary celestial body
  * @param textureFile - TextureFile of planetary celestial body
  * @param coordinates - Coordinates of planetary celestial body as an object x,y,z
  * @param rotationSpeed - RotationSpeed of planetary celestial body
  * @param rotationDuration - RotationDuration of planetary celestial body
  * @param orbitSpeed - OrbitSpeed of planetary celestial body
  * @param orbitDuration - OrbitDuration of planetary celestial body
  * @param meanTemperature - MeanTemperature of planetary celestial body
  */
  constructor(id, name, sizeRadius, textureFile, coordinates, rotationSpeed, rotationDuration, orbitSpeed, orbitDuration, meanTemperature) {
    this.id = id;
    this.name = name;
    this.sizeRadius = sizeRadius;
    this.textureFile = textureFile;
    this.coordinates = coordinates;
    this.rotationSpeed = rotationSpeed;
    this.rotationDuration = rotationDuration;
    this.orbitSpeed = orbitSpeed;
    this.orbitDuration = orbitDuration;
    this.meanTemperature = meanTemperature;
    this.planetarySystem = new THREE.Group();
    this.mesh = this.#createMesh();
  }

  /** 
  * Used to create mesh with threejs 
  * @return {THREE.mesh} returns a mesh 
  */
  #createMesh() {
    const geometry = new THREE.SphereGeometry(this.sizeRadius / 2900, 64, 16 );
    const texture = new THREE.TextureLoader().load("./src/assets/images/" + this.textureFile);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh =  new THREE.Mesh(geometry, material);
    mesh.position.set(parseFloat(this.coordinates.x) / 5000000, parseFloat(this.coordinates.y) / 5000000, 0);  
    mesh.rotation.set(190, 0, 0);
    mesh.name = this.name;

    this.planetarySystem.add(mesh)
    return mesh;
  }

  /** 
  * Used to animate planetary celestial body
  * @summary It specicly create rotation and orbitation.
  */
  animation() {
    const deltaTime = this.#clock.getDelta();   

    this.mesh.rotation.y += this.rotationSpeed * (180 / Math.PI) * deltaTime * this.speedChanger * 700;

    const rayon = (Math.sqrt((Math.pow(this.coordinates.x, 2) /5000000 ) + (Math.pow(this.coordinates.y, 2)/5000000)))
    const distanceFactor = 2 * Math.PI * rayon; //km 
    const timeFactor = this.orbitDuration * 365 * 24 * 60 * 60; //years => seconds 

    const speed =  distanceFactor / timeFactor * this.speedChanger * deltaTime ;

    this.planetarySystem.rotation.z += speed ;
  } 

  /** 
  * Used to create a vector to watch the path of the planetary celestial body
  * @return {THREE.mesh} mesh of the orbit
  */
  createOrbit() {
    const planet = new THREE.Vector3( parseFloat(this.coordinates.x) / 5000000, parseFloat(this.coordinates.y) / 5000000, 0 );
    const b = new THREE.Vector3(0,0,0);
    const d = planet.distanceTo( b );

    const geometry = new THREE.BufferGeometry().setFromPoints(
      new THREE.Path().absarc(0, 0, d, 0, Math.PI * 2).getSpacedPoints(64)
    );
    const material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
    const orbit = new THREE.Line(geometry, material);
    this.planetarySystem.add(orbit);
  }

  /** 
  * Used to place the planetary system
  * @param {body} a body where witch one the object is moved
  */
  placePlanetarySystem(body) {
    body.planetarySystem.add(this.planetarySystem); 
    this.planetarySystem.position.set(body.coordinates.x / 5000000, body.coordinates.y / 5000000, 0);
  }

  /** 
  * Used to create the body description
  * @param {dom element} element to add text
  */
  showDescription(element) {
    var texte = 
    "The body named " + this.name + " has a radius of " + this.sizeRadius + " km. <br>"
    + this.name + " make a revolution every " + this.orbitDuration +" year's " +
    " his speed is about " + this.orbitSpeed + " km/s. With a rotation period of " + this.rotationDuration +
    " and a rotation speed of " + this.rotationSpeed + " km/s. " + " The means temperature is " +  (this.meanTemperature !== "Unknown" ? (this.meanTemperature - 273.15).toFixed(2) + " °C." : " unknown .") ;
   
    element.innerHTML = texte;
  }

}