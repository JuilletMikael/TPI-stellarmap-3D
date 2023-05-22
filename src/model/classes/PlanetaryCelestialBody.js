/**
 *  @file      PlanetaryCelestialBody.js
 *  @brief     Class of Planetary Celestial Body
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import * as THREE from 'three';

export class PlanetaryCelestialBodies {

  #clock = new THREE.Clock();
  #pointPivot = new THREE.Group();

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
    const geometry = new THREE.SphereGeometry(this.sizeRadius / 500, 64, 16 );
    const texture = new THREE.TextureLoader().load("./src/assets/images/" + this.textureFile);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh =  new THREE.Mesh(geometry, material);
    mesh.position.set(parseFloat(this.coordinates.x) / 5000000, parseFloat(this.coordinates.y) / 5000000, 0);
    return mesh;
  }

  animation() {
    const deltaTime = this.#clock.getDelta();

    // Faites tourner la planète sur elle-même
    this.mesh.rotation.x = this.rotationSpeed;

    const distanceFactor = 2 * Math.PI ; // Facteur de distance pour ajuster la rotation
    const timeFactor = deltaTime / (this.orbitDuration * 365 * 60 * 60); // Facteur de temps pour ajuster la rotation

    // Rotation de Mercure
    this.#pointPivot.rotation.z += this.orbitSpeed * (Math.sqrt((Math.pow(this.coordinates.x, 2) * Math.pow(this.coordinates.y, 2), 2))) * distanceFactor * timeFactor  * 1000;

  } 

  createOrbit() {
    const planet = new THREE.Vector3( parseFloat(this.coordinates.x) / 5000000, parseFloat(this.coordinates.y) / 5000000, 0 );
    const b = new THREE.Vector3(0,0,0 );
    const d = planet.distanceTo( b );

    const geometry = new THREE.BufferGeometry().setFromPoints(
      new THREE.Path().absarc(0, 0, d, 0, Math.PI * 2).getSpacedPoints(64)
    );
    const material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
    const orbit = new THREE.Line(geometry, material);
    return orbit;
  }

  planetarySystem() {
    console.log(this.mesh)
    this.#pointPivot.add(this.mesh);
    return this.#pointPivot;
  }

}