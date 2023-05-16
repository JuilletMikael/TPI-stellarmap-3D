/**
 *  @file      PlanetaryCelestialBody.js
 *  @brief     Class of Planetary Celestial Body
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import * as THREE from 'three';
import { Vector3 } from 'three';

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
    mesh.position.set(parseFloat(this.coordinates.x) / 5000000, parseFloat(this.coordinates.y) / 5000000, parseFloat(this.coordinates.z) / 5000000);
    return mesh;
  }

  animation() {
    this.mesh.rotation.y = this.rotationSpeed;
    this.mesh.position.applyAxisAngle( new THREE.Vector3( 0, 0, 1), (168 * 3600) / (this.orbitSpeed * 10000000));
  }

  createOrbit() {
    const planet = new THREE.Vector3( parseFloat(this.coordinates.x) / 5000000, parseFloat(this.coordinates.y) / 5000000, parseFloat(this.coordinates.z) / 5000000 );
    const b = new THREE.Vector3( );
    const d = planet.distanceTo( b );

    const geometry = new THREE.BufferGeometry().setFromPoints(
      new THREE.Path().absarc(0, 0, d, 0, Math.PI * 2).getSpacedPoints(64)
    );
    const material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
    const orbit = new THREE.Line(geometry, material);
    return orbit;
  }

}