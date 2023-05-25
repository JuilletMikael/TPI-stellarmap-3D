/**
 *  @file      Asteroid.js
 *  @brief     Class of asteroid
 *  @author    Created by Miakel Juillet
 *  @version   25.05.2023
 */
import * as THREE from 'three';

/**
* This class is used to manage asteroid
*/
export class Asteroid {
  constructor(id, name, estimatedDiameter, closeAprocheDate, potentiallyHazardous, orbitingBody, missDistance) {
    this.id = id;
    this.name = name;
    this.estimatedDiameter = estimatedDiameter;
    this.closeAprocheDate = closeAprocheDate;
    this.potentiallyHazardous = potentiallyHazardous;
    this.orbitingBody = orbitingBody;
    this.missDistance = missDistance;
    this.mesh = this.#createMesh();

    orbitingBody.planetarySystem = this.mesh;
  }

  /** 
  * Create mesh of the asteroid
  * @return {THREE.mesh} returns a mesh
  */
  #createMesh() {
    const geometry = new THREE.SphereGeometry(this.estimatedDiameter);
    const texture = new THREE.TextureLoader().load("/src/assets/images/Asteroid.jpg");
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(this.orbitingBody.coordinates.x / 5000000 - this.missDistance / 5000000 , this.orbitingBody.coordinates.y / 5000000 - this.missDistance / 5000000, 0);
    return mesh;
  }
}