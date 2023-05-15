/**
 *  @file      Asteroid.js
 *  @brief     Class of asteroid
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */


import * as THREE from 'three';

export class Asteroid {
  constructor(id, name, estimatedDiameter, closeAprocheDate, potentiallyHazardous, orbitingBody, missDistance) {
    this.id = id;
    this.name = name;
    this.estimatedDiameter = estimatedDiameter;
    this.closeAprocheDate = closeAprocheDate;
    this.potentiallyHazardous = potentiallyHazardous;
    this.orbitingBody = orbitingBody;
    this.missDistance = missDistance;
  }

  get mesh() {
      if (this.mesh === undefined || this.mesh === null) {
        const geometry = new THREE.SphereGeometry(this.sizeRadius);
        const texture = new THREE.TextureLoader().load("asteroid.png");
        const material = new THREE.MeshBasicMaterial({ map: texture });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x += this.positionX;
      }
      return this.mesh;
  }
}