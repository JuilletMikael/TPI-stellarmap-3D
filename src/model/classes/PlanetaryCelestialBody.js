/**
 *  @file      PlanetaryCelestialBody.js
 *  @brief     Class of Planetary Celestial Body
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import * as THREE from 'three';

export class PlanetaryCelestialBodies {

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
    this.mesh = this.#createMesh();
  }

  #createMesh() {
    const geometry = new THREE.SphereGeometry(this.sizeRadius / 10000, 64, 16 );
    const texture = new THREE.TextureLoader().load("./src/assets/images/" + this.textureFile);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh =  new THREE.Mesh(geometry, material);
    mesh.position.set(parseFloat(this.coordinates.x) / 10000000  , parseFloat(this.coordinates.y) / 10000000 , parseFloat(this.coordinates.z) / 10000000 );
    return mesh;
  }

  animation() {
    this.mesh.rotation = this.rotationSpeed;
    this.mesh.position.applyAxisAngle( new THREE.Vector3( 0, 0, 1), (168 * 3600) / (this.orbitSpeed * 10000000) ); // 168h in second / orbitspeed * échelle 
  }

}